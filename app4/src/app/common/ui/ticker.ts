/**
 * Invest Ticker
 */

import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ticker',
  template: `
    <article class="message is-primary is-small" *ngIf="ticker">
      <div class="message-header" (click)="toggle()">
        <p class="cell">{{ ticker.symbol }} - $ {{ ticker.price }}</p>
        <p class="cell" title="ticker.company">{{ ticker.company | ellipsis:25 }}</p>
        <p class="cell">{{ ticker.sector }}</p>
      </div>
      <div class="message-body" *ngIf="detail">
        <div class="is-pulled-right">
          <a class="delete" title="Close" (click)="toggle()"></a>
        </div>
        <div class="has-text-centered" style="padding: 0 1rem 1rem 1rem;">
          <app-spark [items]="ticker.closes" [limit]="60"></app-spark>
        </div>
        <div class="columns is-multiline">
          <div class="column is-6" *ngFor="let article of ticker.news">
            <article class="media">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img [src]="article.image | trim">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <strong [innerHTML]="article.headline"></strong>
                  <br />
                  <i>{{ article.source }}</i>
                  <small class="has-text-grey" title="article.datetime">
                    {{ article.datetime | ellipsis:10 }}
                  </small>
                  <br />
                  <small class="">
                    {{ article.related | ellipsis:50 }}
                  </small>
                  <br />
                  {{ article.summary | ellipsis:200 }}
                </div>
                <nav class="level is-mobile">
                  <div class="level-left">
                    <a class="level-item" [href]="article.url | trim" target="_blank">
                      <span class="icon is-small"><i class="fas fa-external-link-alt"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fas fa-heart"></i></span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
          </div>
        </div>
      </div>
    </article>
  `,
  styles: [`
    .message-header {
      cursor: pointer;
    }
    .cell {
      width: 25%;
    }
  `]
})
export class CommonTickerComponent implements OnChanges {
  @Input() ticker: any;
  detail = false;

  constructor() {}
  ngOnChanges() {}

  toggle() {
    this.detail = !this.detail;
  }
}
