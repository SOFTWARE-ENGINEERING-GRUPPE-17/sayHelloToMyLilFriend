import React from 'react';
import Nav from "./screens/Nav";
import Home from "./screens/HomeScreen";
import Park from "./screens/parkering";
import Rent from "./screens/Rent";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
      <Router>
      <div>
      <Nav />
      <Switch>
      <Route exact path="/Home" component={Home} />
      <Route path="/Park" component={Park} />
      <Route path="/Rent" component={Rent} />
      </Switch>
      </div>
      </Router>
  );
}



export default App;
