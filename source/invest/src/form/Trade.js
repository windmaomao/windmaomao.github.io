import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Button, Card } from 'semantic-ui-react'
import Transactions from './Transactions';
import TradeSelect from './TradeSelect';

class Trade extends Component {
  render() {
    const {store, trade} = this.props;
    const {enabled} = trade._meta;
    return (
      <Card fluid color={!enabled ? 'red': 'black'}>
        <Card.Content>
          <Button primary
            floated='right' 
            size="mini" icon="save"
            loading={!enabled}
            onClick={() => { store.saveTrade(trade); }}
          />
          <Button
            floated='right' 
            size="mini" icon="redo"
            loading={!enabled}
            onClick={() => { store.loadTrade(trade); }}
          />
          <Card.Header>
            <div style={{width: '40%'}}>
              <TradeSelect store={store} trade={trade} />
            </div>
          </Card.Header>
          <Card.Meta>{trade.name}</Card.Meta>
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
