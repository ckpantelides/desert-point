import React from "react";
// scrollspy detects which section is showing, and highlights the navbar items
// appropriately
// import Scrollspy from "react-scrollspy";
import { Link } from "react-scroll";

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
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="packages"
            spy={true}
            smooth={true}
            duration={500}
          >
            PACKAGES
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="booking"
            spy={true}
            smooth={true}
            duration={500}
          >
            BOOKING/CONTACT
          </Link>
        </li>
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
