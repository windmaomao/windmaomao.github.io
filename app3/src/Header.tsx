import * as React from 'react';
import './Header.css';

const logo = require('./logo.png');

export interface MenuProp {
  title: string;
}

export interface Props {
  menus?: MenuProp[];
}

class Header extends React.Component<Props, object> {
  renderBrand() {
    return (
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <div className="navbar-burger burger" data-target="navbar" id="burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
  renderTopItem() {
    const title = 'Home';
    return (
      <div className="navbar-item has-dropdown">
        <a className="navbar-link">{title}</a>
      </div>
    );
  }
  renderMenu() {
    if (!this.props.menus) {
      return null;
    }
    return (
      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">
          {this.renderTopItem()}
        </div>
      </div>
    );
  }
  render() {
    return (
      <nav className="navbar is-light is-fixed-top" role="navigation">
        {this.renderBrand()}
        {this.renderMenu()}
      </nav>
    );
  }
}

export default Header;
