import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Sidenav from './Sidenav';
import Iframe from 'react-iframe'
import classNames from 'classnames';
import './App.css';

import { appStore } from './App.reducer';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = appStore.getState();
    this.closeSidebar = this.closeSidebar.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.clickMenuItem = this.clickMenuItem.bind(this);

    appStore.subscribe(() => {
      this.setState(appStore.getState());
    });
  }

  closeSidebar() {
    appStore.dispatch({ type: 'CLOSE_SIDENAV' });
  }

  toggleSidebar() {
    appStore.dispatch({ type: 'TOGGLE_SIDENAV' });
  }

  clickMenuItem(app) {
    appStore.dispatch({ type: 'SELECT_APP', payload: app });
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
    const { apps, app } = this.state;
    const sideNavProps = {
      apps, 
      app,
      onClose: this.closeSidebar,
      onClick: this.clickMenuItem
    };
    return (
      <Sidenav {...sideNavProps} />
    );
  }

  render() {
    const { open, app } = this.state;
    const sidebarProps = {
      open,
      sidebar: this.sidenav(),
      onSetOpen: this.closeSidebar,
    };
    return (
      <div className="App">
        <Sidebar {...sidebarProps}>
          { this.toggler() }
          <Iframe url={app ? app.url : ''} />
        </Sidebar>
      </div>
    );
  }
}

export default App;
