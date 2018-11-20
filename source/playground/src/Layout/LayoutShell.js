import React from 'react';
import PropTypes from 'prop-types';

const LayoutShell = ({ children }) => {
  return (
    <div className="App">
      {children}
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
