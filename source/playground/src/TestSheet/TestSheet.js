// libraries
import React from 'react';
import {observer} from 'mobx-react';
// components
import TestQuestion from './TestQuestion';
import TestControl from './TestControl';
import { Container } from 'semantic-ui-react';
// styles
import './TestSheet.css';
// services
import TestSheetStore from './TestSheetStore';
// locals
const sheet = new TestSheetStore();
sheet.addNewTest();

const TestSheet = () => {
  const {curQuestion, status: {testEnd}} = sheet;
  const onAnswer = v => {
    sheet.answer(v);
  }
  return (
    <div className="test-sheet">
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
