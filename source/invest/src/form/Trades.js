import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Container, Button, Form } from 'semantic-ui-react'
import Trade from './Trade';

class Trades extends Component {
  render() {
    const {store} = this.props;
    return (
      <Container>
        <h1>Trades</h1>
        <Form unstackable size='mini'>
          {store.trades.map((trade, index) => (
            <Trade store={store} trade={trade} key={index} />
          ))}
        </Form>
        <br />
        <Button onClick={() => {store.addTrade();}}>Add Trade</Button>
      </Container>
    );
  }
}

Trades.propTypes = {
  store: PropTypes.object.isRequired
}

export default observer(Trades);
