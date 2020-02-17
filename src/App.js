import React from "react";
import NavBackground from "./components/NavBackground";
import Header from "./components/Header";
import About from "./components/About";
import Packages from "./components/Packages";
import Booking from "./components/Booking";
import Admin from "./components/Admin";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    /* <Switch> renders the first Route that matches the url, so "/" must be listed last */
    /* Admin is a private path, that redirects to login. Admin shows booking requests */
    <Router>
      <div className="App">
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/packages">
            <Packages />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <NavBackground />
            <Header />
            <About />
            <Packages />
            <Booking />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
