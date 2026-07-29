import React from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminDashboard() {
  return (
    <div>
      <Navbar />

      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Carousel */}
        <div
          id="adminCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
                className="d-block w-100"
                alt="Office Teamwork"
                style={{ height: "100vh", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
                className="d-block w-100"
                alt="Meeting Room"
                style={{ height: "100vh", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1920&q=80"
                className="d-block w-100"
                alt="Team Management"
                style={{ height: "100vh", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80"
                className="d-block w-100"
                alt="Employee Collaboration"
                style={{ height: "100vh", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Overlay Text */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.55)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1 className="fw-bold display-4 text-warning mb-3">
            Welcome to Admin Dashboard
          </h1>
          <p className="lead mb-4">
            Manage employees, monitor system data, and ensure everything runs
            smoothly.
          </p>
        </div>
      </div>
    </div>
  );
}
