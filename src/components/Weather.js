import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Weather.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// https://fontawesome.com/icons?d=gallery&c=weather&m=free
import {
  faCloud, faBolt, faCloudMoon, faCloudMoonRain, faCloudRain,
  faCloudShowersHeavy, faCloudSun, faCloudSunRain
} from '@fortawesome/free-solid-svg-icons'

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

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import moment from 'moment';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2)
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 435,
  },
  card: {
    minWidth: 275,
  },
}));

const weatherIcons = {
  "clear-day": '<i className="wi wi-day-sunny"></i>',
  "clear-night": '<i className="wi wi-night-clear"></i>',
  "snow": '<i className="wi wi-snow"></i>',
  "rain": '<i className="wi wi-thunderstorm"></i>',
  "fog": '<i className="wi wi-fog"></i>',
  "cloudy": '<i className="wi wi-cloudy"></i>',
  "wind": '<i className="wi wi-day-windy"></i>',
  "sleet": '<i className="wi wi-sleet"></i>',
  "partly-cloudy-night": '<i className="wi wi-night-partly-cloudy"></i>',
  "partly-cloudy-day": 'this is crzy'
};

// FIXME: pull this out into it's own lib file
const getWeatherIcon = (icon) => {
  switch (icon) {
    case 'partly-cloudy-day':
      return <FontAwesomeIcon icon={faCloudSun} size="4x" color="red" />
    case 'partly-cloudy-night':
      return <FontAwesomeIcon icon={faCloudMoon} size="4x" color="red" />
    default:
      return <FontAwesomeIcon icon={faCloudMoon} size="4x" color="red" />
  }
}
const renderDayTable = () => { };

const renderWeather = (weather) => {
  console.log('weather YO', weather.data)
  const { currently } = weather.data;
  const { summary, icon, temperature, time, apparentTemperature, humidity, pressure, windSpeed, uvIndex } = currently;

  const date = moment(time * 1000).format('MMM DD  - hh:mm')
  console.log('TIME', date)

  return (
    <div className='weather-block'>
      <div className='weather-time'>
        <div>
          {getWeatherIcon(icon)} <span className='temperature-text'>{temperature}&deg;</span>
        </div>
        <span className='summary-text'>{summary}</span>
        <div className='weather-vitals'>
          <span className='date-text'>{date}</span>
          <span className='feels-like-text'>feels like: {apparentTemperature}</span>
          <span className='wind-text'>wind: {windSpeed}</span>
          <span className='humidity-text'>humidity: {humidity}</span>
          <span className='pressure-text'>pressure: {pressure}</span>
          <span className='uv-index-text'>uv index: {uvIndex}</span>
        </div>
      </div>
    </div>
  )
}

export default function Weather(props) {
  const classes = useStyles();
  console.log('here are the props in weather', props)


  return (
    <div className={classes.root}>
      <Card className='weatherCard'>
        <div className='weatherHeader'>
          Cozumel Weather
        </div>
        <CardContent>
          <Typography variant="body2" component="p">
            {renderWeather(props)}
          </Typography>
        </CardContent>
        <div className='weatherFooter'>
          Weather from some place cool
      </div>
      </Card>
    </div>
  );
}