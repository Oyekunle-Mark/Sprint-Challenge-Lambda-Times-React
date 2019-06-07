import React from "react";
import Props from "prop-types";
import { v4 } from "uuid";
import styled from "styled-components";
import Card from "./Card";

const StyledCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

@media (min-width: 1200px) {
  .cards-container {
    width: 1200px;
  }
}
`;

const Cards = ({ cardList }) => (
  <StyledCards>
    {cardList.map(card => (
      <Card key={v4()} currentCard={card} />
    ))}
  </StyledCards>
);

Cards.propTypes = {
  cardList: Props.arrayOf(Props.object).isRequired
};

export default Cards;
