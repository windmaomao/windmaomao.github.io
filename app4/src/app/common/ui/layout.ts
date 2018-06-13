/**
 * Common Layout
 */

import { Component } from '@angular/core';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-layout',
  template: `
    <div class="layout">
      <app-navbar></app-navbar>
      <div class="content">
        <div class="sidebar"></div>
        <div class="main">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .main {
      padding: 2rem;
    }
  `]
})
export class CommonLayoutComponent {
  constructor(private activityService: ActivityService) {
    activityService.touch();
    // activityService.activity$.subscribe(console.log);
  }
}
