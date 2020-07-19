/**
 * Common Page
 */

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { IEXService } from './services/iex.service';
import { ActivityService } from '../common/services/activity.service';

@Component({
  template: `
    <app-layout>
      <div class="container">
        <!-- Ticker filter, search and display -->
        <div class="level is-mobile">
          <div class="level-left">
            <div class="control has-icons-left">
              <div class="select is-small is-info">
                <select [(ngModel)]="watchlistIndex" (ngModelChange)="watchlistChanged($event)">
                  <option value="" disabled selected>Watchlist</option>
                  <option [value]="i" *ngFor="let list of watchlists; let i = index">
                    {{ list.key | titlecase  }}
                  </option>
                </select>
              </div>
              <span class="icon is-small is-left">
                <i class="fas fa-tasks"></i>
              </span>
            </div>
          </div>
          <div class="level-left">
            <i class="fas fa-chart-line"></i>&nbsp;
            <small>{{ tickers.length }} items</small>&nbsp;
            <app-spinner *ngIf="activity$ | async"></app-spinner>
          </div>
          <div class="level-right">
            <div class="control has-icons-right">
              <input class="input is-small" type="text" placeholder="Search"
                [(ngModel)]="tickerSearch"
              />
              <span class="icon is-small is-right">
                <i class="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
        <!-- List of tickers -->
        <div *ngFor="let ticker of filterTickers(tickers)">
          <div class="ticker">
            <app-ticker [ticker]="ticker"></app-ticker>
          </div>
        </div>
      </div>
    </app-layout>
  `,
  styles: [`
    .ticker {
      margin-bottom: 1rem;
    }
  `]
})
export class InvestPageComponent implements OnInit, OnDestroy {
  watchlists: any;
  watchlistIndex = 0;
  tickerSearch = '';
  tickers = [];
  watchlistsSub;
  activity$;
  expanded: any = {};

  constructor(
    private iexService: IEXService,
    private activityService: ActivityService,
  ) {
    this.activity$ = activityService.activity$;
  }

  ngOnInit() {
    const watchlists$ = this.iexService.watchlists$();
    this.watchlistsSub = watchlists$.subscribe((res) => {
      this.watchlists = res;
      this.watchlistIndex = 0;
      this.update();
    });
  }

  ngOnDestroy() {
    this.watchlistsSub.unsubscribe();
  }

  update() {
    this.activityService.touch();
    this.tickers = [];
    const id = this.watchlistIndex;
    const symbols = this.watchlists[id].items;
    const watcher$ = this.iexService.watchers$(symbols);
    watcher$.subscribe(ticker => {
      this.activityService.touch();
      this.tickers = [...this.tickers, ticker];
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

  isExpanded(row) {
    const expanded = false;
    if (row.symbol in this.expanded) {
      return this.expanded[row.symbol];
    }
    return expanded;
  }

  toggle(row) {
    const expanded = this.isExpanded(row);
    this.expanded[row.symbol] = !expanded;
  }
}
