import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function EmpNavbar() {
  let userinfo=JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate();
  let logout=()=>
  {
          localStorage.removeItem("user");
          alert("Logout successful 👋");
          navigate("/");
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-warning" href="#">EMS</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
              <Link to="/services" className="nav-link text-light">Services</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <span className="text-success fw-semibold">
              Welcome, {userinfo.username}
            </span>
            <button onClick={logout} className="btn btn-outline-danger">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
