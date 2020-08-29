import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
        <nav className={isScrolled ? "navBar-wrapper scrolled" : "navBar-wrapper"}>
            <ul data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1000" className="navBar-items">
                <NavLink className="nav-link" to='/' activeClassName="active" exact={true}>
                    <li className="nav-item">Home</li>
                </NavLink>
                <NavLink className="nav-link" to='/about' activeClassName="active">
                    <li className="nav-item">About</li>
                </NavLink>
                <NavLink className="nav-link" to='/projects' activeClassName="active">
                    <li className="nav-item">Projects</li>
                </NavLink>
            </ul>
        </nav>
    )
};

export default NavBar