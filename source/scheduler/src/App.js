// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {MuiThemeProvider, withStyles} from '@material-ui/core/styles';
// styles
import './App.css';
import theme from './theme';
// primary components
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
// secondary components
import Navbar from './Navbar';
import Plan from './Plan';
// services
import SchedulerService from './Scheduler';
import {teachersInfo, studentsInfo, prefsInfo} from './data1';

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
      loading: true,
      slots: {},
      usages: {},
      ids: [],
      total: 0,
      errors: []
    };
  }

  componentDidMount() {
    this.doPlan();
  }

  doPlan() {
    this.setState({
      loading: false,
      slots: this.ss.fillSlots(studentsInfo, teachersInfo, prefsInfo),
      usages: this.ss.teacherUsage,
      ids: Object.keys(this.ss.teacherUsage),
      total: this.ss.totalSlots(),
      errors: this.ss.errors
    })    
  }

  title(total) {
    return (
      <div>
        <Button 
          variant="contained" color="secondary" style={{float: 'right'}}
          onClick={() => {this.doPlan();}}
        >Plan</Button>
        <h1>Today's Schedule <small>({total})</small></h1>
      </div>
    );
  }

  error(errors) {
    return <p style={{ color: 'red' }}>{errors.join(',')}</p>;
  }

  main() {
    const {classes} = this.props;
    const {loading, slots, ids, usages, total, errors} = this.state;
    return (
      <div className={classes.layout}>
        {this.title(total)}
        {this.error(errors)}
        {!loading && <Plan slots={slots} ids={ids} usages={usages} />}
      </div>
    );
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        {this.main()}
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App);
