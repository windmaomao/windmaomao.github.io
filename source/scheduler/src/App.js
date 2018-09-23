// third party
import React, {Component} from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter as Router, Route} from "react-router-dom";
// styles
import './App.css';
import theme from './theme';
// primary components
import CssBaseline from '@material-ui/core/CssBaseline';
// secondary components
import Navbar from './Navbar';
import Schedule from './Schedule';
import Student from './Student';
// services

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Route exact path="/" component={Schedule} />
          <Route path="/student" component={Student} />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
