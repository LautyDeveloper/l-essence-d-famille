import React from "react";
import whyData from "./data.js";
import Card from "../../../../components/cards/card.jsx";
import "./why-choose.css";

export default function WhyChoose() {
  return (
    <div id="why-choose-container">
      <h2>¿Por qué elegir el formato Tubitos?</h2>
      <div className="why-choose-cards-container">
        {whyData.map((data) => {
          return (
            <Card
              title={data.title}
              description={data.description}
              isBigCard={false}
            />
          );
        })}
      </div>
    </div>
  );
}
