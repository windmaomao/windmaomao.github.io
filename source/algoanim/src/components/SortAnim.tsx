import { useState, useEffect } from 'react';
import SortCanvas from './SortCanvas';
import {
  StateType,
  getInitialState,
  reducer,
  rawObjPos,
} from '../utils/selectionSort';

function SortAnim() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([
    30, 0, 2, 17, 22, 5, 7, 11, 69, 77, 35,
  ]);
  const [pos, setPos] = useState<number[]>([]);

  useEffect(() => {
    let s: StateType = getInitialState(arr);
    const h = setInterval(() => {
      if (s.done) {
        clearInterval(h);
        return;
      }
      s = reducer(s);
      setPos(rawObjPos(s));
    }, 100);
    return () => {
      clearInterval(h);
    };
  }, [arr]);
  console.log(pos);
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>
        Reload
      </button>
      <SortCanvas key={count} arr={arr} pos={pos} />
    </>
  );
}

export default SortAnim;
