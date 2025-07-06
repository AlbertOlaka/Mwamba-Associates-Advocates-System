import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Mwamba Advocates</div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>Login</NavLink>
        <NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : '')}>Register</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
