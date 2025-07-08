import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import api from '../api/api'; // Axios instance
import '../styles/AddCase.css';

function AddCase() {
  const [formData, setFormData] = useState({
    client: '',
    title: '',
    description: '',
    status: 'Open',
    assignedLawyer: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const response = await api.post('/cases', formData); // POST to /api/cases
      setSuccessMsg('Case submitted successfully!');
      setFormData({
        client: '',
        title: '',
        description: '',
        status: 'Open',
        assignedLawyer: '',
      });
    } catch (error) {
      setErrorMsg('Failed to submit case. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="addcase-layout">
      <Navbar />
      <div className="addcase-body">
        <Sidebar />
        <main className="addcase-content">
          <h2>Add New Case</h2>

          {successMsg && <p className="success-message">{successMsg}</p>}
          {errorMsg && <p className="error-message">{errorMsg}</p>}

          <form className="addcase-form" onSubmit={handleSubmit}>
            <label>Client Name</label>
            <input
              type="text"
              name="client"
              value={formData.client}
              onChange={handleChange}
              placeholder="Enter client name"
              required
            />

            <label>Case Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter case title"
              required
            />

            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter case description"
              rows="4"
              required
            />

            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>

            <label>Assigned Lawyer</label>
            <input
              type="text"
              name="assignedLawyer"
              value={formData.assignedLawyer}
              onChange={handleChange}
              placeholder="Enter assigned lawyer's name"
              required
            />

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Case'}
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default AddCase;
