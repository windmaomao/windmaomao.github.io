import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// components
import { Table, Icon } from 'semantic-ui-react'
// styles
import './TreeNode.css';

class TreeNode extends Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false };
  }
  toggle = () => {
    const {toggled} = this.state;  
    this.setState({ toggled: !toggled });
  }
render() {
    const {node, level, cols, md} = this.props;
    const {title, children, ...values} = node;
    const {toggled} = this.state;
    const items = children || [];
    const parse = v => (md ? md.render(v.toString()) : v);
    return (
      <Fragment>
        <Table.Row className={`level-${level}`}>
          <Table.Cell
            style={{ 
              paddingLeft: 8*level + 8 + 'px',
              cursor: 'pointer',
              userSelect: 'none'
            }}
            onClick={() => {this.toggle(); }}
          >
            {items.length > 0 ? (
              toggled ? (
                <Icon name="folder open outline" />
              ) : (
                <Icon name="folder outline" />
              )
            ) : (
              <Icon name="file outline" />
            )}
            <span dangerouslySetInnerHTML={{__html: parse(title)}} />
          </Table.Cell>
          {cols.map(col => (
            <Fragment key={col.name}>
              <Table.Cell>{col.value(values)}</Table.Cell>
            </Fragment>
          ))}
        </Table.Row>        
        {toggled && items.map((item, i) => (
          <TreeNode key={i} node={item} level={level + 1} cols={cols} md={md} />
        ))}
      </Fragment>
    );
  }
}

TreeNode.defaultProps = {
  md: null
}

TreeNode.propTypes = {
  node: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired,
  md: PropTypes.object,
}

export default TreeNode;
