import React from "react";

const SearchBox = ({ value, onChange }) => {

    const placeholder = "Search Restaurants..."
    const styling = (window.location.pathname === "/locations") ? "mapSearch" : "form-control mb-3 search-bar";

    return (
        <div>

            <div className="input-group">

                <i className="fa fa-search search-icon"></i>

                <input
                    type="text"
                    name="query"
                    className={styling}
                    placeholder={placeholder}
                    value={value}
                    onChange={e => onChange(e.currentTarget.value)}
                />

            </div>
        </div>
    );
};

export default SearchBox;
