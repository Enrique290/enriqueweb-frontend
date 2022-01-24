import React from "react";
import { Helmet } from "react-helmet";

import groups from "./certificatesData";
import "./certificates.css";

export default function Certificates() {
  return (
    <>
      <Helmet>
        <title>Certificates | Enrique Castillo Corona</title>
      </Helmet>
      <div className="certificates container-xl">
        <h1>Certificates</h1>
        <GroupCertificates />
      </div>
    </>
  );
}

function GroupCertificates() {
  return (
    <>
      {groups.map((group, index) => (
        <div key={index} className="group-container">
          <img src={group.logo} alt="img" />
          <ul>
            {group.certificates.map((certificate, index) => (
              <div key={index} className="certificate-item">
                <a
                  className="btn"
                  type="button"
                  href={certificate.pdf}
                  target="_blank"
                >
                  <i className="bi bi-download" />
                </a>
                <h2>{certificate.title}</h2>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
