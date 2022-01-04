import React from "react";

import cards from "./cardsData";
import "./knowledge.css";

export default function Knowledge() {
  return (
    <div className="knowledge container-xl">
      <h1>Knowledge</h1>
      <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6">
        <Card />
      </div>
    </div>
  );
}

function Card() {
  return (
    <>
      {cards.map((card, index) => (
        <div className="col" key={index}>
          <div className="card h-100">
            <img className="card-img-top" src={card.cover} alt="img" />
            <div className="card-body">
              <h4 className="card-title">{card.title}</h4>
              <div className="card-text">
                <h5>Level:</h5>
                <h5>{card.level}</h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
