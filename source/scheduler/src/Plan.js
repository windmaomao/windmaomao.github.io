// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
// primary components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';

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
    const spanStyle = { 
      float: 'left', width: '60px'
    };
    return (
      <div>
        {list.map(item => (
           <span key={item} style={spanStyle}>{item}</span>
        ))}
      </div>
    );
  }

  slots(ids) {
    const {slots, usages, classes} = this.props;
    const gunnarStyle = { height: "10px", padding: "0px"};
    const title = ids[0];
    return (
      <Card>
        <CardHeader 
          avatar={<Avatar>{title[0]}</Avatar>}
          title={title}
          subheader={'July 16, 3:00 - 7:00'}
        />
        <CardContent>
          <Table>
            <TableBody>
              {Object.keys(slots).map(slot => (
                <TableRow key={slot} style={gunnarStyle}>
                  <TableCell className={classes.narrowCell}>{this.slot2time(slot)}</TableCell>
                  {ids.map(id => <TableCell key={id}>{this.avatars(slots[slot][id])}</TableCell>)}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
  }

  list(arr) {
    if (!arr) return '  ';
    return (
      <div style={{display: 'flex'}}>
        {arr.map(item => (
          <Chip style={{marginRight: '0.2rem', padding: '0'}}
            key={item} 
            label={item}
            color="primary" 
            variant="outlined" 
          />
        ))}
      </div>
    );
  }

  schedule(id) {
    const {slots} = this.props;
    return (
      <List component="nav">
        {Object.keys(slots).map(slot => (
          <ListItem key={slot} button>
            <ListItemIcon>
              <span>{this.slot2time(slot)}</span>
            </ListItemIcon>
            <ListItemText inset primary={this.list(slots[slot][id])} />
          </ListItem>
        ))}
      </List>
    );
  }

  card(id) {
    const {usages} = this.props;
    return (
      <Card>
        <CardHeader 
          avatar={<Avatar>{id[0]}</Avatar>}
          title={id + ' (' + usages[id] + ')'}
          subheader={'July 16, 3:00 - 7:00'}
        />
        <CardContent>
          {this.schedule(id)}
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
  }

  render() {
    const {ids} = this.props;
    return (
      <Grid container spacing={24}>
        {ids.map(id => (
          <Grid key={id} item xs={12} sm={6} md={4}>
            {/* {this.slots([id])} */}
            {this.card(id)}
          </Grid>          
        ))}
      </Grid>
    );
  }
}

Plan.propTypes = {
  slots: PropTypes.object.isRequired,
  ids: PropTypes.array,
  usages: PropTypes.object,
}

// export default Plan;
export default withStyles(styles)(Plan);
