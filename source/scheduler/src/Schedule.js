// third party
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
// components
import { Label } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';
import Print from './Print2';
import Spinner from './Spinner';
import Filler from './Filler';

class Schedule extends Component {
  render() {
    const {schedule, resetSchedule, searchSchedule } = this.props.store;
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
        const filler = new Filler([3, 2]);
        const start = filler.start();
        let done = false;
        while (!done) {
          const obj = start.next();
          done = obj.done;
        }              
        console.warn('done');
        schedule.calculating = false;
      }, 0);
    }
    return (
      <div>
        <Spinner enabled={calculating} />
        <div>
          <span style={{float: 'right'}}>
            <Button onClick={() => {test();}}>Test</Button>
            <Button 
              variant="contained" color="primary"
              onClick={() => { resetSchedule() }}
            >Prepare</Button>&nbsp;
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
