import React, { Component } from "react";

import "./Header.css";

import { Link } from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Grid from "@material-ui/core/Grid";

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
      color: "#dddddd",
    };

    return (
      <>
        <header className='header-container'>
          <Grid container spacing={1} justify="center">
            <Grid item md={4}>
              <Link style={navStyle} to="/">
                <img
                  className="brand-image"
                  src="logo.png"
                  alt="Brand"
                />
              </Link>
            </Grid>
            <Grid item md={8}>
              <Grid container spacing={1} justify="center">
                <Grid item md={12}>
                  <Breadcrumbs aria-label="breadcrumb" className='navigation-menu'>
                    <Link className="menu-text" style={navStyle} to="/">Home</Link>
                    <Link className="menu-text" style={navStyle} to="/Diving">Diving</Link>
                    <Link className="menu-text" style={navStyle} to="/">Reef Map</Link>
                    <Link className="menu-text" style={navStyle} to="/about">About Cozumel</Link>
                    <Link className="menu-text" style={navStyle} to="/">Gallery</Link>
                    <Link className="menu-text" style={navStyle} to="/">Book My Diving</Link>
                  </Breadcrumbs>
                  <Grid item md={12} align="right" alignItems='flex-start'>
                    {/* not sure this is the best way to accomplish this bit, having the ssi logo at the bottom of the Grid div */}
                    <div className='ssi-header-image'>
                      <Link style={navStyle} to="http://www.divessi.com/">
                        <img
                          className="ssi-logo"
                          src="NEW-SSI-LOGO-WHT.png"
                          alt="SSI Logo"
                        />
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>





        </header>
      </>
    );
  }
}

export default Header;
