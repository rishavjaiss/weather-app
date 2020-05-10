import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js";
import Main from "../Main/Main.js";
import MyCities from "../MyCities/MyCities.js";

function RoutePack() {
  return (
    <Router basename="weather-app">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/MyCities" component={MyCities} />
      </Switch>
    </Router>
  );
}
export default RoutePack;
