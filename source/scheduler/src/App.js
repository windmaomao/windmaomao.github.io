// third party
import React, {Component, Fragment} from 'react';
import {Route} from "react-router-dom";
// styles
import './App.css';
// secondary components
import Schedule from './Schedule';
import Student from './Student';
import Teacher from './Teacher';
import Pref from './Pref';
// services
import Filler from './Filler';
import {scheduler} from './Scheduler';
import {teachersInfo, studentsInfo, prefsInfo} from './data1';
// import ApiService from './Api';

const filler = new Filler();
const start = filler.start();
let done = false;
while (!done) {
  const obj = start.next();
  done = obj.done;
}

class App extends Component {

  componentDidMount() {
    const debug = true;
    // const debug = false;
    if (debug) {
      scheduler.setData(teachersInfo, studentsInfo, prefsInfo);
    }
    //  else {
    //   ApiService.getInfo().then(data => {
    //     const {teachers, students, preferences} = data;
    //     scheduler.setData(teachers, students, preferences);
    //     this.setState({loading: false});
    //   });
    // }
  }

  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Schedule} />
        <Route path="/student" component={Student} />
        <Route path="/teacher" component={Teacher} />
        <Route path="/pref" component={Pref} />
      </Fragment>
    )
  }
}

export default App;