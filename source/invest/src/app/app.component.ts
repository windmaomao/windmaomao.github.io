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
    <div class="layout">
      <app-navbar></app-navbar>
      <div class="sidebar"></div>
      <div class="main"></div>
    </div>
  `,
  styleUrls: [`./app.component.scss`]
})
export class AppComponent implements OnInit {
  prod = environment.production;

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

}
