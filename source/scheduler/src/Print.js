// third party
import React, { Component, Fragment } from 'react';
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
// services
import {scheduler} from './Scheduler';

const styles = theme => ({
  table: {
    fontFamily: 'monospace'
  },
  row: {
    height: "30px", 
    padding: "0px"
  },
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

  getDesks(list, prev) {
    if (!list || !list.length) return list;
    let final = list.slice(0);
    console.log(final, prev);
    // conforming to the previous arrangement
    const avails = [];
    if (prev && prev.length) {
      final = prev.slice(0);
      // place holder for existing items
      for (let i=0; i<prev.length; i++) {
        // if a prev item not in list
        if (list.indexOf(prev[i]) < 0) {
          final[i] = '';
          avails.push(i);
        }
      }
      // fill new items
      let j = 0;
      for (let i=0; i<list.length; i++) {
        // for new item 
        const item = list[i];
        if (final.indexOf(item) < 0) {
          j++;
          if (j > avails.length) {
            final.push(item);
          } else {
            final[avails[j-1]] = item;
          }
        }
      }
    } 
    return final;   
  }

  persons(list) {
    if (!list || !list.length) return <span></span>;
    return (
        <span>{list.join(', ')}</span>
    );
  }

  slots(ids) {
    const {slots} = this.props;
    const time = scheduler.slot2time;
    const headerCols = ids.map(id => (
      <Fragment key={id}>
        <TableCell>Time</TableCell>
        <TableCell>{id}</TableCell>
      </Fragment>
    ));
    const memorySlot = {};
    const bodyCols = slot => ids.map(id => {
      const prev = memorySlot[id] ? memorySlot[id].slice(0) : [];
      const current = this.getDesks(slots[slot][id], prev);
      const elm = <Fragment key={id}>
        <TableCell>{time(slot)}</TableCell>
        <TableCell>{this.persons(current)}</TableCell>
      </Fragment>;
      memorySlot[id] = current;
      return elm;
    });
    const {classes} = this.props;
    return (
      <div>
        <h2>{ids.join(', ')}</h2>
        <h3>{'July 16, 3:00 - 7:00'}</h3>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>{headerCols}</TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(slots).map(slot => (
              <TableRow key={slot} className={classes.row}>{bodyCols(slot)}</TableRow>
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
        <div ref={el => (this.componentRef = el)}>
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
  classes: PropTypes.object
}

// export default Plan;
export default withStyles(styles)(Print);
