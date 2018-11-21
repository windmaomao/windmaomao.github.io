// libraries
import React from 'react';
import PropTypes from 'prop-types';
// components
import LayoutMessage from './LayoutMessage';
// services
import LayoutStore from './LayoutStore';

const store = new LayoutStore();

const LayoutShell = ({ children }) => {
  const {status: { messageOn }} = store;
  return (
    <div className="App">
      {children}
      <LayoutMessage store={store} open={messageOn} />
    </div>
  );
}

LayoutShell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default LayoutShell;
