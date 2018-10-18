// third party
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
// components
import { Label, Icon, Table } from 'semantic-ui-react'
// services
import {slotPrintTime, slotMaxStudents} from './constant';
// locals
const memorySlot = {};

const teacherLabel = id => (
  <Label key={id}>
    <Icon name='user' /> {id}
  </Label>
);

const teacherHeaderCols = id => (
  <Fragment key={id}>
    <Table.HeaderCell textAlign='center'>Time</Table.HeaderCell>
    <Table.HeaderCell colSpan={slotMaxStudents} textAlign='center'>{id}</Table.HeaderCell>
  </Fragment>
);

const slotTeacherCols = (slots, slot, id) => {
  const prev = memorySlot[id] ? memorySlot[id].slice(0) : [];
  const current = _desks(slots[slot][id], prev);
  // const firstName = name => (name.split(' '))[0];
  const firstName2 = name => {
    if (!name) return name;
    const parts = name.split(' ');
    // get first name
    let res = parts[0];
    // get last name initial
    const len = parts.length;
    if (len > 1) {
      if (parts[len-1].length) {
        res = res + parts[len-1][0].toUpperCase();
      }
    }
    return res;
  }

  const elm = (
    <Fragment key={id}>
      <Table.Cell textAlign='center'>
        <Label size={'mini'} style={{ color: 'black' }}>{slotPrintTime(slot)}</Label>
      </Table.Cell>
      <Table.Cell textAlign='center'>{firstName2(current[0])}&nbsp;</Table.Cell>
      <Table.Cell textAlign='center'>{firstName2(current[1])}&nbsp;</Table.Cell>
      <Table.Cell textAlign='center'>{firstName2(current[2])}&nbsp;</Table.Cell>
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
    return padArray([], slotMaxStudents, '');
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
  return padArray(final, slotMaxStudents, '');   
}

const styles = { 
  margin: '5rem auto',
  pageBreakAfter: 'always',
  maxWidth: '1024px',
};
const Slots = props => (
  <div style={styles}>
    <div>
      {props.ids.map(teacherLabel)}
    </div>
    <Table compact striped>
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
