/*
 * Sidenav component
 */

import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() apps: any[];
  @Input() selected: string;
  @Output() select = new EventEmitter<string>();

  toggleMenu(m) {
    this.select.emit(m);
  }

  isActive(m) {
    return m.url === this.selected;
  }
}

