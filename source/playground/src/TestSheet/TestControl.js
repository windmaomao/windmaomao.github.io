// libraries
import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Container } from 'semantic-ui-react';
// services
import onKey from '../utils/onKey';
// locals

const TestControl = ({ sheet }) => {
  const {status} = sheet;
  const {questionCount, questionIndex, testEnd} = status;
  return (
    <Container className="test-sheet-footer"
      textAlign='center'
    >
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
