// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
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

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1600 + theme.spacing.unit * 3 * 2)]: {
      width: 1600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

class Schedule extends Component {
  // debug = true;
  debug = false;

  constructor(props) {
    super(props);

    this.data = {
      students: studentsInfo,
      teachers: teachersInfo,
      preferences: prefsInfo
    };

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
    const {teachers, students, preferences} = this.info;
    this.setState({
      loading: false,
      slots: scheduler.fillSlots(students, teachers, preferences),
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
        this.info = {teachers, students, preferences};
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

  main() {
    const {classes} = this.props;
    const {loading, slots, ids, usages, total, errors} = this.state;
    return (
      <div className={classes.layout}>
        <Upload onDataUpload={this.onUpload} />
        {this.title(total)}
        {this.error(errors)}
        {!loading && <Plan slots={slots} ids={ids} usages={usages} />}
      </div>
    );
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
    this.info.students = data;
    this.updatePlan();
  }

  render() {
    return (
      <div>
        {this.print()}
        {this.main()}
      </div>
    );
  }
}

Schedule.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Schedule);
