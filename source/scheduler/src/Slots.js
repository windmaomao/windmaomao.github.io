// third party
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
// components
import { Label, Icon, Table } from 'semantic-ui-react'
// services
import {scheduler} from './Scheduler';
// locals
const time = scheduler.slot2time;
const memorySlot = {};

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

const slotTeacherCols = (slots, slot, id) => {
  const prev = memorySlot[id] ? memorySlot[id].slice(0) : [];
  const current = _desks(slots[slot][id], prev);
  const elm = (
    <Fragment key={id}>
      <Table.Cell>{time(slot)}</Table.Cell>
      <Table.Cell>{current[0]}</Table.Cell>
      <Table.Cell>{current[1]}</Table.Cell>
      <Table.Cell>{current[2]}</Table.Cell>
    </Fragment>
  );
  memorySlot[id] = current;
  return elm;
}

const _desks = (list, prev) => {
  const padArray = (arr, len, fill) => {
    return arr.concat(Array(len).fill(fill)).slice(0,len);
  }

  if (!list || !list.length) {
    return padArray([], 3, '');
  }
  let final = list.slice(0);
  // conforming to the previous arrangement
  const avails = [];
  if (prev && prev.length) {
    final = prev.slice(0);
    // place holder for existing items
    for (let i=0; i<prev.length; i++) {
      // if a prev item not in list
      if (list.indexOf(prev[i]) < 0) {
        final[i] = '';
        avails.push(i);
      }
    }
    // fill new items
    let j = 0;
    for (let i=0; i<list.length; i++) {
      // for new item 
      const item = list[i];
      if (final.indexOf(item) < 0) {
        j++;
        if (j > avails.length) {
          final.push(item);
        } else {
          final[avails[j-1]] = item;
        }
      }
    }
  } 
  return padArray(final, 3, '');   
}

const Slots = props => (
  <div>
    <div>
      {props.ids.map(teacherLabel)}
    </div>
    <Table compact>
      <Table.Header>
        <Table.Row>
          {props.ids.map(teacherHeaderCols)}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {Object.keys(props.slots).map(slot => (
          <Table.Row key={slot}>
            {props.ids.map(id => slotTeacherCols(props.slots, slot, id))}
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
