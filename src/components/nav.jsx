import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import SvgIcon from '@mui/material/SvgIcon';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from "react-router-dom";
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
const Nav = () => {
  return ( 
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Router>
        
            
        <Typography 
          variant="h6" 
          to="/home" color="inherit" component={NavLink}
          style={{ marginRight:"auto" }}
          >
          NGO
          <VolunteerActivismIcon />
          </Typography>
          
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
           Donate now
          <VolunteerActivismIcon />
          </Typography>

         <Button color="inherit" component={NavLink} to="/home">Home</Button>
          <HomeIcon />
          <Button  color="inherit" component={NavLink} to="/login">Login</Button> 
          <LoginIcon />
          <Button color="inherit" component={NavLink} to="/register">Register</Button>
          <HowToRegIcon />
          <Button color="inherit" >Pages</Button>
          <MenuBookIcon />
          <Button color="inherit" >Logout</Button>
          <AccountBoxRoundedIcon />
          </Router>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
   );
}
 
export default Nav;