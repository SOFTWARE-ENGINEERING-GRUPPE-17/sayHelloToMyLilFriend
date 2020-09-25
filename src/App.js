import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

// litt styling
const divStyle = {
    color: 'black',
    backgroundColor: "cyan",
    padding: 500
};
const textStyle = {
    color: "black",
    backgroundColor: "#ffdf46",
    padding: "8px",
    borderRadius: 25,
    fontSize: "41px",

};

const sizeStyle = {
    padding: "50px",
};
function App() {
    return (<Router>
            <div style={divStyle}>
            <div className="App">
                <nav>
                    <div className="container">
                        <h1 style={sizeStyle}>Velkommen til Naboparkering!</h1>
                        <div>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link style={textStyle}  to={"/sign-in"}>Logg inn</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Switch>
                            <Route exact path='/' component={Login} />
                            <Route path="/sign-in" component={Login} />
                        </Switch>
                    </div>
                </div>
            </div>
            </div>
    </Router>
    );
}

export default App;
