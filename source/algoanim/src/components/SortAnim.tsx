import { useState, useEffect } from 'react';
import SortCanvas from './SortCanvas';
import {
  StateType,
  getInitialState,
  reducer,
  rawObjPos,
} from '../utils/selectionSort';

function SortAnim() {
  const [arr, setArr] = useState([3, 1]);
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
    }, 500);
    return () => {
      clearInterval(h);
    };
  }, [arr]);
  console.log(pos);
  return <SortCanvas pos={pos} />;
}

export default SortAnim;
