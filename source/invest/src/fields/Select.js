import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Select as SSelect, Form } from 'semantic-ui-react'

class Select extends Component {
  render() {
    const {field, property, ...props} = this.props;
    return (
      <Form.Field>
        <SSelect 
          {...props}
          value={`${field[property]}`}
          onChange={(e, { value }) => {field[property] = value;}}
        />
      </Form.Field>      
    );
  }
}

Select.propTypes = {
  field: PropTypes.object.isRequired,
  property: PropTypes.string.isRequired
}

export default observer(Select);
