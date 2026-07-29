import React, { useState } from "react";
import EmpNavbar from "./EmpNavbar";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Services() {
  let userinfo = JSON.parse(localStorage.getItem("user"));

  // Preloaded service data
  const [services, setServices] = useState([
    {
      id: 1,
      name: "🌐 Web Development",
      description:
        "Custom websites and web apps built using modern frameworks like React, Node.js, and Spring Boot.",
    },
    {
      id: 2,
      name: "📱 Android App Development",
      description:
        "End-to-end Android app solutions using Java, Kotlin, or Flutter with smooth UI and backend integration.",
    },
    {
      id: 3,
      name: "💼 Project Development Consultancy",
      description:
        "Guidance and full-stack development support for academic, startup, and enterprise projects.",
    },
    {
      id: 4,
      name: "☁️ Cloud Deployment",
      description:
        "Deploy your applications seamlessly on AWS, Google Cloud, or Azure with CI/CD integration.",
    },
  ]);

  const [servicename, setServicename] = useState("");
  const [description, setDescription] = useState("");

  // Add service dynamically
  const addService = (e) => {
    e.preventDefault();

    if (!servicename || !description) {
      alert("Please fill all the fields!");
      return;
    }

    const newService = {
      id: Date.now(),
      name: servicename,
      description,
    };

    setServices([...services, newService]);
    setServicename("");
    setDescription("");
    alert("✅ New service added successfully!");
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Role-based navbar */}
      {userinfo.role === "admin" ? <Navbar /> : <EmpNavbar />}

      <div className="container py-5">
        {/* Add Service Form */}
        <div className="card shadow-lg p-4 rounded-4 bg-light bg-opacity-75">
          <h2 className="text-center text-danger fw-bold mb-4">
            ⚙️ Add New Development Service
          </h2>

          <form onSubmit={addService}>
            <div className="row g-3 justify-content-center">
              <div className="col-md-5">
                <label className="form-label fw-semibold">Service Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={servicename}
                  onChange={(e) => setServicename(e.target.value)}
                  placeholder="e.g., UI/UX Design"
                />
              </div>

              <div className="col-md-7">
                <label className="form-label fw-semibold">Description</label>
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your service"
                />
              </div>

              <div className="text-center mt-3">
                <button
                  type="submit"
                  className="btn btn-danger px-5 fw-semibold shadow"
                  style={{ borderRadius: "25px" }}
                >
                  Add Service
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Display all services */}
        <div className="mt-5">
          <h3 className="text-center text-light fw-bold mb-4">
            💼 Our Professional Services
          </h3>
          <div className="row justify-content-center">
            {services.map((service) => (
              <div
                className="col-md-4 mb-4"
                key={service.id}
                style={{ animation: "fadeIn 1s ease" }}
              >
                <div className="card shadow-lg border-0 rounded-4 h-100 service-card">
                  <div className="card-body text-center">
                    <h5 className="card-title text-danger fw-bold">
                      {service.name}
                    </h5>
                    <p className="card-text text-secondary">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations & styling */}
      <style>{`
        @keyframes fadeIn {
          from {opacity: 0; transform: translateY(10px);}
          to {opacity: 1; transform: translateY(0);}
        }

        .service-card {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}
