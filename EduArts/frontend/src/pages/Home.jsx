import React from "react";
import "../styles.css"; // Global CSS
import { Link } from "react-router-dom";

function Home() {
  const categories = [
    {
      title: "Tuition",
      desc: "Home & online tuitions for students up to 12th grade. Tutor and Student sections included.",
      img: "https://media.istockphoto.com/id/182352776/photo/home-schooling.jpg?s=612x612&w=0&k=20&c=F7vYom5O_rhQNn4S923qv5Uwy9P4ja6tFP1oWe4FOrw=",
    },
    {
      title: "Arts",
      desc: "Music, Dance, Drawing, Photography, and more. Mentor and Student sections available.",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    },
    {
      title: "Programming & Coding",
      desc: "Web design, coding, robotics, and tech learning. Tutors and Students sections included.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
  ];

  return (
    <div className="home">
      {/* ✅ Hero Section */}
      <section className="hero">
        <img
          src="https://images.pexels.com/photos/8055795/pexels-photo-8055795.jpeg"
          alt="Learning Hero"
          className="hero-img"
        />
        <div className="hero-content">
          <h2>Welcome to EduArts 📚</h2>
          <p>Learn, Create, and Grow with the best Tutors and Mentors!</p>
          {/* ✅ Use Link instead of <a> for React navigation */}
          <Link to="/signup" className="hero-btn">
            Join Now
          </Link>
        </div>
      </section>

      {/* ✅ About Section */}
      <section className="about" id="about">
        <h2>About EduArts</h2>
        <p>
          EduArts is a comprehensive online learning platform designed 
          to empower students and nurture creativity. Whether you are a student seeking 
          quality guidance or a mentor looking to share your expertise, EduArts bridges the
          gap between learners and educators in one interactive space.
        </p>
      </section>

      {/* ✅ Categories Section */}
      <section className="categories" id="categories">
        <h2>Explore Our Learning Categories</h2>
        <div className="category-container">
          {categories.map((cat, index) => (
            <div className="category-card" key={index}>
              <img src={cat.img} alt={cat.title} />
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
              <Link to="/explore" className="explore-btn">
                Explore
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Info Section */}
      <section className="eduarts-info">
        <div className="info-container">
          <h2>Why Choose EduArts?</h2>
          <p>
            EduArts is not just another learning platform — it’s a creative community where knowledge meets imagination. 
            We believe learning becomes more impactful when combined with art, creativity, and practical experience. 
            Our platform bridges the gap between traditional education and artistic exploration.
          </p>

          <div className="info-grid">
            <div className="info-card">
              <h3>Interactive Learning</h3>
              <p>
                Learn through hands-on activities, creative workshops, and art-based exercises that enhance understanding 
                and memory retention.
              </p>
            </div>
            <div className="info-card">
              <h3>Expert Tutors</h3>
              <p>
                Our educators and artists are professionals who bring real-world experience and personalized guidance 
                to every student.
              </p>
            </div>
            <div className="info-card">
              <h3>Personalized Paths</h3>
              <p>
                Every learner is unique — EduArts adapts to your interests, progress, and pace through a tailored 
                learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
