// libraries
import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Input, Menu } from 'semantic-ui-react'
// styles
// import './Outliner.scss'; 

const TableTreeControl = ({ options }) => {
  return (
    <Menu secondary size="tiny">
      <Menu.Item>
        <Input 
          icon='search' 
          placeholder='Search...' 
          value={options.searchText}
        />
      </Menu.Item>
      <Menu.Menu>
        <Menu.Item
          name='logout'
        />
      </Menu.Menu>
      <Menu.Item position='right'
        name='Toggle'
      />
    </Menu>    
  );
};

TableTreeControl.propTypes = {
  options: PropTypes.object.isRequired
}

export default observer(TableTreeControl);
