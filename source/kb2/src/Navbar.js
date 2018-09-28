// third party
import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  const {title, onAppnavToggle, onSidenavToggle} = props;
  const toggleAppnav = () => {console.log('A'); onAppnavToggle && onAppnavToggle();};
  const toggleSidenav = () => {console.log('S'); onSidenavToggle && onSidenavToggle();};

  return (
    <nav className="navbar is-dark is-fixed-top">
      <div className="navbar-brand">
        <a className="navbar-item logo-wrapper" onClick={e => toggleAppnav()}>
          <img src="logo.png" className="logo" alt="logo" />
        </a>
        <a className="navbar-item" onClick={e => toggleSidenav()}>{title}</a>
        <div data-target="navbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  onSidenavToggle: PropTypes.func,
  onAppnavToggle: PropTypes.func,
};

export default Navbar;
