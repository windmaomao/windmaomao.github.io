import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Sidenav from './Sidenav';
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
      </div>
    );
  }
}

export default App;
