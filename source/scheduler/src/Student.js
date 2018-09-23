// third party
import React, { Component } from 'react';
// styles
// primary components
// primary components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// secondary components
// services
import {scheduler} from './Scheduler';

class Student extends Component {
  render() {
    const {students} = scheduler.data;
    const gunnarStyle = { height: "30px", padding: "0px"};
    const printTime = s => scheduler.slot2time(s);
    return (
      <div>
        <h1>Student Page ({students.length})</h1>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student</TableCell>
              <TableCell>Start</TableCell>
              <TableCell>End</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map(student => (
              <TableRow key={student.id + student.start} style={gunnarStyle}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{printTime(student.start)}</TableCell>
                <TableCell>{printTime(student.end)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
  
export default Student;
  