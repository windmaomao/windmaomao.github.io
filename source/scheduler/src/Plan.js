// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// primary components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Avatar from '@material-ui/core/Avatar';

class Plan extends Component {
  slotMins = 15;

  slot2time(slot) {
    const total = slot*this.slotMins;  
    const hours = Math.floor(total/60);
    const mins = total - hours*60;
    var s = "00" + mins;
    return hours + ':' + s.substr(s.length-2);
  }

  avatars(list) {
    if (!list) return null;
    const spanStyle = { margin: '5px' };
    return (
      <div>
        {list.map(item => (
           <span style={spanStyle}>{item}</span>
        ))}
      </div>
    );
  }

  slots() {
    const {slots, ids} = this.props;
    const gunnarStyle = { height: "10px", padding: "0px"};
    const assigned = (list) => <TableCell>{list ? list.join(',') : ''}</TableCell>;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Slot</TableCell>
            {ids.map(id => <TableCell>{id}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(slots).map(slot => (
            <TableRow key={slot} style={gunnarStyle}>
              <TableCell>{this.slot2time(slot)}</TableCell>
              {ids.map(id => <TableCell>{this.avatars(slots[slot][id])}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  
  render() {
    const {teacherId} = this.props;
    return (
      <Card>
        <CardContent>
          <Typography variant="headline" component="h3">{teacherId}</Typography>
          {this.slots()}
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}

Plan.propTypes = {
  slots: PropTypes.object.isRequired,
  ids: PropTypes.array,
}

export default Plan;