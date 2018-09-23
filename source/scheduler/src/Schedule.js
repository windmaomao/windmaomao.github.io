// third party
import React, {Component, Fragment} from 'react';
// styles
// primary components
import Button from '@material-ui/core/Button';
// secondary components
import Plan from './Plan';
import Print from './Print';
import Upload from './Upload';
// services
import {scheduler} from './Scheduler';
import {teachersInfo, studentsInfo, prefsInfo} from './data1';
import ApiService from './Api';

class Schedule extends Component {
  // debug = true;
  debug = false;

  constructor(props) {
    super(props);

    scheduler.setData(teachersInfo, studentsInfo, prefsInfo);

    this.state = {
      loading: true,
      slots: {},
      usages: {},
      ids: [],
      total: 0,
      errors: [],
    };
  }

  componentDidMount() {
    this.initPlan();
  }

  updatePlan() {
    scheduler.plan();
    this.setState({
      loading: false,
      slots: scheduler.slots,
      usages: scheduler.teacherUsage,
      ids: Object.keys(scheduler.teacherUsage),
      total: scheduler.totalSlots(),
      errors: scheduler.errors
    });
  }

  initPlan() {
    if (this.debug) {
      this.updatePlan();
    } else {
      this.setState({loading: true});
      ApiService.getInfo().then(data => {
        const {teachers, students, preferences} = data;
        scheduler.setData(teachers, students, preferences);
        this.updatePlan();
      });
    }
  }

  title(total) {
    const {loading} = this.props;
    return (
      <div className={'App-title'}>
        <Button 
          variant="contained" color="secondary" style={{float: 'right'}}
          onClick={() => {this.updatePlan();}}
          disabled={loading}
        >Plan</Button>
        <h1>Today <small>({total})</small></h1>
      </div>
    );
  }

  error(errors) {
    return <p style={{ color: 'red' }}>{errors.join(',')}</p>;
  }

  print() {
    const {loading, slots, usages} = this.state;
    return (
      <div>
        {!loading && <Print slots={slots} usages={usages} />}
      </div>
    )
  }

  onUpload = (data) => {
    scheduler.setData(null, data, null);
    this.updatePlan();
  }

  render() {
    const {loading, slots, ids, usages, total, errors} = this.state;
    return (
      <div>
        {this.print()}
        <Upload onDataUpload={this.onUpload} />
        {this.title(total)}
        {this.error(errors)}
        {!loading && <Plan slots={slots} ids={ids} usages={usages} />}
      </div>
    );
  }
}

export default Schedule;
