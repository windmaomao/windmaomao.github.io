import React, { Component } from 'react';
import PropTypes from 'prop-types';
// components
import { Table, Button, Icon } from 'semantic-ui-react'
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
    const {root: {title, children, cols}, options} = this.props;
    const colDefs = cols || this.props.cols;
    const colDefs2 = setupColDefs(colDefs);
    return (
      <Table unstackable basic='very'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell width={8}>{title}</Table.HeaderCell>
            {colDefs2.map(col => (
              <Table.HeaderCell key={col.name}>{col.name}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
            {children && children.map((node, i) => (
              <TableTreeNode key={i} node={node} level={1} cols={colDefs2} options={options} />
            ))}
        </Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan='3'>
              <Button floated='right' icon labelPosition='left' primary size='small'>
                <Icon name='user' /> Add User
              </Button>
              <Button size='small'>Approve</Button>
              <Button disabled size='small'>
                Approve All
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
     </Table>
    );
  }
}

TableTree.defaultProps = {
  cols: [],
  options: {
    noteInRow: false
  },
}

TableTree.propTypes = {
  root: PropTypes.object.isRequired,
  cols: PropTypes.array,
  options: PropTypes.object
}

export default TableTree;
