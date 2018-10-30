import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Form } from 'semantic-ui-react'

class SMInput extends Component {
  render() {
    const {field} = this.props;
    return (
      <Form.Input label="" {...field.bind()} />
    );
  }
}

SMInput.propTypes = {
  field: PropTypes.object.isRequired,
}

const Input = observer(SMInput);

export default {
  Input
};
