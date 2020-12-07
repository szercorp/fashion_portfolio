import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import menuIcon from '../../../assets/images/menu.svg';
import Menu from '../Menu/Menu';
import './NavBar.css';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <nav className={isScrolled ? 'navBar-wrapper scrolled' : 'navBar-wrapper'}>
      <h1 className="navBar-heading">Fashion Portfolio</h1>
      <ul className="navBar-items">
        <NavLink
          className="nav-link"
          to="/"
          activeClassName="active"
          exact={true}
        >
          <li className="nav-item">Home</li>
        </NavLink>
        <NavLink className="nav-link" to="/about" activeClassName="active">
          <li className="nav-item">About</li>
        </NavLink>
        <NavLink className="nav-link" to="/projects" activeClassName="active">
          <li className="nav-item">Projects</li>
        </NavLink>
      </ul>
      {/* <div className="navBar-col2"> */}
      {/*  */}
      {/* </div> */}
      {/* <div className="navBar-col3">
        <img className="menu-icon" src={menuIcon} />
      </div> */}
    </nav>
  );
};

export default NavBar;
