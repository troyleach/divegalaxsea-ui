import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./PictureCarousel.css";

import Spinner from "./Spinner";

const axios = require("axios").default;

// Google drive
// This url works, I just have to find a way to get the long-id
// <img src='https://drive.google.com/uc?id=11XBCEl7Fg-3HZE1lyJ5U82RSBgQOrZn5' />
//  https://drive.google.com/uc?id=1PpC6sQl-vqEF0IhSiaByu4kRvFI9whZL
// const { google } = require('googleapis'); /this wont work in the UI, might have to do this in the api
// https://drive.google.com/open?id=11XBCEl7Fg-3HZE1lyJ5U82RSBgQOrZn5
// https://drive.google.com/uc?id=
// const scopes = [
//   'https://www.googleapis.com/auth/drive'
// ];

// const credentials = require('../google_drive_credentials.json');

// const auth = new google.auth.JWT(
//   credentials.client_email, null,
//   credentials.private_key, scopes
// );

// const drive = google.drive({ version: "v3", auth });

// drive.files.list({}, (err, res) => {
//   if (err) throw err;
//   const files = res.data.files;
//   if (files.length) {
//     files.map((file) => {
//       console.log(file);
//     });
//   } else {
//     console.log('No files found');
//   }
// });
//



const renderImages = images => {
  return images.map((image, idx) => (
    <>
      <div key={idx}>
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

  async componentDidMount() {
    // TODO: maybe move all this to the home.js file?
    const BASE_URL = "http://localhost:3010/"
    const URL = `${BASE_URL}v1/images?type=carousel`;
    const imageUrls = await axios.get(
      URL
    );
    // FIXME: CATCH ERRORS
    // this.setState({ divingData: divingData.data });
    // Need to code in a way to pass the image lib I want
    // FIXME: so what I need to do is just the the image ID then hard code the url in with the id
    // const imagesTwo = imageUrls.data.files.filter(obj => obj.webViewLink.includes("view?usp=drivesdk"))
    console.log('imageUrls', imageUrls)
    // const images = homeImageGallery();
    this.setState({
      images: imageUrls.data[0].images
    });
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
          interval="2000"
          width="auto"
          className="carousel-container"
        >
          {renderImages(images)}
        </Carousel>
      </>
    );
  }
}
export default PictureCarousel;
