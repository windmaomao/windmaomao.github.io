import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Table, Icon } from 'semantic-ui-react'

const OutlinerTableNode = observer(({ node, cols, options }) => {
  const {level, folder, collapsed, title, note, children} = node;
  const {markdown, noteInRow} = options;
  const parse = v => (markdown ? markdown.render(v.toString()) : v);
  const displayNoteInRow = noteInRow && !!note;
  return (
    <Fragment>
      <Table.Row className={`tree-row level-${level}`}>
        <Table.Cell />
        <Table.Cell className="title" onClick={node.toggle}>
          <span className="folder">
            {folder ? (
              !collapsed ? (
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
            <Table.Cell>{col.visible ? col.value(node) : ''}</Table.Cell>
          </Fragment>
        ))}
      </Table.Row>
      {displayNoteInRow && (
        <Table.Row className={`tree-row level-${level} note`}>
          <Table.Cell />
          <Table.Cell className="title" colSpan={cols.length + 1}>
            <span className="description" 
              dangerouslySetInnerHTML={{__html: parse(note)}}
            />
          </Table.Cell>
        </Table.Row>
      )}
      {!collapsed && children.map((item, i) => (
        <OutlinerTableNode key={`node-${i}`} node={item} cols={cols} options={options} />
      ))}
    </Fragment>
  );
});

OutlinerTableNode.defaultProps = {
  cols: [],
  options: {},
}

OutlinerTableNode.propTypes = {
  node: PropTypes.object.isRequired,
  cols: PropTypes.array,
  options: PropTypes.object,
}

export default OutlinerTableNode;
