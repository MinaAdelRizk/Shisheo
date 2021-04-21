import React, { Component } from 'react';
import RestaurantCard from './restCard';
import { getRestaurants } from './../services/fakeRestServices';


class RestaurantsList extends Component {
    state = {
        rests: []
    }

    componentDidMount() {
        const rests = getRestaurants();
        this.setState({ rests })
        console.log("restaurants in restsList", rests)
    }

    render() {

        const { rests } = this.state;

        return (
            <div>
                <ul className="p-0">
                    {rests.map(rest =>
                        <RestaurantCard rest={rest} />
                    )}
                </ul>
            </div>
        );
    }
}

export default RestaurantsList;
