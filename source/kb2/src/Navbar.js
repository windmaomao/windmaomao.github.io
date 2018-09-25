import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const title = 'Knowledgebase';
    return (
      <nav className="navbar is-dark is-fixed-top">
        <div className="navbar-brand">
          <a className="navbar-item logo-wrapper">
            <img src="logo.png" className="logo" alt="logo" />
          </a>
          <a className="navbar-item center">{title}</a>
          <div data-target="navbar"
            className={{ 'navbar-burger': 1, 'burger': 1, 'is-active': this.toggled }}
            onClick={this.onToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
