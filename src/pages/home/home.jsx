import React from "react";
import Layout from "../../layout/layout";

export default function Home() {
  return (
    <Layout
      heroTitle={"L'Essence de Famille"}
      heroPhrase={"Cada esencia, una historia"}
      heroParragraph={
        "Descubre nuestra colección de perfumes árabes premium importados. Un proyecto familiar que une la tradición del abuelo con la pasión del nieto, ofreciendo fragancias únicas que cuentan historias milenarias."
      }
      home={true}
      btn1Text={"Ver Catalogo"}
      btn2Text={"Tubitos 35 ML"}
    ></Layout>
  );
}
