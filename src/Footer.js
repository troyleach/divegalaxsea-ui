import React, {
  Component
} from 'react';
import './App.css';
import './Footer.css';

import tripAdvisor from './data/tripAdvisor'
import ThreeBoxGrid from './components/ThreeBoxGrid';


class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      tripAdvisor: false
    };
  }

  async componentDidMount() {
    const data = tripAdvisor();
    this.setState({
      data: data,
      tripAdvisor: true
    })
  }

  render() {
    return (
      <div className="footer">
        <footer className="footer-content">
          <ThreeBoxGrid
            boxOne={this.state}
            boxTwo="Weather api"
            boxThree="Advertising" />
          <small className='copy-right-text'>copy right DiveGalaxsea by: troyLeach</small>
        </footer>
      </div >
    );
  };
}

export default Footer;