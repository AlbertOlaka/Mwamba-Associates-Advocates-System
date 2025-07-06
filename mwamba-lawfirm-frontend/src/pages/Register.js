import React, { useState } from 'react';
import '../styles/Register.css';

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert(`Registering ${fullname} with email: ${email}`);
    // Connect backend later
  };

  return (
    <div className="form-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Your full name"
          required
          value={fullname}
          onChange={e => setFullname(e.target.value)}
        />

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
          placeholder="Create a password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          required
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
