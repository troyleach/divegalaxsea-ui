import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./Gallery.css";

import Spinner from "./components/Spinner";

const axios = require("axios").default;

const renderImages = images => {
  return images.map((image, idx) => (
    <div className='gallery-image-container'>
      <img className='gallery-image' alt="" src={image.webContentLink} />
    </div>
  ));
};

// https://github.com/leandrowd/react-responsive-carousel
class PictureCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: null
    };
  }

  getDiveGlaxseaAPIImages = async () => {
    // FIXME:
    // Should but this in redux || cache the images on app entry

    const BASE_URL = process.env.REACT_APP_API_BASE_URL
    const URL = `${BASE_URL}v1/google_drive_images`;
    try {
      const imageUrls = await axios.get(
        URL
      );
      const galleryImages = imageUrls.data.find(({ gallery }) => gallery) || [];
      this.setState({
        images: galleryImages.gallery
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
          width={650}
          thumbWidth={80}
          className='carousel-image-container'
        >
          {renderImages(images)}
        </Carousel>
      </>
    );
  }
}

export default PictureCarousel;
