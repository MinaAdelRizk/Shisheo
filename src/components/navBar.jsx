import React from 'react';
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav-menu">
            <Link to="/">
                <i className="fa fa-home"></i>
            </Link>

            <Link to="/map">
                <i className="fa fa-map-marker"></i>
            </Link>
        </div >
    )
}

export default NavBar;