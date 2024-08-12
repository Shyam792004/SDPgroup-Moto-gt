import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import '../../assets/css/Navbar.css'
const Navbar = () => {
  const NavLinks = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Service',
      path: '/service',
    },
    {
      title: 'Login',
      path: '/login',
    },
    {
      title: 'Register',
      path: '/register',
    },
  ];

  return (
    <div className="navbar-container">
      <div className="logo">MOTO-G</div>
      <div className="nav-links">
        {NavLinks.map((links, index) => (
          <li key={index} className="nav-item">
            <NavLink to={links.path} activeClassName="active-link">
              {links.title}
            </NavLink>
          </li>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
