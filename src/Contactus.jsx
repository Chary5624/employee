import React from 'react';
import EmpNavbar from './EmpNavbar';
import Navbar from './Navbar';

export default function Contactus() {
  const userinfo = JSON.parse(localStorage.getItem('user')) || { role: 'employee' };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {/* Navbar based on role */}
      {userinfo.role === 'admin' ? <Navbar /> : <EmpNavbar />}

      {/* Contact Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '85vh',
          backdropFilter: 'blur(6px)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '20px',
        }}
      >
        <div
          style={{
            maxWidth: '600px',
            width: '100%',
            background: 'rgba(255, 255, 255, 0.15)',
            padding: '40px',
            borderRadius: '16px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
            textAlign: 'center',
            backdropFilter: 'blur(8px)',
          }}
        >
          <h1
            style={{
              fontSize: '2.5rem',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#fff',
              borderBottom: '2px solid #00bcd4',
              display: 'inline-block',
              paddingBottom: '10px',
            }}
          >
            Contact Us
          </h1>

          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '20px',
              color: '#f5f5f5',
            }}
          >
            We'd love to hear from you! Whether you have a question about our
            services, need help, or want to share feedback — we’re always ready
            to assist you.
          </p>

          <div
            style={{
              textAlign: 'left',
              marginTop: '30px',
              lineHeight: '2',
              fontSize: '1.05rem',
            }}
          >
            <p>
              <strong>📍 Address:</strong> Office No: 607, Chintamani Hills,
              Balaji Nagar, Katraj, Pune, Maharashtra, India
            </p>
            <p>
              <strong>📞 Phone:</strong> +91-7447501903
            </p>
            <p>
              <strong>✉️ Email:</strong> mayurjathar571@gmail.com
            </p>
            <p>
              <strong>🕒 Working Hours:</strong> Mon - Sat: 9:00 AM - 6:00 PM
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
}
