import {
  getInitialState,
  reducer,
  rawObjPos,
} from './selectionSort';

describe('Selection Sort', () => {
  test('should get inital state', () => {
    const s = getInitialState([1, 3]);
    expect(s.done).toEqual(false);
    expect(s.i).toEqual(0);
    expect(s.j).toEqual(0);
    expect(s.t).toEqual(0);
    expect(s.array).toEqual([1, 3]);
    expect(s.raw[0].value).toEqual(1);
    expect(s.raw[1].value).toEqual(3);
    expect(s.index).toEqual([0, 1]);
    expect(rawObjPos(s)).toEqual([0, 1]);
  });

  test('should reduce to next state for n = 2', () => {
    let s = getInitialState([3, 1]);

    s = reducer(s);
    expect(s.done).toEqual(false);
    expect(s.i).toEqual(0);
    expect(s.j).toEqual(1);
    expect(s.t).toEqual(1);
    expect(s.index).toEqual([0, 1]);
    expect(rawObjPos(s)).toEqual([0, 1]);

    s = reducer(s);
    expect(s.done).toEqual(true);
    expect(s.index).toEqual([1, 0]);
    expect(rawObjPos(s)).toEqual([1, 0]);
  });

  test('should reduce to next state for n = 3', () => {
    let s = getInitialState([3, 1, 2]);

    s = reducer(s);
    expect(s.done).toEqual(false);
    expect(s.i).toEqual(0);
    expect(s.j).toEqual(1);
    expect(s.t).toEqual(1);
    expect(s.index).toEqual([0, 1, 2]);

    s = reducer(s);
    expect(s.done).toEqual(false);
    expect(s.i).toEqual(0);
    expect(s.j).toEqual(2);
    expect(s.t).toEqual(1);
    expect(s.index).toEqual([0, 1, 2]);
    expect(rawObjPos(s)).toEqual([0, 1, 2]);

    s = reducer(s);
    expect(s.done).toEqual(false);
    expect(s.i).toEqual(1);
    expect(s.j).toEqual(2);
    expect(s.t).toEqual(2);
    expect(s.index).toEqual([1, 0, 2]);
    expect(rawObjPos(s)).toEqual([1, 0, 2]);

    s = reducer(s);
    expect(s.done).toEqual(true);
    expect(s.index).toEqual([1, 2, 0]);
    expect(rawObjPos(s)).toEqual([2, 0, 1]);
  });
});
