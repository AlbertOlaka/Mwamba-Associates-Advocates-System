import React from 'react';
import './ClientCard.css';

function ClientCard({ client }) {
  const { id, name, email, phone, address } = client;

  return (
    <div className="client-card">
      <div className="client-header">
        <h3>{name}</h3>
        <span className="client-id">{id}</span>
      </div>

      <div className="client-details">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        {address && <p><strong>Address:</strong> {address}</p>}
      </div>
    </div>
  );
}

export default ClientCard;
