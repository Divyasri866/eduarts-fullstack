import React, { useState } from "react";
import "../pages/profile.css";

function Profile() {
  const [user, setUser] = useState({
    name: "Divyeshri",
    email: "divyeshri@example.com",
    category: "Student",
    location: "Hyderabad, India",
    phone: "+91 98765 43210",
    bio: "Passionate about art, creativity, and learning new technologies.",
    profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />

        {isEditing ? (
          <div className="profile-edit">
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="input-field"
            />
            <input
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input-field"
            />
            <select
              name="category"
              value={editedUser.category}
              onChange={handleChange}
              className="input-field"
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Artist">Artist</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
            </select>
            <input
              type="text"
              name="location"
              value={editedUser.location}
              onChange={handleChange}
              placeholder="Enter location"
              className="input-field"
            />
            <input
              type="text"
              name="phone"
              value={editedUser.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="input-field"
            />
            <textarea
              name="bio"
              value={editedUser.bio}
              onChange={handleChange}
              placeholder="Write something about yourself..."
              className="textarea-field"
            ></textarea>

            <div className="button-group">
              <button onClick={handleSave} className="save-btn">
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p><strong>Category:</strong> {user.category}</p>
            <p><strong>Location:</strong> {user.location}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p className="bio">{user.bio}</p>
            <button onClick={() => setIsEditing(true)} className="edit-btn">
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
