import React, { Component } from 'react';
import PropTypes from 'prop-types';
// components
import { Table } from 'semantic-ui-react'
// import TreeNode from './TreeNode';
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
      <Table 
        size="small" compact
        unstackable selectable
        basic='very' celled
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{title}</Table.HeaderCell>
            {colDefs2.map(col => (
              <Table.HeaderCell key={col.name}>{col.name}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
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
