import React from 'react';
import {Link} from "react-router-dom";
import '../App.css';

const navStyle = {
    color: "white"
};

export const Nav = () => (
    <nav>
        <h3>Parkering AS</h3>
        <ul className="nav-links">
            <Link style={navStyle}  to="/">
                <li>Hjem</li>
            </Link>
            <Link style={navStyle} to="/Park">
                <li>Ledige parkeringer</li>
            </Link>
            <Link style={navStyle}  to="/Rent">
                <li>Lei ut parkering</li>
            </Link>

        </ul>
    </nav>
);
export default Nav;