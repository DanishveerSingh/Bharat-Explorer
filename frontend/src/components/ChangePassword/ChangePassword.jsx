import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ChangePassword.css";

function ChangePassword() {
  const [form, setForm] = useState({
    username: "",
    oldPassword: "",
    newPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!form.username || !form.oldPassword || !form.newPassword) {
      setError("Every field is required");
      return;
    }
    try {
      const res = await fetch(
        "http://localhost:8001/api/v1/user/change-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
          credentials: "include",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Password change failed");
        return;
      }
      setSuccess("Password changed successfully! Please login again.");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError("Something went wrong.");
    }
  };

  return (
    <div className="containerc">
      <div className="boxc">
        <div className="loginc">
          <div className="loginBxc">
            <h2>Change Password</h2>
            <form onSubmit={handleSubmit} className="formc" autoComplete="off">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
              />
              <div className="password-wrapperc">
                <input
                  type={showOldPassword ? "text" : "password"}
                  name="oldPassword"
                  placeholder="Old Password"
                  value={form.oldPassword}
                  onChange={handleChange}
                />
                <i
                  className={`fa-solid ${
                    showOldPassword ? "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={() => setShowOldPassword(!showOldPassword)}
                  style={{ cursor: "pointer", marginLeft: "8px" }}
                ></i>
              </div>
              <div className="password-wrapperc">
                <input
                  type={showNewPassword ? "text" : "password"}
                  name="newPassword"
                  placeholder="New Password"
                  value={form.newPassword}
                  onChange={handleChange}
                />
                <i
                  className={`fa-solid ${
                    showNewPassword ? "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  style={{ cursor: "pointer", marginLeft: "8px" }}
                ></i>
              </div>
              <input type="submit" value="Update Password" />
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

            <div className="groupc">
              <Link to="/login" className="text">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
