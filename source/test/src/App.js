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
    this.closeSidebar = this.closeSidebar.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  closeSidebar() {
    this.setState({
      open: false
    });
  }

  toggleSidebar() {
    const open = !this.state.open;
    this.setState({ open });
  }

  render() {
    const { open, background, width } = this.state;
    return (
      <div className="App">
        <Sidebar
          sidebar={<Sidenav onClose={this.closeSidebar} />}
          open={open}
          styles={{ sidebar: { background, width } }}
        >
          <div className="has-text-right">
            <a onClick={this.toggleSidebar}>Toggle</a>
          </div>
        </Sidebar>
      </div>
    );
  }
}

export default App;
