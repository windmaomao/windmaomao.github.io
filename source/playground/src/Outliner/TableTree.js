import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Table, Button, Icon } from 'semantic-ui-react'
import TableTreeNode from './TableTreeNode';
// services

const setupColDefs = (cols, hiddens) => {
  return cols.map(col => {
    if (typeof col === 'string') {
      return { 
        name: col,
        value: (node) => (node[col] || ''),
        visible: hiddens.indexOf(col) < 0
      }
    }
    return col;
  });
}

class TableTree extends Component {
  render() {
    const {root: {title, children, cols}, options} = this.props;
    const colDefs = cols || this.props.cols;
    const {hiddenCols, outliner} = options;
    const colDefs2 = setupColDefs(colDefs, hiddenCols || []).filter(col => col.visible);
    return (
      <Table unstackable basic='very'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell width={9}>{title}</Table.HeaderCell>
            {colDefs2.map(col => (
              <Table.HeaderCell key={col.name} 
                onClick={e => {outliner.toggleColVisible(col.name); }}
              >{col.name}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
            {children && children.map((node, i) => (
              <TableTreeNode 
                key={i} node={node} level={1} 
                cols={colDefs2} options={options} 
              />
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
    markdown: null,
    noteInRow: false,
    hiddenCols: []
  },
}

TableTree.propTypes = {
  root: PropTypes.object.isRequired,
  cols: PropTypes.array,
  options: PropTypes.object
}

export default observer(TableTree);
