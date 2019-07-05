import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import LeftMenu from './LeftMenu';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    isLeftMenuOpen: false
  });

  const closeMenuHandler = () => {
    setState({ isLeftMenuOpen: false });
  };

  const openMenuHandler = () => {
    setState({ isLeftMenuOpen: true });
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='Menu' onClick={openMenuHandler}>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant='h6'>
            Home
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>

        <LeftMenu isOpen={state.isLeftMenuOpen} closeMenuHandler={closeMenuHandler}/>
      </AppBar>
    </div>
  );
};
