import React from "react";
import "./family-history.css";
import Card from "../../../../components/cards/card.jsx";
export default function FamilyHistory() {
  return (
    <div id="family-history" className="section">
      <div className="family-history-info">
        <h2 className="title-section">Una Historia de Familia</h2>
        <div className="info-parragraphs">
          <p>
            L'Essence de Famille nace de la unión entre generaciones. Santiago,
            el abuelo con décadas de experiencia en el mundo de las fragancias,
            y Lautaro, su nieto, quien aporta la energía y visión moderna.
          </p>
          <p>
            Juntos seleccionamos cuidadosamente cada perfume árabe, garantizando
            la más alta calidad y autenticidad. Cada fragancia que ofrecemos ha
            sido elegida con amor y dedicación, pensando en crear momentos
            únicos para nuestros clientes.
          </p>
        </div>
        <a href="" className="accent-color">
          Conoce Nuestra Historia
        </a>
      </div>
      <div className="family-history-card">
        <Card
          title={"Tradición y Calidad"}
          description={"Más de 30 años de experiencia en fragancias premium"}
          isBigCard={true}
        />
      </div>
    </div>
  );
}
