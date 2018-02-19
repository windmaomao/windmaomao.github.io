import * as React from 'react';
import './Slider.css';

export interface Props {
  isOpen: boolean;
}

export default function Slider(props: Props) {
  return (
    <div className="slider">
      <h1>Slider</h1>
    </div>
  );
}
