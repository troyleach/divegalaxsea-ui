import React, {
  Component
} from 'react';

class Header extends Component {
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
          <h1>This is the Header</h1>
        </div>
      </div >
    );
  };
}

export default Header;
