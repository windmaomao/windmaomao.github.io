import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Dropdown, Icon } from 'semantic-ui-react'
// import Input from '../fields/Input';

class TradeSelect extends Component {
  render() {
    const {store, trade} = this.props;
    const {tradeList} = store;
    const options = tradeList.map(symbol => ({
      key: symbol, text: symbol, value: symbol
    }));
    const trigger = (
      <span>
        {!trade.symbol && (
          <span>
            <Icon name='folder outline' /> Select Trade
          </span>
        )}
      </span>
    )
    return (
      <div>
        {trade.symbol ? (
          <div>
            <span 
              style={{ cursor: 'pointer'}}
              onClick={() => {store.resetTrade(trade); }}
            >
              <Icon name='folder open outline' /> {trade.symbol} &nbsp;
              <Icon size="small" name='close' />
            </span>&nbsp;
          </div>
        ): (
          <div>
            <Dropdown inline
              trigger={trigger} 
              options={options} 
              onChange={(e, data) => {
                trade.symbol = data.value;
                store.loadTrade(trade);
              }}
            />
            {/* <Input size="mini" inline
              placeholder='Name, ex. TSLA' 
              field={trade} property='symbol'
            /> */}
          </div>
        )}
      </div>
    );
  }
}

TradeSelect.propTypes = {
  store: PropTypes.object.isRequired,
  trade: PropTypes.object.isRequired
}

export default observer(TradeSelect);
