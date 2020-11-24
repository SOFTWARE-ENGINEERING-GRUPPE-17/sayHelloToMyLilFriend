import React from 'react';
import Nav from "./Components/Nav";
import Home from "./screens/HomeScreen";
import Park from "./screens/Park";
import Rent from "./screens/Rent";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




export default function App() {
  return (
      <Router>
      <div>
      <Nav />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Park" component={Park} />
      <Route path="/Rent" component={Rent} />
      </Switch>
      </div>
      </Router>
  );
}
