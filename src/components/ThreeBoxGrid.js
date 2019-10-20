import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './ThreeBoxGrid.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const renderReviews = (items) => {
  return items.map(element => {
    const { date, url, partial_entry: quote } = element;
    return (
      <div className='review-block'>
        <p className='review-quote'>
          {quote} <a href={url}>more...</a>
        </p>
        <p className='review-date'>{date}</p>
      </div>
    )
  });
}

function renderTripAdvisor(props) {
  console.log('props', props.boxOne.data)
  const { title, image, reviewUrl, quotes } = props.boxOne.data //destructuring
  console.log('there I am ', title, image)
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

export default function ThreeBoxGrid(props) {
  if (props.boxOne && props.boxOne.data) {
    console.log('props', props.boxOne)
    const { title, image, reviewUrl, quotes } = props.boxOne //destructuring
    console.log('there I am ', title, image)
  }
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
          <Paper className={classes.paper}>{props.boxTwo}</Paper>
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