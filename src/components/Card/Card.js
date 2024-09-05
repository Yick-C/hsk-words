import React from "react";
import './Card.css'

const Card = ({ chinese, pinyin, english }) => {
  return (
    <div className="card">
      <h2>{chinese}</h2>
      <p>{pinyin}</p>
      <p>{english}</p>
    </div>
  );
};

export default Card;
