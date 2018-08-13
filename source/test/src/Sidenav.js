/*
 * Sidenav component
 */

import React, { Component } from 'react';
import classNames from 'classnames';

export default class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: [
        { title: 'Test', icon: '' }
      ]
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    console.log('Clicked');
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
      <aside className="menu">
        <p className="menu-label">
          Apps
        </p>
        <ul className="menu-list">
          { this.apps() }
        </ul>
      </aside>
    );
  }
}

