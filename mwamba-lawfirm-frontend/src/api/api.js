import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Change to your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optionally add interceptors here for auth tokens, error handling, etc.

export default api;
