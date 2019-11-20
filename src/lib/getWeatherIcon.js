import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// https://fontawesome.com/icons?d=gallery&c=weather&m=free
import {
  faCloud, faBolt, faCloudMoon, faCloudMoonRain, faCloudRain,
  faCloudShowersHeavy, faCloudSun, faCloudSunRain, faSun, faMoon, faSnowflake, faWind, faUmbrella
} from '@fortawesome/free-solid-svg-icons'

// maybe I should look at this for colored weather icons maybe
// https://github.com/manifestinteractive/weather-underground-icons
// the sun is #F8C314

export default function getWeatherIcon(icon, size) {
  switch (icon) {
    case 'clear-day':
      return <FontAwesomeIcon icon={faSun} size={size} color="red" />
    case 'clear-night':
      return <FontAwesomeIcon icon={faMoon} size={size} color="red" />
    case 'snow':
      return <FontAwesomeIcon icon={faSnowflake} size={size} color="red" />
    case 'rain':
      return <FontAwesomeIcon icon={faCloudRain} size={size} color="red" />
    case 'fog':
      return <FontAwesomeIcon icon={faCloud} size={size} color="red" />
    case 'cloudy':
      return <FontAwesomeIcon icon={faCloud} size={size} color="red" />
    case 'wind':
      return <FontAwesomeIcon icon={faWind} size={size} color="red" />
    case 'sleet':
      return <FontAwesomeIcon icon={faUmbrella} size={size} color="red" />
    case 'partly-cloudy-day':
      return <FontAwesomeIcon icon={faCloudSun} size={size} color="red" />
    case 'partly-cloudy-night':
      return <FontAwesomeIcon icon={faCloudMoon} size={size} color="red" />
    default:
      return <FontAwesomeIcon icon={faCloudMoon} size={size} color="red" />
  }
}
