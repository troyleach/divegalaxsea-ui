import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./PictureCarousel.css";

import Spinner from "./Spinner";

const axios = require("axios").default;

const renderImages = images => {
  return images.map((image, idx) => (
    <>
      <div key={image.id}>
        <img className="picture" src={image.webContentLink} alt={image.name} />
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

  getDiveGlaxseaAPIImages = async () => {
    // FIXME: get base url from env
    // Should but this in redux || cache the images on app entry
    const BASE_URL = "http://localhost:3000/"
    const URL = `${BASE_URL}v1/google_drive_images`;
    try {
      const imageUrls = await axios.get(
        URL
      );
      const carouselImages = imageUrls.data.find(({ carousel }) => carousel) || [];
      this.setState({
        images: carouselImages.carousel
      });

    } catch (error) {
      console.error('errors', error)
      this.setState({
        images: []
      });
    }
  }

  async componentDidMount() {
    this.getDiveGlaxseaAPIImages()
  }

  render() {
    const { images } = this.state;
    if (!images) return <Spinner />;
    return (
      <>
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          width="auto"
          interval={2000}
          className="carousel-container"
        >
          {renderImages(images)}
        </Carousel>
      </>
    );
  }
}

export default PictureCarousel;
