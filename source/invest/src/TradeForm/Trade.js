import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Card, Form, Message } from 'semantic-ui-react'
import Field from './Field';
import Transactions from './Transactions';

class Trade extends Component {
  render() {
    const trade = this.props.form;
    console.log(trade.isValid);
    console.log(trade.hasErrors);
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{trade.$('symbol').value}</Card.Header>
          <Card.Meta>{trade.$('name').value}</Card.Meta>
          <br />
          <Form error={!trade.isValid}>
            <Field.Input field={trade.$('symbol')} />
            <Transactions transactions={trade.$('transactions')} />
            <Message error header='Error' />            
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
