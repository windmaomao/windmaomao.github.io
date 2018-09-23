// third party
import React, { Component } from 'react';
// styles
// primary components
import Upload from './Upload';
// primary components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// secondary components
// services
import {scheduler} from './Scheduler';

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = { teachers: scheduler.data.teachers };
  }
  onUpload = (teachers) => {
    scheduler.setData(teachers, null, null);
    this.setState({teachers});
  }

  render() {
    const {teachers} = this.state;
    const gunnarStyle = { height: "30px", padding: "0px"};
    const printTime = s => scheduler.slot2time(s);
    return (
      <div>
        <h1>Teachers ({teachers.length})</h1>
        <Upload onDataUpload={this.onUpload} />

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Teacher</TableCell>
              <TableCell>Start</TableCell>
              <TableCell>End</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher, index) => (
              <TableRow key={index} style={gunnarStyle}>
                <TableCell>{teacher.id}</TableCell>
                <TableCell>{printTime(teacher.start)}</TableCell>
                <TableCell>{printTime(teacher.end)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
  
export default Teacher;
  