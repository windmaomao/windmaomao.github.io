/**
 * Common Navbar
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar is-light is-fixed-top"
      role="navigation" aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item logo-wrapper">
          <img src="/assets/logo.png" alt="QPLOT: Personal Collections" />
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
  `,
})
export class CommonNavbarComponent {}
