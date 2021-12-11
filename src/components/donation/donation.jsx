import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class Donation extends React.Component {
    state = {
        donations: [],
      };

    // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get(`http://localhost:8080/donation/get`)
      .then((res) => {
        console.log(res);
        this.setState({ donations: res.data });
      })
      .catch((err) => console.log(err));
  }  


  handleDelete = (donationId) => { 
    axios
      .delete(`http://localhost:8080/donation/remove/${donationId}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const donations = this.state.donations.filter(
          (s) => s.donationId !== donationId
        );
        this.setState({ donations: donations });
        alert(res.data.donationType + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };
  
    render() { 
        return (
            <div>   <h1>Donation Details</h1>
            <div className="w-75 mx-auto" >
              <Link to="/donation/add" className="btn btn-info float-end">
                Add
              </Link>
      
              <table className="table">
                <thead>
                  <tr>
                    <th>DonationId</th>
                    <th>DonationAmount</th>
                    <th>DonationDate</th>
                    <th>DonationItem</th>
                    </tr>
                </thead>
                <tbody>
                  {this.state.donations.map((s) => (
                    <tr key={s.donationId}>
                      <td>{s.donationId}</td>
                      <td>{s.donationAmount}</td>
                      <td>{s.donationDate}</td>
                      <td>{s.donationItem}</td>
                      
      
                      <td>
                       <Link 
                          to={`/donor/get`}
                          className="btn btn-primary">Donor
                         </Link>
                        <Link 
                          to={`/donation/update/${s.donationId}`}
                          className="btn btn-primary">Update
                        </Link>
                        
                        <button
                          className="btn btn-danger"
                          onClick={() => this.handleDelete(s.donationId)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          );
        
    }
}
 
export default Donation;