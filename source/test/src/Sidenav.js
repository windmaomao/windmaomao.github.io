/*
 * Sidenav component
 */

import React, { Component } from 'react';
import classNames from 'classnames';
import './Sidenav.css';
import logo from './logo.svg';

export default class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.closeMenu = props.onClose;
    this.toggleMenu = props.onClick;
    this.state = {
      apps: [
        { title: 'Test', icon: '' }
      ]
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  apps() {
    const items = [];
    this.state.apps.forEach(app => {
      const linkClass = classNames({
        'is-active': app.url === 'selected'
      });
      const iconClass = classNames(
        'fa', 
        'fa-' + app.icon
      );
      items.push(
        <li key={ app.title }>
          <a onClick={this.toggleMenu} className={linkClass}>
            <i className={iconClass}></i>&nbsp;{ app.title }
          </a> 
        </li>
      );
    });
    return items;
  }

  render() {
    return (
      <aside className="Sidenav">
        <img src={logo} className="App-logo" alt="logo"  onClick={this.closeMenu} />
        <p className="menu-label">Apps</p>
        <ul className="menu-list">{ this.apps() }</ul>
      </aside>
    );
  }
}

