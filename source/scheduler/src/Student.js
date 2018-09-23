// third party
import React, { Component } from 'react';
// styles
// primary components
// secondary components
// services
import {scheduler} from './Scheduler';

class Student extends Component {
  render() {
    console.log(scheduler.data.students);
    return (
        <h1>Student Page</h1>
    );
  }
}
  
export default Student;
  