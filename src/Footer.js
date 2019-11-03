import React, {
  Component
} from 'react';
import './App.css';
import './Footer.css';

import tripAdvisor from './data/tripAdvisor';
import weatherData from './data/weatherData';
import ThreeBoxGrid from './components/ThreeBoxGrid';


class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      tripAdvisor: false,
      weatherData: {},
      weather: false,
    };
  }

  async componentDidMount() {
    const tripAdvisorData = tripAdvisor();
    const weather = weatherData()

    this.setState({
      data: tripAdvisorData,
      tripAdvisor: true,
      weatherData: weather,
      weather: true,
    })
  }

  render() {
    return (
      <div className="footer">
        <footer className="footer-content">
          <ThreeBoxGrid
            boxOne={this.state}
            boxTwo={this.state}
            boxThree="Advertising" />
          <small className='copy-right-text'>copy right DiveGalaxsea by: troyLeach</small>
        </footer>
      </div >
    );
  };
}

export default Footer;