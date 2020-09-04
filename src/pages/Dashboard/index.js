import React from "react";

import { Link } from "react-router-dom";

import profile from "../../assets/male.jpeg";
import longLogo from "../../assets/LogoLong.svg";

import './style.css';

function Dashboard() {
  return (
    <div className="container">
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
              <li>Página Inicial</li>
            </Link>
            <Link>
              <li>Gado</li>
            </Link>

            <Link>
              <li>Relatorios</li>
            </Link>
          </ul>
        </nav>
        <footer>
          <button className="menubutton">Sair</button>

          <img src={longLogo} alt="logoLong" />
        </footer>
      </div>
    </div>
  );
}

export default Dashboard;
