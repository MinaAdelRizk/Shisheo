import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav-menu">
            <Link to="/home">
                <i className="fa fa-home"></i>
            </Link>

            <Link to="/locations">
                <i className="fa fa-map-marker"></i>
            </Link>
        </div >
    )
}

export default NavBar;