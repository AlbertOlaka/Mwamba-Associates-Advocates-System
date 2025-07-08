import React, { useEffect, useState } from 'react';
import api from '../api/api';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import '../styles/Cases.css';

function Cases() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    try {
      const res = await api.get('/cases');
      setCases(res.data);
    } catch (err) {
      setError('Failed to fetch cases');
    } finally {
      setLoading(false);
    }
  };

  const handleView = (id) => {
    navigate(`/case-details/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/edit-case/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this case?')) {
      try {
        await api.delete(`/cases/${id}`);
        setCases(prev => prev.filter(c => c.id !== id));
        alert('Case deleted successfully.');
      } catch (err) {
        alert('Failed to delete case.');
      }
    }
  };

  return (
    <div className="cases-layout">
      <Navbar />
      <div className="cases-body">
        <Sidebar />
        <main className="cases-content">
          <div className="cases-header">
            <h2>Cases</h2>
            <button className="add-case-button" onClick={() => navigate('/add-case')}>
              + Add New Case
            </button>
          </div>

          {loading && <p>Loading cases...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          {!loading && !error && (
            <table className="cases-table">
              <thead>
                <tr>
                  <th>Case ID</th>
                  <th>Client</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Last Updated</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cases.map((c) => (
                  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.client}</td>
                    <td>{c.title}</td>
                    <td className={`status ${c.status.toLowerCase().replace(' ', '-')}`}>
                      {c.status}
                    </td>
                    <td>{c.lastUpdated}</td>
                    <td className="action-buttons">
                      <button onClick={() => handleView(c.id)} className="view-btn">View</button>
                      <button onClick={() => handleEdit(c.id)} className="edit-btn">Edit</button>
                      <button onClick={() => handleDelete(c.id)} className="delete-btn">Delete</button>
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

export default Cases;
