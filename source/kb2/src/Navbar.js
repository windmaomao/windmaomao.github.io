// third party
import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  const {title} = props;
  const toggle = () => {
    const onChange = props.onSidenavToggle;
    onChange && onChange();
  };
  const trigger = () => {
    const onTrigger = props.onAppnavClick;
    onTrigger && onTrigger();
  };

  return (
    <nav className="navbar is-dark is-fixed-top">
      <div className="navbar-brand">
        <a className="navbar-item logo-wrapper" onClick={e => trigger()}>
          <img src="logo.png" className="logo" alt="logo" />
        </a>
        <a className="navbar-item" onClick={e => toggle()}>{title}</a>
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
  onAppnavClick: PropTypes.func,
};

export default Navbar;
