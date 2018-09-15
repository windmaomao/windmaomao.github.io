// third party
import React, { Component } from 'react';
// styles
// primary components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// secondary components

class Navbar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            Scheduler
          </Typography>
        </Toolbar>
      </AppBar>      
    );
  }
}
  
export default Navbar;
  