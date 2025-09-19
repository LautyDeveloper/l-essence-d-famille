import React from "react";
import "./card.css";

export default function Card({ title, description, icon }) {
  return (
    <div className="card">
      <div className="card-icon-container">{icon}</div>
      <div className="card-text-container">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
