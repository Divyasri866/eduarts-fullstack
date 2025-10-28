import React from "react";

function CategoryCard({ title, desc }) {
  return (
    <div className="category-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <button>Explore</button>
    </div>
  );
}

export default CategoryCard;
