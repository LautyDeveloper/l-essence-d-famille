import React from "react";
import "./lets-go.css";
import "../../../../components/buttons/buttons.jsx";
import Buttons from "../../../../components/buttons/buttons.jsx";
export default function LetsGo() {
  return (
    <div id="lets-go-container" className="section">
      <div className="lets-go-text">
        <h3 className="title-section">Comienza tu Viaje Aromatico.</h3>
        <p>
          Explora nuestra colección de perfumes árabes premium y descubre la
          fragancia que cuenta tu historia.
        </p>
      </div>
      <Buttons
        btn1Text={"Explorar Catalogo"}
        btn2Text={"Contactar por WhatsApp"}
      />
    </div>
  );
}
