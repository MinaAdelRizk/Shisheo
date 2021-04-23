import React, { useState } from 'react';
import SearchBox from '../common/searchBox';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow
} from 'react-google-maps'
import { getRestaurants } from './../services/fakeRestServices';


function Map() {

    const [selectedRst, setSelectedRst] = useState();
    const locations = getRestaurants()

    return (
        <GoogleMap
            zoom={10}
            center={{
                lat: 25.117676, lng: 55.201827
            }}
        >
            {locations.map(r => (
                <Marker
                    key={r._id}
                    position={{
                        lat: r.location.lat,
                        lng: r.location.lng
                    }}
                    icon={{
                        url: '/location.svg',
                        scaledSize: new window.google.maps.Size(40, 30)
                    }}
                    onClick={
                        () => setSelectedRst(r)
                    }
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