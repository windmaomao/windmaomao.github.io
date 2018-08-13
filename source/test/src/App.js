import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Sidenav from './Sidenav';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }
  render() {
    return (
      <div className="App">
        <Sidebar
          sidebar={<Sidenav />}
          open={this.state.open}
          styles={{ sidebar: { background: "lightgray", width: "300px" } }}
        >
          &nbsp;
        </Sidebar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
