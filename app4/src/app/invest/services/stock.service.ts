/**
 * Invest Service
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, empty, from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class StockService {
  // debug = true;
  debug = false;
  apiKey = 'T0M13EE9U7PHS2B4';
  queryUrl = 'https://www.alphavantage.co/query';
  freqTypes = {
    daily: 'TIME_SERIES_DAILY',
    monthly: 'TIME_SERIES_MONTHLY_ADJUSTED',
  };
  tickerFreq = 'monthly';

  constructor(private http: HttpClient) {}

  price$(symbol) {
    if (this.debug) {
      return this.http.get('/price');
    }

    const params = (func) => {
      return {
        params: {
          function: func,
          symbol: symbol,
          interval: '60min',
          outputsize: 'compact',
          apikey: this.apiKey
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

    const type = this.freqTypes[this.tickerFreq];
    const http = this.http.get(this.queryUrl, params(type))
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
