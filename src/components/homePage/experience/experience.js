import React from "react";

import laSalle from "../../../assets/img/homePage/LaSalle.png";
import "./experience.css";

export default function experience() {
  return (
    <div className="experience container-xl">
      <h1>Experience</h1>
      <div className="experience-card">
        <h2>Laboratorio de Cómputo de Ingeníeria La Salle - WEB Programmer</h2>
        <h4>AUGUST 2021 - JANUARY 2022</h4>
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
