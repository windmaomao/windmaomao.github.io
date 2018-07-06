/*
 * App component
 */

import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { APPS } from './app.const';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div id="app">
      <app-sidenav id="sidenav"
        [apps]="apps"
        [ngClass]="{ open: open }"
      ></app-sidenav>
      <div id="content" [ngClass]="{ open: open }">
        <app-header *ngIf="!debug && !prod"></app-header>
        <iframe [src]="app | safe" *ngIf="prod"
          frameborder="0" style="width:100%; height:100vh;"
        ></iframe>
      </div>
    </div>
  `,
  styleUrls: [`./app.component.scss`]
})
export class AppComponent implements OnInit {
  prod = environment.production;
  debug = true;
  url = '/app.json';
  open = false;
  apps = [];
  app = '/invest/index.html';
  private sub;

  constructor(private http: HttpClient) {
    this.fetch();
  }

  ngOnInit() {
    const that = this;
    document.addEventListener('Sidenav', function(e) {
      that.toggle();
    });
  }

  toggle() {
    this.open = !this.open;
  }

  fetch() {
    if (!this.prod) {
      this.apps = APPS;
    } else {
      const api$ = this.http.get(this.url);
      this.sub = api$.subscribe((res: any[]) => {
        this.apps = res;
      });
    }
  }

}
