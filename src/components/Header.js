import React from "react";
// scrollspy detects which section is showing, and highlights the navbar items
// appropriately
import Scrollspy from "react-scrollspy";

const Header = () => (
  <header id="home">
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
      </a>
      <ul id="nav" className="nav">
        <Scrollspy
          items={["home", "about", "packages"]}
          currentClassName="current"
        >
          <li>
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#packages">
              Packages
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#gallery">
              Gallery
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#booking">
              Booking/Contact
            </a>
          </li>
        </Scrollspy>
      </ul>
    </nav>
    <div className="row banner">
      <div className="banner-text">
        <h1>SURF CAMP</h1>
        <h1>MOKNARI</h1>
        <h1>MOROCCO</h1>
      </div>
    </div>
  </header>
);

export default Header;
