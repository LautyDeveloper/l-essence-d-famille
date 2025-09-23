import React from "react";
import Layout from "../../layout/layout";
import "./tubitos.css";
import WhyChoose from "./components/why-choose/why-choose";
import HowWorks from "./components/how-works/how-works";
import ReadyFor from "./components/ready-for/ready-for";

export default function Tubitos() {
  return (
    <Layout
      heroTitle={"Tubitos 35ml"}
      heroPhrase={"El formato perfecto para probar y llevar"}
      heroParragraph={
        "Nuestros tubitos de 35ml son la opción ideal para quienes desean probar una fragancia antes de comprometerse con un tamaño completo, o para llevar su perfume favorito siempre contigo."
      }
      home={false}
      btn1Text={null}
      btn2Text={null}
    >
      <WhyChoose />
      <HowWorks />
      <ReadyFor />
    </Layout>
  );
}
