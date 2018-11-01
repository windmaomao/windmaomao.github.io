import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Form } from 'semantic-ui-react'

class SMInput extends Component {
  render() {
    const {field, type, ...props} = this.props;
    return (
      <Form.Input {...props} label={field.label} {...field.bind()} error={!!field.error} type={type} />
    );
  }
}

SMInput.defaultProps = {
  type: 'text'
}

SMInput.propTypes = {
  field: PropTypes.object.isRequired,
  type: PropTypes.string
}

const Input = observer(SMInput);

export default {
  Input
};
