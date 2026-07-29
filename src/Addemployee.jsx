import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import EmpNavbar from './EmpNavbar';

export default function Addemployee() {

let app="http://51.20.6.67:8080/EmployeeManagementSystemApril-0.0.1-SNAPSHOT";

   let userinfo = JSON.parse(localStorage.getItem("user"));
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [contactno, setContactno] = useState("");
  const [gender, setGender] = useState("");
  const [designation, setDesignation] = useState("");
  const [dob, setDob] = useState("");
  const [joindate, setJoindate] = useState("");
  const [reportingauthority, setReportingauthority] = useState("");
  const [exp, setExp] = useState("");
  const [adharcardno, setAdharcardno] = useState("");
  const [panno, setPanno] = useState("");
  const [salary, setSalary] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const handleimg = (event) => {
    const file = event.target.files[0];
    const filepath = `./img/${file.name}`;
    setImg(filepath);
  };

  const validate = () => {
    if (!firstname || !lastname || !email || !contactno || !designation) {
      alert("⚠️ Please fill all mandatory fields.");
      return false;
    } else if (!/^\d{10}$/.test(contactno)) {
      alert("⚠️ Please enter a valid 10-digit contact number.");
      return false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const addemp = (event) => {
    event.preventDefault();
    if (!validate()) return;

    const newemp = {
      firstname, lastname, email, department, contactno,
      gender, designation, dob, joindate, reportingauthority,
      exp, adharcardno, panno, salary, img
    };

    // Check for duplicate email/contact before adding
    axios.get(`${app}/emp/get`)
      .then((res) => {
        const exists = res.data.some(
          emp => emp.email === email || emp.contactno === contactno
        );
        if (exists) {
          alert("⚠️ Employee with this email or contact number already exists!");
          return;
        }

        // Proceed to add employee
        axios.post(`${app}/emp/add`, newemp)
          .then((response) => {
            if (response.data === "record added successfully") {
              alert("✅ Employee added successfully!");
              // Clear form
              setFirstname(""); setLastname(""); setEmail(""); setContactno("");
              setDepartment(""); setGender(""); setDesignation("");
              setDob(""); setJoindate(""); setReportingauthority("");
              setExp(""); setAdharcardno(""); setPanno(""); setSalary(""); setImg("");
            } else {
              alert("❌ Failed to add employee. Try again.");
            }
          })
          .catch(() => {
            alert("❌ Server Error! Please try again later.");
          });
      })
      .catch(() => {
        alert("⚠️ Unable to verify existing employees.");
      });
  };

  return (
    <div>
      {userinfo.role === "admin" ? <Navbar /> : <EmpNavbar />}
    <div 
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      
      {/* overlay effect */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(4px)",
      }}></div>

      <div className="card shadow-lg p-4 rounded-4 w-75" 
        style={{
          maxWidth: "900px",
          background: "rgba(255, 255, 255, 0.9)",
          zIndex: 1,
          animation: "fadeIn 1.5s ease",
        }}>
        
        <h2 className="text-center mb-4 text-danger fw-bold">
          🧑‍💼 Add Employee Information
        </h2>

        <form onSubmit={addemp}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold">First Name</label>
              <input type="text" value={firstname} className="form-control" onChange={(e) => setFirstname(e.target.value)} />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Last Name</label>
              <input type="text" value={lastname} className="form-control" onChange={(e) => setLastname(e.target.value)} />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Email</label>
              <input type="email" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Contact Number</label>
              <input type="number" value={contactno} className="form-control" onChange={(e) => setContactno(e.target.value)} />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Gender</label><br />
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />
                <label className="form-check-label">Female</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />
                <label className="form-check-label">Male</label>
              </div>
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Date of Birth</label>
              <input type="date" value={dob} className="form-control" onChange={(e) => setDob(e.target.value)} />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Aadhar Number</label>
              <input type="number" value={adharcardno} className="form-control" onChange={(e) => setAdharcardno(e.target.value)} />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">PAN Number</label>
              <input type="text" value={panno} className="form-control" onChange={(e) => setPanno(e.target.value)} />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Department</label>
              <select className="form-select" onChange={(e) => setDepartment(e.target.value)}>
                <option value="">Select Department</option>
                <option value="HR">HR</option>
                <option value="Development">Development</option>
                <option value="Testing">Testing</option>
                <option value="Web Designing">Web Designing</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Designation</label>
              <select className="form-select" onChange={(e) => setDesignation(e.target.value)}>
                <option value="">Select Designation</option>
                <option value="HR">HR</option>
                <option value="Jr.Developer">Jr.Developer</option>
                <option value="Sr.Developer">Sr.Developer</option>
                <option value="Tester">Tester</option>
                <option value="Web Designer">Web Designer</option>
                <option value="Data Engineer">Data Engineer</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Reporting Authority</label>
              <input type="text" value={reportingauthority} className="form-control" onChange={(e) => setReportingauthority(e.target.value)} />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Joining Date</label>
              <input type="date" value={joindate} className="form-control" onChange={(e) => setJoindate(e.target.value)} />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Experience (Years)</label>
              <input type="number" value={exp} className="form-control" onChange={(e) => setExp(e.target.value)} />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Salary</label>
              <input type="number" value={salary} className="form-control" onChange={(e) => setSalary(e.target.value)} />
            </div>

            <div className="col-md-12">
              <label className="form-label fw-semibold">Upload Profile Photo</label>
              <input type="file" className="form-control" accept="image/*" onChange={handleimg} />
            </div>

            <div className="text-center mt-4">
              <button 
                type="submit" 
                className="btn btn-danger px-5 py-2 fw-semibold shadow"
                style={{ borderRadius: "30px", transition: "0.3s" }}
              >
                Add Employee
              </button>
            </div>

            {/* View Employees Button */}
            <div className="text-center mt-3">
              
            </div>
          </div>
        </form>
      </div>

      {/* simple fadeIn animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
    </div>
  );
}
