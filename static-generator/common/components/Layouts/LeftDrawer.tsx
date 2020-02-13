
import * as React from 'react'
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import CustomComponetTyes from '../../types/customComponent.type'
import CustomLayoutTypes from '../../types/customLayout.type'
import { Link } from '../../../components/Link'
import { SelectItem } from '../Icons'


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


const SideList: React.FC<{
  onClose: () => void,
  navItems: CustomLayoutTypes.NavItems,
}> = ({ onClose, navItems = [] }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List>
        {navItems.map((navItem) => (
          <ListItem button key={navItem.to} >
            <ListItemIcon><SelectItem iconName={navItem.icon} /></ListItemIcon>
            <ListItemText>
              <Link href={navItem.to} title={navItem.label} />
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

interface LeftDrawerProps extends CustomComponetTyes.CustomComponentProps {
  navItems?: CustomLayoutTypes.NavItems
}

const LeftDrawer: React.FC<LeftDrawerProps> = ({ navItems = [] }) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const toggleDrawer = (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpenDrawer(!isOpenDrawer);
  };

  const handleOpen = () => setIsOpenDrawer(true)
  const handleClose = () => setIsOpenDrawer(false)

  return (
    <div>
      <Button onClick={toggleDrawer}>Open Left</Button>
      <SwipeableDrawer
        open={isOpenDrawer}
        onClose={handleClose}
        onOpen={handleOpen}
      >
        <SideList
          onClose={handleClose}
          navItems={navItems}
        />
      </SwipeableDrawer>
    </div>
  );
}

export default LeftDrawer
export {
  LeftDrawer,
}
