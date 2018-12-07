// libraries
import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Icon, Input, Dropdown } from 'semantic-ui-react'

const OutlinerControl = ({ tree }) => {
  const {title, cols} = tree;
  return (
    <div>
      <Input 
        icon='search' iconPosition='left' className='search' 
        onChange={e => { tree.applyFilter(e.target.value); }}
      />
      <Dropdown text={title} multiple icon='filter'>
        <Dropdown.Menu>
          {/* <Dropdown.Header icon='tags' content='Columns' /> */}
          <Dropdown.Menu scrolling>
            {cols.map(col => (
              <Dropdown.Item 
                key={col.name} text={col.name}
                onClick={col.toggle}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
      <Icon name="sticky note outline"
        onClick={tree.toggleNote}
      />      
    </div>
  );
};

OutlinerControl.propTypes = {
  tree: PropTypes.object.isRequired,
}

export default observer(OutlinerControl);
