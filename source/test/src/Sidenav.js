/*
 * Sidenav component
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Sidenav.css';
import logo from './logo.svg';

export default class Sidenav extends Component {
  apps() {
    const { apps, app, onClick } = this.props;
    const appClick = item => e => onClick && onClick(item);
    const items = [];
    apps.forEach(item => {
      const linkClass = classNames({
        'is-active': item === app
      });
      const iconClass = classNames(
        'fa', 
        'fa-' + item.icon
      );
      items.push(
        <li key={ item.title }>
          <a onClick={appClick(item)} className={linkClass}>
            <i className={iconClass}></i>&nbsp;{ item.title }
          </a> 
        </li>
      );
    });
    return items;
  }

  render() {
    const onClose = e => { this.props.onClose && this.props.onClose(); }
    return (
      <aside className="Sidenav">
        <img src={logo} className="App-logo" alt="logo" onClick={onClose} />
        <p className="menu-label">Apps</p>
        <ul className="menu-list">{ this.apps() }</ul>
      </aside>
    );
  }
}

Sidenav.propTypes = {
  apps: PropTypes.array,
  app: PropTypes.any,
  onClose: PropTypes.func,
  onClick: PropTypes.func
}

