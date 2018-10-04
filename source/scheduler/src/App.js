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
import Print from './Print';
import Print2 from './Print2';
// services
import {scheduler} from './Scheduler';
import {teachersInfo, studentsInfo, prefsInfo} from './data1';
import ApiService from './Api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }

  componentDidMount() {
    const debug = true;
    // const debug = false;
    if (debug) {
      scheduler.setData(teachersInfo, studentsInfo, prefsInfo);
      this.setState({loading: false});
    } else {
      ApiService.getInfo().then(data => {
        const {teachers, students, preferences} = data;
        scheduler.setData(teachers, students, preferences);
        this.setState({loading: false});
      });
    }
  }

  render() {
    const {loading} = this.state;
    if (loading) {
      return null;
    }

    const print = props => {
      return <Print2 slots={scheduler.slots} usages={scheduler.teacherUsage} />
    };
    return (
      <Fragment>
        <Route exact path="/" component={Schedule} />
        <Route path="/student" component={Student} />
        <Route path="/teacher" component={Teacher} />
        <Route path="/pref" component={Pref} />
        <Route path="/print" render={print} />
      </Fragment>
    )
  }
}

export default App;