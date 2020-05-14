import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  async componentDidMount() { }

  render() {
    const navStyle = {
      color: "white",
    };

    return (
      <>
        <header>
          <div class="row">
            <div class="image-container col-sm-4">
              <Link style={navStyle} to="/">
                <img
                  className="brand-image"
                  src="logo.png"
                  alt="Brand"
                />
              </Link>
            </div>
            <div class="col-sm-8">
              <div class="row">
                <div class="col-md-12 shadow menu-nav-bar">
                  <div id='cssmenu'>
                    <Breadcrumbs aria-label="breadcrumb">
                      <Link style={navStyle} to="/">Home</Link>
                      <Link style={navStyle} to="/Diving">Diving</Link>
                      <Link style={navStyle} to="/">Reef Map</Link>
                      <Link style={navStyle} to="/about">About Cozumel</Link>
                      <Link style={navStyle} to="/">Gallery</Link>
                      <Link style={navStyle} to="/">Book My Diving</Link>
                    </Breadcrumbs>
                  </div>
                </div>

                <div class="col-md-12 pull right">
                  <div class="pull-right">
                    <a href="http://www.divessi.com/">
                      <img
                        className="ssi-logo"
                        src="NEW-SSI-LOGO-WHT.png"
                        alt="SSI logo"
                      />
                    </a>
                  </div>
                </div>

              </div> {/*End of inner row*/}
            </div> { /*End of col-sm-8*/}
          </div> { /*End of outer row*/}
        </header>
      </>
    );
  }
}

export default Header;
