import React from "react";
import {TextField,Box,InputLabel,MenuItem,FormControl,Select, Paper} from "@mui/material";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link,NavLink } from "react-router-dom";
class Register extends React.Component {
  render() {
    return (
      <div
      style={{
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
        marginBottom: "10px",

 }}>
   <Typography variant="h3" style={{ marginBottom: 10 }}>Register Here
   <Paper elevation={3}>
        <Box
                component="form"
                 noValidate
                autoComplete="off"
                padding={2}
              >
                <TextField
                 id="filled-basic"
                 label="Full Name"
                 variant="filled"
                 type="text"
                 fullWidth
                 style={{ marginBottom: 10 }}
              
                 />
                 <TextField
                 id="filled-basic"
                 label="Email"
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
            <TextField
                 id="filled-basic"
                 label="Repeat Password"
              variant="filled"
              type="password"
              fullWidth
              style={{ marginBottom: 10 }}
            />
           
      <FormControl variant="filled" fullWidth>
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
      </FormControl>
      <Button variant="contained" fullWidth style={{ marginTop: "10px" }}>
              Submit
            </Button>
            <p className="forgotPassword textRight">
                    Already registered <Link href="#">sign in?</Link>
                </p>
            </Box>
            </Paper>
            </Typography>
      </div>
    );
  }
}

export default Register;