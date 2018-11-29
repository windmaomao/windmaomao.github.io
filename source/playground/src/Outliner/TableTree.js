import React, { Component } from 'react';
import PropTypes from 'prop-types';
// components
import { Table } from 'semantic-ui-react'
import TableTreeNode from './TableTreeNode';
// services

const setupColDefs = (cols) => {
  return cols.map(col => {
    if (typeof col === 'string') {
      return { 
        name: col,
        value: (node) => (node[col] || '')
      }
    }
    return col;
  });
}

class TableTree extends Component {
  render() {
    const {root: {title, children, cols}} = this.props;
    const colDefs = cols || this.props.cols;
    const colDefs2 = setupColDefs(colDefs);
    return (
      <Table unstackable basic='very'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>{title}</Table.HeaderCell>
            {colDefs2.map(col => (
              <Table.HeaderCell key={col.name}>{col.name}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
            {children && children.map((node, i) => (
              <TableTreeNode key={i} node={node} level={1} cols={colDefs2} />
            ))}
        </Table.Body>
      </Table>
    );
  }
}

TableTree.defaultProps = {
  cols: []
}

TableTree.propTypes = {
  root: PropTypes.object.isRequired,
  cols: PropTypes.array
}

export default TableTree;
