/**
 * Common Page
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { IEXService } from './services/iex.service';
import { ActivityService } from '../common/services/activity.service';

@Component({
  template: `
    <app-layout>
      <div class="container">
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
            </div>&nbsp;
            <div class="control has-icons-left">
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
              <span class="icon is-small is-left">
                <i class="far fa-calendar-alt"></i>
              </span>
            </div>
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
        <p class="has-text-right">
          <i class="fas fa-chart-line"></i>
          <small>
            {{ tickers.length }} items
          </small>
          <app-spinner *ngIf="activity$ | async"></app-spinner>
        </p>
        <ngx-datatable class="bootstrap"
          [rows]="tickers"
          [rowHeight]="'auto'"
          [columns]="columns"
          [columnMode]="'force'"
          [sorts]="[{ prop: 'symbol', dir: 'asc' }]"
        >
          <ngx-datatable-column name="Symbol" [width]="60">
            <ng-template let-row="row" ngx-datatable-cell-template>
              <span title="{{ row.title + ' ' + row.sector }}">{{ row.symbol }}</span>
            </ng-template>
          </ngx-datatable-column>
          <ngx-datatable-column prop="closes" [width]="300">
            <ng-template let-row="row" ngx-datatable-cell-template>
              <app-spark [items]="row.closes" [limit]="48"></app-spark>
            </ng-template>
          </ngx-datatable-column>
          <ngx-datatable-column name="Gain" [width]="80">
            <ng-template let-value="value" ngx-datatable-cell-template>
              <app-gain [number]="value"></app-gain>
            </ng-template>
          </ngx-datatable-column>
        </ngx-datatable>
        <!--<table class="table is-narrow is-striped is-hoverable is-fullwidth">
          <tbody>
            <tr *ngFor="let ticker of filterTickers(tickers)">
              <td class="has-text-right symbol">
                {{ ticker.symbol }}
              </td>
              <td class="has-text-centered">
                <app-spark [items]="ticker.closes" [limit]="durationYear*12"></app-spark>
              </td>
              <td class="has-text-right gain">
                <app-gain [number]="ticker.gain"></app-gain>
              </td>
            </tr>
          </tbody>
        </table>-->
      </div>
    </app-layout>
  `,
  styles: [`
    td {
      font-family: monospace;
    }
    td.symbol {
      width: 4rem;
    }
    td.gain {
      width: 6rem;
    }
  `]
})
export class InvestPageComponent implements OnInit, OnDestroy {
  watchlists: any;
  watchlistIndex = 0;
  durationYear = 4;
  tickerSearch = '';
  tickers = [];
  watchlistsSub;
  activity$;
  columns = [
    { name: 'Symbol' },
    { name: 'Closes' },
    { name: 'Gain' },
  ]

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

}
