import React from "react";
import EmpNavbar from "./EmpNavbar";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Aboutus() {
  let userinfo = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9))",
          minHeight: "100vh",
          color: "#f8f9fa",
        }}
      >
        {userinfo?.role === "admin" ? <Navbar /> : <EmpNavbar />}

        {/* Header Section */}
        <div className="container text-center py-5">
          <h1 className="fw-bold text-warning display-4 animate-fade">
            🏢 Indigo Softwares Pvt. Ltd.
          </h1>
          <p className="fs-5 text-light mt-3">
            Empowering Businesses with Smart Employee Management Solutions
          </p>
          <hr className="w-25 mx-auto text-light" />
        </div>

        {/* Mission / Vision Section */}
        <div className="container my-5">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <img
                src="https://img.freepik.com/free-vector/team-concept-illustration_114360-678.jpg"
                alt="Our Mission"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
            <div className="col-md-6 text-light">
              <h2 className="text-warning fw-bold mb-3">Our Mission 🚀</h2>
              <p className="fs-6" style={{ lineHeight: "1.8" }}>
                At <strong>Indigo Softwares</strong>, our mission is to
                revolutionize employee management through intelligent, user-friendly,
                and secure software solutions. We strive to bridge technology and
                teamwork by offering tools that enhance efficiency, transparency,
                and productivity for both employers and employees.
              </p>
              <h2 className="text-success fw-bold mt-4">Our Vision 🌍</h2>
              <p className="fs-6">
                To be a leading software provider recognized for innovation,
                reliability, and exceptional support — helping organizations build
                stronger, smarter workplaces.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="container text-center py-5">
          <h2 className="text-warning fw-bold mb-4 animate-fade">
            Meet Our Team 👨‍💻
          </h2>
          <div className="row g-4 justify-content-center">
            {/* Team Member 1 */}
            <div className="col-md-3">
              <div className="card bg-transparent border border-light shadow-lg hover-card">
                <img
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top rounded-top"
                  alt="Team Member"
                />
                <div className="card-body">
                  <h5 className="text-warning fw-bold">Mayur Jathar</h5>
                  <p className="text-light mb-1">Full Stack Developer</p>
                  <small className="text-muted">
                    Java | React | Spring Boot | SQL
                  </small>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="col-md-3">
              <div className="card bg-transparent border border-light shadow-lg hover-card">
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top rounded-top"
                  alt="Team Member"
                />
                <div className="card-body">
                  <h5 className="text-success fw-bold">Aarav Patil</h5>
                  <p className="text-light mb-1">UI/UX Designer</p>
                  <small className="text-muted">
                    Figma | Tailwind | Bootstrap
                  </small>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="col-md-3">
              <div className="card bg-transparent border border-light shadow-lg hover-card">
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top rounded-top"
                  alt="Team Member"
                />
                <div className="card-body">
                  <h5 className="text-info fw-bold">Shreya Kulkarni</h5>
                  <p className="text-light mb-1">Backend Engineer</p>
                  <small className="text-muted">
                    Spring Boot | REST API | Security
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="container text-center py-5">
          <h2 className="text-success fw-bold mb-3">Get in Touch 📞</h2>
          <p className="fs-6 text-light mb-4">
            Have questions or want to collaborate with us?  
            We’d love to hear from you!
          </p>
          <p className="text-light">
            📧{" "}
            <a
              href="mailto:mayurjathar571@gmail.com"
              className="text-decoration-none text-warning"
            >
              mayurjathar571@gmail.com
            </a>{" "}
            | 📍 Pune, Maharashtra | ☎️ 9518562034
          </p>
        </div>

        {/* Footer */}
        <footer className="text-center py-4 bg-dark bg-opacity-50 mt-5">
          <hr className="text-light" />
          <p className="text-light fw-bold mb-0">
            © {new Date().getFullYear()} Indigo Softwares Pvt. Ltd. | Designed
            with ❤️ by Team Indigo
          </p>
        </footer>
      </div>

      {/* Internal CSS */}
      <style>{`
        .hover-card {
          transition: all 0.4s ease-in-out;
          backdrop-filter: blur(8px);
        }
        .hover-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
          border-color: #ffc107;
        }
        .animate-fade {
          animation: fadeIn 2s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
