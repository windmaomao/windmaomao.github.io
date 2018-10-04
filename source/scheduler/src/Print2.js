// third party
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Print extends Component {
  render() {
    return (
      <h1>Today Schedule</h1>
    )
  }
};

Print.propTypes = {
  slots: PropTypes.object.isRequired,
  usages: PropTypes.object,
  classes: PropTypes.object
}

export default Print;
