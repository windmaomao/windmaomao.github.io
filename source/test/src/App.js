import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Sidenav from './Sidenav';
import Iframe from 'react-iframe'
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
    this.closeSidebar = this.closeSidebar.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.clickMenuItem = this.clickMenuItem.bind(this);
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

  clickMenuItem() {
    console.log('Click menu item');
  }

  render() {
    const { open, background, width } = this.state;
    return (
      <div className="App">
        <Sidebar open={open}
          sidebar={<Sidenav onClose={this.closeSidebar} onClick={this.clickMenuItem} />}
        >
          <div className="has-text-right">
            <a onClick={this.toggleSidebar}>Toggle</a>
          </div>
          <Iframe url="http://www.bbc.com" />
        </Sidebar>
      </div>
    );
  }
}

export default App;
