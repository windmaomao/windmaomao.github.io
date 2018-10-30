import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Card } from 'semantic-ui-react'
import Field from './Field';

class Trade extends Component {
  render() {
    const trade = this.props.form;
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{trade.$('symbol').value}</Card.Header>
          <Card.Meta>{trade.$('name').value}</Card.Meta>
          <br />
          <Field.Input field={trade.$('symbol')} />
          {/* <Transactions trade={trade} /> */}
        </Card.Content>
      </Card>
    );
  }
}

Trade.propTypes = {
  form: PropTypes.object.isRequired,
}

export default observer(Trade);
