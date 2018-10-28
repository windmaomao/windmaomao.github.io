import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Button, Card } from 'semantic-ui-react'
import Transactions from '../Transactions';
import Input from '../fields/Input';

class Trade extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }
  render() {
    const {store, trade} = this.props;
    const {loading} = this.state;
    console.log(loading);
    return (
      <Card fluid>
        <Card.Content>
          <Button
            floated='right' 
            size="mini" icon="save"
            loading={loading}
            onClick={() => {
              this.setState({ loading: true });
              store.saveTrade(trade).then(res => {
                this.setState({ loading: false });
              });
            }}
          />
          <Card.Header>
            {trade.name} &nbsp;
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
