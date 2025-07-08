import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Home.css'; // Assuming you have a CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <Navbar /> {/* Reusing your global navigation bar */}

      <section className="hero">
        <div className="hero-content">
          <h1 className="title">Trusted Legal Solutions for Your Peace of Mind</h1>
          <p className="subtitle">
            We provide professional legal services tailored to individuals, startups, and enterprises.
          </p>
          <a href="/login" className="cta-button">Get Started</a>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Client Management</h3>
          <p>Keep track of all your clients, their cases, and communications in one place.</p>
        </div>
        <div className="feature-card">
          <h3>Case Tracking</h3>
          <p>Manage and follow up on legal cases with real-time updates and history logs.</p>
        </div>
        <div className="feature-card">
          <h3>Appointments</h3>
          <p>Schedule meetings, court sessions, and consultations easily and efficiently.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Mwamba Associates Advocates. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

