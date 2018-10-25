// third party
import React, { Component } from 'react';
import CsvParse from '@vtex/react-csv-parse'
import ReactToPrint from "react-to-print";
// styles
// primary components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from 'semantic-ui-react'
// secondary components
// services
import {scheduler} from './Scheduler';
import {slotsInDuration, jsDateToSlot} from './constant';

const buttonStyle = {
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  opacity: 0.4
};
const PrintButton = (
  <Button circular color='grey' style={buttonStyle}>Print</Button>
);

class Student extends Component {
  constructor(props) {
    super(props);
    this.keys = ["cost", "duration", "customer", "date"];
    this.state = { students: scheduler.data.students };
  }

  process(data) {
    const nonEmpty = data.filter(item => item.customer);
    const processed = nonEmpty.map(item => {
      const cost = item.cost;
      const id = item.customer.replace('Student Name - ', '');
      const start = jsDateToSlot(new Date(item.date));
      const duration = item.duration.replace(' mins', '');
      const end = start + slotsInDuration(parseInt(duration, 10)) - 1;
      return {id, start, end, cost};
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
        <ReactToPrint trigger={() => PrintButton}
          content={() => this.componentRef}
        />
        <div ref={el => (this.componentRef = el)} className="allow-print">
          <span></span>
          <h1>Students ({students.length})</h1>
          {this.renderUpload()}
          
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Cost</TableCell>
                <TableCell>Student</TableCell>
                <TableCell>Start</TableCell>
                <TableCell>End</TableCell>
                <TableCell>Teachers</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index} style={gunnarStyle}>
                  <TableCell>{student.cost}</TableCell>
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
      </div>
    );
  }
}
  
export default Student;
  