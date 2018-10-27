import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
// components
import { Table, Form, Button } from 'semantic-ui-react'
import Input from './Input';

class Transactions extends Component {
  render() {
    const {store, trade} = this.props;
    return (
      <div>
        <Table unstackable compact size='small'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={2}>Quantity</Table.HeaderCell>
              <Table.HeaderCell width={3}>Action</Table.HeaderCell>
              <Table.HeaderCell width={3}>Price</Table.HeaderCell>
              <Table.HeaderCell width={3}>Total</Table.HeaderCell>
              <Table.HeaderCell width={3}>Cost</Table.HeaderCell>
              <Table.HeaderCell width={2}>Gain</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        </Table>
        <Form unstackable size='mini'>
          {trade.transactions.map((trans, index) => (
            <Form.Group key={index}>
              <Form.Field width={2}>
                <Input min='1' type='number' field={trans} property='quantity' />
              </Form.Field>
              <Form.Field width={3}>
                <Input field={trans} property='action' />
              </Form.Field>
              <Form.Field width={3}>
                <Input field={trans} property='price' />
              </Form.Field>
              <Form.Field width={3}>
                <Input field={trans} property='date' />
              </Form.Field>
              <Form.Field width={3}>
                <Input field={trans.summary} property='totalCost' />
              </Form.Field>
              <Form.Field width={2}>
                <Input field={trans.summary} property='totalGain' />
              </Form.Field>
          </Form.Group>
          ))}
          <Button onClick={() => {store.addTransaction(trade)}}>Add Transaction</Button>
        </Form>      
      </div>
    );
  }
}

Transactions.propTypes = {
  trade: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export default inject('store')(observer(Transactions));
