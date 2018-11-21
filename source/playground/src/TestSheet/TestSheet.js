// libraries
import React from 'react';
import {observer} from 'mobx-react';
// components
import TestQuestion from './TestQuestion';
// services
import TestSheetStore from './TestSheetStore';
// locals
const sheet = new TestSheetStore();
sheet.addNewTest();

const TestSheet = () => {
  const {status, curQuestion} = sheet;
  const {questionCount} = status;
  return (
    <div>
      <span>{questionCount}</span>
      {curQuestion && (
        <TestQuestion question={curQuestion} />
      )}
    </div>
  );
};

export default observer(TestSheet);
