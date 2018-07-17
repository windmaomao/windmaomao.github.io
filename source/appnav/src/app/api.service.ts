/**
 * Api Service
 */

import { APPS } from './app.const';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  get(url, p): Observable<any> {
    const params = Object.assign(p || {}, { v: Math.random() });
    const addr = url;
    return this.http.get(addr, { params });
  }

  post(url, body, config?): Observable<any> {
    const addr = url;
    return this.http.post(addr, body, config);
  }

  fetchApps(): Observable<any> {
    if (!environment.production) {
      return Observable.of(APPS);
    } else {
      return this.http.get(environment.appUrl);
    }
  }
}
