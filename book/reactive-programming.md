# Reactive Programming with RxJS 5



# 1. The Reactive Way

## Observers and Iterators

To understand where Observables come from we need to look at their foundations: the Observer and Iterator software patterns.

# 2. Deep in the Sequence

## Basic Sequence Operators

### Map

`map` returns a new Observable with the transformed values.

```javascript
const src = Observable.range(1, 5);
const upper = src.map(name => name * 2);
```

### Filter

`filter` returns an Observable sequence of all the elements for which the function returned `true`.

```javascript
const src = Observable.range(1, 5);
const even = src.filter(value => (value mod 2 == 0));
```

### Reduce

`reduce` returns a new Observable that always contains a single item, which is the result of applying a function over each element. It is a crucial operator, in fact, the base implementation for a whole subset of methods called _aggregate operators_ where an entire sequence is processed and a single value is returned. Other similar operator as `first` or `average`.

```javascript
const src = Observable.range(1, 5);
const sum = src.reduce((acc, x) => acc + x, 0);
```

