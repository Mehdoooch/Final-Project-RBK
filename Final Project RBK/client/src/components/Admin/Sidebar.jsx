import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import CottageIcon from '@mui/icons-material/Cottage';
import PeopleIcon from '@mui/icons-material/People';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import "./Admin.css"


function Sidebar({ state, setState, toggleDrawer }) {

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        <ListItem disablePadding>
          <ListItemButton href="/" className="hoverEffect">
            <ListItemIcon>
              <CottageIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="/admin/newhouse" className="hoverEffect">
            <ListItemIcon>
              <AddHomeWorkIcon />
            </ListItemIcon>
            <ListItemText primary="Add House" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="/admin/houses" className="hoverEffect">
            <ListItemIcon>
              <HolidayVillageIcon />
            </ListItemIcon>
            <ListItemText primary="All Houses" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="/admin/reservations" className="hoverEffect">
            <ListItemIcon>
              < CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="Reservations" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="/admin/users" className="hoverEffect">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="All Users" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="/contact" className="hoverEffect">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton href="https://mail.google.com/mail/u/0/?pli=1#inbox" target="_blank" rel="noopener noreferrer" className="hoverEffect">
            <ListItemIcon>
              <MoveToInboxIcon />
            </ListItemIcon>
            <ListItemText primary="All Mails" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default Sidebar;
