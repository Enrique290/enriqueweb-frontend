import React from "react";

import CurriculumPDF from "../../../assets/pdf/homePage/cuirriculumECC.pdf";
import "./cv.css";

export default function CV() {
  return (
    <div className="cv container-xl">
      <h1>Curriculum Vitae PDF</h1>
      <a href={CurriculumPDF} download="EnriqueCastilloCorona-CV.pdf">
        <button type="button" className="btn">
          <i className="bi bi-download"> </i>
          Download
        </button>
      </a>
    </div>
  );
}
