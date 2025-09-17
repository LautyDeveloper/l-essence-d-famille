import React from "react";
import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import Hero from "../components/hero/hero.jsx";

export default function Layout({
  children,
  heroTitle,
  heroPhrase,
  heroParragraph,
  home,
  btn1Text,
  btn2Text,
}) {
  return (
    <div className="layout">
      <Navbar />
      <Hero
        title={heroTitle}
        phrase={heroPhrase}
        parragraph={heroParragraph}
        home={home}
        btn1Text={btn1Text}
        btn2Text={btn2Text}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
