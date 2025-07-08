import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/Dashboard.css'; // Assuming you have a CSS file for styling

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="dashboard-body">
        <Sidebar />

        <main className="dashboard-content">
          <h2 className="welcome-text">Welcome to Mwamba Advocates Dashboard</h2>

          <div className="summary-cards">
            <div className="card">
              <h3>Total Cases</h3>
              <p>12</p>
            </div>
            <div className="card">
              <h3>Total Clients</h3>
              <p>7</p>
            </div>
            <div className="card">
              <h3>Appointments</h3>
              <p>5</p>
            </div>
            <div className="card">
              <h3>Invoices</h3>
              <p>4 Pending</p>
            </div>
          </div>

          <div className="appointments-section">
            <h3>Upcoming Appointments</h3>
            <ul className="appointments-list">
              <li>
                <strong>Jane Doe</strong> – Case Review on <em>July 12, 2025</em>
              </li>
              <li>
                <strong>Michael Ouko</strong> – Court Appearance on <em>July 13, 2025</em>
              </li>
              <li>
                <strong>Startup Ltd.</strong> – Contract Review on <em>July 14, 2025</em>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
