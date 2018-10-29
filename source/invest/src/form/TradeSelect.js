import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Dropdown, Icon } from 'semantic-ui-react'
import Input from '../fields/Input';

// const options = [
//   {
//     key: 'custom',
//     text: (
//       <span>
//         Input <strong>custom</strong>
//       </span>
//     ),
//     disabled: true,
//   },
//   { key: 'profile', text: 'Your Profile' },
//   { key: 'stars', text: 'Your Stars' },
//   { key: 'explore', text: 'Explore' },
//   { key: 'integrations', text: 'Integrations' },
//   { key: 'help', text: 'Help' },
//   { key: 'settings', text: 'Settings' },
//   { key: 'sign-out', text: 'Sign Out' },
// ]


class TradeSelect extends Component {
  render() {
    const {store, trade} = this.props;
    const {tradeList} = store;
    const options = tradeList.map(symbol => ({
      key: symbol, text: symbol, value: symbol
    }));
    const trigger = (
      <span>
        {trade.symbol ? (
          <span>{trade.symbol}</span>
        ) : (
          <span><Icon name='folder open outline' /> Select Trade</span>
        )}
      </span>
    )
    return (
      <div>
         <Dropdown 
          trigger={trigger} 
          options={options} 
          onChange={(e, data) => {
            trade.symbol = data.value;
            store.loadTrade(trade);
          }}
        />
        {/* <Input 
          placeholder='Name, ex. TSLA' 
          field={trade} property='symbol'
        /> */}
      </div>
    );
  }
}

TradeSelect.propTypes = {
  store: PropTypes.object.isRequired,
  trade: PropTypes.object.isRequired
}

export default observer(TradeSelect);
