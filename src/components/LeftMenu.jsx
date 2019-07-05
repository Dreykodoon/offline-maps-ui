import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';


export default ({isOpen, closeMenuHandler}) => {
  return (
    <Drawer anchor='left' open={isOpen} onClose={closeMenuHandler}>
      <List>
        <ListItem button key='Home'>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
      </List>
    </Drawer>
  );
};
