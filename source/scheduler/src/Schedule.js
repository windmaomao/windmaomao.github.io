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
    const {schedule, resetSchedule, searchSchedule } = this.props.store;
    const {calculating, canContinue} = schedule;
    const {slots, usages, error, stepIndex } = schedule;
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
              onClick={() => { searchSchedule(); }}
              disabled={!canContinue}
            >Plan</Button>
          </span>
          <h1>
            Schedule &nbsp;
            {error ? <Label color="red">{stepIndex}</Label> : null}
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
