import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


function ClientDetails() {
  const { id } = useParams();
  const [client, setClient] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get(`/clients/${id}`)
      .then(res => setClient(res.data))
      .catch(() => setError('Failed to load client details'));
  }, [id]);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!client) return <p>Loading client info...</p>;

  return (
    <div className="clientdetails-layout">
      <Navbar />
      <div className="clientdetails-body">
        <Sidebar />
        <main className="clientdetails-content">
          <h2>Client Details</h2>
          <p><strong>ID:</strong> {client.id}</p>
          <p><strong>Name:</strong> {client.name}</p>
          <p><strong>Email:</strong> {client.email}</p>
          <p><strong>Phone:</strong> {client.phone}</p>
        </main>
      </div>
    </div>
  );
}

export default ClientDetails;
