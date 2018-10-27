import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Input as SInput } from 'semantic-ui-react'

class Input extends Component {
  render() {
    const {field, property, ...props} = this.props;
    return (
      <SInput 
        {...props}
        value={`${field[property]}`}
        onChange={(e) => { field[property] = e.target.value; }}
      />
    );
  }
}

Input.propTypes = {
  field: PropTypes.object.isRequired,
  property: PropTypes.string.isRequired
}

export default observer(Input);
