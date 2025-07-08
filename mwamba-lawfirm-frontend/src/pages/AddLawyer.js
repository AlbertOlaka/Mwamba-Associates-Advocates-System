import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/AddLawyer.css'; // Assuming you have a CSS file for styling

function AddLawyer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting new lawyer:', formData);
    alert('Lawyer added! (demo only)');
    // Later: connect to backend
  };

  return (
    <div className="addlawyer-layout">
      <Navbar />
      <div className="addlawyer-body">
        <Sidebar />
        <main className="addlawyer-content">
          <h2>Add New Lawyer</h2>
          <form className="addlawyer-form" onSubmit={handleSubmit}>
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

            <button type="submit" className="submit-button">
              Add Lawyer
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default AddLawyer;
