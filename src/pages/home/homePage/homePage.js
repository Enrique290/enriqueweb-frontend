import React from "react";

import Banner from "../../../components/homePage/banner";
import AboutMe from "../../../components/homePage/aboutMe";
import Studies from "../../../components/homePage/studies";
import Knowledge from "../../../components/homePage/knowledge";
import CV from "../../../components/homePage/cv";
import "./homePage.css";

export default function HomePage() {
  return (
    <div className="homePage">
      <Banner />
      <AboutMe />
      <Studies />
      <Knowledge />
      <CV />
    </div>
  );
}
