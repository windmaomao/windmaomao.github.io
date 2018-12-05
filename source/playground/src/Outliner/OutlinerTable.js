import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import {Table} from 'semantic-ui-react'
import OutlinerTableNode from './OutlinerTableNode';
// services

const OutlinerTable = ({ tree, options }) => {
  const {title} = options;
  const {root, cols} = tree;
  const visible = v => v.visible;
  return (
    <Table unstackable basic='very'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell width={9}>{title}</Table.HeaderCell>
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

OutlinerTable.defaultProps = {
  options: {},
}

OutlinerTable.propTypes = {
  tree: PropTypes.object.isRequired,
  options: PropTypes.object
}

export default observer(OutlinerTable);
