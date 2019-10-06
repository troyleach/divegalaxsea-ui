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
          <h3>This is the Header</h3>
        </div>
      </div >
    );
  };
}

export default Header;
