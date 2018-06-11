/**
 * Invest Spark
 */

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spark',
  template: `
    <span>{{ line }}</span>
  `,
  styles: [`
    span {
      color: lightsteelblue;
      letter-spacing: 0px;
    }
  `]
})
export class CommonSparkComponent implements OnInit {
  @Input() items: any[];
  @Input() limit: number;
  symbols = ['▁', '▂', '▃', '▅', '▇'];
  line = '';

  constructor() {}

  ngOnInit() {
    this.update();
  }

  update() {
    let data = [];
    if (this.items.length) {
      if (this.limit) {
        data = this.items.slice(0, this.limit - 1);
      } else {
        data = this.items.slice();
      }
    }
    const max = data.reduce((a, b) => Math.max(a, b));
    const min = data.reduce((a, b) => Math.min(a, b));
    const fit = val => {
      const n = Math.round((val - min) / (max - min) * 4);
      return this.symbols[n];
    }

    if (data) {
      this.line = data.map(fit).join('');
    } else {
      this.line = '';
    }

    console.log(this.line);
  }
}
