import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Card, Form } from 'semantic-ui-react'
import Input from './Input';

class Trade extends Component {
  render() {
    const {trade} = this.props;
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{trade.name}</Card.Header>
          <Card.Meta>{trade.symbol}</Card.Meta>
          <br />

          <Form.Field inline>
            <Input 
              placeholder='Name, ex. TSLA' 
              field={trade} property='name'
            />
          </Form.Field>
        </Card.Content>
      </Card>
    );
  }
}

Trade.propTypes = {
  trade: PropTypes.object.isRequired
}

export default observer(Trade);
