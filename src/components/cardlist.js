import React from "react";
import Card from "./card";
import familyguy from "../familyGuy.json";
function cardlist() {
  return (
    <div className="cardlist">
      {familyguy.map((item, key) => (
        <Card item={item} key={key} />
      ))}
    </div>
  );
}

export default cardlist;
