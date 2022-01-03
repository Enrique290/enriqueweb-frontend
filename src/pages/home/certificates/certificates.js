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
        <div key={index}>
          <img src={group.logo} alt="img" />
          <ul>
            {group.certificates.map((certificate, index) => (
              <div key={index} className="certificate-item">
                <a href={certificate.pdf} download={certificate.title}>
                  <button type="button" className="btn">
                    <i className="bi bi-download" />
                  </button>
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
