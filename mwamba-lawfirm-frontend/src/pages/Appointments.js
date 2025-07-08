import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/Appointments.css';

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await api.get('/appointments');
      setAppointments(res.data);
    } catch {
      setError('Failed to fetch appointments');
    } finally {
      setLoading(false);
    }
  };

  const handleView = (id) => {
    navigate(`/appointment-details/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/edit-appointment/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      try {
        await api.delete(`/appointments/${id}`);
        setAppointments(prev => prev.filter(appt => appt.id !== id));
        alert('Appointment deleted successfully.');
      } catch {
        alert('Failed to delete appointment.');
      }
    }
  };

  return (
    <div className="appointments-layout">
      <Navbar />
      <div className="appointments-body">
        <Sidebar />
        <main className="appointments-content">
          <div className="appointments-header">
            <h2>Appointments</h2>
            <button
              className="add-appointment-button"
              onClick={() => navigate('/add-appointment')}
            >
              + Add New Appointment
            </button>
          </div>

          {loading && <p>Loading appointments...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          {!loading && !error && (
            <table className="appointments-table">
              <thead>
                <tr>
                  <th>Appointment ID</th>
                  <th>Client</th>
                  <th>Lawyer</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt) => (
                  <tr key={appt.id}>
                    <td>{appt.id}</td>
                    <td>{appt.client}</td>
                    <td>{appt.lawyer}</td>
                    <td>{appt.date}</td>
                    <td>{appt.time}</td>
                    <td className={`status ${appt.status.toLowerCase().replace(' ', '-')}`}>
                      {appt.status}
                    </td>
                    <td className="action-buttons">
                      <button onClick={() => handleView(appt.id)} className="view-btn">View</button>
                      <button onClick={() => handleEdit(appt.id)} className="edit-btn">Edit</button>
                      <button onClick={() => handleDelete(appt.id)} className="delete-btn">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </main>
      </div>
    </div>
  );
}

export default Appointments;
