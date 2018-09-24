// third party
import React, { Component } from 'react';
import CsvParse from '@vtex/react-csv-parse'
// styles
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
    this.keys = ["cost", "teacher", "start", "end"];
    this.state = { teachers: scheduler.data.teachers };
  }

  process(data) {
    const nonEmpty = data.filter(item => item.teacher);
    const timeToSlot = time => {
      const parts = time.split(':').map(item => parseInt(item, 10));
      return parts[0]*4+parts[1]/15- 48;
    }
    const processed = nonEmpty.map(item => {
      const id = item.teacher.trim();
      const start = timeToSlot(item.start.trim());
      const end = timeToSlot(item.end.trim())-1;
      return {id, start, end};
    });
    return processed;
  }

  onUpload = data => {
    const teachers = this.process(data);
    scheduler.setData(teachers, null, null);
    this.setState({teachers});
  }

  renderUpload() {
    return (
      <CsvParse
        keys={this.keys}
        onDataUploaded={this.onUpload}
        onError={this.handleError}
        render={onChange => <input type="file" onChange={onChange} />}
      />            
    )        
  }

  render() {
    const {teachers} = this.state;
    const gunnarStyle = { height: "30px", padding: "0px"};
    const printTime = s => scheduler.slot2time(s);
    return (
      <div>
        <h1>Teachers ({teachers.length})</h1>
        {this.renderUpload()}

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
                <TableCell>{printTime(teacher.end+1)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
  
export default Teacher;
  