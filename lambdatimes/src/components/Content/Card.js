import React from "react";
import Props from "prop-types";

const Card = ({ currentCard }) => (
  <div className="card">
    <div className="headline">{currentCard.headline}</div>
    <div className="author">
      <div className="img-container">
        <img src={currentCard.img} alt="author" />
      </div>
      <span>By {currentCard.author} </span>
    </div>
  </div>
);

Card.propTypes = {
  currentCard: Props.shape({
    headline: Props.string.isRequired,
    tab: Props.string.isRequired,
    img: Props.string.isRequired,
    author: Props.string.isRequired
  }).isRequired
};

export default Card;
