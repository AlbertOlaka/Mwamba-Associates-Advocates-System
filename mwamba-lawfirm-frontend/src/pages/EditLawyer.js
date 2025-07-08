import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/api';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


function EditLawyer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    api.get(`/lawyers/${id}`)
      .then(res => setFormData(res.data))
      .catch(() => setErrorMsg('Failed to load lawyer info'))
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/lawyers/${id}`, formData);
      alert('Lawyer updated successfully');
      navigate('/lawyers');
    } catch {
      alert('Failed to update lawyer');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="editlawyer-layout">
      <Navbar />
      <div className="editlawyer-body">
        <Sidebar />
        <main className="editlawyer-content">
          <h2>Edit Lawyer</h2>
          {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
          <form className="editlawyer-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <button type="submit">Update Lawyer</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default EditLawyer;
