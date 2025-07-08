import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css'; // Assuming you have a CSS file for styling

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/clients" className={({ isActive }) => isActive ? 'active' : ''}>
              Clients
            </NavLink>
          </li>
          <li>
            <NavLink to="/cases" className={({ isActive }) => isActive ? 'active' : ''}>
              Cases
            </NavLink>
          </li>
          <li>
            <NavLink to="/appointments" className={({ isActive }) => isActive ? 'active' : ''}>
              Appointments
            </NavLink>
          </li>
          <li>
            <NavLink to="/lawyers" className={({ isActive }) => isActive ? 'active' : ''}>
              Lawyers
            </NavLink>
          </li>
          <li>
            <NavLink to="/billing" className={({ isActive }) => isActive ? 'active' : ''}>
              Billing
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
