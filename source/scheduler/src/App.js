// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import {map} from 'lodash';
// styles
import './App.css';
import theme from './theme';
// primary components
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// secondary components
import Navbar from './Navbar';
import Plan from './Plan';
// services
import SchedulerService from './Scheduler';
import {teachersInfo, studentsInfo, prefsInfo} from './data';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1600 + theme.spacing.unit * 3 * 2)]: {
      width: 1600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.ss = new SchedulerService();
    this.state = {
      slots: this.ss.fillSlots(studentsInfo, teachersInfo, prefsInfo),
      ids: map(teachersInfo, 'id'),
      usages: this.ss.teacherUsage,
      errors: this.ss.errors
    }
  }
  render() {
    const {classes} = this.props;
    const {slots, ids, usages, errors} = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <div className={classes.layout}>
          <h1>Slots Available</h1>
          <p style={{ color: 'red' }}>{errors.join(',')}</p>
          <Plan slots={slots} ids={ids} usages={usages} />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App);
