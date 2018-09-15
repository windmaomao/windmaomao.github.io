// third party
import React, { Component } from 'react';
// styles
import './App.css';
// primary components
// secondary components
import Navbar from './Navbar';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
