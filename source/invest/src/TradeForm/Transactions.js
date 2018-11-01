import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Table } from 'semantic-ui-react'
import Field from './Field';
// services

class Transactions extends Component {
  render() {
    const {transactions} = this.props;
    return (
      <div>
        <Table unstackable compact size='small'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={1}>Quantity</Table.HeaderCell>
              <Table.HeaderCell width={2}>Action</Table.HeaderCell>
              <Table.HeaderCell width={2}>Price</Table.HeaderCell>
              <Table.HeaderCell width={2}>Date</Table.HeaderCell>
              <Table.HeaderCell width={2} textAlign='right'>Total</Table.HeaderCell>
              {/* <Table.HeaderCell width={2}>Gain</Table.HeaderCell> */}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {transactions.map((transaction, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  <Field.Input type='number' min={1} field={transaction.$('quantity')} />
                </Table.Cell>
              </Table.Row>
            ))}
            </Table.Body>
        </Table>
        {/* <Button size='mini'
          onClick={() => {store.addTransaction(trade)}}
        >Add Transaction</Button> */}
      </div>
    );
  }
}

Transactions.propTypes = {
  transactions: PropTypes.object.isRequired,
}

export default observer(Transactions);
