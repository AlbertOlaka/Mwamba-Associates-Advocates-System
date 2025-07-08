import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/api';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


function EditAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    client: '',
    lawyer: '',
    date: '',
    time: '',
    status: 'Scheduled',
  });
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    api.get(`/appointments/${id}`)
      .then(res => setFormData(res.data))
      .catch(() => setErrorMsg('Failed to load appointment info'))
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/appointments/${id}`, formData);
      alert('Appointment updated successfully');
      navigate('/appointments');
    } catch {
      alert('Failed to update appointment');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="editappointment-layout">
      <Navbar />
      <div className="editappointment-body">
        <Sidebar />
        <main className="editappointment-content">
          <h2>Edit Appointment</h2>
          {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
          <form className="editappointment-form" onSubmit={handleSubmit}>
            <label>Client Name</label>
            <input
              type="text"
              name="client"
              value={formData.client}
              onChange={handleChange}
              required
            />

            <label>Lawyer Name</label>
            <input
              type="text"
              name="lawyer"
              value={formData.lawyer}
              onChange={handleChange}
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

            <button type="submit">Update Appointment</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default EditAppointment;
