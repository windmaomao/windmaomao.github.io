import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {upperFirst} from 'lodash';
// components
import { Table } from 'semantic-ui-react'
import TreeNode from './TreeNode';

class TreeList extends Component {
  render() {
    const {root: {title, children, cols}} = this.props;
    const colDefs = cols || this.props.cols;
    return (
      <Table 
        size="small" compact
        unstackable selectable
        basic='very' celled
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{title}</Table.HeaderCell>
            {colDefs.map(col => (
              <Table.HeaderCell key={col}>{upperFirst(col)}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {children && children.map((node, i) => (
            <TreeNode key={i} node={node} level={0} cols={colDefs} />
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
