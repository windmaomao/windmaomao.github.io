/*
 * Sidenav component
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `
    <aside class="menu">
      <p class="menu-label">
        Apps
      </p>
      <ul class="menu-list">
        <li *ngFor="let m of apps">
          <a (click)="toggleMenu(m)" [ngClass]="{ 'is-active': isActive(m) }">
            <i [ngClass]="'fa fa-' + m.icon"></i>&nbsp;
            {{ m.title }}
          </a>
        </li>
      </ul>
    </aside>
  `,
  styleUrls: []
})
export class SidenavComponent {
  current = '/blog';
  menu = [
    { title: 'Knowledge Base',  icon: 'book', url: '/blog' },
    { title: 'Invest Watchlist', icon: 'line-chart', url: '/invest' },
    { title: 'Simply Math', icon: 'calculator', url: '/math' },
    { title: 'Family Tree', icon: 'tree', url: '/family' },
    { title: 'Single Handed', icon: 'keyboard-o', url: '/keyboard' },
  ];
  @Input() apps: any[];

  toggleMenu(m) {}

  isActive(m) {
    return m.url === this.current;
  }
}

