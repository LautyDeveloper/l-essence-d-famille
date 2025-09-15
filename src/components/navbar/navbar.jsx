import React from "react";
import "./navbar.css";

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
            <a href="">Inicio</a>
          </li>

          <li>
            <a href="">Catalogo</a>
          </li>

          <li>
            <a href="">Tubitos 35ML</a>
          </li>

          <li>
            <a href="">Como Comprar</a>
          </li>

          <li>
            <a href="">Nosotros</a>
          </li>

          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
      </nav>
      <button className="header-button">WhatsApp</button>
    </header>
  );
}
