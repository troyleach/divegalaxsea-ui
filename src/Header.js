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
            <h3>Logo</h3>
          </Link>
          <ul className="nav-links">
            <Link style={navStyle} to="/about">
              <li>About</li>
            </Link>
            <Link style={navStyle}>
              <li>Diving</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
