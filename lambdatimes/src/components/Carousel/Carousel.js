import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
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
      <img
        src={images[currentImage]}
        alt={`image-${currentImage + 1}`}
        style={{ display: "block" }}
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
