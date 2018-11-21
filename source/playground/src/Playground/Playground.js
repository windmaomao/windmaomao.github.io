import React from 'react';
import {inject} from 'mobx-react';

const Playground = ({ layout }) => {
  const {showMessage} = layout;
  return (
    <div>
      <h1>Welcome to Playground</h1>
      <button 
        onClick={e => {showMessage(); }}
      >
        Open Message
      </button>
    </div>
  );
};

export default inject('layout')(Playground);
