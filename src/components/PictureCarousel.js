import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./PictureCarousel.css";

import Spinner from "./Spinner";
import homeImageGallery from "../data/homeImageGallery";

const renderImages = images => {
  return images.map((image, idx) => (
    <>
      <div key={idx}>
        <img className="picture" src={image.url} alt={image.alt} />
      </div>
    </>
  ));
};

// https://github.com/leandrowd/react-responsive-carousel
class PictureCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null
    };
  }

  async componentDidMount() {
    // Need to code in a way to pass the image lib I want
    const images = homeImageGallery();
    this.setState({
      images: images
    });
  }

  render() {
    const { images } = this.state;
    if (!images) return <Spinner />;
    return (
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval="2000"
        width="auto"
        className="carousel-container"
      >
        {renderImages(images)}
      </Carousel>
    );
  }
}
export default PictureCarousel;
