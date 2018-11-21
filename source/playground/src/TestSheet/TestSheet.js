import React from 'react';
import {inject} from 'mobx-react';

const TestSheet = ({ layout }) => {
  return (
    <div>
      <h1>Test sheet</h1>
    </div>
  );
};

export default inject('layout')(TestSheet);
