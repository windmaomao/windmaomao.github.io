// libraries
import React from 'react';
import {inject} from 'mobx-react';
// components
import { Container } from 'semantic-ui-react';

const TestSheet = ({ layout }) => {
  return (
    <div>
      <Container text>
        <p>Test sheet</p>
      </Container>
    </div>
  );
};

export default inject('layout')(TestSheet);
