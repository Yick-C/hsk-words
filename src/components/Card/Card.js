import React from "react";
import './Card.css'

const Card = ({ chinese, english }) => {
  return (
    <div className="card">
      <h2>{chinese}</h2>
      <p>{english}</p>
    </div>
  );
};

export default Card;
