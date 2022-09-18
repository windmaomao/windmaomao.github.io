interface ValueType {
  value: number;
}

export interface StateType {
  done: boolean;
  array: number[];
  raw: ValueType[];
  index: number[];
  i: number;
  j: number;
  t: number;
}

export const getInitialState = (
  array: number[],
): StateType => {
  // make original an array of object
  // so we can find this object by reference
  const raw = array.map((value) => ({ value }));
  const index = array.map((_, i) => i);
  return {
    done: false,
    array,
    raw,
    index,
    i: 0,
    j: 0,
    t: 0,
  };
};

export const reducer = (state: StateType): StateType => {
  let done = state.done;
  if (done) return state;

  let { i, j, t, array, raw } = state;
  const index = [...state.index];
  const n = array.length;

  // inner loop
  j++;
  if (j === n) {
    if (t !== i) {
      // swap index[t] and index[i]
      [index[i], index[t]] = [index[t], index[i]];
    }

    // outer loop
    i++;
    j = i + 1;
    t = i;
    if (i === n - 1) {
      done = true;
      return { done, i, j, t, array, raw, index };
    }
  }

  if (raw[index[j]].value < raw[index[t]].value) {
    t = j;
  }

  return { done, i, j, t, array, raw, index };
};

// Based on the state, generate element positions
// where each raw element is tracked from the original array
export const rawObjPos = (state: StateType): number[] => {
  const { raw, index } = state;
  return raw.map((_, i) => index.indexOf(i));
};
