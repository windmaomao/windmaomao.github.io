import * as React from 'react';
import './Header.css';

const logo = require('./logo.png');

export interface MenuProp {
  title: string;
  items: string[];
}

export interface Props {
  menus?: MenuProp[];
}

class Header extends React.Component<Props, object> {
  render() {
    return (
      <nav className="navbar is-light is-fixed-top" role="navigation">
        {this.renderBrand()}
        {this.renderMenu()}
      </nav>
    );
  }
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
  renderMenu() {
    if (!this.props.menus) {
      return null;
    }
    return (
      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">{
          this.props.menus.map((menu, idx) =>
            <div className="navbar-item has-dropdown is-hoverable" key={idx}>
              <a className="navbar-link">{menu.title}</a>
              <div className="navbar-dropdown">{
                menu.items.map((name, idx2) =>
                  <a className="navbar-item capitalize" key={idx2}>{name}</a>
                )
              }</div>
            </div>
          )
        }</div>
      </div>
    );
  }
}

export default Header;
