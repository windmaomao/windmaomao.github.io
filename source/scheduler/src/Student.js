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

class Student extends Component {
  constructor(props) {
    super(props);
    this.keys = ["cost", "duration", "customer", "date"];
    this.state = { students: scheduler.data.students };
  }

  process(data) {
    const nonEmpty = data.filter(item => item.customer);
    const processed = nonEmpty.map(item => {
      const id = item.customer.replace('Student Name - ', '');
      const date = new Date(item.date);
      const start = Math.round(date.getHours()*4+date.getMinutes()/15) - 48;
      const duration = item.duration.replace(' mins', '');
      const end = start + Math.round(parseInt(duration, 10)/15) - 1;
      return {id, start, end};
    });
    return processed;
  }

  onUpload = data => {
    const students = this.process(data);
    scheduler.setData(null, students, null);
    this.setState({students});
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

  renderTeachers(student) {
    const selected = student.teachers[student.teacherIndex].id;
    const weight = id => (id === selected) ? 'bold' : 'normal';
    return <span>
      {student.teachers.map((teacher, index) => 
        <span key={index} style={{ fontWeight: weight(teacher.id)}}>{teacher.id}, </span>
      )}
    </span>
  }

  render() {
    const {students} = this.state;
    const gunnarStyle = { height: "30px", padding: "0px"};
    const time = s => scheduler.slot2time(s);
    return (
      <div>
        <h1>Students ({students.length})</h1>
        {this.renderUpload()}

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student</TableCell>
              <TableCell>Start</TableCell>
              <TableCell>End</TableCell>
              <TableCell>Teachers</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index} style={gunnarStyle}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{time(student.start)}</TableCell>
                <TableCell>{time(student.end+1)}</TableCell>
                <TableCell>{student.teachers && 
                  this.renderTeachers(student)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
  
export default Student;
  