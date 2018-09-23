// third party
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter as Router, Route} from "react-router-dom";
// styles
import './App.css';
import theme from './theme';
// primary components
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// secondary components
import Navbar from './Navbar';
import Schedule from './Schedule';
import Student from './Student';
// services
import {scheduler} from './Scheduler';
import {teachersInfo, studentsInfo, prefsInfo} from './data1';
import ApiService from './Api';

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
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }

  componentDidMount() {
    const debug = true;
    // const debug = false;
    if (debug) {
      scheduler.setData(teachersInfo, studentsInfo, prefsInfo);
      this.setState({loading: false});
    } else {
      ApiService.getInfo().then(data => {
        const {teachers, students, preferences} = data;
        scheduler.setData(teachers, students, preferences);
        this.setState({loading: false});
      });
    }
  }

  renderRoutes() {
    const {loading} = this.state;
    if (loading) {
      return null;
    }
    const {classes} = this.props;
    return (
      <div className={classes.layout}>
        <Route exact path="/" component={Schedule} />
        <Route path="/student" component={Student} />
      </div>
    )
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          {this.renderRoutes()}
        </MuiThemeProvider>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App);