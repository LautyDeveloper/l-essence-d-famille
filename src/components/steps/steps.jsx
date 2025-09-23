import React from "react";
import "./steps.css";

export default function Step({ step }) {
  return (
    <div className="step-card">
      <div className="step-number">{step.step}</div>
      <div className="step-text">
        <h4 className="step-title">{step.title}</h4>
        <p className="step-description">{step.description}</p>
      </div>
    </div>
  );
}
