import React, { Component } from "react";
import styled from "styled-components";
import { carouselData } from "../../data";

const StyledCarousel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

  img {
    width: 100%;
    display: none;
  }

  @media (min-width: 1200px) {
    .carousel {
      width: 1200px;
    }
  }
`;

const StyledLeftButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;

  top: 50%;
  left: 25px;
  transform: translate(0, -50%);

  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

const StyledRightButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;

  top: 50%;
  right: 25px;
  transform: translate(0, -50%);

  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      images: []
    };
  }

  componentDidMount() {
    this.setState({
      images: carouselData
    });
  }

  leftClick = () => {
    const { currentImage, images } = this.state;

    const index = currentImage === 0 ? images.length - 1 : currentImage - 1;

    this.setState({
      currentImage: index
    });
  };

  rightClick = () => {
    const { currentImage, images } = this.state;

    const index = currentImage === images.length - 1 ? 0 : currentImage + 1;

    this.setState({
      currentImage: index
    });
  };

  selectedImage = () => {
    const { currentImage, images } = this.state;

    return (
      // eslint-disable-next-line
      <img
        src={images[currentImage]}
        alt={`image-${currentImage + 1}`}
        style={{ display: "block" }}
      />
    );
  };

  render() {
    return (
      <StyledCarousel>
        <StyledLeftButton onClick={this.leftClick}>{"<"}</StyledLeftButton>
        {this.selectedImage()}
        <StyledRightButton onClick={this.rightClick}>{">"}</StyledRightButton>
      </StyledCarousel>
    );
  }
}
