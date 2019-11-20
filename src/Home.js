import React, {
  Component
} from 'react';

import './Home.css';

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

  async componentDidMount() { }

  render() {
    return (
      <div className="App">
        <div>
          <h1>This is the home page</h1>
          <div className='picture-gallery'>
            picture box goes here
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
