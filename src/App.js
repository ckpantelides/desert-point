import React from "react";
import NavBackground from "./components/NavBackground";
import Header from "./components/Header";
import About from "./components/About";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBackground />
      <Header />
      <About />
    </div>
  );
}

export default App;
