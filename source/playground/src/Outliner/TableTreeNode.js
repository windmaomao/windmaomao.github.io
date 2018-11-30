import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// components
import { Table, Icon } from 'semantic-ui-react'
// styles
// import './TreeNode.css';

class TableTreeNode extends Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false };
  }
  toggle = () => {
    const {toggled} = this.state;  
    this.setState({ toggled: !toggled });
  }
render() {
    const {node, level, cols, options} = this.props;
    const {title, note, children, ...values} = node;
    const {toggled} = this.state;
    const items = children || [];
    const {markdown, noteInRow} = options;
    const parse = v => (markdown ? markdown.render(v.toString()) : v);
    return (
      <Fragment>
        <Table.Row className={`tree-row level-${level}`}>
          <Table.Cell />
          <Table.Cell className="title"
            onClick={() => {this.toggle(); }}
          >
            <span className="folder">
              {items.length > 0 ? (
                toggled ? (
                  <Icon name="caret down" />
                ) : (
                  <Icon name="caret right" />
                )
              ) : (
                <Icon name="file outline" />
              )}
            </span>
            <span className="caption">{title}</span>
            {!noteInRow && (
              <span className="description">{note}</span>
            )}
          </Table.Cell>
          {cols.map(col => (
            <Fragment key={col.name}>
              <Table.Cell>{col.value(values)}</Table.Cell>
            </Fragment>
          ))}
        </Table.Row>
        {note ? (
          noteInRow && (
            <Table.Row className={`tree-row level-${level} note`}>
              <Table.Cell />
              <Table.Cell className="title" colSpan={cols.length + 1}>
                <span className="description" 
                  dangerouslySetInnerHTML={{__html: parse(note)}}
                />
              </Table.Cell>
            </Table.Row>
          )
        ) : null}        
        {toggled && items.map((item, i) => (
          <TableTreeNode 
            key={i} node={item} level={level + 1} 
            cols={cols} options={options} />
        ))}
      </Fragment>
    );
  }
}

TableTreeNode.defaultProps = {
  md: null,
}

TableTreeNode.propTypes = {
  node: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired,
  options: PropTypes.object.isRequired,
  md: PropTypes.object,
}

export default TableTreeNode;
