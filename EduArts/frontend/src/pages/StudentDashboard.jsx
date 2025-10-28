import React from "react";

function StudentDashboard() {
  return (
    <div className="dashboard">
      <h2>Student Dashboard</h2>
      <p>Welcome back! Here’s your learning summary.</p>
      <ul>
        <li>Upcoming sessions: 2</li>
        <li>Completed sessions: 5</li>
        <li>Recommended tutors: 3</li>
      </ul>
    </div>
  );
}

export default StudentDashboard;
