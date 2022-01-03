import React from "react";
import { Helmet } from "react-helmet";

import SocialNetworks from "../../../components/homeLayout/socialNetworks";
import Avatar from "../../../assets/img/personal/cuphead.jpg";
import Logo from "../../../assets/img/personal/personalLogo.png";
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

            <SocialNetworks className="socialNetworks" />
          </div>
        </div>
      </div>
    </>
  );
}
