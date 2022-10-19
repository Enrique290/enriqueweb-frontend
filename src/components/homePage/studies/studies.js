/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import LaSalle from "../../../assets/img/homePage/LaSalle.png";
import "./studies.css";

export default function Studies() {
  return (
    <div className="studies container-xl">
      <h1>Studies</h1>
      <div className="studies-body">
        <div>
          <a target="_blank" href="https://lasalle.mx/">
            <img src={LaSalle} alt="La Salle Logo" />
          </a>
          <h2>Career: Cybernetic and Computer Systems Enginnering</h2>
          <h2>Semester: Ninegth</h2>
          <h2>Completion of studies: December 2022</h2>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15052.342188968541!2d-99.1813074!3d19.4087094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3108b5797f9c9ecd!2sUniversidad%20La%20Salle!5e0!3m2!1ses-419!2smx!4v1641069081572!5m2!1ses-419!2smx"
            width="450"
            height="250"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
