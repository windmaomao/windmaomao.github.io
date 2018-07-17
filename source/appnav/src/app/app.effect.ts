/**
 * App effect
 */

import { AppActions, FETCH_APPS } from './app.reducer';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';

@Injectable()
export class AppEffects {
  @Effect()
  fetch$: Observable<Action> = this.actions$.pipe(
    ofType(FETCH_APPS),
    mergeMap(action => this.api.fetchApps().pipe(
      mergeMap((data: any[]) => Observable.from([
        AppActions.addApps(data),
        AppActions.switchApp(data.length ? data[0] : null)
      ])),
      catchError((err) => Observable.of(
        AppActions.fetchFailed((err.message || ''))
      ))
    ))
  );

  constructor(private actions$: Actions, private api: ApiService) {}
}
