/**
 * Invest Service
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, empty, from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { STOCK } from './stock.const';

@Injectable()
export class StockService {
  tickerFreq = 'monthly';
  constructor(private http: HttpClient) {}

  price$(symbol) {
    if (STOCK.debug) {
      return this.http.get('/price');
    }

    const params = (func) => {
      return {
        params: {
          function: func,
          symbol: symbol,
          interval: '60min',
          outputsize: 'compact',
          apikey: STOCK.apiKey
        }
      }
    };
    const calcGain = (price, prev) => {
      if (prev) {
        return (price - prev) / prev
      } else {
        return 0.0
      }
    };
    const parseData = (body) => {
      const data = Object.values(body)
      const series = Object.values(data[1])
      const prices = Object.values(series[0])
      const price = prices[3]
      const prevs = Object.values(series[1])
      const prev = prevs[3]
      const gain = calcGain(price, prev)
      const closes = series.map(item => {
        const values = Object.values(item);
        return values[3];
      });
      return { symbol, price, prev, gain, closes }
    };

    const type = STOCK.freqTypes[this.tickerFreq];
    const http = this.http.get(STOCK.queryUrl, params(type))
    return http.pipe(
      map(res => parseData(res)),
      catchError(() => empty())
    );
  }

  watchlist$(symbols) {
    return from(symbols).pipe(
      mergeMap(symbol => this.price$(symbol))
    );
  }
}
