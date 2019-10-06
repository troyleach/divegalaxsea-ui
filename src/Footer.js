import React, {
  Component
} from 'react';
import './App.css';
import './Footer.css';

import ThreeBoxGrid from './components/ThreeBoxGrid';


class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  async componentDidMount() { }

  render() {

    return (
      <div className="footer">
        <footer className="footer-content">
          <ThreeBoxGrid
            boxOne="Trip Advisor"
            boxTwo="Weather api"
            boxThree="Advertising" />
          <small>copy right DiveGalaxsea by: troyLeach</small>
        </footer>
      </div >
    );
  };
}

export default Footer;