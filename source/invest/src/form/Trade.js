import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Button, Card } from 'semantic-ui-react'
import Transactions from '../Transactions';
import Input from '../fields/Input';

class Trade extends Component {
  render() {
    const {store, trade} = this.props;
    const {enabled} = trade._meta;
    return (
      <Card fluid color={!enabled ? 'red': 'black'}>
        <Card.Content>
          <Button
            floated='right' 
            size="mini" icon="save"
            loading={!enabled}
            onClick={() => { store.saveTrade(trade); }}
          />
          <Button
            floated='right' 
            size="mini" icon="download"
            loading={!enabled}
            onClick={() => { store.loadTrade(trade); }}
          />
          <Card.Header>
            {trade.symbol} &nbsp;
          </Card.Header>
          <Card.Meta>{trade.name}</Card.Meta>
          <br />
          <Input 
            placeholder='Name, ex. TSLA' 
            field={trade} property='symbol'
          />
          <br />
          <Transactions trade={trade} />
        </Card.Content>
      </Card>
    );
  }
}

Trade.propTypes = {
  store: PropTypes.object.isRequired,
  trade: PropTypes.object.isRequired
}

export default observer(Trade);
