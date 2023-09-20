import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CycloneIcon from '@mui/icons-material/Cyclone';
import GridViewIcon from '@mui/icons-material/GridView';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const TopDrawer = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState(open);
  };

  return (
    <div>
      <div
        align='left'
      >
        <Button
          color='secondary'
          onClick={toggleDrawer(true)}
        >
          Menu
        </Button>
      </div>
      <SwipeableDrawer
        anchor={'left'}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{ width: 'auto' }}
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {['Random Word'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => navigate('/')}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <CycloneIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>

              </ListItem>
            ))};
            {['Multiple Choice'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => navigate('/multi')}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <GridViewIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>

              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </div>
  );
};

export default TopDrawer;