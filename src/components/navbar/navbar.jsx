import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="header-logo">
        <img src="" alt="" />
        <h1>L'Essence de Famille</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/catalogue">Catalogo</Link>
          </li>

          <li>
            <Link to="/tubitos">Tubitos 35 ML</Link>
          </li>

          <li>
            <Link to="/how-to-buy">Como Comprar</Link>
          </li>

          <li>
            <Link to="/about-us">Nosotros</Link>
          </li>

          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
      <button className="header-button">WhatsApp</button>
    </header>
  );
}
