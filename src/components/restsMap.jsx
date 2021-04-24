import React, { useState, useEffect } from 'react';
import SearchBox from '../common/searchBox';

import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow,

} from 'react-google-maps'

import { getRestaurants } from './../services/fakeRestServices';


function Map() {

    let [zoom, setZoom] = useState(11) // Map Zoom
    let [pos, setPos] = useState({ lat: 25.117676, lng: 55.201827 }) // Map Center
    let [selectedRst, setSelectedRst] = useState(null);
    let [searchQuery, setSearchQuery] = useState("");
    let locations = getRestaurants()

    const defaultMapOptions = {
        fullscreenControl: false,
        disableDefaultUI: true,
        defaultAnimation: 10
    };


    useEffect(() => {

        locations = (searchQuery !== "") ? locations.filter(r => r.name.toLowerCase().includes(searchQuery.toLowerCase())) : locations;

        locations.length === 1 ? focus(locations[0]) : reset();

        function focus(r) {
            setSelectedRst(r);
            setZoom(13);
            setPos(r.location)
        }
        function reset() {
            setZoom(11);
            setPos({ lat: 25.117676, lng: 55.201827 });
            setSelectedRst(null)
        }
    }, [searchQuery]);

    return (

        <GoogleMap
            zoom={zoom}
            center={pos}
            defaultOptions={defaultMapOptions}

        >
            <SearchBox
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search Restaurants..."
            />

            {locations.map(r => (
                <Marker
                    key={r._id}
                    position={{ lat: r.location.lat, lng: r.location.lng }}
                    icon={{
                        url: '/location.svg',
                        scaledSize: new window.google.maps.Size(40, 30)
                    }}
                    onClick={() => setSelectedRst(r)}
                />

            ))}

            {selectedRst && (
                <InfoWindow
                    position={{
                        lat: selectedRst.location.lat,
                        lng: selectedRst.location.lng
                    }}
                    onCloseClick={
                        () => setSelectedRst(null)
                    }
                >
                    <div>{selectedRst.name}<br />{selectedRst.tags.map(t => ` '${t}'`)}</div>
                </InfoWindow>

            )}

        </GoogleMap>
    )
}

const MapWrapper = withScriptjs(withGoogleMap(Map));

function RestLocations() {

    return (
        <div style={{ height: `100vh` }}>
            <MapWrapper
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7IBrPWZBKhXDFH9X5bH2V3_lCddooqy4`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
};

export default RestLocations;