// libraries
import React from 'react';
// components
import { Container } from 'semantic-ui-react';
// services
// locals

const TestQuesiton = ({ question }) => {
  const {title} = question;
  return (
    <Container text>
      <p>{title}</p>
    </Container>
  );
};

export default TestQuesiton;
