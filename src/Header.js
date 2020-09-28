import React from "react";

import "./Header.css";
import clsx from 'clsx';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Grid from "@material-ui/core/Grid";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  smallDeviceMenuText: {
    color: 'white'
  },
  smallDeviceMenuContainer: {
    textAlign: 'center'
  }
});

const navStyle = {
  color: "#dddddd",
};

export default function Header(props) {
  const classes = useStyles();
  const navigationLinks = [
    {
      url: "/",
      text: "home"
    },
    {
      url: "/Diving",
      text: "diving"
    },
    {
      url: "/",
      text: "reef map"
    },
    {
      url: "/about",
      text: "About Cozumel"
    },
    {
      url: "/gallery",
      text: "gallery"
    },
    {
      url: "/",
      text: "Book My Diving"
    }
  ]
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navigationLinks.map((obj, index) => (
          <ListItem button key={obj.text}>
            <Link className="menu-text" style={navStyle} to={obj.url}>{obj.text}</Link>
            {/* <ListItemText primary={text} /> */}
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

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

                {/* below is for small device IOS / Droid  this controlled in the css */}
                <div className='navigation-menu-small-device'>
                  <div className={classes.smallDeviceMenuContainer}>
                    {['left'].map((anchor) => (
                      <React.Fragment key={anchor}>
                        <Button className={classes.smallDeviceMenuText} onClick={toggleDrawer(anchor, true)}>Navigation</Button>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                          {list(anchor)}
                        </Drawer>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* below is for Desktop  this controlled in the css */}
                <Breadcrumbs aria-label="breadcrumb" className='navigation-menu'>
                  <Link className="menu-text" style={navStyle} to="/">Home</Link>
                  <Link className="menu-text" style={navStyle} to="/Diving">Diving</Link>
                  <Link className="menu-text" style={navStyle} to="/">Reef Map</Link>
                  <Link className="menu-text" style={navStyle} to="/about">About Cozumel</Link>
                  <Link className="menu-text" style={navStyle} to="/gallery">Gallery</Link>
                  <Link className="menu-text" style={navStyle} to="/">Book My Diving</Link>
                </Breadcrumbs>
                <Grid item md={12} align="right">
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
