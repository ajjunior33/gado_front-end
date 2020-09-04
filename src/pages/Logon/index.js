import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

import logoBig from "../../assets/LogoBig.svg";
import logoLong from '../../assets/LogoLong.svg';

function Logon() {
  return (
    <div className="context-container">
      <div className="context-login">
        <img src={logoBig} alt="logoBig" />
        <form action="">
            <h2 style={{textAlign:'center', marginBottom:30}}>Acesse sua conta</h2>
          <div className="form-group">
            <label htmlFor=""></label>
            <input
              type="email"
              placeholder="seumelhoremail@exemplo.com"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input
              type="password"
              placeholder="*************"
              className="form-control"
            />
          </div>

          <button className="btn btn-success btn-block" type="submit">
            Acessar minha conta
          </button>
        </form>
        <footer>
          <Link to="/forgout_password" className="text-center btn-link">
            Esqueci minha senha
          </Link>
        </footer>
      </div>
      <div className="filter">
          <header>
              <img src={logoLong} alt="logoLong"/>
          </header>

          <section>
              <h1>
                  SEU CONTROLE EM OUTRO NÍVEL
              </h1>
          </section>
          <footer>

              <ul>
                  <li>Página Inicial</li>
                  <li>Artigo</li>
                  <li>Blog </li>
              </ul>
          </footer>
      </div>

    </div>
  );
}

export default Logon;
