// third party
import React, { Component } from 'react';
import './App.css';
// primary components
import Navbar from './Navbar';
import Article from './Article';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Article />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
