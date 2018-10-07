// third party
import React, {Component} from 'react';
// styles
// primary components
import Button from '@material-ui/core/Button';
// secondary components
import Print from './Print2';
// services
import {scheduler} from './Scheduler';

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slots: scheduler.slots,
      usages: scheduler.teacherUsage,
      ids: Object.keys(scheduler.teacherUsage),
      total: scheduler.totalSlots(),
      errors: scheduler.errors,
      disabled: true
    };
  }

  preparePlan() {
    scheduler.prepare();
    this.setState({
      slots: scheduler.slots,
      usages: scheduler.teacherUsage,
      ids: Object.keys(scheduler.teacherUsage),
      total: scheduler.totalSlots(),
      errors: scheduler.errors,
      disabled: false
    });
  }

  stepPlan() {
    const canContinue = scheduler.stepToNext();
    this.setState({
      slots: scheduler.slots,
      usages: scheduler.teacherUsage,
      ids: Object.keys(scheduler.teacherUsage),
      total: scheduler.totalSlots(),
      errors: scheduler.errors,
      disabled: !canContinue
    });
  }

  render() {
    const {total, disabled} = this.state;
    return (
      <div>
        <div>
          <span style={{float: 'right'}}>
            <Button 
              variant="contained" color="primary"
              onClick={() => {this.preparePlan();}}
            >Prepare</Button>&nbsp;
            <Button 
              variant="contained" color="secondary"
              onClick={() => {this.stepPlan();}}
              disabled={disabled}
            >Plan</Button>
          </span>
          <h1>Schedule <small>({total})</small></h1>
        </div>
        <Print slots={scheduler.slots} usages={scheduler.teacherUsage} />
      </div>
    );
  }
}

export default Schedule;
