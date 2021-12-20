import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div>
        <img className="front" src={props.card.src} alt="card front " />
        <img className="back" src="/img/cover.png" alt="card back " />
      </div>
    </div>
  );
}

export default Card;
