import React, { Component } from 'react';
import NavBackground from './components/NavBackground';
import Header from './components/Header';
import About from './components/About';
import Packages from './components/Packages';
import Booking from './components/Booking';
import Admin from './components/Admin';

import './App.css';

import { HashRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div className='App'>
          <Route exact path='/'>
            <NavBackground />
            <Header />
            <About />
            <Packages />
            <Booking />
          </Route>
          <Route path='/about' component={About} />
          <Route path='/packages' component={Packages} />
          <Route path='/booking' component={Booking} />
          <Route path='/admin' component={Admin} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
