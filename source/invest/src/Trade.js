import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Button, Card } from 'semantic-ui-react'
import Transactions from './Transactions';
import Input from './fields/Input';

class Trade extends Component {
  render() {
    const {store, trade} = this.props;
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            {trade.name} &nbsp;
            <Button 
              size="mini"
              onClick={() => {store.saveTrade(trade);}}
            >Save</Button>
          </Card.Header>
          <Card.Meta>{trade.symbol}</Card.Meta>
          <br />
          <Input 
            placeholder='Name, ex. TSLA' 
            field={trade} property='name'
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
