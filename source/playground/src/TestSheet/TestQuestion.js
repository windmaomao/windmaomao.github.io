// libraries
import React from 'react';
import PropTypes from 'prop-types';
// components
import { Container } from 'semantic-ui-react';
// import { Input } from 'semantic-ui-react'
// services
import onKey from '../utils/onKey';

const TestQuestion = ({ question, onAnswer }) => {
  const {title} = question;
  return (
    <Container textAlign='center'>
      {title} = &nbsp;
      <div className="ui transparent input">
        <input 
          autoFocus
          name="question"
          tabIndex={0}
          type='text'
          {...onKey({
            Enter: e => { 
              onAnswer(e.target.value); 
              e.target.value = '';
            }
          })}
        />
      </div>
    </Container>
  );
};

TestQuestion.defaultProps = {
  onAnswer: undefined
}

TestQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  onAnswer: PropTypes.func
}

export default TestQuestion;
