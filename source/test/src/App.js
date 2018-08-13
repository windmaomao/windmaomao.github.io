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
    const iconClass = classNames(
      'fa',
      {
        'fa-chevron-left': this.state.open,
        'fa-bars': !this.state.open
      }
    );
    return (
      <div className="Toggle">
        <a onClick={this.toggleSidebar}>
          <i className={iconClass}></i>
        </a>
      </div>
    );
  }

  sidenav() {
    return (
      <Sidenav onClose={this.closeSidebar} onClick={this.clickMenuItem} />
    );
  }

  render() {
    const { open } = this.state;
    const sidebarProps = {
      open,
      sidebar: this.sidenav(),
      onSetOpen: this.closeSidebar,
    };
    return (
      <div className="App">
        <Sidebar {...sidebarProps}>
          { this.toggler() }
          <Iframe url="https://localhost:8001/" />
        </Sidebar>
      </div>
    );
  }
}

export default App;
