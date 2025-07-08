import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import api from '../api/api';
import '../styles/Register.css';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      await api.post('/auth/register', {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      alert('Registration successful. Please login.');
      navigate('/login');
    } catch (err) {
      setError('Failed to register. Try again.');
    }
  };

  return (
    <div className="register-container">
      <Navbar />
      <div className="register-wrapper">
        <div className="register-card">
          <h2 className="register-title">Create Your Account</h2>
          <p className="register-subtitle">Sign up to get started</p>

          <form className="register-form" onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit" className="register-button">Register</button>
          </form>

          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
