import React from "react";
import "./why-choose.css";
import Card from "../../../../components/cards/card.jsx";
import CardsData from "./cards-data.js";

export default function WhyChoose() {
  return (
    <div id="family-history-container">
      <h2>¿Por qué elegir L'Essence de Famille?</h2>
      <div className="family-history-cards-container">
        {CardsData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            icon={<i className={`fas fa-${card.icon} card-icon`}></i>}
          />
        ))}
      </div>
    </div>
  );
}
