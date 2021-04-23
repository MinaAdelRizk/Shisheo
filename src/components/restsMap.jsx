import React, { useState, useEffect } from 'react';
import SearchBox from '../common/searchBox';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow
} from 'react-google-maps'

import { getRestaurants } from './../services/fakeRestServices';

// const {
//     SearchBox
// } = require("react-google-maps/lib/components/places/StandaloneSearchBox");


// const Box = () => {
//     return (
//         <SearchBox
//             ref={props.onSearchBoxMounted}
//             bounds={props.bounds}
//             onPlacesChanged={props.onPlacesChanged}
//         >
//             <input
//                 type="text"
//                 placeholder="Search restaurants..."
//                 style={{
//                     boxSizing: `border-box`,
//                     border: `1px solid transparent`,
//                     width: `80vw`,
//                     height: `3rem`,
//                     padding: `0 12px`,
//                     borderRadius: `3px`,
//                     boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
//                     fontSize: `14px`,
//                     outline: `none`,
//                     textOverflow: `ellipses`
//                 }}
//             />
//         </SearchBox>
//     )
// }


function Map() {

    let [zoom, setZoom] = useState(10) // Map Zoom
    let [pos, setPos] = useState({ lat: 25.117676, lng: 55.201827 }) // Map Center
    let [selectedRst, setSelectedRst] = useState();
    let [searchQuery, setSearchQuery] = useState("");
    let locations = getRestaurants()

    useEffect(() => {
        locations.length === 1 ? setSelectedRst(locations[0]) : setSelectedRst(null);
    }, [searchQuery]);

    locations = (searchQuery !== "") ? locations.filter(r => r.name.toLowerCase().includes(searchQuery.toLowerCase())) : locations;

    return (


        <GoogleMap
            zoom={zoom}
            center={pos}
        >
            <SearchBox
                value={searchQuery}
                onChange={setSearchQuery}
            />

            {locations.map(r => (
                <Marker
                    key={r._id}
                    position={{ lat: r.location.lat, lng: r.location.lng }}
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