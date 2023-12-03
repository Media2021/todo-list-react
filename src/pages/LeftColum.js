
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const LeftColum = () => {
  return (
    <Box   width={200} p={2} bgcolor="white">
      <List>
      <ListItem
      button
      component={Link}
      to="/"
      sx={{
        background: 'linear-gradient(to right, #5d09ee, #9400d3)',
        borderRadius: '6px', 
        mb: 1,
      }}
    >
      <ListItemText primary="Todo" />
    </ListItem>
    <ListItem
      button
      component={Link}
      to="/user"
      sx={{
        background: 'linear-gradient(to right, #5d09ee, #9400d3)',
        borderRadius: '6px', 
     
      }}
    >
      <ListItemText primary="Country" />
    </ListItem>
       
      </List>
    </Box>
  );
};

export default LeftColum ;
