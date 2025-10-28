import React, { useEffect, useState } from "react";

function Tutors() {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    // Example API call
    fetch("http://localhost:5000/api/tutors")
      .then((res) => res.json())
      .then((data) => setTutors(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="tutors-page">
      <h2>Available Tutors</h2>
      <div className="tutor-list">
        {tutors.map((tutor) => (
          <div key={tutor._id} className="tutor-card">
            <h3>{tutor.name}</h3>
            <p>{tutor.subject}</p>
            <p>{tutor.experience} years experience</p>
            <button>Book Session</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tutors;
