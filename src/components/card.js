import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxQuestionMark } from "react-icons/rx";
import { cardMatchs, cardAdd } from "../redux/cardSlice";
function card({ item }) {
  const matchDispatch = useDispatch();
  const cardAddDispatch = useDispatch();
  const countSelector = useSelector((state) => state.card.counter);
  const cardSelector = useSelector((state) => state.card.cards);
  const handleClick = (index) => {
    cardAddDispatch(cardAdd(index));
    if (countSelector === 1) {
      setTimeout(() => matchDispatch(cardMatchs()), 500);
    }
  };
  return (
    <div
      className="card"
      id={Object.keys(item)}
      onClick={() => handleClick(item)}
    >
      <div className="backend">
        <img src={Object.values(item)} />
      </div>
      <RxQuestionMark className="frontend" />
    </div>
  );
}

export default card;
