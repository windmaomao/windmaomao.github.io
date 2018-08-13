import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Sidenav from './Sidenav';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      background: '#eee',
      width: '300px'
    };
  }
  render() {
    const { open, background, width } = this.state;
    return (
      <div className="App">
        <Sidebar
          sidebar={<Sidenav />}
          open={open}
          styles={{ sidebar: { background, width } }}
        >
          &nbsp;
        </Sidebar>
      </div>
    );
  }
}

export default App;
