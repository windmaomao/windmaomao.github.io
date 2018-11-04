import React, { Component } from 'react';
import PropTypes from 'prop-types';
// components
import { Table } from 'semantic-ui-react'
import TreeNode from './TreeNode';

class TreeList extends Component {
  render() {
    const {root: {title, children}} = this.props;
    return (
      <Table 
        size="small" compact striped
        sortable unstackable selectable
        basic='very' celled
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {children.map((node, i) => (
            <TreeNode key={i} node={node} level={0} />
          ))}
        </Table.Body>
      </Table>
    );
  }
}

TreeList.propTypes = {
  root: PropTypes.object.isRequired,
}

export default TreeList;
