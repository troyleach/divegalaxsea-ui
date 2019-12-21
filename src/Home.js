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
            <PictureCarousel
              images={this.state.images}
            />
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
