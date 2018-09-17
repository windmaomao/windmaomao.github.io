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
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },  
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

  slots(index, ids) {
    const {slots} = this.props;
    const gunnarStyle = { height: "10px", padding: "0px"};
    return (
      <Card>
        <CardHeader 
          avatar={<Avatar>{index}</Avatar>}
          title={ids.join(', ')}
          subheader={'July 16, 3:00 - 7:00'}
        />
        <CardContent>
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
        </CardContent>
      </Card>
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

  render() {
    const {usages} = this.props;
    const k = Object.keys(usages);
    const t1 = [k[0], k[1], k[2]];
    const t2 = [k[3], k[4], k[5]];
    return (
      <div>
        <ReactToPrint trigger={() => this.fab()}
          content={() => this.componentRef}
        />
        <div className={'allow-print'} ref={el => (this.componentRef = el)}>
          <h1>Today Schedule</h1>
          <h2>Sep 17 3:00 - 7:00</h2>
          {this.slots('1', t1)}
          {this.slots('2', t2)}
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
