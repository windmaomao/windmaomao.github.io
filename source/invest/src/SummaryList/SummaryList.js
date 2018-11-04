import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import NumberFormat from 'react-number-format';
// components
import { Table, Icon } from 'semantic-ui-react'
import Form from '../form/Trades';

class SummaryList extends Component {
  render() {
    const {store, items} = this.props;
    const {editing} = store;
    return (
      <Table 
        size="small" compact 
        sortable unstackable 
        basic='very' celled
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="right" >Name</Table.HeaderCell>
            <Table.HeaderCell textAlign="right" >Quantity</Table.HeaderCell>
            <Table.HeaderCell textAlign="right" >Cost</Table.HeaderCell>
            <Table.HeaderCell textAlign="right" >Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item, i) => (
            <Fragment key={i}>
              <Table.Row warning={item.quantity<0}>
                <Table.Cell textAlign="right" >{item.name}</Table.Cell>
                <Table.Cell textAlign="right" >{item.quantity}</Table.Cell>
                <Table.Cell textAlign="right" >
                  <NumberFormat value={item.cost} 
                    displayType={'text'} 
                    thousandSeparator={true} prefix={'$'} 
                    decimalScale={0}
                    fixedDecimalScale={true}
                  />
                </Table.Cell>
                <Table.Cell textAlign="right" >
                  <Icon link name='close' />
                  <Icon link name='edit' onClick={() => {
                    store.edit(item.name);
                  }} />
                </Table.Cell>
              </Table.Row>
              {editing.get(item.name) && (
                <Table.Row>
                  <Table.Cell colSpan='4'>Edit {item.name}</Table.Cell>
                </Table.Row>
              )}
            </Fragment>
          ))}
        </Table.Body>
      </Table>           
    );
  }
}

SummaryList.propTypes = {
  store: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
}

export default observer(SummaryList);
