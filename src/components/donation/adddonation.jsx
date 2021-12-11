import axios from "axios";
import React from "react";
import Joi from "joi-browser";
import {
    TextField,
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Paper,
    Button,
    Typography,
  } from "@mui/material";
class AddDonation extends React.Component {
    state = {
        donation: {
           donationId: "",
           donationAmount:"",
           donationDate:"",
            donationItem:""
        },
        errors:{},
        errMsg:"Invalid input",
    };
    //validate 2nd step
    //define schema to validate input field values
    schema={
        donationAmount: Joi.number()
        .integer()
        .min(1)
        .max(99999999)
        .required(),
         donorName: Joi.string().min(3).max(20).required(),
        
         
    };
    // Step 3: Validate user input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.donation, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
  
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };
    handleChange=(event) => {
        //logic to update state object
        //copying state employee object to local variable employee
        const donation={...this.state.donation};
        
        console.log(event.target.name);         //name of field -fullname
        console.log(event.target.value);        //value entered in the field
         //update local employee object values entered by user
        donation[event.target.name]=event.target.value;

        //update state object using setstate method
        this.setState({donation:donation});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        //when user clicks on submit we have to post request to rest api

        this.setState({ errors: this.validate() });
        console.log(this.state.errors);
        if (this.state.errors) return;
        axios
        .post("http://localhost:8080/donation/add", this.state.donation)
        .then((res) => {
        console.log(res.data);
        alert(
          "Added donation  type " + this.state.donation.donationItem + " successfully!"
            );
        this.props.history.push("/donation/get");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ errMsg: err.response.data.message });
      });
  };
       
  render() {
      //object destructuring
      const {donationAmount, donationDate, donationItem}=this.state.donation;
      const { errors, errMsg } = this.state;
    return (
        <div className="w-50 mx-auto ">
        <h1>Donation details</h1>
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
        <form 
            onSubmit={this.handleSubmit} 
            className=" shadow p-3 mb-5 bg-body rounded mt-5 ">
          
          <div className="mb-3">
            <label htmlFor="donationAmount" class="form-label">
             Donation amount
            </label>
            <input
              type="number"
              class="form-control"
              id="donationAmount"
              aria-describedby="emailHelp"
             
              name="donationAmount"
              onChange={this.handleChange}
            />
             {errors && <small>{errors.donationAmount}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="donationDate" class="form-label">
              Donation date
            </label>
            <input
              type="date"
              class="form-control"
              id="donationDate"
              aria-describedby="emailHelp"
              value={donationDate}
              name="donationDate"
              onChange={this.handleChange}
            />
              {errors && <small>{errors.donationDate}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="donationItem" class="form-label">
              Donation item
            </label>
            <input
              type="tel"
              class="form-control"
              id="donationItem"
              aria-describedby="emailHelp"
              value={donationItem}
              name="donationItem"
              onChange={this.handleChange}
            />
              {errors && <small>{errors.donationItem}</small>}
          </div>
          <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
              >
                <MenuItem value="Donation Item">
                  <em>...Select...</em>
                </MenuItem>
                <MenuItem value="customer">Money</MenuItem>
                <MenuItem value="customer">Cloths</MenuItem>
                <MenuItem value="student">Books</MenuItem>
                <MenuItem value="admin">Edibles</MenuItem>
                <MenuItem value="admin">Others</MenuItem>
              </Select>
          

         

          <div className="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddDonation;
