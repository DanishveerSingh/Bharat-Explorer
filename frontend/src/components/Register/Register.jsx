import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [form, setform] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!form.username || !form.email || !form.password) {
      setError("Every field is required");
      return;
    }
    try {
      const res = await fetch("http://localhost:8001/api/v1/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Registration failed");
        return;
      }
      localStorage.setItem("username", form.username);
      setSuccess("Registration successful! Please login.");
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      setError("User with existing username or email already exists.");
    }
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="containerr">
      <div className="boxr">
        <div className="loginr">
          <div className="loginBxr">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="formr">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <div className="password-wrapperr">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <i
                  className={`fa-solid ${
                    showPassword ? "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer", marginLeft: "8px" }}
                ></i>
              </div>
              <input type="submit" value="Register" />
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <div className="groupr">
              <Link to="/login" className="textr">
                Login
              </Link>
            </div>
            <div className="groupr">
              <button className="home-btn" onClick={handleGoHome}>
                Go to Home Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
