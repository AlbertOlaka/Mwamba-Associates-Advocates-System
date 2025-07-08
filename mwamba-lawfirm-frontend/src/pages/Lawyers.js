import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/Lawyers.css';

function Lawyers() {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLawyers();
  }, []);

  const fetchLawyers = async () => {
    try {
      const res = await api.get('/lawyers');
      setLawyers(res.data);
    } catch (err) {
      setError('Failed to fetch lawyers');
    } finally {
      setLoading(false);
    }
  };

  const handleView = (id) => {
    navigate(`/lawyer-details/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/edit-lawyer/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this lawyer?')) {
      try {
        await api.delete(`/lawyers/${id}`);
        setLawyers(prev => prev.filter(lawyer => lawyer.id !== id));
        alert('Lawyer deleted successfully.');
      } catch (err) {
        alert('Failed to delete lawyer.');
      }
    }
  };

  return (
    <div className="lawyers-layout">
      <Navbar />
      <div className="lawyers-body">
        <Sidebar />
        <main className="lawyers-content">
          <div className="lawyers-header">
            <h2>Lawyers</h2>
            <button
              className="add-lawyer-button"
              onClick={() => navigate('/add-lawyer')}
            >
              + Add New Lawyer
            </button>
          </div>

          {loading && <p>Loading lawyers...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          {!loading && !error && (
            <table className="lawyers-table">
              <thead>
                <tr>
                  <th>Lawyer ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {lawyers.map((lawyer) => (
                  <tr key={lawyer.id}>
                    <td>{lawyer.id}</td>
                    <td>{lawyer.name}</td>
                    <td>{lawyer.email}</td>
                    <td>{lawyer.phone}</td>
                    <td className="action-buttons">
                      <button onClick={() => handleView(lawyer.id)} className="view-btn">View</button>
                      <button onClick={() => handleEdit(lawyer.id)} className="edit-btn">Edit</button>
                      <button onClick={() => handleDelete(lawyer.id)} className="delete-btn">Delete</button>
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

export default Lawyers;
