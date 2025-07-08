import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


function AppointmentDetails() {
  const { id } = useParams();
  const [appointment, setAppointment] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get(`/appointments/${id}`)
      .then(res => setAppointment(res.data))
      .catch(() => setError('Failed to load appointment details'));
  }, [id]);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!appointment) return <p>Loading appointment info...</p>;

  return (
    <div className="appointmentdetails-layout">
      <Navbar />
      <div className="appointmentdetails-body">
        <Sidebar />
        <main className="appointmentdetails-content">
          <h2>Appointment Details</h2>
          <p><strong>ID:</strong> {appointment.id}</p>
          <p><strong>Client:</strong> {appointment.client}</p>
          <p><strong>Lawyer:</strong> {appointment.lawyer}</p>
          <p><strong>Date:</strong> {appointment.date}</p>
          <p><strong>Time:</strong> {appointment.time}</p>
          <p><strong>Status:</strong> {appointment.status}</p>
        </main>
      </div>
    </div>
  );
}

export default AppointmentDetails;
