import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/api';

function EditCase() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    client: '',
    title: '',
    description: '',
    status: '',
    assignedLawyer: '',
  });

  useEffect(() => {
    api.get(`/cases/${id}`)
      .then(res => setFormData(res.data))
      .catch(() => alert('Failed to load case data.'));
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
      await api.put(`/cases/${id}`, formData);
      alert('Case updated!');
      navigate('/cases');
    } catch {
      alert('Update failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Case</h2>
      <input name="client" value={formData.client} onChange={handleChange} required />
      <input name="title" value={formData.title} onChange={handleChange} required />
      <textarea name="description" value={formData.description} onChange={handleChange} required />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Closed">Closed</option>
      </select>
      <input name="assignedLawyer" value={formData.assignedLawyer} onChange={handleChange} required />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditCase;
