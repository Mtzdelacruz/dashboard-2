import React from 'react';

import { Box, List, ListItem, ListItemIcon,  ListItemText } from '@mui/material';
import {
    HomeOutlined,
    ImageOutlined,
    VideocamOutlined,
    PieChartOutlineOutlined,
    AssignmentOutlined,
  
} from '@mui/icons-material';



const BG_ICON = { color: '#BFC3C6' };


function Menu() {
  return (
    <Box className= 'Menu-Box' sx={{ display: 'flex', justifyContent: 'center' }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <HomeOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText  sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ImageOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText  sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <VideocamOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText  sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PieChartOutlineOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText  sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AssignmentOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText  sx={BG_ICON} />
        </ListItem>
      </List>
    </Box>
  );
}
export default Menu