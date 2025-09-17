import React from "react";
import Layout from "../../layout/layout";
import "./how-to-buy.css";

export default function HowToBuy() {
  return (
    <Layout
      heroTitle={"Cómo Comprar"}
      heroPhrase={"Tu fragancia en pocos pasos"}
      heroParragraph={
        "Comprar tus perfumes favoritos es muy fácil. Sigue estos simples pasos y tendrás tu fragancia en pocos días."
      }
      home={false}
      btn1Text={null}
      btn2Text={null}
    ></Layout>
  );
}
