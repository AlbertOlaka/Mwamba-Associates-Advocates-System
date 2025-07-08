import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function LawyerDetails() {
  const { id } = useParams();
  const [lawyer, setLawyer] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get(`/lawyers/${id}`)
      .then(res => setLawyer(res.data))
      .catch(() => setError('Failed to load lawyer details'));
  }, [id]);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!lawyer) return <p>Loading lawyer info...</p>;

  return (
    <div className="lawyerdetails-layout">
      <Navbar />
      <div className="lawyerdetails-body">
        <Sidebar />
        <main className="lawyerdetails-content">
          <h2>Lawyer Details</h2>
          <p><strong>ID:</strong> {lawyer.id}</p>
          <p><strong>Name:</strong> {lawyer.name}</p>
          <p><strong>Email:</strong> {lawyer.email}</p>
          <p><strong>Phone:</strong> {lawyer.phone}</p>
        </main>
      </div>
    </div>
  );
}

export default LawyerDetails;
