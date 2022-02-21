import React from "react";

import Logo from "../../../assets/img/personal/personalLogo.png";
import SocialNetworks from "../socialNetworks";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container-xl">
        <div className="row row-cols-md-3">
          <div className="col">
            <img src={Logo} alt="EnriqueCC_Logo" className="navbar-brand" />
            <label>
              Young university student in search of new opportunities to grow
              and improve as professional and person.
            </label>
            <label className="personal">
              PERSONAL WEB | ENRIQUE CASTILLO CORONA
            </label>
          </div>
          <div className="col">
            <h6>Pages</h6>
            <ul className="list-group list-group-flush">
              <a className="list-group-item" href="/">
                <i className="bi bi-house-fill"> </i>
                Home
              </a>
              <a className="list-group-item" href="/contact">
                <i className="bi bi-person-circle"> </i>
                Contact
              </a>
              <a className="list-group-item" href="/certificates">
                <i className="bi bi-award"> </i>
                Certificates
              </a>
            </ul>
          </div>
          <div className="col">
            <h6>Contact</h6>
            <label>
              <i className="bi bi-envelope-fill"> </i>
              enriquecastillocorona@gmail.com
            </label>
            <div className="socialNetwork d-flex">
              <SocialNetworks />
              <div className="d-flex auto"></div>
            </div>
            <label>© 2022 ALL RIGHTS RESERVED​</label>
          </div>
        </div>
      </div>
    </div>
  );
}
