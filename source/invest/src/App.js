import React, { Component } from 'react';
import PropTypes from 'prop-types';
// components
import Header from './Header';
import Form from './form/Trades';
import TradeForm from './TradeForm/TradeForm';
import Trade from './TradeForm/Trade';
// styles
import './App.css';

const form = new TradeForm();

class App extends Component {
  render() {
    const {store} = this.props;
    return (
      <div>
        <Header />
        <Form store={store} />
        <Trade form={form} />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
