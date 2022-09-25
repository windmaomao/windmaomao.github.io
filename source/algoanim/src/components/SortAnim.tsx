import { useState, useEffect } from 'react';
import SortCanvas from './SortCanvas';
import SliderControl from './SliderControl';
import {
  StateType,
  getInitialState,
  reducer,
  rawObjPos,
} from '../utils/selectionSort';
import { randNumbers } from '../utils';

function SortAnim() {
  const [arr, setArr] = useState<number[]>([]);
  const [pos, setPos] = useState<number[]>([]);
  const [outter, setOutter] = useState(-1);
  const [inner, setInner] = useState(-1);
  const [marker, setMarker] = useState(-1);
  const [slowness, setSlowness] = useState(50);

  useEffect(() => {
    let s: StateType = getInitialState(arr);
    const h = setInterval(() => {
      if (s.done) {
        clearInterval(h);
        return;
      }
      s = reducer(s);
      setPos(rawObjPos(s));
      setOutter(s.i);
      setInner(s.j);
      setMarker(s.t);
    }, slowness * 10);
    return () => {
      clearInterval(h);
    };
  }, [arr, slowness]);

  const onReload = () => {
    setArr(randNumbers(count, 400));
  };

  const [size, setSize] = useState(42);

  const [count, setCount] = useState(12);
  useEffect(() => {
    onReload();
  }, [count]);

  return (
    <div style={{ marginTop: '2rem' }}>
      <div style={{ float: 'right' }}>
        <button onClick={onReload}>Reload</button>
      </div>
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <SliderControl
          value={slowness}
          set={setSlowness}
          min={1}
          max={100}
        >
          Slowness
        </SliderControl>
        <SliderControl
          value={count}
          set={setCount}
          min={2}
          max={35}
        >
          Item count
        </SliderControl>
        <SliderControl
          value={size}
          set={setSize}
          min={10}
          max={200}
        >
          Item size
        </SliderControl>
      </div>
      <SortCanvas
        arr={arr}
        pos={pos}
        size={size}
        outter={outter}
        inner={inner}
        marker={marker}
      />
    </div>
  );
}

export default SortAnim;
