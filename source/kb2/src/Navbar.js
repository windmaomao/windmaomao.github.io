// third party
import React from 'react';
import PropTypes from 'prop-types';
// styles
import './Navbar.css';

const Navbar = (props) => {
  const {title, onAppnavToggle, onTocToggle} = props;
  const toggleAppnav = () => {onAppnavToggle && onAppnavToggle();};
  const toggleToc = () => {onTocToggle && onTocToggle();};

  return (
    <nav className="navbar is-dark is-fixed-top">
      <div className="navbar-brand">
        <a className="navbar-item logo-wrapper" onClick={e => toggleAppnav()}>
          <img src="logo.png" className="logo" alt="logo" />
        </a>
        <a className="navbar-item" onClick={e => toggleToc()}>{title}</a>
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
  onTocToggle: PropTypes.func,
  onAppnavToggle: PropTypes.func,
};

export default Navbar;
