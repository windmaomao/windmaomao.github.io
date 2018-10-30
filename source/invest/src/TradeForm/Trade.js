import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Card, Form } from 'semantic-ui-react'
import Field from './Field';
import Transactions from './Transactions';

class Trade extends Component {
  render() {
    const trade = this.props.form;
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{trade.$('symbol').value}</Card.Header>
          <Card.Meta>{trade.$('name').value}</Card.Meta>
          <br />
          <Form>
            <Field.Input field={trade.$('symbol')} />
            <Transactions transactions={trade.$('transactions')} />
          </Form>
        </Card.Content>
      </Card>
    );
  }
}

Trade.propTypes = {
  form: PropTypes.object.isRequired,
}

export default observer(Trade);
