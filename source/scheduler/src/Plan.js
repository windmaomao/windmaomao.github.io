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

class Plan extends Component {

  slot(key, assigned) {
    const gunnarStyle = { height: "10px", padding: "0px"};
    return (
      <TableRow key={key} style={gunnarStyle}>
        <TableCell>{key}</TableCell>
        <TableCell>{assigned ? assigned.join(',') : ''}</TableCell>
      </TableRow>
    );
  }

  slots() {
    const {slots, teacherId} = this.props;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Slot</TableCell>
            <TableCell>Students</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(slots).map(slot => this.slot(slot, slots[slot][teacherId]))}
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
  teacherId: PropTypes.string.isRequired,
}

export default Plan;