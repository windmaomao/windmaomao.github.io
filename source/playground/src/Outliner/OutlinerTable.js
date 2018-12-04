import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import {Table} from 'semantic-ui-react'
import OutlinerTableNode from './OutlinerTableNode';
// services

const OutlinerTable = ({ tree, cols, options }) => {
  const {title, outliner} = options;
  return (
    <Table unstackable basic='very'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell width={9}>{title}</Table.HeaderCell>
          {cols.map((col) => (
            <Table.HeaderCell key={col.name} 
              onClick={e => {outliner.toggleColVisible(col.name); }}
            >{col.name}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {tree.root && <OutlinerTableNode node={tree.root} cols={cols} options={options} />}
      </Table.Body>
    </Table>
  );
}

OutlinerTable.defaultProps = {
  cols: [],
  options: {},
}

OutlinerTable.propTypes = {
  tree: PropTypes.object.isRequired,
  cols: PropTypes.array,
  options: PropTypes.object
}

export default observer(OutlinerTable);
