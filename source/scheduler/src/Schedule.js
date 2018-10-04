// third party
import React, {Component} from 'react';
// styles
// primary components
import Button from '@material-ui/core/Button';
// secondary components
import Plan from './Plan';
import Print from './Print';
// services
import {scheduler} from './Scheduler';

class Schedule extends Component {
  // debug = true;
  debug = false;

  constructor(props) {
    super(props);

    this.state = {
      slots: scheduler.slots,
      usages: scheduler.teacherUsage,
      ids: Object.keys(scheduler.teacherUsage),
      total: scheduler.totalSlots(),
      errors: scheduler.errors
    };
  }

  preparePlan() {
    // scheduler.plan();
    scheduler.prepare();
    this.setState({
      slots: scheduler.slots,
      usages: scheduler.teacherUsage,
      ids: Object.keys(scheduler.teacherUsage),
      total: scheduler.totalSlots(),
      errors: scheduler.errors
    });
  }

  stepPlan() {
    // scheduler.prepare();
    scheduler.stepToNext();
    this.setState({
      slots: scheduler.slots,
      usages: scheduler.teacherUsage,
      ids: Object.keys(scheduler.teacherUsage),
      total: scheduler.totalSlots(),
      errors: scheduler.errors
    });
  }

  title(total) {
    const {loading} = this.props;
    return (
      <div>
        <span style={{float: 'right'}}>
          <Button 
            variant="contained" color="primary"
            onClick={() => {this.preparePlan();}}
            disabled={loading}
          >Prepare</Button>&nbsp;
          <Button 
            variant="contained" color="secondary"
            onClick={() => {this.stepPlan();}}
            disabled={loading}
          >Plan</Button>
        </span>
        <h1>Schedule <small>({total})</small></h1>
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

  render() {
    const {loading, slots, ids, usages, total, errors} = this.state;
    return (
      <div>
        {this.title(total)}
        {this.error(errors)}
        {!loading && <Plan slots={slots} ids={ids} usages={usages} />}
      </div>
    );
  }
}

export default Schedule;
