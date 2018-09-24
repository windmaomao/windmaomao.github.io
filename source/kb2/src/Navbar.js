import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const title = 'ABC';
    return (
      <nav className="navbar is-light is-fixed-top">
        <div className="navbar-brand">
          <a className="navbar-item logo-wrapper">
            <img src="static/img/logo.png" className="logo" alt="logo" />
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
        <div className={this.toggled ? 'navbar-menu is-active' : 'navbar-menu'} id="navbar" >
          <div className="navbar-end">
            <div className={{ 'navbar-item': 1, 'has-dropdown': 1, 'is-active': this.activated }}>
              <a className="navbar-link" onClick={this.onActivate}>Table of Content</a>
              <div className="navbar-dropdown">
                <aside className="menu">
                  <ul className="toc menu-list">{
                    // this.toc.map((menu) =>
                    //   <li class={menu.tag}>
                    //     <a href={'#' + menu.anchor} onClick={this.onToggle}>{menu.title}</a>
                    //   </li>
                    // )
                  }</ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
