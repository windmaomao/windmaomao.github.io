import * as React from 'react';
// import './App.css';

const logo = require('./logo.png');

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar is-light is-fixed-top" role="navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <div className="navbar-burger burger" data-target="navbar" id="burger">
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
