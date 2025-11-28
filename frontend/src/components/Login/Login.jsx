import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setForm({ username: "", password: "" });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!form.username || !form.password) {
      setError("Every field is required");
      return;
    }
    try {
      const res = await fetch(
        "https://bharat-explorer-ys4i.onrender.com/api/v1/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
          credentials: "include",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      } else if (res.ok) {
        localStorage.setItem("token", data.data.accessToken);
        localStorage.setItem("username", form.username);
        setForm({ username: "", password: "" });
        navigate("/quiz");
      }
    } catch (error) {
      setError("Invalid password or username.");
    }
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="containerl">
      <div className="boxl">
        <div className="loginl">
          <div className="loginBxl">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="forml" autoComplete="off">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                autoComplete="off"
              />
              <div className="password-wrapperl">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                <i
                  className={`fa-solid ${
                    showPassword ? "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer", marginLeft: "8px" }}
                ></i>
              </div>
              <input type="submit" value="Login" />
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

            <div className="groupl">
              <Link to="/register" className="textl">
                Register
              </Link>
            </div>
            <div className="groupl">
              <Link to="/change-password" className="textl">
                Change Password
              </Link>
            </div>
            <div className="groupl">
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

export default Login;
