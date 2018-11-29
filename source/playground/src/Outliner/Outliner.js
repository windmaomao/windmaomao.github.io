// libraries
import React from 'react';
import {inject} from 'mobx-react';
// components
import { Container } from 'semantic-ui-react';
// services
// import {getXml} from '../utils/callApi';

// getXml('opml/projects.opml').then(console.log);

const Playground = ({ layout }) => {
  return (
    <div className="content">
      <Container text>
      </Container>
    </div>
  );
};

export default inject('layout')(Playground);
