import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
// components
import { Table, Image, List, Label, Icon, Button } from 'semantic-ui-react'

class SummaryList extends Component {
  render() {
    const {items} = this.props;
    // const shares = <span>Shares: {summary.shares}</span>;
    return (
      <Table 
        textAlign="right" size="small" compact 
        sortable unstackable 
        basic='very' celled
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Cost</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell colSpan='4'>
              
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map(item => (
            <Table.Row warning={item.quantity<0}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.quantity}</Table.Cell>
              <Table.Cell>
                <NumberFormat value={item.cost} 
                  displayType={'text'} 
                  thousandSeparator={true} prefix={'$'} 
                  decimalScale={0}
                  fixedDecimalScale={true}
                />
              </Table.Cell>
              <Table.Cell>
                <Icon link name='close' />
                <Icon link name='edit' />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>           
    );
  }
}

SummaryList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default SummaryList;
