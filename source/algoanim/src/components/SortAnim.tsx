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
  const [original] = useState(randNumbers(8, 100));
  const [arr, setArr] = useState(original);
  const [pos, setPos] = useState<number[]>([]);
  const [outter, setOutter] = useState(-1);
  const [inner, setInner] = useState(-1);
  const [marker, setMarker] = useState(-1);

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
    }, 100);
    return () => {
      clearInterval(h);
    };
  }, [arr]);

  const onReload = () => {
    setArr([...original]);
  };

  const [size, setSize] = useState(48);

  return (
    <div style={{ marginTop: '2rem' }}>
      <div style={{ float: 'right' }}>
        <button onClick={onReload}>Reload</button>
      </div>
      <div style={{ marginTop: '1rem' }}>
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
