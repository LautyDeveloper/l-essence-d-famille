import React from "react";
import Layout from "../../layout/layout";
import "./contact.css";

export default function Contact() {
  return (
    <Layout
      heroTitle={"Contacto"}
      heroPhrase={"Estamos aquí para ayudarte"}
      heroParragraph={
        "Estamos aquí para ayudarte a encontrar tu fragancia perfecta. Contáctanos por cualquiera de nuestros canales y te responderemos lo antes posible."
      }
      home={false}
      btn1Text={null}
      btn2Text={null}
    ></Layout>
  );
}
