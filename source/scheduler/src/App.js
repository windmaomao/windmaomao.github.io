// third party
import React, { Component } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
// styles
import './App.css';
// primary components
// secondary components
import Navbar from './Navbar';
import Main from './Main';
// services
import theme from './theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <Main />
      </MuiThemeProvider>
    );
  }
}

export default App;
