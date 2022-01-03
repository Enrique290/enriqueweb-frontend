import React from "react";

import Avatar from "../../../assets/img/personal/cuphead.jpg";
import "./banner.css";

export default function Banner() {
  return (
    <div className="mainBanner">
      <div className="dark-cover" />
      <div className="container-xl">
        <img src={Avatar} alt="Avatar" />
        <div className="text-container">
          <h1>Enrique Castillo Corona</h1>
          <h2>Cybernetic and computer systems enginnering student</h2>
        </div>
      </div>
    </div>
  );
}
