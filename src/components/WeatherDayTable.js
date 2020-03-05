import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import getWeatherIcon from "../lib/getWeatherIcon";

import moment from "moment";

// FIXME: for resposiveness on the weather panels width needs to be 85px for small devices
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: "100%",
    width: "100%",
    padding: "4px"
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const renderDayPanel = (day, idx) => {
  const { time, icon, temperatureHigh, temperatureLow } = day;
  // const date = moment(time * 1000).format('ddd')
  const date = moment(time * 1000).format("ddd");
  console.log("this is this index yo", idx, date);
  return (
    <>
      {date}
      <div>
        <p>
          {Math.round(temperatureHigh)}/{Math.round(temperatureLow)}&deg;F
        </p>
        {getWeatherIcon(icon, "2x")}
      </div>
    </>
  );
};

export default function WeatherDayTable(props) {
  const data = props.data.slice(2, 5);
  const weekSummary = props.summary;
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {data.map((day, idx) => (
            <Grid key={idx} item>
              <Paper className={classes.paper}>
                {renderDayPanel(day, idx)}
              </Paper>
            </Grid>
          ))}
          <div>{weekSummary}</div>
        </Grid>
      </Grid>
    </Grid>
  );
}
