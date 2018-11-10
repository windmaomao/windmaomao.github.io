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
    const {schedule, resetSchedule, searchSchedule, runFiller} = this.props.store;
    const {calculating, canContinue} = schedule;
    const {slots, usages, error, found } = schedule;
    const delayedCall = () => {
      schedule.calculating = true;
      setTimeout(function(){ 
        searchSchedule();
      }, 0);
    }
    const test = () => {
      schedule.calculating = true;
      setTimeout(function() {
        const found = runFiller();
        console.log(found);

        schedule.slots = found.slots;
        schedule.usages = Object.keys(found.slots).reduce((acc, key) => {
          Object.keys(found.slots[key]).forEach(teacher => {
            acc[teacher] = 1;
          });
          return acc;
        }, {});

        schedule.error = found.positions.length - found.index;
        schedule.calculating = false;
      }, 0);
    }
    return (
      <div>
        <Spinner enabled={calculating} />
        <div>
          <span style={{float: 'right'}}>
            <Button 
              variant="contained" color="primary"
              onClick={() => { resetSchedule() }}
            >Prepare</Button>&nbsp;
            <Button 
              variant="contained" color="secondary"
              onClick={() => {test(); }}
            >Filler</Button>&nbsp;
            <Button 
              variant="contained" color="secondary"
              onClick={delayedCall}
              disabled={!canContinue}
            >Plan</Button>
          </span>
          <h1>
            Schedule &nbsp;
            {found ? <Label color="green">Found!</Label> : null} &nbsp;
            {error ? <Label color="red">{error}</Label> : null}
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
