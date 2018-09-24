import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const title = 'ABC';
    return (
      <nav class="navbar is-light is-fixed-top">
        <div class="navbar-brand">
          <a class="navbar-item logo-wrapper">
            <img src="static/img/logo.png" class="logo" alt="logo" />
          </a>
          <a class="navbar-item center">{title}</a>
          <div data-target="navbar"
            class={{ 'navbar-burger': 1, 'burger': 1, 'is-active': this.toggled }}
            onClick={this.onToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class={this.toggled ? 'navbar-menu is-active' : 'navbar-menu'} id="navbar" >
          <div class="navbar-end">
            <div class={{ 'navbar-item': 1, 'has-dropdown': 1, 'is-active': this.activated }}>
              <a class="navbar-link" onClick={this.onActivate}>Table of Content</a>
              <div class="navbar-dropdown">
                <aside class="menu">
                  <ul class="toc menu-list">{
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
