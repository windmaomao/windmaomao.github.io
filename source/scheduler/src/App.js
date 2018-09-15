// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {MuiThemeProvider, withStyles} from '@material-ui/core/styles';
// styles
import './App.css';
// primary components
import CssBaseline from '@material-ui/core/CssBaseline';
// secondary components
import Navbar from './Navbar';
import Main from './Main';
// services
import theme from './theme';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <div className={classes.layout}>
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
