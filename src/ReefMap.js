import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./ReefMap.css";

class ReefMap extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {}

  render() {
    return (
      <div className="reef-map-container">
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <img
              className="dive-flag-large"
              src="DiveFlagLarge.gif"
              alt="Dive Flag Large"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <img
              className="mexican-flag"
              src="MexRepVc1.jpg"
              alt="Mexican Flag"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <img className="dan-logo" src="DanLogo.png" alt="Dan Logo" />
          </Grid>
          <Grid item xs={12}>
            <img className="dive-sites" src="DiveSites.jpg" alt="DiveSites" />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ReefMap;
