/**
 * Invest Service
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, empty, from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class StockService {
  queryUrl = 'https://www.alphavantage.co/query';
  freqTypes = {
    daily: 'TIME_SERIES_DAILY',
    monthly: 'TIME_SERIES_MONTHLY_ADJUSTED',
  };
  tickerFreq = 'monthly';

  constructor(private http: HttpClient) {}

  price$(symbol) {
    const params = (func, symbol) => {
      return {
        params: {
          function: func,
          symbol: symbol,
          interval: '60min',
          outputsize: 'compact',
          apikey: 'T0M13EE9U7PHS2B4'
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
    const parseData = (symbol, body) => {
      const data = Object.values(body)
      const series = Object.values(data[1])
      const prices = Object.values(series[0])
      const price = prices[3]
      const prevs = Object.values(series[1])
      const prev = prevs[3]
      const gain = calcGain(price, prev)
      // const closes = series.map(item => {
      //   const values = Object.values(item);
      //   return Math.log10(values[3]);
      // });
      return { symbol, price, prev, gain }
    };

    const type = this.freqTypes[this.tickerFreq];
    const http = this.http.get(this.queryUrl, params(type, symbol))
    return http.pipe(
      map(res => parseData(symbol, res)),
      catchError(() => empty())
    );
  }

  watchlist$(symbols) {
    return from(symbols).pipe(
      mergeMap(symbol => this.price$(symbol))
    );
  }
}