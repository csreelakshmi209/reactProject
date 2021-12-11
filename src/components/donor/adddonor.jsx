import axios from "axios";
import React from "react";
import Joi from "joi-browser";
class AddDonor extends React.Component {
    state = {
        donor: {
           donorName: "",
            donorEmail:"",
            donorPhone:"",
            donorUsername:"",
            donorPassword:""
        },
        errors:{},
        errMsg:"Invalid input",
    };
    //validate 2nd step
    //define schema to validate input field values
    schema={
         donorName: Joi.string().min(3).max(20).required(),
         donorEmail: Joi.string()
         .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
         .required(),
         donorPhone: Joi.number()
         .integer()
         .min(6000000000)
         .max(9999999999)
         .required(),
         donorUsername: Joi.string().min(3).max(20).required(),
          donorPassword: Joi.string().min(3).required(),
        
         
    };
    // Step 3: Validate user input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.donor, this.schema, {
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
        const donor={...this.state.donor};
        
        console.log(event.target.name);         //name of field -fullname
        console.log(event.target.value);        //value entered in the field
         //update local employee object values entered by user
        donor[event.target.name]=event.target.value;

        //update state object using setstate method
        this.setState({donor:donor});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        //when user clicks on submit we have to post request to rest api

        this.setState({ errors: this.validate() });
        console.log(this.state.errors);
        if (this.state.errors) return;
        axios
        .post("http://localhost:8080/donor/add", this.state.donor)
        .then((res) => {
        console.log(res.data);
        alert(
          "Added donor " + this.state.donor.donorName + " successfully!"
            );
        this.props.history.push("/donor/get");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ errMsg: err.response.data.message });
      });
  };
       
  render() {
      //object destructuring
      const {donorName, donorEmail, donorPhone, donorUsername, donorPassword}=this.state.donor;
      const { errors, errMsg } = this.state;
    return (
        <div className="w-50 mx-auto ">
        <h3>Be a New Donor</h3>
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
        <form 
            onSubmit={this.handleSubmit} 
            className=" shadow p-3 mb-5 bg-body rounded mt-5 ">
          
          <div className="mb-3">
            <label htmlFor="donorName" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="donorName"
              aria-describedby="emailHelp"
             
              name="donorName"
              onChange={this.handleChange}
            />
             {errors && <small>{errors.donorName}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" class="form-label">
              Email id
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={donorEmail}
              name="donorEmail"
              onChange={this.handleChange}
            />
              {errors && <small>{errors.donorEmail}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="phone" class="form-label">
              Phone number
            </label>
            <input
              type="tel"
              class="form-control"
              id="phone"
              aria-describedby="emailHelp"
              value={donorPhone}
              name="donorPhone"
              onChange={this.handleChange}
            />
              {errors && <small>{errors.donorPhone}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="username" class="form-label">
              User Name
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              aria-describedby="emailHelp"
              value={donorUsername}
              name="donorUsername"
              onChange={this.handleChange}
            />
              {errors && <small>{errors.donorUsername}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" class="form-label">
              Password
            </label>
            <input 
            type="password" 
            class="form-control" 
            id="password"
            value={donorPassword} 
            name="donorPassword"
            onChange={this.handleChange}
            />
              {errors && <small>{errors.donorPassword}</small>}
          </div>

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

export default AddDonor;
