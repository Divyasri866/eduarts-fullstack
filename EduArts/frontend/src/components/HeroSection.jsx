import React from "react";
import banner from "../assets/banner.jpg";

function HeroSection() {
  return (
    <section className="hero">
      <img src={banner} alt="EduArts Banner" className="hero-img" />
      <div className="hero-content">
        <h1>Welcome to EduArts</h1>
        <p>Where Education Meets Creativity — Learn, Create, and Grow with the best tutors.</p>
        <a href="/categories" className="hero-btn">Start Learning</a>
      </div>
    </section>
  );
}

export default HeroSection;
