import React from "react";
import DataList from '../utils/dataList'
const SearchBox = ({ value, onChange, placeholder }) => {

    let inputStyle = "form-control mb-3 search-bar"
    let iconStyle = "fa fa-search search-icon"

    if (window.location.pathname === "/locations") {
        inputStyle += " mapSearch";
        iconStyle += " mapSearchIcon";
    }

    return (
        <div>
            <div className="input-group">

                <i className={iconStyle}></i>

                <input
                    type="text"
                    name="query"
                    className={inputStyle}
                    placeholder={placeholder}
                    value={value}
                    onChange={e => onChange(e.currentTarget.value)}
                    list="locations" // for datalist ID
                />
                <DataList />
            </div>
        </div >
    );
};

export default SearchBox;
