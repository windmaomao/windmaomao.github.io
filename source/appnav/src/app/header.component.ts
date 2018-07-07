/*
 * Header component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-fixed-top is-light" role="navigation">
      <div class="navbar-brand">
        <a class="navbar-item" (click)="logo()" title="Swith app">
          <img src="https://windmaomao.github.io/logo.png" class="logo"> &nbsp;
        </a>
        <a class="navbar-item center">{{ title }}</a>
        <div class="navbar-burger burger"
          [ngClass]="{ 'is-active': open }"
          (click)="toggle()" data-target="navbar"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu" id="navbar" [ngClass]="{ 'is-active': open }">
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Table of Content</a>
            <div class="navbar-dropdown">
              <aside class="menu">
                <ul class="toc menu-list">
                  <li *ngFor="let m of toc" [ngClass]="'h' + m.level">
                    <a>{{ m.title }}</a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = '';
  open = false;
  toc = [
    { title: 'Vue.js: Up and Running', level: 1 },
    { title: 'Preface', level: 2 },
    { title: 'Vue.js: The Basics', level: 2 },
    { title: 'Why Vue.js?', level: 3 },
    { title: 'Installation and setup', level: 3 },
    { title: 'Templates, data and directives', level: 3 },
    { title: 'Components in Vue.js', level: 2 },
    { title: 'Styling with Vue', level: 2 },
    { title: 'Render functions and JSX', level: 2 },
    { title: 'Client-side routing with vue-router', level: 2 },
    { title: 'State management with Vuex', level: 2 }
  ];

  toggle() {
    this.open = !this.open;
  }

  logo() {
    // TODO: Chrome version
    // const event = new CustomEvent('Sidenav', { detail: 1 });
    // if (window.parent) {
    //   window.parent.document.dispatchEvent(event);
    // }

    // IE version
    const event = document.createEvent('CustomEvent');
    event.initCustomEvent('Sidenav', false, false, {});
    if (window.parent) {
      window.parent.document.dispatchEvent(event);
    }
  }
}

