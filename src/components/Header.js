import React from 'react';
// react-scroll is used for smooth scrolling
import { Link } from 'react-scroll';

const Header = () => (
  <header id='home'>
    <nav id='nav-wrap'>
      <ul id='nav' className='nav'>
        <li>
          <Link
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            duration={500}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            duration={500}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='packages'
            spy={true}
            smooth={true}
            duration={500}
          >
            PACKAGES
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='booking'
            spy={true}
            smooth={true}
            duration={500}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
    <div className='row banner'>
      <div className='banner-text'>
        <h1>SURF CAMP</h1>
        <h1>MOKNARI</h1>
        <h1>MOROCCO</h1>
      </div>
    </div>
  </header>
);

export default Header;
