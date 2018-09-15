// third party
import React, { Component } from 'react';
// styles
// primary components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// services
import SchedulerService from './Scheduler';

const teachersInfo = [
  { id: 'JP',   start: 12, end: 27 },   // 3:00 - 7:00am
  { id: 'CS',   start: 12, end: 27 },    // 3:00 - 7:00am
  { id: 'SH',    start: 12, end: 27 },    // 3:00 - 7:00am
];
const studentsInfo = [
  { id: 'Libba', start: 12, end: 15 },   // 3:00 - 4:00am
  { id: 'Louise', start: 12, end: 15 },   // 3:00 - 4:00am
  { id: 'Walker', start: 12, end: 15 },   // 3:00 - 4:00am
  { id: 'Amir',    start: 12, end: 15 },   // 3:00 - 4:00am
  { id: 'Simon', start: 12, end: 15 },   // 3:00 - 4:00am
  { id: 'Yaseen', start: 12, end: 15 },   // 3:00 - 4:00am
  { id: 'Lollie',  start: 14, end: 17 },   // 3:30 - 4:30am
  { id: 'Lada',  start: 15, end: 18 },   // 3:45 - 4:45am
  { id: 'Addison', start: 16, end: 19 },   // 4:00 - 5:00am
  { id: 'Bowen',  start: 16, end: 19 },   // 4:00 - 5:00am
  { id: 'Hannah',   start: 16, end: 21 },   // 4:00 - 5:30am
  { id: 'Varsha', start: 16, end: 18 },   // 4:00 - 5:00am
  { id: 'Heyward', start: 16, end: 18 },   // 4:00 - 5:00am
  { id: 'Austin', start: 16, end: 18 },   // 4:00 - 5:00am
  { id: 'Ian',   start: 18, end: 21 },   // 4:30 - 5:30am
  { id: 'Berkely',   start: 18, end: 21 },   // 4:30 - 5:30am
  { id: 'Yusuf',   start: 20, end: 23 },   // 5:00 - 6:00am
  { id: 'Peri',   start: 20, end: 23 },   // 5:00 - 6:00am
  { id: 'Hasan',   start: 20, end: 23 },   // 5:00 - 6:00am
  { id: 'Syd',   start: 20, end: 23 },   // 5:00 - 6:00am
  { id: 'Reese',   start: 20, end: 23 },   // 5:00 - 6:00am
  { id: 'Meagan',   start: 20, end: 25 },   // 5:00 - 6:30am
  { id: 'Anton',   start: 22, end: 27 },   // 5:30 - 7:00am
  { id: 'Smedes',   start: 22, end: 25 },   // 5:30 - 6:30am
  { id: 'Audrey',   start: 22, end: 25 },   // 5:30 - 6:30am
  { id: 'Lily M',   start: 24, end: 27 },   // 6:00 - 7:00am
  { id: 'AC',   start: 24, end: 27 },   // 6:00 - 7:00am
  { id: 'Bennett',   start: 24, end: 27 },   // 6:00 - 7:00am
  { id: 'Hayes',   start: 24, end: 27 },   // 6:00 - 7:00am
];
const prefsInfo = [
  { id: 'Libba', prefers: [], rejects: ['CS'] },
  { id: 'Louise', prefers: [], rejects: ['CS'] },
  { id: 'Simon', prefers: [], rejects: ['SH'] },
  { id: 'Yaseen', prefers: [], rejects: ['SH'] },
  { id: 'Hannah', prefers: ['JP'], rejects: ['CS'] },
  { id: 'Lily M', prefers: ['SH','JP'], rejects: ['CS'] },
  { id: 'Hayes', prefers: ['CS'], rejects: [] },
];

export default class Main extends Component {
  
    constructor(props) {
      super(props);
      this.ss = new SchedulerService();
      this.state = {
        slots: this.ss.fillSlots(studentsInfo, teachersInfo, prefsInfo),
        errors: this.ss.errors
      }
    }
    
    slot(item) {
      const teachers = Object.keys(item);
      return (
        <TableCell>
          <Table>
            {teachers.map(teacher => (
              <TableRow key={teacher}>
                <TableCell width="150">{teacher}</TableCell>
                <TableCell>{item[teacher].join(', ')}</TableCell>
              </TableRow>
            ))}
          </Table>
        </TableCell>
      );
    }

    slots(slotsMap) {
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Slot</TableCell>
              <TableCell>Assigned Teacher / Students</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(slotsMap).map(slot => (
              <TableRow key={slot}>
                <TableCell>{this.ss.slot2time(slot)}</TableCell>
                {this.slot(slotsMap[slot])}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
    }
    
    errors(errors) {
      if (!errors.length) return null;
      return (
        <div className={'alert alert-danger'}>
          <ul>
            {errors.map(error => (
              <li>{error}</li>
            ))}
          </ul>
        </div>
      )
    }
    
    render() {
      const {slots, errors} = this.state;
      return (
        <Paper classes={{rounded: true}}>
          <h1>Slots Available</h1>
          {this.errors(errors)}
          {this.slots(slots)}
        </Paper>          
      );
    }
  }