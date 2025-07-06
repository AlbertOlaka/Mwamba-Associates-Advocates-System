import React from 'react';
import '../styles/Home.css';

const Home = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Trusted Legal Solutions</h1>
      <p>At Mwamba Advocates, we provide expert legal representation and guidance tailored to your needs.</p>
      <div className="hero-buttons">
        <a href="/login" className="btn primary">Login</a>
        <a href="/register" className="btn secondary">Register</a>
      </div>
    </div>
  </section>
);

export default Home;
