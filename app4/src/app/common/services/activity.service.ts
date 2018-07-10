/**
 * Common Activity
 */

import { Injectable } from '@angular/core';
import { interval, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const TOUCH_AMOUNT = 1000;
const COOLDOWN_AMOUNT = 500;
const MAX_AMOUNT = 2000;
const MIN_AMOUNT = 0;

@Injectable()
export class ActivityService {
  activity$ = new BehaviorSubject<number>(0);
  counter = 0;

  constructor() {
    const update$ = interval(500).pipe(
      map(() => this.cool())
    );
    update$.subscribe(this.activity$);
  }

  touch() {
    this.counter = this.counter + TOUCH_AMOUNT;
    if (this.counter > MAX_AMOUNT) {
      this.counter = MAX_AMOUNT;
    }
    this.activity$.next(this.counter);
  }

  cool() {
    this.counter = this.counter - COOLDOWN_AMOUNT;
    if (this.counter < 0) {
      this.counter = 0;
    }
    return this.counter;
  }

}
