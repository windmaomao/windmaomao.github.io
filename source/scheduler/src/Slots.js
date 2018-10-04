// third party
import React from 'react';
import PropTypes from 'prop-types';
// components
import { Label, Icon, Table } from 'semantic-ui-react'

const teacherLabel = id => (
  <Label>
    <Icon name='user' /> {id}
  </Label>
);

const Slots = props => (
  <div>
    <div>
      {props.ids.map(teacherLabel)}
    </div>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Slot</Table.HeaderCell>
          <Table.HeaderCell colSpan="3">T1</Table.HeaderCell>
          <Table.HeaderCell colSpan="3">T2</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>S1</Table.HeaderCell>
          <Table.HeaderCell>S2</Table.HeaderCell>
          <Table.HeaderCell>S3</Table.HeaderCell>
          <Table.HeaderCell>S1</Table.HeaderCell>
          <Table.HeaderCell>S2</Table.HeaderCell>
          <Table.HeaderCell>S3</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>First</Label>
          </Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>    
  </div>         
);

Slots.propTypes = {
  slots: PropTypes.object.isRequired,
  ids: PropTypes.array.isRequired,
}

export default Slots;
