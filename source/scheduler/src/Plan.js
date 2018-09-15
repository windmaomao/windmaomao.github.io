// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
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
import Grid from '@material-ui/core/Grid';

const styles = { 
	narrowCell: {
		'width': '90px',
	}
};

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
           <span key={item} style={spanStyle}>{item}</span>
        ))}
      </div>
    );
  }

  slots(ids) {
    const {slots, classes} = this.props;
    const gunnarStyle = { height: "10px", padding: "0px"};
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.narrowCell}>Slot</TableCell>
            {ids.map(id => <TableCell key={id}>{id}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(slots).map(slot => (
            <TableRow key={slot} style={gunnarStyle}>
              <TableCell className={classes.narrowCell}>{this.slot2time(slot)}</TableCell>
              {ids.map(id => <TableCell key={id}>{this.avatars(slots[slot][id])}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }

  slotsFlex() {
    const {slots, ids} = this.props;
    return (
      <Grid container spacing={24}>
        {ids.map(id => (
          <Grid key={id} item xs={4}>
            {this.slots([id])}
          </Grid>          
        ))}
      </Grid>
    )
  }
  
  render() {
    const {ids} = this.props;
    return (
      <Card>
        <CardContent>
          <h3>Individual</h3>
          {this.slotsFlex()}
          <h3>One Piece</h3>
          {this.slots(ids)}
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

// export default Plan;
export default withStyles(styles)(Plan);
