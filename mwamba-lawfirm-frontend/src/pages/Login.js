import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import api from '../api/api'; // Axios instance
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await api.post('/auth/login', {
        email,
        password,
      });

      const { token } = res.data;

      // Store token in localStorage (or HttpOnly cookie from backend)
      localStorage.setItem('token', token);

      // Optionally decode token to get user info
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <Navbar />
      <div className="login-wrapper">
        <div className="login-card">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Login to your account</p>

          <form className="login-form" onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="login-button">Login</button>
          </form>

          <p className="register-link">
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
