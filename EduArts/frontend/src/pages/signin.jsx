import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signin.css";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signin",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Login response:", res.data);

      // ✅ Save token (optional)
      localStorage.setItem("token", res.data.token);

      setMessage("✅ Login successful! Redirecting...");
      setTimeout(() => navigate("/"), 1500); // Redirect to home
    } catch (err) {
      console.error("Signin error:", err.response?.data || err.message);
      setMessage(
        "❌ " +
          (err.response?.data?.message ||
            err.response?.data?.error ||
            "Invalid email or password.")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-page">
      <div className="auth-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        {message && <p className="auth-message">{message}</p>}

        <p className="switch-link">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")}>Create one</span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
