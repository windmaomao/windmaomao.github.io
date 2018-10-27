import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Input as SInput, Form } from 'semantic-ui-react'
// styles
import './Input.css';

class Input extends Component {
  render() {
    const {field, property, ...props} = this.props;
    return (
      <Form.Field>
        <SInput 
          {...props}
          value={`${field[property]}`}
          onChange={(e) => { field[property] = e.target.value; }}
        />
      </Form.Field>      
    );
  }
}

Input.propTypes = {
  field: PropTypes.object.isRequired,
  property: PropTypes.string.isRequired
}

export default observer(Input);
