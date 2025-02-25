import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // For routing to home page
import './Notfound.css'; // Custom CSS for styling

class NotFound extends Component {
  render() {
    return (
      <div className="container-fluid-n d-flex justify-content-center align-items-center min-vh-100">
        <div className="neumorphism-container text-center">
          <h1>404</h1>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <p className='under-development-text'>This page is either not available or under development.</p>
          <Link to="/" className="btn btn-custom">Go to Home</Link>
        </div>
      </div>
    );
  }
}

export default NotFound;