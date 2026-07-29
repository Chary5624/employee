import React from "react";
import EmpNavbar from "./EmpNavbar";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  let userinfo = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      {userinfo.role === "admin" ? <Navbar /> : <EmpNavbar />}

      {/* ✅ QUALITY SECTION */}
      <section
        className="text-center py-5"
        style={{
          background: "linear-gradient(120deg, #f8f9fa 0%, #e3f2fd 100%)",
          color: "#333",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3 text-primary">Our Commitment to Quality</h2>
          <p className="lead mb-5 text-muted">
            We prioritize reliability, speed, and security — delivering smooth and intelligent management solutions for your organization.
          </p>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-lg border-0 rounded-4 h-100 hover-card">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
                  className="card-img-top rounded-top-4"
                  alt="Reliability"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h4 className="fw-semibold text-primary mt-2">💼 Reliability</h4>
                  <p className="text-secondary">
                    Built to perform under pressure, ensuring uninterrupted service and seamless operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-lg border-0 rounded-4 h-100 hover-card">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                  className="card-img-top rounded-top-4"
                  alt="Performance"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h4 className="fw-semibold text-success mt-2">⚡ Performance</h4>
                  <p className="text-secondary">
                    Fast, scalable, and optimized — empowering your team to achieve more in less time.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-lg border-0 rounded-4 h-100 hover-card">
                <img
                  src="https://img.freepik.com/premium-photo/2d-minimalize-vector-as-it-team-collaborating-cybersecurity-project-concept-as-vector-illustr_980716-377470.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Security"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h4 className="fw-semibold text-warning mt-2">🔒 Security</h4>
                  <p className="text-secondary">
                    Industry-standard encryption keeps your company’s confidential data safe and protected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ CAROUSEL SECTION */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3500"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
        </div>

        {/* Carousel Slides */}
        <div className="carousel-inner">
          {/* ✅ Slide 1 - Smart Office */}
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1920&q=90"
              className="d-block w-100"
              alt="Modern Office"
              style={{ height: "90vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-4 p-3">
              <h3 className="fw-bold text-warning">Empower Your Workforce</h3>
              <p className="text-light">
                Smart tools that simplify management and improve collaboration.
              </p>
              <button className="btn btn-warning btn-sm fw-semibold shadow-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* ✅ Slide 2 - Teamwork */}
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
              className="d-block w-100"
              alt="Team Collaboration"
              style={{ height: "90vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-4 p-3">
              <h3 className="fw-bold text-info">Smarter Employee Management</h3>
              <p className="text-light">
                Streamline HR, payroll, and performance tracking with ease.
              </p>
            </div>
          </div>

          {/* ✅ Slide 3 - Analytics */}
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1920&q=90"
              className="d-block w-100"
              alt="Analytics Dashboard"
              style={{ height: "90vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-4 p-3">
              <h3 className="fw-bold text-success">Data-Driven Insights</h3>
              <p className="text-light">
                Visualize performance and make smarter business decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* ✅ Custom Styles */}
      <style>{`
        .carousel-caption {
          transition: all 0.8s ease-in-out;
        }

        .carousel-item img {
          filter: brightness(85%) contrast(105%);
        }

        .carousel-caption h3 {
          text-shadow: 2px 2px 12px rgba(0,0,0,0.8);
          font-size: 2rem;
        }

        .carousel-caption p {
          font-size: 1.1rem;
          text-shadow: 1px 1px 6px rgba(0,0,0,0.6);
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-color: rgba(0,0,0,0.4);
          border-radius: 50%;
          padding: 10px;
        }

        .carousel-indicators button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #fff;
        }

        .carousel-indicators .active {
          background-color: #ff6600;
        }

        .btn-warning:hover {
          background-color: #ff8800;
          color: white;
          transform: scale(1.05);
          transition: 0.3s;
        }

        /* Hover Animation for Quality Cards */
        .hover-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0px 10px 20px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}
