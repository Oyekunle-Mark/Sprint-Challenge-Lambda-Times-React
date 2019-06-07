import React from "react";
import Props from "prop-types";
import { v4 } from "uuid";
import Card from "./Card";

const Cards = ({ cardList }) => (
  <div className="cards-container">
    {cardList.map(card => (
      <Card key={v4()} currentCard={card} />
    ))}
  </div>
);

Cards.propTypes = {
  cardList: Props.arrayOf(Props.object).isRequired
};

export default Cards;
