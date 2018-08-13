import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Sidenav from './Sidenav';
import Iframe from 'react-iframe'
import classNames from 'classnames';
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

  toggler() {
    return (
      <div className="Toggle">
        <a onClick={this.toggleSidebar}>
          <i class="fa fa-chevron-left"></i>
        </a>
      </div>
    );
  }

  render() {
    const { open } = this.state;
    return (
      <div className="App">
        <Sidebar open={open}
          sidebar={<Sidenav onClose={this.closeSidebar} onClick={this.clickMenuItem} />}
        >
          { this.toggler() }
          <Iframe url="https://localhost:8001/" />
        </Sidebar>
      </div>
    );
  }
}

export default App;
