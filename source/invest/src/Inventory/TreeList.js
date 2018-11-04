import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {upperFirst} from 'lodash';
// components
import { Table } from 'semantic-ui-react'
import TreeNode from './TreeNode';

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

class TreeList extends Component {
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
              <Table.HeaderCell key={col.name}>{upperFirst(col.name)}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {children && children.map((node, i) => (
            <TreeNode key={i} node={node} level={0} cols={colDefs2} />
          ))}
        </Table.Body>
      </Table>
    );
  }
}

TreeList.defaultProps = {
  cols: []
}

TreeList.propTypes = {
  root: PropTypes.object.isRequired,
  cols: PropTypes.array
}

export default TreeList;
