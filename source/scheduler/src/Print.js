// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ReactToPrint from "react-to-print";
// primary components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },  
  sheet: {
    pageBreakAfter: 'always'
  }
});

class Print extends Component {
  slotMins = 15;

  slot2time(slot) {
    const total = slot*this.slotMins;  
    const hours = Math.floor(total/60);
    const mins = total - hours*60;
    var s = "00" + mins;
    return hours + ':' + s.substr(s.length-2);
  }

  avatars(list) {
    if (!list) return <span></span>;
    return (
        <span>{list.join(', ')}</span>
    );
  }

  slots(ids) {
    const {slots} = this.props;
    const gunnarStyle = { height: "30px", padding: "0px"};
    return (
      <div>
        <h2>{ids.join(', ')}</h2>
        <h3>{'July 16, 3:00 - 7:00'}</h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              {ids.map(id => <TableCell key={id}>{id}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(slots).map(slot => (
              <TableRow key={slot} style={gunnarStyle}>
                <TableCell>{this.slot2time(slot)}</TableCell>
                {ids.map(id => <TableCell key={id}>{this.avatars(slots[slot][id])}</TableCell>)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }

  fab() {
    const {classes} = this.props;
    return (
      <Button variant="fab" color={'primary'} className={classes.fab}>
        Print
      </Button>
    )
  }

  getPages(usages) {
    const k = Object.keys(usages);
    const chunk = (arr, size) => arr.reduce((acc, _, i) =>
      (i % size) ? acc : [...acc, arr.slice(i, i + size)], []
    );
    return chunk(k, 3);
  }

  render() {
    const {usages} = this.props;
    const pages = this.getPages(usages);
    return (
      <div>
        <ReactToPrint trigger={() => this.fab()}
          content={() => this.componentRef}
        />
        <div className={'allow-print'} ref={el => (this.componentRef = el)}>
          <h1>Today Schedule</h1>
          {pages.map((page, index) => (
            <div key={index}>
              {this.slots(page)}
              <div className={'print-page-break'}></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Print.propTypes = {
  slots: PropTypes.object.isRequired,
  usages: PropTypes.object,
}

// export default Plan;
export default withStyles(styles)(Print);
