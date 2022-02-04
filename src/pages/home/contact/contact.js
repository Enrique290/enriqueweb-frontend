import React from "react";
import { Helmet } from "react-helmet";

import Avatar from "../../../assets/img/personal/profilePhoto.png";
import Logo from "../../../assets/img/personal/personalLogo.png";
import QR from "../../../assets/img/personal/QR.png";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Enrique Castillo Corona</title>
      </Helmet>
      <h1 className="contact-title">Contact</h1>
      <div className="contact">
        <div className="presentation-card">
          <img src={Avatar} alt="Avatar" className="Avatar-img" />

          <div className="body-text">
            <img src={Logo} alt="logo" className="Logo-img" />

            <h1>Enrique Castillo Corona</h1>

            <h3>Cybernetic and computer systems enginnering student</h3>

            <label>
              <i className="bi bi-envelope-fill"> </i>
              enriquecastillocorona@gmail.com
            </label>

            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/enrique-castillo-corona/"
                target="_blank"
              >
                <label>
                  <i className="bi bi-linkedin"> </i>
                  /enrique-castillo-corona
                </label>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="qr container-xl">
        <h1>Web QR</h1>
        <img src={QR} alt="La Salle Logo" />
      </div>
    </>
  );
}
