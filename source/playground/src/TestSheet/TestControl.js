// libraries
import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Container, Button } from 'semantic-ui-react';
// services
// locals

const TestControl = ({ sheet }) => {
  const {status, addNewTest} = sheet;
  const {questionCount, questionIndex, testEnd} = status;
  return (
    <Container className="test-sheet-footer"
      textAlign='center'
    >
      {testEnd && (
        <span onClick={e => { addNewTest(); }}>
          Restart
        </span>
      )}
      {!testEnd && (
        <span>{questionIndex+1} / {questionCount}</span>
      )}
    </Container>
  );
};

TestControl.propTypes = {
  sheet: PropTypes.object.isRequired,
}

export default observer(TestControl);
