import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';

function CaseDetails() {
  const { id } = useParams();
  const [caseData, setCaseData] = useState(null);

  useEffect(() => {
    api.get(`/cases/${id}`)
      .then(res => setCaseData(res.data))
      .catch(() => alert('Failed to load case details.'));
  }, [id]);

  if (!caseData) return <p>Loading case details...</p>;

  return (
    <div>
      <h2>Case #{caseData.id}</h2>
      <p><strong>Client:</strong> {caseData.client}</p>
      <p><strong>Title:</strong> {caseData.title}</p>
      <p><strong>Status:</strong> {caseData.status}</p>
      <p><strong>Description:</strong> {caseData.description}</p>
      <p><strong>Assigned Lawyer:</strong> {caseData.assignedLawyer}</p>
    </div>
  );
}

export default CaseDetails;
