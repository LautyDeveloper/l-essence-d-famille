import React from "react";
import stepsData from "./data";
import "./how-works.css";
import Step from "../../../../components/steps/steps";

export default function HowWorks() {
  return (
    <div id="how-works-container" className="section">
      <h3 className="title-section">¿Como Funciona?</h3>
      <div className="how-works-steps-container">
        {stepsData.map((step) => (
          <Step step={step} />
        ))}
      </div>
    </div>
  );
}
