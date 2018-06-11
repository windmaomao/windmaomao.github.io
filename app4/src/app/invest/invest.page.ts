/**
 * Common Page
 */

import { Component } from '@angular/core';
import { StockService } from './services/stock.service';

@Component({
  template: `
    <app-layout>
      <section class="section">
        <div class="container">
          <h1 class="title">Invest</h1>

        </div>
      </section>
    </app-layout>
  `,
})
export class InvestPageComponent {
  menu = [
    { title: 'Own', items: ['TSLA', 'GE'] }
  ];
  tickers = [
    { symbol: 'AB', price: 123, gain: -0.02, prevs: [] }
  ];

  constructor(private stockService: StockService) {
    this.setup();
  }

  setup() {
    const price$ = this.stockService.price$('TSLA', 'monthly');
    price$.subscribe(console.log);
  }
}
