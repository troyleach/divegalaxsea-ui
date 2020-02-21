import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import "./ThreeBoxGrid.css";
import "./advertising.css";

import ScubaDivingCozumel from "./ScubaDivingCozumel";

import Weather from "./Weather";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
    // margin: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 385
  }
}));

const renderReviews = items => {
  return items.map((element, idx) => {
    const { date, url, partial_entry: quote } = element;
    return (
      <div key={idx} className="review-block">
        <p className="review-quote">
          {quote} <a href={url}>more...</a>
        </p>
        <p className="review-date">{date}</p>
      </div>
    );
  });
};

function renderTripAdvisor(props) {
  const { title, image, reviewUrl, quotes } = props.boxOne.data; //destructuring
  return (
    <div>
      <div className="trip-advisor-col-title">
        <p>{title}</p>
      </div>
      <div className="trip-advisor-logo">
        <a href={reviewUrl}>
          <img
            className="trip-advisor-img"
            src={image}
            alt="trip advisor logo"
          />
        </a>
      </div>
      <div className="latest-review">
        <hr className="general-line-brake" />
      </div>
      <div className="reviews">{renderReviews(quotes)}</div>
    </div>
  );
}

function renderAdvertising(props) {
  // for now props is NOT being used
  return (
    <div id="social" className="advertising-container">
      <div className="row ssi-nitrox-logos">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <a href="http://www.divessi.com/">
              <img
                className="ssi-logo"
                src="ssi-logo-red-text.png"
                alt="SSI logo"
              />
            </a>
          </Grid>
          <Grid item xs={6}>
            <div className="col-md-4">
              <img
                className="nitrox-logo"
                src="nitroxT.png"
                alt="Nitrox Patch"
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <hr className="general-line-brake" />
      <div className="w3-center">
        <img
          className="adopt-dive-site"
          src="adopt-a-dive-site.png"
          alt="Adopt a Dive Site"
        />
      </div>
      <div className="email-us">
        <span>Have a quick question?</span>
        <br />
        <a href="mailto:kim@divegalaxsea.com">
          <span>Contact us!</span>
        </a>
        <br />
        <br />
        <span>Ready to go diving?</span>
        <br />
        <a href="#/reservations">
          <span>Book Your Diving</span>
        </a>
      </div>

      <hr className="general-line-brake" />

      <div className="social-icons">
        <Grid container justify="center" spacing={2}>
          <Grid xs={2}>
            <a href="https://www.facebook.com/DiveGalaxSeaCozumel">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                size="2x"
                color="#3b5999"
              />
            </a>
          </Grid>
          <Grid xs={2}>
            <a href="https://twitter.com/divegalaxsea">
              <FontAwesomeIcon
                icon={faTwitterSquare}
                size="2x"
                color="#1ca1f2"
              />
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default function ThreeBoxGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            {props.boxOne.scubaDivingCozumel && (
              <ScubaDivingCozumel title="Scuba Diving in Cozumel" />
            )}
            {props.boxOne.tripAdvisor && renderTripAdvisor(props)}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            {props.boxOne.divePhotoVideoGallery && (
              <ScubaDivingCozumel title="Dive Photos & Video Gallery" />
            )}
            {props.boxTwo.weather && (
              <Weather data={props.boxTwo.weatherData} />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            {props.boxThree.interactiveCozumelMap && (
              <ScubaDivingCozumel title="Interactive Cozumel Reef Map" />
            )}
            {props.boxThree.advertising && renderAdvertising(props.boxThree)}
          </Paper>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>very bottom of the footer</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}
