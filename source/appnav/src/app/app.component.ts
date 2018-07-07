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
        [apps]="apps" (select)="switch($event)"
        [ngClass]="{ open: open }"
      ></app-sidenav>
      <div id="content" [ngClass]="{ open: open }">
        <app-header *ngIf="!prod"></app-header>
        <iframe [src]="app | safe"
          frameborder="0" style="width:100%; height:calc(100vh);"
        ></iframe>
      </div>
    </div>
  `,
  styleUrls: [`./app.component.scss`]
})
export class AppComponent implements OnInit {
  prod = environment.production;
  url = '/app.json';
  open = false;
  apps = [];
  app = '/kb/index.html';
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

  switch(event) {
    if ('url' in event) {
      this.app = event.url + '/index.html';
      console.log(this.app);
    }
  }

}
