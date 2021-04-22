import React, { Component } from 'react';

import RestaurantCard from './restCard';
import SearchBox from '../common/searchBox';

import { getRestaurants } from './../services/fakeRestServices';

class RestaurantsList extends Component {
    state = {
        searchQuery: "",
        rests: [],
        currentPage: 1
    }

    componentDidMount() {
        const rests = getRestaurants();
        this.setState({ rests })
    }

    handleSearch = query => {
        this.setState({ searchQuery: query, currentPage: 1 });
    }

    getPageData = () => {
        const { rests, searchQuery } = this.state;
        let data = rests;
        data = (searchQuery !== "") ? data.filter(r => r.name.toLowerCase().includes(searchQuery.toLowerCase())) : data;
        return data
    }

    render() {

        const data = this.getPageData();

        const { searchQuery } = this.state;

        return (
            <div className="page-holder">

                <SearchBox
                    value={searchQuery}
                    onChange={this.handleSearch}
                />

                <ul className="p-0">
                    {data.map(rest =>
                        <RestaurantCard rest={rest} key={rest._id} />
                    )}
                </ul>

            </div>
        );
    }
}

export default RestaurantsList;
