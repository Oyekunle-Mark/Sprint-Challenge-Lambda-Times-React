import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */} {card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={card.img} />
        </div>
        <span>By {/* author goes here */} {card.author} </span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
