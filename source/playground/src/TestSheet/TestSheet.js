// libraries
import React from 'react';
import {observer} from 'mobx-react';
// components
import TestQuestion from './TestQuestion';
import TestControl from './TestControl';
// services
import TestSheetStore from './TestSheetStore';
// locals
const sheet = new TestSheetStore();
sheet.addNewTest();

const TestSheet = () => {
  const {curQuestion} = sheet;
  const onAnswer = v => {
    sheet.answer(v);
  }
  return (
    <div>
      {curQuestion && (
        <TestQuestion 
          question={curQuestion} 
          onAnswer={onAnswer}
        />
      )}
      <TestControl sheet={sheet} />
    </div>
  );
};

export default observer(TestSheet);
