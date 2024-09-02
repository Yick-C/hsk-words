import React from "react";
import Card from "../Card/Card";
import "./WordList.css";

const WordList = ({ words }) => {
  return (
    <div className="cards">
      {words.map((word) => (
        <Card chinese={word.chinese} english={word.english} />
      ))}
    </div>
  );
};

export default WordList;
