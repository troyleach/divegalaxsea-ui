import React, {
  Component
} from 'react';

import Typography from '@material-ui/core/Typography';

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
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
            <h1>This is the home page</h1>
          </Typography>
        </div>
      </div >
    );
  };
}

export default Home;
