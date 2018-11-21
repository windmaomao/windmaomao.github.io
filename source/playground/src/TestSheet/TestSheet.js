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

// const onAnswer = v => {
//   console.log(v);
// }

const TestSheet = () => {
  const {curQuestion} = sheet;
  return (
    <div>
      {curQuestion && (
        <TestQuestion 
          question={curQuestion} 
          onAnswer={console.log}
        />
      )}
      <TestControl sheet={sheet} />
    </div>
  );
};

export default observer(TestSheet);
