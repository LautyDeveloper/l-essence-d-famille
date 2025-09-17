import React from "react";
import Layout from "../../layout/layout";
import "./about-us.css";

export default function AboutUs() {
  return (
    <Layout
      heroTitle={"Nuestra Historia"}
      heroPhrase={"Un proyecto que une generaciones"}
      heroParragraph={
        "L'Essence de Famille nace del amor compartido por las fragancias entre un abuelo experimentado y su nieto emprendedor, creando un puente entre la tradición y la innovación."
      }
      home={false}
      btn1Text={null}
      btn2Text={null}
    ></Layout>
  );
}
