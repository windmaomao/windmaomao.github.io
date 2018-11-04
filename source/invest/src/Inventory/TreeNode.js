import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// components
import { Table, Icon } from 'semantic-ui-react'

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
    const {node: { title, children }, level} = this.props;
    const {toggled} = this.state;
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
            {children.length > 0 ? (
              toggled ? (
                <Icon name="folder open outline" />
              ) : (
                <Icon name="folder outline" />
              )
            ) : (
              <Icon name="file outline" />
            )}
            {title}
          </Table.Cell>
        </Table.Row>        
        {toggled && children.map((item, i) => (
          <TreeNode key={i} node={item} level={level + 1} />
        ))}
      </Fragment>
    );
  }
}

TreeNode.propTypes = {
  node: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired,
}

export default TreeNode;
