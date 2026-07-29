import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Registration() {
let app="http://51.20.6.67:8080/EmployeeManagementSystemApril-0.0.1-SNAPSHOT";

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contactno, setContactno] = useState("");
  const [gender, setGender] = useState("");
  const [empid, setEmpid] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const validation = () => {
    if (
      !firstname ||
      !lastname ||
      !email ||
      !contactno ||
      !gender ||
      !empid ||
      !role ||
      !username ||
      !password ||
      !confirmpassword
    ) {
      alert("⚠️ Please fill all the fields!");
      return false;
    } else if (!/^[A-Za-z\s]{2,20}$/.test(firstname)) {
      alert("Invalid First Name!");
      return false;
    } else if (!/^[A-Za-z\s]{2,20}$/.test(lastname)) {
      alert("Invalid Last Name!");
      return false;
    } else if (!/^\d{10}$/.test(contactno)) {
      alert("Enter valid 10-digit contact number!");
      return false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Enter valid email!");
      return false;
    } else if (password.length < 8 || password.length > 13) {
      alert("Password must be 8–13 characters long!");
      return false;
    } else if (password !== confirmpassword) {
      alert("Passwords do not match!");
      return false;
    }
    return true;
  };

  const register = (e) => {
    e.preventDefault();
    if (!validation()) return;

    const newuser = {
      firstname,
      lastname,
      email,
      contactno,
      gender,
      empid,
      role,
      username,
      password,
      confirmpassword,
    };

    axios
      .post(`${app}/adduser`, newuser)
      .then((response) => {
        if (response.data === "User registration successful") {
          alert("🎉 Registration Successful!");
          setIsRegistered(true);
        } else {
          alert("Username already exists! Try another one.");
        }
      })
      .catch(() => alert("Server Error! Try again later."));
  };

  const login = (e) => {
    e.preventDefault();
    const user = { username, password };
    axios
      .post(`${app}/login`, user)
      .then((response) => {
        if (response.data !== "Invalid username or password") {
          alert("✅ Login Successful!");
          localStorage.setItem("user", JSON.stringify(response.data));
          const userinfo = response.data;
          navigate(userinfo.role === "admin" ? "/admindashbord" : "/employeedashboard");
        } else {
          alert("Invalid username or password!");
        }
      })
      .catch(() => alert("Error in login operation."));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        height: "100vh",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="card shadow-lg p-4 rounded-4"
        style={{
          width: "450px",
          background: "rgba(255,255,255,0.95)",
          border: "2px solid #fff",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          animation: "floatUp 1s ease-in-out",
        }}
      >
        <h2 className="text-center text-primary fw-bold mb-4">
          {isRegistered ? "Login" : "Create Account"}
        </h2>

        {!isRegistered ? (
          <form onSubmit={register}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control shadow-sm"
                  placeholder="First Name"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control shadow-sm"
                  placeholder="Last Name"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>

            <input
              type="email"
              className="form-control mb-3 shadow-sm"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3 shadow-sm"
              placeholder="Contact No"
              onChange={(e) => setContactno(e.target.value)}
            />

            <div className="mb-3">
              <label className="fw-semibold me-2">Gender:</label>
              <input
                type="radio"
                value="male"
                name="gender"
                className="form-check-input me-2"
                onChange={(e) => setGender(e.target.value)}
              />
              Male
              <input
                type="radio"
                value="female"
                name="gender"
                className="form-check-input ms-3 me-2"
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </div>

            <input
              type="text"
              className="form-control mb-3 shadow-sm"
              placeholder="Employee ID"
              onChange={(e) => setEmpid(e.target.value)}
            />
            <select
              className="form-select mb-3 shadow-sm"
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Select Role</option>
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
            </select>
            <input
              type="text"
              className="form-control mb-3 shadow-sm"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-3 shadow-sm"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-3 shadow-sm"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmpassword(e.target.value)}
            />

            <button type="submit" className="btn btn-primary w-100 fw-semibold">
              Register
            </button>
            <button
              type="button"
              className="btn btn-link text-decoration-none w-100 mt-2"
              onClick={() => setIsRegistered(true)}
            >
              Already have an account? <b>Login here</b>
            </button>
          </form>
        ) : (
          <form onSubmit={login}>
            <input
              type="text"
              className="form-control mb-3 shadow-sm"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-3 shadow-sm"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn btn-success w-100 fw-semibold">
              Login
            </button>
            <button
              type="button"
              className="btn btn-link text-decoration-none w-100 mt-2"
              onClick={() => setIsRegistered(false)}
            >
              New user? <b>Create an account</b>
            </button>
          </form>
        )}
      </div>

      {/* Floating Animation */}
      <style>
        {`
          @keyframes floatUp {
            0% { transform: translateY(30px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0px 8px 20px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </div>
  );
}
