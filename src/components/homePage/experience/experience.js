import React from "react";

import laSalle from "../../../assets/img/homePage/LaSalle.png";
import mnjCapital from "../../../assets/img/homePage/experience/mnjCapitalLogo.png";
import "./experience.css";

export default function experience() {
  return (
    <div className="experience container-xl">
      <h1>Experience</h1>
      <div className="experience-card">
        <h2>MNJ CAPITAL - IT area Auxiliar</h2>
        <h4>APRIL 2022 - Actuallity</h4>
        <div className="card-exp-content">
          <a href="https://mnjcapital.com.mx/" target="_blank">
            <img src={mnjCapital} alt="img" />
          </a>
          <div className="card-text">
            <label>
              <i class="bi bi-caret-right-fill"> </i>
              Processes documentation.
            </label>
            <br />
            <label>
              <i class="bi bi-caret-right-fill"> </i>
              Data depuration (Excel)
            </label>
            <br />
            <label>
              <i class="bi bi-caret-right-fill"> </i>
              Develop of Phishing Campaign with Proofpoint
            </label>
            <br />
            <label>
              <i class="bi bi-caret-right-fill"> </i>
              AWS (IAM, VPC, EC2)
            </label>
            <br />
            <label>
              <i class="bi bi-caret-right-fill"> </i>
              Diagrams (SQL, Network)
            </label>
            <br />
            <label>
              <i class="bi bi-caret-right-fill"> </i>
              MySQL, macOS, NetSuite (ORACLE), technical support, work with
              other areas
            </label>
          </div>
        </div>
      </div>

      <br />

      <div className="experience-card">
        <h2>Laboratorio de Cómputo de Ingeníeria La Salle - WEB Programmer</h2>
        <h4>AUGUST 2021 - FEBRUARY 2022</h4>
        <div className="card-exp-content">
          <a href="https://ingenieria.lasalle.mx/" target="_blank">
            <img src={laSalle} alt="img" />
          </a>
          <div className="card-text">
            <label>
              <i class="bi bi-caret-right-fill"> </i>
              Develop of web repository for ingineering community for
              Universidad La Salle México
            </label>
            <br />
            <label>
              <i class="bi bi-caret-right-fill"> </i>
              Propose database structure
            </label>
            <br />
            <label>
              <i class="bi bi-caret-right-fill"> </i>
              Develop of user interface
            </label>
            <br />
            <label>
              <i class="bi bi-caret-right-fill"> </i>
              Communication between user interface and database
            </label>
            <br />
            <label>
              <i class="bi bi-caret-right-fill"> </i>
              Develop with PHP, JavaScript, PostgreSQL, MySQL, HTML, BOOTSTRAP,
              XAMP, FileZilla
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
