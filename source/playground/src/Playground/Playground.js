// libraries
import React from 'react';
import {inject} from 'mobx-react';
// components
import { Container } from 'semantic-ui-react';
// services
import callApi from '../utils/callApi';

fetch('opml/projects.opml').then(console.log);
var convert = require('xml-js');
var xml =`<?xml version="1.0" encoding="utf-8"?>
<opml version="1.0">
  <head>
    <title>blueprints</title>
    <expansionState>0,1,12,15,25,27,54,92,100,107,110,113,118,121,123,128,130,134</expansionState>
  </head>
  <body>
    <outline text="Playground" _note="Description: Infrastructure for building apps using shared common UI elements" Type="Project" Notes="QP" Date="11/18/18">
      <outline text="UI">
        <outline text="App" Type="Component" Notes="Route">
          <outline text="LayoutShell" Type="Component"/>
          <outline text="Router"/>
          <outline text="LayoutHeader" Type="Component"/>
          <outline text="Route"/>
          <outline text="Route"/>
        </outline>
      </outline>
    </outline>
  </body>
</opml>
`;
// '<opml version="1.0">' +
// '<head>' +
// '<title>blueprints</title>' +
// '<expansionState>0,1,12,15,25,27,54,92,100,107,110,113,118,121,123,128,130,134</expansionState>' +
// '</head>' +
// '</opml>';
var result1 = convert.xml2js(xml, {compact: true});
console.log(result1);

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
