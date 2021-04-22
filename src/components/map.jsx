import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { getRestaurants } from './../services/fakeRestServices';

const Restaurant = () => {
    return <div className="pin"></div>
};

class Map extends Component {

    state = {
        restaurants: []
    }

    componentDidMount() {
        const restaurants = getRestaurants()
        this.setState({ restaurants })
        console.log(restaurants)
    }
    static defaultProps = {
        center: {
            lat: 25.117676,
            lng: 55.201827
        },
        zoom: 11
    };

    render() {
        const { restaurants } = this.state;
        return (

            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyB7IBrPWZBKhXDFH9X5bH2V3_lCddooqy4" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {restaurants.map(r =>
                        <Restaurant
                            key={r._id}
                            lat={r.location.lat}
                            lng={r.location.lng}
                            text="My Marker"
                        />
                    )}
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
