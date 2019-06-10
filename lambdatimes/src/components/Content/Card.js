import React from "react";
import Props from "prop-types";
import styled from "styled-components";

const StyledCard = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const StyledHeadline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const StyledAuthor = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;

  span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;

const StyledImageContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;

  img {
    width: 40px;
  }
`;

const Card = ({ currentCard }) => (
  <StyledCard>
    <StyledHeadline>{currentCard.headline}</StyledHeadline>
    <StyledAuthor>
      <StyledImageContainer>
        <img src={currentCard.img} alt="author" />
      </StyledImageContainer>
      <span>By {currentCard.author} </span>
    </StyledAuthor>
  </StyledCard>
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
