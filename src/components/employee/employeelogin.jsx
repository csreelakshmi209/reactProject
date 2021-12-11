import React, { Component } from 'react';
import {TextField,Box,InputLabel,MenuItem,FormControl,Select, Paper} from "@mui/material";
import Employee from './employee';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
    class Login extends React.Component {
    
        render() { 
            return (
                <div
                    style={{
                        width: "50%",
                        marginLeft: "10px",
                        marginRight: "auto",
                        marginTop: "20px",
                 }}>
                <Typography variant="h5">Login Here
                <Paper elevation={3}>
                <Box
                component="form"
                 noValidate
                autoComplete="off"
                padding={2}
              >
                <TextField
                 id="filled-basic"
                 label="Username"
                 variant="filled"
                 type="email"
                 fullWidth
                 style={{ marginBottom: 10 }}
              
                 />
                <TextField
                 id="filled-basic"
                 label="Password"
              variant="filled"
              type="password"
              fullWidth
              style={{ marginBottom: 10 }}
            />
           
      {/* <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="employee">Employee</MenuItem>
          <MenuItem value={20}>Donor</MenuItem>
          <MenuItem value={30}>Needypeople</MenuItem>
          <MenuItem value={30}>Admin</MenuItem>
        </Select>
      </FormControl> */}
      <Button variant="contained" fullWidth style={{ marginTop: "10px" }}>
              Submit
            </Button>
            </Box>
            </Paper>
            </Typography>
                </div>
            );
        }
    }
     
    export default Login;

