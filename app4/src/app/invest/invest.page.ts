/**
 * Common Page
 */

import { Component } from '@angular/core';
import { StockService } from './services/stock.service';

@Component({
  template: `
    <app-layout>
      <div class="container">
        <div class="level is-mobile">
          <div class="level-left">
            <div class="select is-small is-info">
              <select [(ngModel)]="watchlistIndex" (ngModelChange)="watchlistChanged($event)">
                <option value="" disabled selected>Watchlist</option>
                <option [value]="i" *ngFor="let list of watchlists; let i = index">
                  {{ list.key | titlecase  }}
                </option>
              </select>
            </div>&nbsp;
            <div class="select is-small">
              <select [(ngModel)]="durationYear">
                <option value="" disabled selected>Duration</option>
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
                <option value="4">4 Years</option>
                <option value="5">All</option>
              </select>
            </div>
          </div>
          <div class="level-right">
            <input class="input is-small" type="text" placeholder="Search"
              [(ngModel)]="tickerSearch"
            />
          </div>
        </div>
        <table class="table is-narrow is-striped is-hoverable is-fullwidth">
          <tbody>
            <tr *ngFor="let ticker of filterTickers(tickers)">
              <td class="has-text-right">
                {{ ticker.symbol }}
              </td>
              <td class="has-text-centered">
                <app-spark [items]="ticker.closes" [limit]="durationYear*12"></app-spark>
              </td>
              <td class="has-text-right">
                <app-gain [number]="ticker.gain"></app-gain>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </app-layout>
  `,
  styles: [`
    td {
      font-family: monospace;;
    }
  `]
})
export class InvestPageComponent {
  watchlists = [
    { key: 'watch', items: ['TSLA', 'GE', 'TIF', 'UUP', 'DBC'] },
    {
      key: 'own',
      items: [
        'ADSK', 'ALNY', 'BLUE', 'BND', 'DRV',
        'EDZ', 'GE', 'HSBC', 'LABD', 'MD', 'RIOT',
        'SRTY', 'TIF', 'TSLA', 'UNG', 'UUP', 'XNET'
      ]
    },
    {
      key: 'high',
      items: [
        'XNET', 'WOOD', 'TIF', 'SRE', 'SAGE', 'SBUX', 'RCL',
        'OSTK', 'MTW', 'ITB', 'HLF', 'DNKN', 'COP',
        'CB', 'BSET', 'BLUE', 'BHP', 'AXP', 'ALNY',
        'ALL', 'AKZOY', 'ADSK', 'ADBE'
      ]
    },
    {
      key: 'low',
      items: [
        'ANDV', 'AWRRF', 'BBBY', 'BT', 'CHL', 'DB',
        'DBC', 'DDD', 'FE', 'GE', 'HSBC', 'IMBBY',
        'MD', 'RHHBY', 'SHLD', 'TEF', 'UNG'
      ]
    }
  ];
  watchlistIndex = 0;
  durationYear = 5;
  tickerSearch = '';
  tickers = [];

  constructor(private stockService: StockService) {
    this.update();
  }

  update() {
    this.tickers = [];
    const id = this.watchlistIndex;
    const symbols = this.watchlists[id].items;
    const watchlist$ = this.stockService.watchlist$(symbols);
    watchlist$.subscribe(ticker => {
      this.tickers.push(ticker);
    });
  }

  watchlistChanged(index) {
    this.update();
  }

  filterTickers(tickers) {
    const search = this.tickerSearch.toUpperCase();
    if (search) {
      return tickers.filter(item => {
        return item.symbol.indexOf(search) >= 0;
      });
    }
    return tickers;
  }
}
