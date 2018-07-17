/*
 * App component
 */

import { Store } from '@ngrx/store';
import { AppStore, AppActions } from './app.reducer';

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <div id="app" *ngIf="!error">
      <app-sidenav id="sidenav"
        [apps]="apps$ | async" [selected]="appUrl" (select)="switch($event)"
        [ngClass]="{ open: open }"
      ></app-sidenav>
      <div id="content" [ngClass]="{ open: open }">
        <app-header *ngIf="!prod"></app-header>
        <iframe [src]="url(appUrl) | safe" *ngIf="prod"
          frameborder="0" style="width:100%; height:calc(100vh);"
        ></iframe>
      </div>
    </div>
    <section class="hero is-light is-fullheight" *ngIf="error">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">We're sorry...</h1>
          <h2 class="subtitle">{{ error }}</h2>
        </div>
      </div>
    </section>
  `,
  styleUrls: [`./app.component.scss`]
})
export class AppComponent implements OnInit {
  public prod = environment.production;
  public open;
  public apps$;
  public appUrl = '';
  public error;
  private params;

  constructor(private store: Store<AppStore>) {}

  ngOnInit() {
    this.store.dispatch(AppActions.fetchApps());
    this.store.select('slider').subscribe(status => {
      this.open = status;
    });
    this.store.select('app').subscribe(app => {
      this.switch(app);
    });
    this.apps$ = this.store.select('apps');
    this.store.select('error').subscribe(err => {
      this.error = err;
    });

    this.parse();
    const that = this;
    document.addEventListener('Sidenav', function(e) {
      that.toggle();
    });
  }

  toggle(status?) {
    let open = false;
    if (status) {
      open = (status === 'off') ? false : true;
    } else {
      open = !this.open;
    }
    this.store.dispatch(AppActions.toggleSlider(open));
  }

  switch(app) {
    if (app) {
      this.appUrl = app.url;
      document.title = app.title;
      this.toggle('off');
    }
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
