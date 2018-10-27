import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Button } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import { Form, Input } from 'semantic-ui-react'

class App extends Component {
  render() {
    const {store} = this.props;
    return (
      <Container className="App">
        <h1>List</h1>
        {store.trades.map((trade, index) => (
          <Card fluid key={index}>
            <Card.Content>
              <Card.Header>{trade.name}</Card.Header>
              <Card.Meta>{trade.symbol}</Card.Meta>
              <br />

              <Form size={'mini'}>
                <Form.Field inline>
                  <Input 
                    placeholder='Name, ex. TSLA' 
                    value={trade.name}
                    onChange={(e) => { trade.name = e.target.value; }}
                  />
                </Form.Field>
              </Form>
            </Card.Content>
          </Card>
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
