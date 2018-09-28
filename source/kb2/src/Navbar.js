// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  static propTypes = {
    title: PropTypes.string,
    onSidenavToggle: PropTypes.func,
    onAppnavClick: PropTypes.func,
  };

  toggle = () => {
    const onChange = this.props.onSidenavToggle;
    onChange && onChange();
  }

  trigger = () => {
    const onTrigger = this.props.onAppnavClick;
    onTrigger && onTrigger();
  }

  renderToc() {
    return (
      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-active">
            <a className="navbar-link">Table of Content</a>
            <div className="navbar-dropdwon">
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const {title} = this.props;
    return (
      <nav className="navbar is-dark is-fixed-top">
        <div className="navbar-brand">
          <a className="navbar-item logo-wrapper" onClick={e => this.trigger()}>
            <img src="logo.png" className="logo" alt="logo" />
          </a>
          <a className="navbar-item" onClick={e => this.toggle()}>{title}</a>
          <div data-target="navbar">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* {this.renderToc()} */}
      </nav>
    );
  }
}

export default Navbar;
