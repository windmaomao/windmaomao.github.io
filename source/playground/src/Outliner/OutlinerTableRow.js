import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// components
import { Table, Icon } from 'semantic-ui-react'

const OutlinerTableRow = ({ row, cols, options }) => {
  const {id, level, node, folder, collapsed} = row;
  const {title, note, children, ...values} = node;
  const {markdown, noteInRow} = options;
  const parse = v => (markdown ? markdown.render(v.toString()) : v);
  const displayNoteInRow = noteInRow && !!note;
  return (
    <Fragment>
      <Table.Row className={`tree-row level-${level}`}>
        <Table.Cell />
        <Table.Cell className="title"
          onClick={() => {this.toggle(); }}
        >
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
            <Table.Cell>{col.value(values)}</Table.Cell>
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
    </Fragment>
  );
};

OutlinerTableRow.defaultProps = {
  cols: [],
  options: {},
}

OutlinerTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  cols: PropTypes.array,
  options: PropTypes.object,
}

export default OutlinerTableRow;
