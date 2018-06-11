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
          <table class="table is-striped is-hoverable is-fullwidth">
            <tbody>
              <tr *ngFor="let ticker of tickers">
                <td>{{ ticker.symbol }}</td>
                <td title="{{ ticker.closes.length }}">
                  <app-spark [items]="ticker.closes" [limit]="24"></app-spark>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </app-layout>
  `,
  styles: [`
    td {
      font-family: monospace;;
      text-align: right;
    }
  `]
})
export class InvestPageComponent {
  menu = [
    { title: 'Own', items: ['TSLA', 'GE', 'TIF', 'UUP'] }
  ];
  tickers = [];
  data = [3, 2, 3, 2, 1, 0, 2];

  constructor(private stockService: StockService) {
    this.setup();
  }

  setup() {
    this.tickers = [];
    const symbols = this.menu[0].items;
    const watchlist$ = this.stockService.watchlist$(symbols);
    watchlist$.subscribe(ticker => {
      console.log(ticker);
      this.tickers.push(ticker);
    });
  }
}
