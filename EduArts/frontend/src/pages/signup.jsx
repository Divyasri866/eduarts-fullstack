import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    // basic client-side trim/validation
    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();
    const password = formData.password;

    if (!name || !email || !password) {
      setMessage("❌ Please fill all fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        { name, email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      // If backend returns a token, save it; otherwise just show success
      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
      }

      setMessage(res.data?.message || "✅ Signup successful! Redirecting to Signin...");
      console.log("User registered:", res.data);

      setTimeout(() => navigate("/signin"), 1200);
    } catch (err) {
      // show server message if available (very helpful)
      const serverMsg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        (typeof err.response?.data === "object" ? JSON.stringify(err.response?.data) : null) ||
        err.message ||
        "Signup failed. Please try again.";
      setMessage("❌ " + serverMsg);
      console.error("Signup error (full):", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="auth-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
            minLength={6}
          />
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        {message && <p className="auth-message">{message}</p>}

        <p className="switch-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/signin")} style={{ cursor: "pointer", color: "#007bff" }}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
