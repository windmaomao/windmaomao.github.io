import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]

class TradeSelect extends Component {
  render() {
    const {store, trade} = this.props;
    // const {enabled} = trade._meta;
    return (
      <Dropdown clearable options={options} selection />
    );
  }
}

TradeSelect.propTypes = {
  store: PropTypes.object.isRequired,
  trade: PropTypes.object.isRequired
}

export default observer(TradeSelect);
