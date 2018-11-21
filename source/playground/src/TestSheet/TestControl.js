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
  const {questionCount, questionIndex} = status;
  return (
    <Container 
      textAlign='center'
      style={{ position: 'fixed', bottom: '10px', right: '0' }}
    >
      {questionIndex+1} / {questionCount}
    </Container>
  );
};

TestControl.propTypes = {
  sheet: PropTypes.object.isRequired,
}

export default observer(TestControl);
