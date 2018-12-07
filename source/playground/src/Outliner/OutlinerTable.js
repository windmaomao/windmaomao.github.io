import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import {Table} from 'semantic-ui-react'
import OutlinerTableNode from './OutlinerTableNode';
import OutlinerControl from './OutlinerControl';
// services

const OutlinerTable = ({ tree }) => {
  const {root, cols} = tree;
  const visible = v => v.visible;
  const options = { 
    filterText: tree.filterText,
    noteInRow: tree.noteInRow,
  };
  return (
    <Table unstackable basic='very'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell width={9}>
            {root && <OutlinerControl tree={tree} />}
          </Table.HeaderCell>
          {cols.filter(visible).map((col) => (
            <Table.HeaderCell key={col.name} onClick={col.toggle}>{col.name}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {root && <OutlinerTableNode node={root} cols={cols} options={options} />}
      </Table.Body>
    </Table>
  );
}

OutlinerTable.propTypes = {
  tree: PropTypes.object.isRequired,
}

export default observer(OutlinerTable);
