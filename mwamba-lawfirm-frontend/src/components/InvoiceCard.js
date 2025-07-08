import React from 'react';
import './InvoiceCard.css';

function InvoiceCard({ invoice }) {
  const { id, client, amount, dateIssued, dueDate, status } = invoice;

  return (
    <div className="invoice-card">
      <div className="invoice-header">
        <h3>Invoice #{id}</h3>
        <span className={`status ${status.toLowerCase()}`}>{status}</span>
      </div>

      <div className="invoice-details">
        <p><strong>Client:</strong> {client}</p>
        <p><strong>Amount:</strong> KES {amount.toLocaleString()}</p>
        <p><strong>Date Issued:</strong> {dateIssued}</p>
        <p><strong>Due Date:</strong> {dueDate}</p>
      </div>
    </div>
  );
}

export default InvoiceCard;
