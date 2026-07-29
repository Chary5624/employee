import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import EmpNavbar from "./EmpNavbar";

export default function GetEmployee() {
  const userinfo = JSON.parse(localStorage.getItem("user"));
  const app = "http://51.20.6.67:8080/EmployeeManagementSystemApril-0.0.1-SNAPSHOT";

  const [employees, setEmployees] = useState([]);
  const [isshow, setIsshow] = useState(false);
  const [empid, setEmpid] = useState(0);

  // Editable fields
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contactno, setContactno] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");

  // Load employees
  useEffect(() => {
    axios
      .get(`${app}/emp/get`)
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Open update modal and set fields
  const updateemp = (emp) => {
    setEmpid(emp.empid);
    setFirstname(emp.firstname);
    setLastname(emp.lastname);
    setEmail(emp.email);
    setContactno(emp.contactno);
    setDepartment(emp.department);
    setDesignation(emp.designation);
    setIsshow(true);
  };

  // Update employee
  const update1 = (e) => {
    e.preventDefault();
    const updatedData = {
      firstname,
      lastname,
      email,
      contactno,
      department,
      designation,
    };

    axios.put(`${app}/emp/updatebyid?empid=${empid}`, updatedData)
      .then((res) => {
        if (res.data === "Record updated successfully") {
          alert("✅ Employee updated successfully!");
          setIsshow(false);
          // Refresh employee list
          axios.get(`${app}/emp/get`).then((res) => setEmployees(res.data));
        } else {
          alert("❌ Update failed: " + res.data);
        }
      })
      .catch((err) => {
        console.log(err.response || err);
        alert("❌ Error updating employee!");
      });
  };
  // Delete employee
  const deleteemp = (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;

    axios
      .delete(`${app}/emp/deletebyid?empid=${id}`)
      .then((res) => {
        if (res.data === "record deleted successfully") {
          alert("🗑️ Employee deleted successfully!");
          setEmployees(employees.filter((e) => e.empid !== id));
        }
      })
      .catch(() => alert("❌ Error deleting employee!"));
  };

  return (
    <div>
      {userinfo.role === "admin" ? <Navbar /> : <EmpNavbar />}
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          minHeight: "100vh",
          padding: "40px 0",
        }}
      >
        <div className="container bg-light p-4 rounded-4 shadow-lg" style={{ opacity: 0.95 }}>
          <h2 className="text-center text-danger fw-bold mb-4">👨‍💼 Employee Directory</h2>

          {/* Employee Cards */}
          <div className="row g-4">
            {employees.map((emp) => (
              <div className="col-md-3" key={emp.empid}>
                <div className="card shadow-lg border-0 h-100">
                  <img
                    src={emp.img}
                    className="card-img-top"
                    alt="Employee"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="fw-bold text-primary">
                      {emp.firstname} {emp.lastname}
                    </h5>
                    <p className="mb-1">
                      <strong>Dept:</strong> {emp.department}
                    </p>
                    <p className="mb-1">
                      <strong>Desig:</strong> {emp.designation}
                    </p>
                    <p className="mb-1">
                      <strong>📞</strong> {emp.contactno}
                    </p>
                    <p className="text-muted">{emp.email}</p>

                    <div className="d-flex justify-content-around">
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => updateemp(emp)}
                      >
                        ✏️ Update
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteemp(emp.empid)}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Update Modal */}
          {isshow && (
            <div
              className="modal fade show"
              style={{ display: "block", backgroundColor: "rgba(0,0,0,0.6)" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header bg-danger text-white">
                    <h5 className="modal-title">Update Employee</h5>
                    <button className="btn-close" onClick={() => setIsshow(false)}></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={update1} className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Contact</label>
                        <input
                          type="number"
                          className="form-control"
                          value={contactno}
                          onChange={(e) => setContactno(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Department</label>
                        <select
                          className="form-select"
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                          required
                        >
                          <option value="">Select Department</option>
                          <option value="HR">HR</option>
                          <option value="Development">Development</option>
                          <option value="Testing">Testing</option>
                          <option value="Web Designing">Web Designing</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Designation</label>
                        <select
                          className="form-select"
                          value={designation}
                          onChange={(e) => setDesignation(e.target.value)}
                          required
                        >
                          <option value="">Select Designation</option>
                          <option value="HR">HR</option>
                          <option value="Jr.Developer">Jr.Developer</option>
                          <option value="Sr.Developer">Sr.Developer</option>
                          <option value="Tester">Tester</option>
                          <option value="Web Designer">Web Designer</option>
                        </select>
                      </div>
                      <div className="col-12 text-center mt-3">
                        <button className="btn btn-success px-5" type="submit">
                          Update Employee
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
