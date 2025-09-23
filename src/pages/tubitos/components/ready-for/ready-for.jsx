import React from "react";
import "./ready-for.css";
import Buttons from "../../../../components/buttons/buttons.jsx";

export default function ReadyFor() {
  return (
    <div id="ready-for-container" className="section">
      <div className="ready-for-text">
        <h3 className="title-section">
          ¿Listo para probar tu próxima fragancia favorita?
        </h3>
        <p>
          Contáctanos por WhatsApp y cuéntanos qué perfume te gustaría probar en
          formato tubito. Te ayudamos a encontrar tu fragancia perfecta.
        </p>
      </div>
      <Buttons
        btn1Text={"Explorar Catalogo"}
        btn2Text={"Contactar por WhatsApp"}
      />
    </div>
  );
}
