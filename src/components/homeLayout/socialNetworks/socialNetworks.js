import React from "react";

import "./socialNetworks.css";

export default function SocialLinks() {
  return (
    <div className="socialLinks">
      <a
        className="btn btn-linkedin"
        role="button"
        target="_blank"
        href="https://www.linkedin.com/in/enrique-castillo-corona/"
      >
        <i className="bi bi-linkedin"></i>
      </a>
      <a
        className="btn btn-github"
        role="button"
        target="_blank"
        href="https://github.com/Enrique290"
      >
        <i className="bi bi-github"></i>
      </a>
    </div>
  );
}
