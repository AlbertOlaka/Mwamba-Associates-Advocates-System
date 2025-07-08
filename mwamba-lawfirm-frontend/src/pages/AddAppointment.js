import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/AddAppointment.css';

function AddAppointment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    client: '',
    lawyer: '',
    date: '',
    time: '',
    status: 'Scheduled',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/appointments', formData);
      alert('Appointment added successfully');
      navigate('/appointments');
    } catch (err) {
      alert('Failed to add appointment');
    }
  };

  return (
    <div className="addappointment-layout">
      <Navbar />
      <div className="addappointment-body">
        <Sidebar />
        <main className="addappointment-content">
          <h2>Add New Appointment</h2>
          <form className="addappointment-form" onSubmit={handleSubmit}>
            <label>Client Name</label>
            <input
              type="text"
              name="client"
              value={formData.client}
              onChange={handleChange}
              placeholder="Enter client name"
              required
            />

            <label>Lawyer Name</label>
            <input
              type="text"
              name="lawyer"
              value={formData.lawyer}
              onChange={handleChange}
              placeholder="Enter lawyer name"
              required
            />

            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <label>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />

            <label>Status</label>
            <select name="status" value={formData.status} onChange={handleChange} required>
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>

            <button type="submit" className="submit-button">
              Add Appointment
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default AddAppointment;
