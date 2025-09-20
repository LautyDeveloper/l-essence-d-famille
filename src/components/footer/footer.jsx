import React from "react";
import "./footer.css";
import {
  WhatsAppButton,
  InstagramButton,
} from "../../components/social-buttons/social-buttons.jsx";
export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-presentation">
          <div className="presentation-logo">
            <span className="logo">LS</span>
            <span>L'Essence de Famille</span>
          </div>
          <div className="presentation-text">
            <span className="accent-color slogan">
              Cada esencia, Una Historia.
            </span>
            <p>
              Perfumes árabes premium importados con amor y dedicación familiar.
            </p>
          </div>
        </div>
        <div className="footer-navigation">
          <span className="accent-color">Navegacion</span>
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
        </div>
        <div className="footer-contact">
          <div className="contact-social">
            <span className="accent-color">Contacto</span>
            <div className="social-buttons">
              <WhatsAppButton />
              <InstagramButton />
            </div>
          </div>
          <div className="contact-bussines">
            <span className="accent-color">Horario de Atencion</span>
            <div className="bussines-hours">
              <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              <p>Sabados: 10:00 AM - 4:00 PM</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <span>© 2024 L'Essence de Famille. Todos los derechos reservados.</span>
        <span>Hecho con ❤️ por Santiago y Lautaro</span>
      </div>
    </footer>
  );
}
