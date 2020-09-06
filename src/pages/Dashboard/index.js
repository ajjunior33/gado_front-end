import React from "react";

import "./style.css";

import NavBar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Dashboard() {
  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <Header />
        <section>
          <div className="row">
            <div className="col-box">
              <span className="icon"></span>
              <span className="name">Gado Fêmea</span>
              <span className="value">32</span>
            </div>
            <div className="col-box">
              <span className="icon"></span>
              <span className="name">Gado Fêmea</span>
              <span className="value">32</span>
            </div>
            <div className="col-box">
              <span className="icon"></span>
              <span className="name">Gado Fêmea</span>
              <span className="value">32</span>
            </div>
          </div>

          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Status</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>
                  <div className="status st-success">Nascido</div>
                </td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>
                  <div className="status st-warning">Pendente</div>
                </td>
                <td>Mexico</td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>
                  <div className="status st-danger">Morto</div>
                </td>
                <td>Austria</td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>
                  <div className="status st-primary">Aguardando Teste</div>
                </td>
                <td>UK</td>
              </tr>
              <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>
                  <div className="status st-success">Nascido</div>
                </td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>
                  <div className="status st-success">Nascido</div>
                </td>
                <td>Italy</td>
              </tr>
            </table>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
