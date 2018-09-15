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
import {teachersInfo, studentsInfo, prefsInfo} from './data';

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