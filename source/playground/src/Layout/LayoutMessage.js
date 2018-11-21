// libraries
import React from 'react';
import PropTypes from 'prop-types';
// components
import { Button, Header, Segment, Portal } from 'semantic-ui-react';

const LayoutMessage = ({ open }) => {
  return (
    <Portal
      closeOnTriggerClick
      openOnTriggerClick
      trigger={
        <Button
          content={!open ? 'Close Portal' : 'Open Portal'}
          negative={open}
          positive={!open}
        />
      }
    >
    <Segment style={{ left: '40%', position: 'fixed', top: '40%', zIndex: 1000 }}>
      <Header>This is an example portal</Header>
      <p>Portals have tons of great callback functions to hook into.</p>
      <p>To close, simply click the close button or click away</p>
    </Segment>    
    </Portal>
  );
}

LayoutMessage.propTypes = {
  open: PropTypes.bool
}

export default LayoutMessage;
