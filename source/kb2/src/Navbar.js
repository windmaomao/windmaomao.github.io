import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  static propTypes = {
    onSidenavToggle: PropTypes.func,
  };

  toggle = () => {
    const onChange = this.props.onSidenavToggle;
    onChange && onChange();
  }
  
  render() {
    const title = 'Knowledgebase';
    return (
      <nav className="navbar is-dark is-fixed-top">
        <div className="navbar-brand">
          <a className="navbar-item logo-wrapper">
            <img src="logo.png" className="logo" alt="logo" />
          </a>
          <a className="navbar-item" onClick={e => this.toggle()}>{title}</a>
          <div data-target="navbar">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">Collections</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
