/**
 * Invest Spark
 */

import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-spark',
  template: `
    <span class="is-unselectable has-text-centered">{{ line }}</span>
  `,
  styles: [`
    span {
      color: lightsteelblue;
      font-size: 0.65rem;
      letter-spacing: -0.1rem;
    }
  `]
})
export class CommonSparkComponent implements OnChanges {
  @Input() items: any[];
  @Input() limit: number;
  symbols = ['▂', '▃', '▅', '▆', '▇']; // ▁
  line = '';

  constructor() {}

  ngOnChanges() {
    this.update();
  }

  update() {
    let raw = [];
    if (this.items.length) {
      if (this.limit) {
        raw = this.items.slice(0, this.limit - 1);
      } else {
        raw = this.items.slice();
      }
    }
    const data = raw.map(val => parseFloat(val));
    const max = data.reduce((a, b) => Math.max(a, b));
    const min = data.reduce((a, b) => Math.min(a, b));
    const count = this.symbols.length - 1;
    const fit = val => {
      const n = Math.round((val - min) / (max - min) * count);
      // return n;
      return this.symbols[n];
    }

    if (data) {
      this.line = data.map(fit).join('');
    } else {
      this.line = '';
    }
  }
}
