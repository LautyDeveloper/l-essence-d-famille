import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
