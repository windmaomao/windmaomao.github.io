// libraries
import React from 'react';
import {inject} from 'mobx-react';
// components
import { Container } from 'semantic-ui-react';
// services
import {getXml} from '../utils/callApi';

getXml('opml/projects.opml').then(console.log);

const Playground = ({ layout }) => {
  const {showMessage} = layout;
  return (
    <div className="content">
      <Container text>
        <p>Welcome to Playground</p>
        <button onClick={e => {showMessage(); }}>
          Open Message
        </button>
      </Container>
    </div>
  );
};

export default inject('layout')(Playground);
