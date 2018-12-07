import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Table, Icon } from 'semantic-ui-react'
// services
const MarkdownIt = require('markdown-it'), 
  md = new MarkdownIt({ breaks: true });

const OutlinerTableNode = observer(({ node, cols, options }) => {
  const {level, folder, collapsed, title, note, children} = node;
  const {noteEnabled, noteInRow, filterText} = options;
  const parse = v => (md ? md.render(v.toString()) : v);
  const hasNote = !!note;
  const displayNoteInRow = noteEnabled && noteInRow && hasNote;
  const visible = v => v.visible;
  const displayRow = filterText ? node.found(filterText) : true;
  return (
    <Fragment>
      {displayRow && (
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
            <span className="caption">
              {title} &nbsp;
              {hasNote && (
                <Icon disabled size='small' name='sticky note outline' title='Notes' />
              )}
            </span>
            {(noteEnabled && !noteInRow) && (
              <span className="description">{note}</span>
            )}
          </Table.Cell>
          {cols.filter(visible).map((col) => (
            <Table.Cell key={col.name}>{col.value(node)}</Table.Cell>
          ))}
        </Table.Row>
      )}
      {(displayRow && displayNoteInRow) && (
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
  options: {
    filterText: '',
    noteEnabled: false,
    noteInRow: true,
  },
}

OutlinerTableNode.propTypes = {
  node: PropTypes.object.isRequired,
  cols: PropTypes.array,
  options: PropTypes.object,
}

export default observer(OutlinerTableNode);
