// third party
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
// components
import { Label } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';
import Print from './Print2';
import Spinner from './Spinner';

class Schedule extends Component {
  render() {
    const {schedule} = this.props.store;
    const {calculating, slots, usages, error, found } = schedule;
    const {planScheduleN} = this.props.store;
    // const test2 = () => {
    //   schedule.calculating = true;
    //   setTimeout(function() {
    //     planSchedule();
    //     schedule.calculating = false;
    //   }, 0);
    // }
    const testN = () => {
      schedule.calculating = true;
      setTimeout(function() {
        planScheduleN();
        schedule.calculating = false;
      }, 0);
    }
    return (
      <div>
        <Spinner enabled={calculating} />
        <div>
          <span style={{float: 'right'}}>
            <Button 
              variant="contained" color="secondary"
              onClick={() => { testN() }}
            >Plan</Button>&nbsp;
          </span>
          <h1>
            Schedule &nbsp;
            {found ? <Label color="green">Found!</Label> : null} &nbsp;
            {error ? <Label color="red">Not Found!</Label> : null}
          </h1>
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
