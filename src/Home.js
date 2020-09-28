import React, {
  Component
} from 'react';

import './Home.css';
import PictureCarousel from './components/PictureCarousel'

import ThreeBoxGrid from './components/ThreeBoxGrid';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      scubaDivingCozumel: true,
      divePhotoVideoGallery: true,
      interactiveCozumelMap: true,
    };
  }

  async componentDidMount() {
    // make the api calls here
  }

  render() {
    return (
      <div className="App">
        <div>
          <div className='picture-gallery'>
            <PictureCarousel />
          </div>
          <div className='home-page-context-container'>
            <h1>Explore the Mystical Underwater World of Cozumel with Dive GalaxSea</h1>
            <p className='home-page-context'>
              With Dive GalaxSea you'll get one-on-one attention from your dive leader during your Cozumel vacation. Take part in Dive GalaxSea's small private diving tours, where you'll be guided by our SSI Certified Dive Professionals, with many years of diving experience on Cozumel's magnificent reefs as well as many other destinations around the world. Diving in Cozumel should be fun, exciting, and safe. Dive GalaxSea believes that every step of your diving excursion in Cozumel's spectacular dive sites should mesmerize divers. That's exactly what we do, by making every Cozumel dive tour a unique venture into the mystical underwater world of Cozumel's coral reefs. Don't just dive Cozumel, experience Cozumel's breath-taking reefs with the #1 Private/Small Group Dive Operator in Cozumel, Mexico!
            </p>
          </div>
          <ThreeBoxGrid
            boxOne={this.state}
            boxTwo={this.state}
            boxThree={this.state} />
        </div>
      </div >
    );
  };
}

export default Home;
