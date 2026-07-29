import React, { useState, useEffect } from "react";
import axios from "axios";
import EmpNavbar from "./EmpNavbar";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EmployeeDashboard() {
  let app = "http://51.20.6.67:8080/EmployeeManagementSystemApril-0.0.1-SNAPSHOT";

  const [employees, setEmployees] = useState([]);
  const [searchfname, setSearchfname] = useState("");
  const [searchlname, setSearchlname] = useState("");
  const [searchdesignation, setSearchDesignation] = useState("");
  const [searchdept, setSearchDept] = useState("");
  const [searchresult, setSearchResult] = useState([]);

  const userinfo = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${app}/emp/get`)
      .then((response) => setEmployees(response.data))
      .catch(() => {});
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logout Successful 👋");
    navigate("/login");
  };

  // Search Functions
  const searchbyfname = () => {
    const trimmedName = searchfname.trim();
    if (!trimmedName) {
      alert("Please enter first name!");
      return;
    }
    axios
      .get(`${app}/emp/getbyfname?fname=${trimmedName}`)
      .then((response) => {
        if (response.data.length === 0) alert("No employee found with this first name");
        setSearchResult(response.data);
      })
      .catch(() => alert("Error fetching data"));
  };

  const searchbylastname = () => {
    const trimmedName = searchlname.trim();
    if (!trimmedName) {
      alert("Please enter last name!");
      return;
    }
    axios
      .get(`${app}/emp/getbylname?lname=${trimmedName}`)
      .then((response) => {
        if (response.data.length === 0) alert("No employee found with this last name");
        setSearchResult(response.data);
      })
      .catch(() => alert("Error fetching data"));
  };

  const searchbydepartment = () => {
    if (!searchdept) {
      alert("Please select a department!");
      return;
    }
    axios
      .get(`${app}/emp/getbydepartment?department=${searchdept}`)
      .then((response) => {
        if (response.data.length === 0) alert("No employee found in this department");
        setSearchResult(response.data);
      })
      .catch(() => alert("Error fetching data"));
  };

  const searchbydesignation = () => {
    if (!searchdesignation) {
      alert("Please select a designation!");
      return;
    }
    axios
      .get(`${app}/emp/getbydesignation?designation=${searchdesignation}`)
      .then((response) => {
        if (response.data.length === 0) alert("No employee found with this designation");
        setSearchResult(response.data);
      })
      .catch(() => alert("Error fetching data"));
  };

  // 🌈 Random card gradient colors
  const cardColors = [
    "linear-gradient(135deg, #a8edea, #fed6e3)",
    "linear-gradient(135deg, #f6d365, #fda085)",
    "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
    "linear-gradient(135deg, #cfd9df, #e2ebf0)",
    "linear-gradient(135deg, #84fab0, #8fd3f4)",
    "linear-gradient(135deg, #ffecd2, #fcb69f)",
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e0f7fa, #f1f8e9, #e8eaf6)",
        minHeight: "100vh",
        paddingBottom: "40px",
      }}
    >
      {/* Navbar */}
      <EmpNavbar />

      <div className="container mt-3">
        <h2
          className="text-center mb-4 fw-bold"
          style={{ color: "#0d47a1", textShadow: "1px 1px 3px rgba(0,0,0,0.2)" }}
        >
          Welcome, {userinfo.firstname}
        </h2>

        {/* Search Section */}
        <div
          className="card shadow-lg p-4 mb-4 border-0 rounded-4"
          style={{ background: "linear-gradient(135deg, #bbdefb, #e3f2fd)" }}
        >
          <h5 className="text-center text-dark mb-3 fw-semibold">Search Employee</h5>
          <div className="row g-3 align-items-end">
            {/* First Name */}
            <div className="col-md-3">
              <label className="form-label fw-semibold text-primary">First Name</label>
              <input
                type="text"
                className="form-control border-primary"
                placeholder="Enter First Name"
                onChange={(e) => setSearchfname(e.target.value)}
              />
              <button className="btn btn-primary mt-2 w-100" onClick={searchbyfname}>
                Search
              </button>
            </div>

            {/* Last Name */}
            <div className="col-md-3">
              <label className="form-label fw-semibold text-primary">Last Name</label>
              <input
                type="text"
                className="form-control border-primary"
                placeholder="Enter Last Name"
                onChange={(e) => setSearchlname(e.target.value)}
              />
              <button className="btn btn-primary mt-2 w-100" onClick={searchbylastname}>
                Search
              </button>
            </div>

            {/* Department */}
            <div className="col-md-3">
              <label className="form-label fw-semibold text-primary">Department</label>
              <select
                className="form-select border-primary"
                onChange={(e) => setSearchDept(e.target.value)}
              >
                <option value="">Select Department</option>
                <option value="HR">HR</option>
                <option value="Development">Development</option>
                <option value="Testing">Testing</option>
                <option value="Web Designing">Web Designing</option>
              </select>
              <button className="btn btn-primary mt-2 w-100" onClick={searchbydepartment}>
                Search
              </button>
            </div>

            {/* Designation */}
            <div className="col-md-3">
              <label className="form-label fw-semibold text-primary">Designation</label>
              <select
                className="form-select border-primary"
                value={searchdesignation}
                onChange={(e) => setSearchDesignation(e.target.value)}
              >
                <option value="">Select Designation</option>
                <option value="HR">HR</option>
                <option value="Jr.Developer">Jr.Developer</option>
                <option value="Sr.Developer">Sr.Developer</option>
                <option value="Tester">Tester</option>
                <option value="Web Designer">Web Designer</option>
                <option value="Data Engineer">Data Engineer</option>
              </select>
              <button className="btn btn-primary mt-2 w-100" onClick={searchbydesignation}>
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Employee Cards */}
        <div className="row g-4">
          {(searchresult.length > 0 ? searchresult : employees).map((emp, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <div
                className="card shadow border-0 rounded-4 text-center"
                style={{
                  height: "430px",
                  background: cardColors[index % cardColors.length],
                  transition: "transform 0.4s, box-shadow 0.4s",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
                }}
              >
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <img
                    src={emp.img}
                    alt={`${emp.firstname}`}
                    className="rounded-circle border border-3 border-white shadow-sm"
                    style={{
                      width: "130px",
                      height: "130px",
                      objectFit: "cover",
                      backgroundColor: "#fff",
                      padding: "4px",
                    }}
                  />
                </div>

                <div className="card-body text-dark">
                  <h5 className="fw-bold mt-2">
                    {emp.firstname} {emp.lastname}
                  </h5>
                  <p className="mb-1">
                    <strong>Dept:</strong> {emp.department}
                  </p>
                  <p className="mb-1">
                    <strong>Role:</strong> {emp.designation}
                  </p>
                  <p className="mb-1">
                    <strong>Contact:</strong> {emp.contactno}
                  </p>
                  <p>
                    <strong>Email:</strong> {emp.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
