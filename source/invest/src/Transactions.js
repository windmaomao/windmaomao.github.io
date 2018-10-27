import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Table, Form, Button } from 'semantic-ui-react'
import Input from './Input';

class Transactions extends Component {
  render() {
    const {trade} = this.props;
    return (
      <div>
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={2}>Quantity</Table.HeaderCell>
              <Table.HeaderCell width={3}>Type</Table.HeaderCell>
              <Table.HeaderCell width={3}>Price</Table.HeaderCell>
              <Table.HeaderCell width={3}>Total</Table.HeaderCell>
              <Table.HeaderCell width={5}>Type</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        </Table>
        <Form unstackable>
          {trade.transactions.map((trans, index) => (
            <Form.Group key={index}>
              <Form.Field width={2}>
                <Input min='1' type='number' field={trans} property='quantity' />
              </Form.Field>
              <Form.Field width={3}>
                <Input field={trans} property='type' />
              </Form.Field>
              <Form.Field width={3}>
                <Input field={trans} property='price' />
              </Form.Field>
              <Form.Field width={3}>
                <Input field={trans} property='total' />
              </Form.Field>
              <Form.Field width={5}>
              </Form.Field>
            </Form.Group>
          ))}
          <Button type='submit'>Submit</Button>
        </Form>      
      </div>
    );
  }
}

Transactions.propTypes = {
  trade: PropTypes.object.isRequired
}

export default observer(Transactions);
