import React from "react";
import NavBackground from "./components/NavBackground";
import Header from "./components/Header";
import About from "./components/About";
import Packages from "./components/Packages";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBackground />
      <Header />
      <About />
      <Packages />
    </div>
  );
}

export default App;
