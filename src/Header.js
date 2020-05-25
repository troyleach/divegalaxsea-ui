import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  async componentDidMount() {}

  render() {
    const navStyle = {
      color: "white",
    };

    return (
      <div>
        <nav>
          <Link style={navStyle} to="/">
            <h3>LOGO</h3>
          </Link>
          <ul className="nav-links">
            <Link style={navStyle} to="/Diving">
              <li>Diving</li>
            </Link>
            <Link style={navStyle} to="/ReefMap">
              <li>Reef Map</li>
            </Link>
            <Link style={navStyle} to="/about">
              <li>About Cozumel</li>
            </Link>
            <Link style={navStyle} to="/">
              <li>Gallery</li>
            </Link>
            <Link style={navStyle} to="/">
              <li>Book My Diving</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
