// third party
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
// primary components
import Button from '@material-ui/core/Button';
// secondary components
import Print from './Print2';

class Schedule extends Component {
  render() {
    const {schedule, resetSchedule, searchScheduleStart, searchScheduleEnd } = this.props.store;
    const {calculating, canContinue, stepIndex} = schedule;
    const {slots, usages, total} = schedule;
    const search = () => { searchScheduleStart(); searchScheduleEnd(); }
    return (
      <div>
        <div>
          {calculating && <div className="ui active dimmer">
            <div className="ui loader"></div>
          </div>}
          <span style={{float: 'right'}}>
            <Button 
              variant="contained" color="primary"
              onClick={() => { resetSchedule() }}
            >Prepare</Button>&nbsp;
            <Button 
              variant="contained" color="secondary"
              onClick={() => { search(); }}
              disabled={!canContinue}
            >Plan</Button>
          </span>
          <h1>Schedule <small>{stepIndex}</small></h1>
        </div>
        <Print slots={slots} usages={usages} />
      </div>
    );
  }
}

Schedule.propTypes = {
  store: PropTypes.object.isRequired,
}

export default inject("store")(observer(Schedule));
