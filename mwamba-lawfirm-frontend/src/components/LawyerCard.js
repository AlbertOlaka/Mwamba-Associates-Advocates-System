import React from 'react';
import './LawyerCard.css';

function LawyerCard({ lawyer }) {
  const { id, name, email, phone } = lawyer;

  return (
    <div className="lawyer-card">
      <div className="lawyer-header">
        <h3>{name}</h3>
        <span className="lawyer-id">{id}</span>
      </div>

      <div className="lawyer-details">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
      </div>
    </div>
  );
}

export default LawyerCard;
