import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './ThreeBoxGrid.css';
import Weather from './Weather';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import moment from 'moment';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 435,
  },
}));

const renderReviews = (items) => {
  return items.map((element, idx) => {
    const { date, url, partial_entry: quote } = element;
    return (
      <div key={idx} className='review-block'>
        <p className='review-quote'>
          {quote} <a href={url}>more...</a>
        </p>
        <p className='review-date'>{date}</p>
      </div>
    )
  });
}

function renderTripAdvisor(props) {
  const { title, image, reviewUrl, quotes } = props.boxOne.data //destructuring
  return (
    <div>
      <div className="trip-advisor-col-title">
        <p>{title}</p>
      </div>
      <div className="trip-advisor-logo">
        <a href={reviewUrl}>
          <img className="trip-advisor-img" src={image} alt="trip advisor logo" />
        </a>
      </div>
      <div className="latest-review">
        <hr className="general-line-brake" />
      </div>
      <div className="reviews">
        {renderReviews(quotes)}

      </div>
    </div >
  )
}

// const renderWeather = (weather) => {
//   console.log('weather YO', weather.currently)
//   const { time } = weather.currently
//   const date = moment(time * 1000).format('MMM DD  - hh:mm')
//   console.log('TIME', date)

//   return (
//     <div className='weather-block'>
//       <p className='weather-time'>
//         time goes here
//       </p>
//     </div>
//   )
// }

export default function ThreeBoxGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            {props.boxOne.tripAdvisor &&
              renderTripAdvisor(props)
            }
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            {props.boxTwo.weather &&
              <Weather
                data={props.boxTwo.weatherData}
              />
            }
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>{props.boxThree}</Paper>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>very bottom of the footer</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}