// libraries
import React from 'react';
import PropTypes from 'prop-types';
// components
import LayoutMessage from './LayoutMessage';
// services

const LayoutShell = ({ children }) => {
  return (
    <div className="App">
      {children}
      <LayoutMessage store={{}} open={true} />
    </div>
  );
}

LayoutShell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).required
}

export default LayoutShell;
