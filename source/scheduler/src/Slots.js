// third party
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
// components
import { Label, Icon, Table } from 'semantic-ui-react'

const teacherLabel = id => (
  <Label key={id}>
    <Icon name='user' /> {id}
  </Label>
);

const teacherHeaderCols = id => (
  <Fragment key={id}>
    <Table.HeaderCell>Time</Table.HeaderCell>
    <Table.HeaderCell colSpan="3">{id}</Table.HeaderCell>
  </Fragment>
);

const slotTeacherCols = (slot, id) => (
  <Fragment key={id}>
    <Table.Cell>{slot}</Table.Cell>
    <Table.Cell>{id}</Table.Cell>
    <Table.Cell>{id}</Table.Cell>
    <Table.Cell>{id}</Table.Cell>
  </Fragment>
);

const Slots = props => (
  <div>
    <div>
      {props.ids.map(teacherLabel)}
    </div>
    <Table celled>
      <Table.Header>
        <Table.Row>
          {props.ids.map(teacherHeaderCols)}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {Object.keys(props.slots).map(slot => (
          <Table.Row>
            {props.ids.map(id => slotTeacherCols(slot, id))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>    
  </div>         
);

Slots.propTypes = {
  slots: PropTypes.object.isRequired,
  ids: PropTypes.array.isRequired,
}

export default Slots;
