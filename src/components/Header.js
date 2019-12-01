import React from "react";

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
        <li className="current">
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
            Booking
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>

    <div className="row banner">
      <div className="banner-text">
        <h1 className="responsive-headline">SURF HOUSE DESERT POINT</h1>
      </div>
    </div>
  </header>
);

export default Header;
