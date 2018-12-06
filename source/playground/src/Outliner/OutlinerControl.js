// libraries
import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Input, Dropdown } from 'semantic-ui-react'

const OutlinerControl = ({ tree, title }) => {
  const {cols} = tree;
  return (
    <Dropdown text={title} multiple icon='filter'>
      <Dropdown.Menu>
        {/* <Input icon='search' iconPosition='left' className='search' />
        <Dropdown.Divider />
        <Dropdown.Header icon='tags' content='Columns' /> */}
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
  );
};

OutlinerControl.defaultProps = {
  title: ''
}

OutlinerControl.propTypes = {
  tree: PropTypes.object.isRequired,
  title: PropTypes.string
}

export default observer(OutlinerControl);
