// libraries
import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Container } from 'semantic-ui-react';
// services
// locals

const TestControl = ({ sheet }) => {
  const {status} = sheet;
  const {questionCount, questionIndex, testEnd} = status;
  const canDisplay = !testEnd;
  return (
    <Container className="test-sheet-footer"
      textAlign='center'
    >
      {canDisplay && (
        <span>{questionIndex+1} / {questionCount}</span>
      )}
    </Container>
  );
};

TestControl.propTypes = {
  sheet: PropTypes.object.isRequired,
}

export default observer(TestControl);
