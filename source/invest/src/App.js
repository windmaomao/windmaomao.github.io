import React, { Component } from 'react';
import PropTypes from 'prop-types';
// components
import PageHeader from './Header';
import { Container, Header, Icon } from 'semantic-ui-react'
import Form from './form/Trades';
import SummaryList from './SummaryList/SummaryList';
import TreeList from './Inventory/TreeList';
// import TradeForm from './TradeForm/TradeForm';
// import Trade from './TradeForm/Trade';
// styles
import './App.css';
// services
import { summaries } from './SummaryList/summary.model';
import { getSummaryStore } from './SummaryList/SummaryStore';
import { getSampleMenu, getSampleInvest, getSampleOutline } from './Inventory/tree.model';

// const form = new TradeForm();
const summaryStore = getSummaryStore();

class App extends Component {
  render() {
    const {store} = this.props;
    return (
      <div>
        <PageHeader />
        <Container>
          <TreeList root={getSampleOutline} />
          <TreeList root={getSampleMenu} cols={['type']} />
          <TreeList root={getSampleInvest} />
          <Header as='h1'>
            <Icon name='settings' />
            Trade Summaries
            <Header.Subheader>Listing of all recent trades.</Header.Subheader>
          </Header>
          <SummaryList store={summaryStore} items={summaries} />
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
