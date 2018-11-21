// libraries
import React from 'react';
import PropTypes from 'prop-types';
// components
import { Container } from 'semantic-ui-react';
// services
import onKey from '../utils/onKey';

const TestEnd = ({ sheet }) => {
  return (
    <Container textAlign='center'>
      Done. &nbsp;
      <div className="ui transparent input">
        <input 
          autoFocus
          name="question-end"
          tabIndex={0}
          type='text'
          {...onKey({
            Enter: e => { 
              e.stopPropagation();
              sheet.addNewTest();
            }
          })}
        />
      </div>
    </Container>
  );
};

TestEnd.propTypes = {
  sheet: PropTypes.object.isRequired,
}

export default TestEnd;
