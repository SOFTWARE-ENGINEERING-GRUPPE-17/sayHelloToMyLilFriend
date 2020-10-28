import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';



function Nav() {

    const navStyle = {
        color: "white"
    };

    return (
        <nav>
            <h3>Parkering AS</h3>
            <ul className="nav-links">
                <Link style={navStyle}  to="/Home">
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
}

export default Nav;
