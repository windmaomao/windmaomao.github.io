import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
// components
import { Table, Button } from 'semantic-ui-react'
import Field from './fields';
// services
import {TransactionActionOptions} from './model';

class Transactions extends Component {
  render() {
    const {store, trade} = this.props;
    return (
      <div>
        <Table unstackable compact size='small'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={1}>Quantity</Table.HeaderCell>
              <Table.HeaderCell width={2}>Action</Table.HeaderCell>
              <Table.HeaderCell width={2}>Price</Table.HeaderCell>
              <Table.HeaderCell width={2}>Date</Table.HeaderCell>
              <Table.HeaderCell width={2}>Cost</Table.HeaderCell>
              <Table.HeaderCell width={2}>Gain</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {trade.transactions.map((trans, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  <Field.Input min='1' type='number' field={trans} property='quantity' />
                </Table.Cell>
                <Table.Cell>
                  <Field.Select field={trans} property='action' options={TransactionActionOptions} />
                </Table.Cell>
                <Table.Cell>
                  <Field.Input field={trans} property='price' />
                </Table.Cell>
                <Table.Cell>
                  <Field.Input field={trans} property='date' />
                </Table.Cell>
                <Table.Cell>
                  <Field.Input field={trans.summary} property='totalCost' />
                </Table.Cell>
                <Table.Cell>
                  <Field.Input field={trans.summary} property='totalGain' />
                </Table.Cell>
              </Table.Row>
            ))}
            </Table.Body>
        </Table>
        {/* <Form unstackable size='mini'>
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
        </Form>       */}
        <Button size='mini'
          onClick={() => {store.addTransaction(trade)}}
        >Add Transaction</Button>
      </div>
    );
  }
}

Transactions.propTypes = {
  trade: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export default inject('store')(observer(Transactions));
