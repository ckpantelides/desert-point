import React from "react";
import NavBackground from "./components/NavBackground";
import Header from "./components/Header";
import About from "./components/About";
import Packages from "./components/Packages";
import Booking from "./components/Booking";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBackground />
      <Header />
      <About />
      <Packages />
      <Booking />
    </div>
  );
}

export default App;
