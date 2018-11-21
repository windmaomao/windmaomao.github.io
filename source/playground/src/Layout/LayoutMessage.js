// libraries
import React from 'react';
import PropTypes from 'prop-types';
// components
import { Header, Segment, Portal } from 'semantic-ui-react';

const LayoutMessage = ({ layout, open }) => {
  return (
    <Portal
      open={open}
      closeOnTriggerClick
      // openOnTriggerClick
      // trigger={
      //   <Button
      //     content={open ? 'Close Portal' : 'Open Portal'}
      //     negative={open}
      //     positive={!open}
      //   />
      // }
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
  layout: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired
}

export default LayoutMessage;
