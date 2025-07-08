import React from 'react';
import './AppointmentCard.css';

function AppointmentCard({ appointment }) {
  const { id, client, lawyer, date, time, status } = appointment;

  return (
    <div className="appointment-card">
      <div className="appointment-header">
        <h3>Appointment #{id}</h3>
        <span className={`status ${status.toLowerCase()}`}>{status}</span>
      </div>

      <div className="appointment-details">
        <p><strong>Client:</strong> {client}</p>
        <p><strong>Lawyer:</strong> {lawyer}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
      </div>
    </div>
  );
}

export default AppointmentCard;
