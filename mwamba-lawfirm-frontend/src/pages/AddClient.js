import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/AddClient.css'; // Assuming you have a CSS file for styling

function AddClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting new client:', formData);
    alert('Client added! (demo only)');
    // backend integration will come later
  };

  return (
    <div className="addclient-layout">
      <Navbar />
      <div className="addclient-body">
        <Sidebar />
        <main className="addclient-content">
          <h2>Add New Client</h2>
          <form className="addclient-form" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />

            <label>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              rows="3"
            />

            <button type="submit" className="submit-button">
              Add Client
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default AddClient;
