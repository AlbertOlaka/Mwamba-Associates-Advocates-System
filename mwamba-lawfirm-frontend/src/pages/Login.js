import React, { useState } from 'react';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Logging in with email: ${email}`);
    // We'll connect backend later
  };

  return (
    <div className="form-container">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label>Email Address</label>
        <input
          type="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
