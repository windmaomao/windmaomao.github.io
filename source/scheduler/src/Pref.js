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

class Pref extends Component {
  constructor(props) {
    super(props);
    this.keys = ["cost", "student", "prefers", "rejects"];
    this.state = { prefs: scheduler.data.prefs };
  }

  process(data) {
    const nonEmpty = data.filter(item => item.student);
    const processed = nonEmpty.map(item => {
      const id = item.student.trim();
      const prefers = item.prefers.trim().split('|');
      const rejects = item.rejects.trim().split('|');
      return {id, prefers, rejects};
    });
    return processed;
  }

  onUpload = data => {
    const prefs = this.process(data);
    scheduler.setData(null, null, prefs);
    this.setState({prefs});
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
    const {prefs} = this.state;
    const gunnarStyle = { height: "30px", padding: "0px"};
    return (
      <div>
        <h1>Preferences ({prefs.length})</h1>
        {this.renderUpload()}

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student</TableCell>
              <TableCell>Prefers</TableCell>
              <TableCell>Rejects</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prefs.map((pref, index) => (
              <TableRow key={index} style={gunnarStyle}>
                <TableCell>{pref.id}</TableCell>
                <TableCell>{pref.prefers.join(', ')}</TableCell>
                <TableCell>{pref.rejects.join(', ')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
  
export default Pref;
  