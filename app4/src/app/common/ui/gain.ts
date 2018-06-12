/**
 * Invest Gain
 */

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gain',
  template: `
    <span class="has-text-{{ number > 0 ? 'success': 'danger' }}">
<i>%</i>\
<i>{{ processed | number: '0.2-2' }}</i>\
<i class="fas fa-angle-{{ number > 0 ? 'up' : 'down' }}"></i>\
    </span>
  `,
  styles: [`
    span {
      font-size: 0.9rem;
    }
    i {
      padding: 0.15rem;
    }
  `]
})
export class CommonGainComponent implements OnInit {
  @Input() number: number;
  positive: boolean;
  processed: number;

  constructor() {}

  ngOnInit() {
    this.update();
  }

  update() {
    this.processed = this.number * 100;
  }
}
