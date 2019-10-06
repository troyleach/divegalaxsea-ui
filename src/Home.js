import React, {
  Component
} from 'react';

import './Home.css';

import ThreeBoxGrid from './components/ThreeBoxGrid';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
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
            boxOne="picture one"
            boxTwo="picture two"
            boxThree="picture three" />
        </div>
      </div >
    );
  };
}

export default Home;
