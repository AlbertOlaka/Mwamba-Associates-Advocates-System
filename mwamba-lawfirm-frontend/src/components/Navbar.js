import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Mwamba Advocates</div>
      <div className="nav-links">
        <Link to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</Link>
        <Link to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>Login</Link>
        <Link to="/register" className={({ isActive }) => (isActive ? 'active' : '')}>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
