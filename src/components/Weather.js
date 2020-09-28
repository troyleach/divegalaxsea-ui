import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import "./Weather.css";
import "./WeatherDayTable";
import getWeatherIcon from "../lib/getWeatherIcon";

//  {/* https://darksky.net/dev */}
// FIXME: this seems much easier.. oops
// https://najens.github.io/weather-icons-react/

// For the weather Icons
// import '../weatherCss/weather-icons-wind.css';
// import '../weatherCss/weather-icons.css';
// import '../fonts/weathericons-regular-webfont.eot';
// import '../fonts/weathericons-regular-webfont.svg';
// import '../fonts/weathericons-regular-webfont.ttf';
// import '../fonts/weathericons-regular-webfont.woff';
// import '../fonts/weathericons-regular-webfont.woff2';

// https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/font/weathericons-regular-webfont.eot
// https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/font/weathericons-regular-webfont.svg
// https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/font/weathericons-regular-webfont.ttf
// https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/font/weathericons-regular-webfont.woff
// https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/font/weathericons-regular-webfont.woff2

// import Card from '@material-ui/core/Card';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

// import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";

import moment from "moment";
import WeatherDayTable from "./WeatherDayTable";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2)
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%",
    width: "100%"
  },
  card: {
    minWidth: 275
  }
}));

// const weatherIcons = {
//   "clear-day": '<i className="wi wi-day-sunny"></i>',
//   "clear-night": '<i className="wi wi-night-clear"></i>',
//   "snow": '<i className="wi wi-snow"></i>',
//   "rain": '<i className="wi wi-thunderstorm"></i>',
//   "fog": '<i className="wi wi-fog"></i>',
//   "cloudy": '<i className="wi wi-cloudy"></i>',
//   "wind": '<i className="wi wi-day-windy"></i>',
//   "sleet": '<i className="wi wi-sleet"></i>',
//   "partly-cloudy-night": '<i className="wi wi-night-partly-cloudy"></i>',
//   "partly-cloudy-day": 'this is crzy'
// };

// // FIXME: pull this out into it's own lib file
// const getWeatherIcon = (icon) => {
//   switch (icon) {
//     case 'partly-cloudy-day':
//       return <FontAwesomeIcon icon={faCloudSun} size="4x" color="red" />
//     case 'partly-cloudy-night':
//       return <FontAwesomeIcon icon={faCloudMoon} size="4x" color="red" />
//     default:
//       return <FontAwesomeIcon icon={faCloudMoon} size="4x" color="red" />
//   }
// }

const renderWeather = weather => {
  const { currently, daily } = weather.data;
  const {
    summary,
    icon,
    temperature,
    time,
    apparentTemperature,
    humidity,
    windSpeed,
    uvIndex
  } = currently;

  const date = moment(time * 1000).format("LLLL");

  return (
    <div className="weather-block">
      <div className="weather-time">
        <div>
          {getWeatherIcon(icon, "2x")}{" "}
          <span className="temperature-text">
            {Math.round(temperature)}&deg;F
          </span>
        </div>
        <span className="summary-text">{summary}</span>
        <span className="date-text">{date}</span>
        <br />
        <div className="weather-vitals">
          <span className="feels-like-text">
            feels like: {Math.round(apparentTemperature)}
          </span>
          <span className="wind-text">wind: {windSpeed}</span>
          <span className="humidity-text">humidity: {humidity * 100}%</span>
          <span className="uv-index-text">uv index: {uvIndex}</span>
        </div>
        <div className="days-of-week">
          <WeatherDayTable {...daily} />
        </div>
      </div>
    </div>
  );
};

export default function Weather(props) {
  // const classes = useStyles();

  return (
    <Grid className="weatherCard">
      <div className="weatherHeader">Cozumel Weather</div>
      <CardContent>
        <div className="weatherIcons" variant="body2" component="p">
          {renderWeather(props)}
        </div>
      </CardContent>
      <div className="weatherFooter">
        <a>Darksky</a>
      </div>
    </Grid>
  );
}
