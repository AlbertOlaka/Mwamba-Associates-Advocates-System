import React from 'react';
import './CaseCard.css';

function CaseCard({ caseData }) {
  const { caseNumber, clientName, caseType, status, assignedLawyer, openDate } = caseData;

  return (
    <div className="case-card">
      <div className="case-header">
        <h3>Case #{caseNumber}</h3>
        <span className={`status ${status.toLowerCase()}`}>{status}</span>
      </div>

      <div className="case-details">
        <p><strong>Client:</strong> {clientName}</p>
        <p><strong>Type:</strong> {caseType}</p>
        <p><strong>Lawyer:</strong> {assignedLawyer}</p>
        <p><strong>Opened:</strong> {openDate}</p>
      </div>
    </div>
  );
}

export default CaseCard;
