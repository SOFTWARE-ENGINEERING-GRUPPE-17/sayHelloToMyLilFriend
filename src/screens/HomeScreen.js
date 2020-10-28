import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";

function Home() {

    const boxStyle = {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 10,
        borderColor: "black",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        padding: 10
    }

    const container = {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    }

    const bStyle = {
        color: "white",
        textDecoration: 'none'
    };

    return (
        <div style={container}>
            <div className="homeDiv">
                <h1>Velkommen! </h1>
            </div>
            <div className="valgDiv">
                <Link style={bStyle} to="/Park">
                    <p style={boxStyle}>Se ledige parkeringer</p>
                </Link>
                <Link style={bStyle} to="/Rent">
                    <p style={boxStyle}>Lei ut din parkering</p>
                </Link>
            </div>
        </div>
    );
}

export default Home;
