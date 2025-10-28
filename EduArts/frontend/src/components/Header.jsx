import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">📚 EduArts</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/profile.jsx">Profile</Link>
      </nav>
    </header>
  );
}

export default Header;
