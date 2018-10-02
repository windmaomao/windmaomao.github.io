// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
// styles
// primary components
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
// secondary components

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.grow}>
            
          </Typography>
          <Button color="inherit" component={Link} to="/teacher">Teacher</Button>
          <Button color="inherit" component={Link} to="/student">Student</Button>
          <Button color="inherit" component={Link} to="/pref">Pref</Button>
          <Button color="inherit" component={Link} to="/">Schedule</Button>
          <Button color="inherit" component={Link} to="/print">Print</Button>
        </Toolbar>
      </AppBar>      
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Navbar);;
  