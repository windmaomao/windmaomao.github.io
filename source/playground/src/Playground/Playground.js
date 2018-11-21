import React from 'react';
import {inject} from 'mobx-react';

const Playground = ({ layout }) => {
  const {showMessage} = layout;
  return (
    <div>
      <span>Page</span>
      <button 
        onClick={e => {showMessage(); }}
      >
        Open
      </button>
    </div>
  );
};

export default inject('layout')(Playground);
