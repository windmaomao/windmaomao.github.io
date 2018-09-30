// third party
import React from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {withStyles} from '@material-ui/core/styles';
// styles
import theme from './theme';
// primary components
import Navbar from './Navbar';
// locals
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

const Layout = props => {
  const {classes} = props;
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <div className={classes.layout}>
        {props.children}
      </div>
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(Layout);
