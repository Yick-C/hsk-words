import React from "react";
import Card from "../Card/Card";
import "./WordList.css";

const WordList = ({ words }) => {
  return (
    <div className="cards">
      {words.map((word) => (
        <Card chinese={word.chinese} pinyin={word.pinyin} english={word.english} />
      ))}
    </div>
  );
};

export default WordList;
