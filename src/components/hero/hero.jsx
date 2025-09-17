import React from "react";
import "./hero.css";
import Buttons from "../buttons/buttons.jsx";
export default function Hero({
  title,
  phrase,
  parragraph,
  home,
  btn1Text,
  btn2Text,
}) {
  return (
    <div className="hero-container">
      <span className="hero-logo">LS</span>
      <div className="hero-text">
        <h1>{title}</h1>
        <span className="accent-color">{phrase}</span>
        <p>{parragraph}</p>
        {home ? <Buttons btn1Text={btn1Text} btn2Text={btn2Text} /> : null}
      </div>
    </div>
  );
}
