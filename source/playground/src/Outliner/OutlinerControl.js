// libraries
import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Input, Menu, Dropdown } from 'semantic-ui-react'

const OutlinerControl = ({ tree }) => {
  const {cols} = tree;
  return (
    <Menu secondary size="tiny">
      <Menu.Item>
        <Input 
          icon='search' 
          placeholder='Search...' 
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
      <Dropdown item text='Column Display'>
        <Dropdown.Menu>
          <Dropdown.Header>Columns</Dropdown.Header>
          {cols.map(col => (
            <Dropdown.Item key={col.name} onClick={col.toggle}>{col.name}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>      
    </Menu>    
  );
};

OutlinerControl.propTypes = {
  tree: PropTypes.object.isRequired
}

export default observer(OutlinerControl);
