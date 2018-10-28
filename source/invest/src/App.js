import React, { Component } from 'react';
import PropTypes from 'prop-types';
// components
import Header from './Header';
import Form from './form/Trades';
// styles
import './App.css';

class App extends Component {
  render() {
    const {store} = this.props;
    return (
      <div>
        <Header />
        <Form store={store} />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
