import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Button } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import Trade from './Trade';

class App extends Component {
  render() {
    const {store} = this.props;
    return (
      <Container className="App">
        <h1>List</h1>
        {store.trades.map((trade, index) => (
          <Trade trade={trade} key={index} />
        ))}
        <div>
          <Button onClick={() => {store.addTrade();}}>Add Trade</Button>
        </div>
      </Container>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default observer(App);
