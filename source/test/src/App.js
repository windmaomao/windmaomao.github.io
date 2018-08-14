import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'react-sidebar';
import Sidenav from './Sidenav';
import Iframe from 'react-iframe'
import classNames from 'classnames';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.closeSidebar = this.closeSidebar.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.clickMenuItem = this.clickMenuItem.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  closeSidebar() {
    this.context.store.dispatch({ type: 'CLOSE_SIDENAV' });
  }

  toggleSidebar() {
    this.context.store.dispatch({ type: 'TOGGLE_SIDENAV' });
  }

  clickMenuItem(app) {
    this.context.store.dispatch({ type: 'SELECT_APP', payload: app });
  }

  toggler() {
    const { open } = this.context.store.getState();
    const iconClass = classNames(
      'fa',
      {
        'fa-chevron-left': open,
        'fa-bars': !open
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
    const { apps, app } = this.context.store.getState();
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
    const { open, app } = this.context.store.getState();
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

App.contextTypes = {
  store: PropTypes.object.isRequired
}

export default App;
