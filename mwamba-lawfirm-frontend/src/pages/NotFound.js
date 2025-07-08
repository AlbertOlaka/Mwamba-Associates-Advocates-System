import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css'; // Assuming you have a CSS file for styling

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="home-link">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
