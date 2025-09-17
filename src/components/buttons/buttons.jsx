import React from "react";
import "./buttons.css";

export default function Buttons({ btn1Text, btn2Text }) {
  return (
    <div className="buttons-container">
      <button className="btn btn-primary">{btn1Text}</button>
      <button className="btn btn-secondary">{btn2Text}</button>
    </div>
  );
}
