import React from "react";

import { Link } from "react-router-dom";

import "./style.css";

import arrowRight from "../../assets/arrow-right.svg";
import profile from "../../assets/male.jpeg";
import longLogo from "../../assets/LogoLong.svg";
import Logout from "../../assets/log-in-outline.svg";

function Navbar() {
  return (
    <div className="navbar">
      <header>
        <img src={profile} alt="profile" className="profile-image-navbar" />

        <div>
          <h2>André Souza</h2>
          <h4>Programador Junior</h4>
        </div>
      </header>
      <nav>
        <ul>
          <Link>
            <li>
              Página Inicial
              <img src={arrowRight} alt="arrow" />
            </li>
          </Link>
          <Link>
            <li>
              Gado
              <img src={arrowRight} alt="arrow" />
            </li>
          </Link>

          <Link>
            <li>
              Relatorios
              <img src={arrowRight} alt="arrow" />
            </li>
          </Link>
        </ul>
      </nav>
      <footer>
        <button className="menubutton">
          Sair
          <img src={Logout} alt="logout" />
        </button>
        <div className="footer_logo">
          <img src={longLogo} alt="logoLong" />
        </div>
      </footer>
    </div>
  );
}

export default Navbar;
