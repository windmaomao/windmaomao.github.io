import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react'

class App extends Component {
  render() {
    const {trades} = this.props.store;
    return (
      <div className="App">
      {trades.map(trade => (
        <Card key={trade.name}>
          <Card.Content>
            <Card.Header>{trade.title}</Card.Header>
            <Card.Meta>{trade.name}</Card.Meta>
            <Card.Description>{trade.url}</Card.Description>
          </Card.Content>
        </Card>
      ))}
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
