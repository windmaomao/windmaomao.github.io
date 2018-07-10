/*
 * App component
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { APPS } from './app.const';

@Component({
  selector: 'app-root',
  template: `
    <div id="app">
      <app-sidenav id="sidenav"
        [apps]="apps" [selected]="appUrl" (select)="switch($event)"
        [ngClass]="{ open: open }"
      ></app-sidenav>
      <div id="content" [ngClass]="{ open: open }">
        <app-header *ngIf="!prod"></app-header>
        <iframe [src]="url(appUrl) | safe"
          frameborder="0" style="width:100%; height:calc(100vh);"
        ></iframe>
      </div>
    </div>
  `,
  styleUrls: [`./app.component.scss`]
})
export class AppComponent implements OnInit {
  prod = environment.production;
  open = false;
  apps = [];
  appUrl = '';
  app = '';
  private sub;
  private params;

  constructor(private http: HttpClient) {
    this.parse();
    this.fetch();
  }

  ngOnInit() {
    const that = this;
    document.addEventListener('Sidenav', function(e) {
      that.toggle();
    });
  }

  toggle(status?) {
    if (status) {
      this.open = (status === 'off') ? false : true;
    } else {
      this.open = !this.open;
    }
  }

  fetch() {
    if (!this.prod) {
      this.apps = APPS;
      this.switch();
    } else {
      const api$ = this.http.get(environment.appUrl);
      this.sub = api$.subscribe((res: any[]) => {
        this.apps = res;
        this.switch();
      });
    }
  }

  switch(app?) {
    if (!app) {
      if (this.apps.length) {
        app = this.apps[0];
      }
    }
    if (app) {
      this.appUrl = app.url;
      document.title = app.title;
    }
    this.toggle('off');
  }

  url(u) {
    let res = u + '/index.html';
    if (this.params) {
      res = res + '?' + this.params;
    }
    return res;
  }

  parse() {
    const url = window.location.href;
    const parts = url.split('?');
    if (parts.length > 1) {
      this.params = parts[1];
    }
  }

}
