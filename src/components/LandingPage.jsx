import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#343a40', // Dark background color
        color: '#fff', // Light text color
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          marginBottom: '30px',
          color: '#007bff', // Accent color for headings
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}
      >
        Welcome to Admin Panel
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link to="/users" style={{ textDecoration: 'none', margin: '0 10px' }}>
          <button
            style={{
              padding: '15px 30px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#fff',
              backgroundColor: '#007bff', // Accent color for buttons
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              boxShadow: '0px 4px 10px rgba(0, 123, 255, 0.2)',
            }}
            // Add hover effect
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
          >
            User Management
          </button>
        </Link>
        <Link to="/products" style={{ textDecoration: 'none', margin: '0 10px' }}>
          <button
            style={{
              padding: '15px 30px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#fff',
              backgroundColor: '#007bff', // Accent color for buttons
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              boxShadow: '0px 4px 10px rgba(0, 123, 255, 0.2)',
            }}
            // Add hover effect
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
          >
            Product Management
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;