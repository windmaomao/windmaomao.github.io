/**
 * IEX Service
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { pipe, empty, from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { IEX } from './iex.const';

@Injectable()
export class IEXService {

  constructor(private http: HttpClient) {}

  watchers$(symbols: string[]) {
    let url = IEX.queryUrl;

    if (IEX.debug) {
      url = IEX.debugUrl;
    }

    const calcGain = (price, prev) => {
      if (prev) {
        return (price - prev) / prev
      } else {
        return 0.0
      }
    };
    const parseData = (res) => {
      const arr = [];
      Object.keys(res).forEach(key => {
        const ticker = res[key];
        const quote = ticker.quote;
        const news = ticker.news;
        const chart = ticker.chart;
        const closes = chart.map(item => item.close);

        arr.push({
          symbol: quote.symbol,
          company: quote.companyName,
          sector: quote.sector,
          price: quote.latestPrice,
          news: news,
          closes: closes,
          gain: calcGain(quote.latestPrice, closes[1]),
          day: quote.changePercent,
          volumn: quote.latestVolume,
          ytd: quote.ytdChange
        })
      });
      return arr;
    };

    const params = !IEX.debug ? new HttpParams({
      fromObject: {
        symbols: symbols.join(','),
        types: 'quote,news,chart',
        range: '5y',
        chartInterval: '22'
      }
    }) : {};

    return this.http.get(url, { params: params }).pipe(
      mergeMap((res: any) => {
        console.log(res);
        return from(parseData(res));
      }),
    );
  }

  watchlists$() {
    return this.http.get('/watchlists.json');
  }

}
