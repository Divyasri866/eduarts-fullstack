import React, { useState } from "react";
import "../styles.css";
import "./Explore.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Explore() {
  const categories = [
    {
      name: "Tuition",
      description: "Find tutors and students for home/online tuition.",
      img: "https://media.istockphoto.com/id/182352776/photo/home-schooling.jpg?s=612x612&w=0&k=20&c=F7vYom5O_rhQNn4S923qv5Uwy9P4ja6tFP1oWe4FOrw=",
    },
    {
      name: "Arts",
      description: "Music, Dance, Drawing, and Photography.",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    },
    {
      name: "Programming & Coding",
      description: "Web design, coding, robotics, and tech learning.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
  ];

  const visakhapatnamPlaces = [
    "Kurmanapalem",
    "Duvvada",
    "NAD",
    "Madhurawada",
    "Gajuwaka",
    "Pendurthi",
  ];
  const srikakulamPlaces = [
    "Ranasthalam",
    "Pydibhimavaram",
    "Tekkali",
    "Amadalavalasa",
    "Srikakulam Town",
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({});
  const [showFindButton, setShowFindButton] = useState(false);
  const [showSearchSection, setShowSearchSection] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Mock dataset
  const mockData = [
    { name: "Ananya", role: "Tutor", category: "Tuition", city: "Visakhapatnam", place: "Kurmanapalem", contact: "9876543210", coordinates: [17.678, 83.21] },
    { name: "Rohit", role: "Student", category: "Tuition", city: "Visakhapatnam", place: "Duvvada", contact: "9123456780", coordinates: [17.685, 83.15] },
    { name: "Meena", role: "Tutor", category: "Arts", city: "Visakhapatnam", place: "Madhurawada", contact: "9988776655", coordinates: [17.785, 83.33] },
    { name: "Charan", role: "Student", category: "Programming & Coding", city: "Srikakulam", place: "Ranasthalam", contact: "9012345678", coordinates: [18.26, 83.89] },
    { name: "Kavya", role: "Tutor", category: "Programming & Coding", city: "Srikakulam", place: "Pydibhimavaram", contact: "9945678123", coordinates: [18.32, 83.85] },
    { name: "Surya", role: "Student", category: "Arts", city: "Visakhapatnam", place: "Gajuwaka", contact: "9394567810", coordinates: [17.68, 83.15] },
  ];

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setRole("");
    setFormData({});
    setShowFindButton(false);
    setShowSearchSection(false);
    setSearchResults([]);
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setFormData({});
    setShowFindButton(false);
    setShowSearchSection(false);
    setSearchResults([]);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`${role} form submitted successfully!`);
    setShowFindButton(true);
  };

  // Show search section after clicking find button
  const handleFindOppositeRole = () => {
    setShowSearchSection(true);
  };

  const handleSearch = () => {
    if (!selectedCity || !selectedPlace) {
      alert("Please select both city and place.");
      return;
    }
    const results = mockData.filter(
      (d) =>
        d.city === selectedCity &&
        d.place === selectedPlace &&
        d.role !== role &&
        d.category === selectedCategory
    );
    if (results.length === 0) {
      alert("No matching results found!");
    }
    setSearchResults(results);
  };

  return (
    <div className="explore-page">
      <h1 className="page-title">Explore Categories</h1>

      {/* Categories Section */}
      <div className="category-grid">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`category-card ${selectedCategory === cat.name ? "active" : ""}`}
            onClick={() => handleCategorySelect(cat.name)}
          >
            <img src={cat.img} alt={cat.name} className="category-img" />
            <h3>{cat.name}</h3>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>

      {/* Role Selection */}
      {selectedCategory && (
        <div className="role-selection">
          <h2>
            Are you a Student or Tutor for <span>{selectedCategory}</span>?
          </h2>
          <button
            className={role === "Student" ? "active" : ""}
            onClick={() => handleRoleSelect("Student")}
          >
            Student
          </button>
          <button
            className={role === "Tutor" ? "active" : ""}
            onClick={() => handleRoleSelect("Tutor")}
          >
            Tutor
          </button>
        </div>
      )}

      {/* Role Form */}
      {role && (
        <div className="role-form-container">
          <h2>{role} Form - {selectedCategory}</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-section">
              <h3>Personal Info</h3>
              <input type="text" name="name" placeholder="Full Name" value={formData.name || ""} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email || ""} onChange={handleChange} required />
              <input type="text" name="contact" placeholder="Phone Number" value={formData.contact || ""} onChange={handleChange} required />
              <select name="city" value={formData.city || ""} onChange={handleChange} required>
                <option value="">Select City</option>
                <option value="Visakhapatnam">Visakhapatnam</option>
                <option value="Srikakulam">Srikakulam</option>
              </select>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>

          {/* Find Tutors/Students Button */}
          {showFindButton && (
            <div className="find-container">
              <button className="submit-btn" onClick={handleFindOppositeRole}>
                {role === "Student" ? "Find Tutors" : "Find Students"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Search Section */}
      {showSearchSection && (
        <div className="search-section">
          <h2>Search Nearby {role === "Student" ? "Tutors" : "Students"}</h2>
          <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
            <option value="">Select City</option>
            <option value="Visakhapatnam">Visakhapatnam</option>
            <option value="Srikakulam">Srikakulam</option>
          </select>

          {selectedCity && (
            <select value={selectedPlace} onChange={(e) => setSelectedPlace(e.target.value)}>
              <option value="">Select Place</option>
              {(selectedCity === "Visakhapatnam" ? visakhapatnamPlaces : srikakulamPlaces).map((p, i) => (
                <option key={i} value={p}>{p}</option>
              ))}
            </select>
          )}
          <button className="submit-btn" onClick={handleSearch}>Search</button>
        </div>
      )}

      {/* Results */}
      {searchResults.length > 0 && (
        <>
          <div className="search-results">
            <h2>{role === "Student" ? "Available Tutors" : "Available Students"} in {selectedPlace}</h2>
            {searchResults.map((res, i) => (
              <div key={i} className="search-card">
                <h3>{res.name}</h3>
                <p>Category: {res.category}</p>
                <p>Location: {res.place}, {res.city}</p>
                <p>Phone: <a href={`tel:${res.contact}`}>{res.contact}</a></p>
              </div>
            ))}
          </div>

          <div className="map-container">
            <h2>View on Map</h2>
            <MapContainer 
              center={searchResults[0].coordinates || [17.6868, 83.2185]} 
              zoom={11} 
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {searchResults.map((res, i) => (
                res.coordinates && (
                  <Marker key={i} position={res.coordinates}>
                    <Popup>
                      <strong>{res.name}</strong> <br />
                      {res.role} - {res.category} <br />
                      Contact: {res.contact}
                    </Popup>
                  </Marker>
                )
              ))}
            </MapContainer>
          </div>
        </>
      )}
    </div>
  );
}

export default Explore;
