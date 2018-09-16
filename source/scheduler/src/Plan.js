// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
// primary components
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';

const styles = { 
  card: {},
  content: {
    padding: 0
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

  list(arr) {
    const rowStyle = { height: '32px' };
    if (!arr) return (
      <div style={rowStyle}>&nbsp;</div>
    );
    return (
      <div style={rowStyle}>
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
    const {usages, classes} = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader 
          avatar={<Avatar>{id[0]}</Avatar>}
          title={id + ' (' + usages[id] + ')'}
          subheader={'July 16, 3:00 - 7:00'}
        />
        <CardContent className={classes.content}>
          {this.schedule(id)}
        </CardContent>
      </Card>
    )
  }

  render() {
    const {ids} = this.props;
    return (
      <Grid container spacing={24}>
        {ids.map(id => (
          <Grid key={id} item xs={12} sm={6} md={4}>
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
