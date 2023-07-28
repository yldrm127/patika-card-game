import React from "react";
import { useSelector } from "react-redux";
function Score() {
  const scoreSelector = useSelector((state) => state.card.score);
  return <span className="score">Score:{scoreSelector}</span>;
}

export default Score;
