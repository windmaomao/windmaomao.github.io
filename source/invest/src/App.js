import React, { Component } from 'react';
import PropTypes from 'prop-types';
// components
import PageHeader from './Header';
import { Container, Header, Icon, Card } from 'semantic-ui-react'
import Form from './form/Trades';
import SummaryList from './SummaryList/SummaryList';
// import TradeForm from './TradeForm/TradeForm';
// import Trade from './TradeForm/Trade';
// styles
import './App.css';
// services
import { summaries } from './SummaryList/summary.model';

// const form = new TradeForm();

class App extends Component {
  render() {
    const {store} = this.props;
    return (
      <div>
        <PageHeader />
        <Container>
          <Header as='h1'>
            <Icon name='settings' />
            Trade Summaries
            <Header.Subheader>Listing of all recent trades.</Header.Subheader>
          </Header>
          <SummaryList items={summaries} />
        </Container>
        <Form store={store} />
        {/* <Trade form={form} /> */}
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
