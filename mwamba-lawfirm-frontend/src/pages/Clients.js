import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/Clients.css';

function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const res = await api.get('/clients');
      setClients(res.data);
    } catch (err) {
      setError('Failed to fetch clients');
    } finally {
      setLoading(false);
    }
  };

  const handleView = (id) => {
    navigate(`/client-details/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/edit-client/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      try {
        await api.delete(`/clients/${id}`);
        setClients(prev => prev.filter(client => client.id !== id));
        alert('Client deleted successfully.');
      } catch (err) {
        alert('Failed to delete client.');
      }
    }
  };

  return (
    <div className="clients-layout">
      <Navbar />
      <div className="clients-body">
        <Sidebar />
        <main className="clients-content">
          <div className="clients-header">
            <h2>Clients</h2>
            <button className="add-client-button" onClick={() => navigate('/add-client')}>
              + Add New Client
            </button>
          </div>

          {loading && <p>Loading clients...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          {!loading && !error && (
            <table className="clients-table">
              <thead>
                <tr>
                  <th>Client ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.id}>
                    <td>{client.id}</td>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                    <td>{client.phone}</td>
                    <td className="action-buttons">
                      <button onClick={() => handleView(client.id)} className="view-btn">View</button>
                      <button onClick={() => handleEdit(client.id)} className="edit-btn">Edit</button>
                      <button onClick={() => handleDelete(client.id)} className="delete-btn">Delete</button>
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

export default Clients;
