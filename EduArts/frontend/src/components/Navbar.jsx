import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>EduArts</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/signin">Signin</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
