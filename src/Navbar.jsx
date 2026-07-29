import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const userinfo = JSON.parse(localStorage.getItem("user"));

  let logout = () => {
    localStorage.removeItem("user");
    alert("Logout successful 👋");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar shadow sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-warning fs-3" to="/home">
          EMS
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 fw-semibold">
            <li className="nav-item">
              <Link to="/home" className="nav-link text-light">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link text-light">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contactus" className="nav-link text-light">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/addemp" className="nav-link text-light">Add Employee</Link>
            </li>
            <li className="nav-item">
              <Link to="/getemployee" className="nav-link text-light">View Employee</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link text-light">Services</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <span className="text-light fw-bold fs-6">
              👋 Welcome, <span className="text-warning">{userinfo.username}</span>
            </span>
            <button className="btn btn-outline-light fw-semibold px-3 py-1" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
