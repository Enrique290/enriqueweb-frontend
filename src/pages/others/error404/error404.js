import React from "react";
import { Helmet } from "react-helmet";

import err404 from "../../../assets/img/others/NotFound.png";
import "./error404.css";

export default function Error404() {
  return (
    <>
      <Helmet>
        <title>PageNotFound | Enrique Castillo Corona</title>
      </Helmet>
      <div className="error404">
        <img src={err404} alt={"Error 404"} width="150px" />
        <h1>Error 404. Page Not Found</h1>
        Illustration by{" "}
        <a href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6">
          Icons 8
        </a>{" "}
        from <a href="https://icons8.com/illustrations">Ouch!</a>
      </div>
    </>
  );
}
