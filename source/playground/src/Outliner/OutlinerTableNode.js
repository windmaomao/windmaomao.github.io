import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// components
import { Table, Icon } from 'semantic-ui-react'
// services
const MarkdownIt = require('markdown-it'), 
  md = new MarkdownIt({ breaks: true });
const parse = v => (md ? md.render(v.toString()) : v);
const visible = v => v.visible;

const OutlinerTableNode = observer(({ node, cols, options }) => {
  const {level, folder, collapsed, title, note, children, noteHidden} = node;
  const {toggle, toggleNote} = node;
  const {noteEnabled, noteInRow, filterText} = options;
  const displayRow = filterText ? node.found(filterText) : true;
  const hasNote = !!note;
  const displayNote = noteEnabled && !noteHidden && hasNote;
  const displayNoteRow = noteInRow && displayNote && displayRow;
  return (
    <Fragment>
      {displayRow && (
        <Table.Row className={`tree-row level-${level}`}>
          <Table.Cell />
          <Table.Cell className="title">
            <span className="folder">
              {folder ? (
                !collapsed ? (
                  <Icon name="caret down" onClick={toggle} />
                ) : (
                  <Icon name="caret right" onClick={toggle} />
                )
              ) : (
                <Icon name="file outline" />
              )}
            </span>
            <span className="caption">
              {title} &nbsp;
              {hasNote && (
                <Icon 
                  link size='small' 
                  name={noteHidden ? 'sticky note' : 'sticky note outline'}
                  title='Notes' 
                  onClick={toggleNote}
                />
              )}
            </span>
            {(displayNote && !noteInRow) && (
              <span className="description">{note}</span>
            )}
          </Table.Cell>
          {cols.filter(visible).map((col) => (
            <Table.Cell key={col.name}>{col.value(node)}</Table.Cell>
          ))}
        </Table.Row>
      )}
      {displayNoteRow && (
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
    noteEnabled: true,
    noteInRow: true,
  },
}

OutlinerTableNode.propTypes = {
  node: PropTypes.object.isRequired,
  cols: PropTypes.array,
  options: PropTypes.object,
}

export default observer(OutlinerTableNode);
