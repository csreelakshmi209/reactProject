import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class Address extends React.Component {
    state = {
        address: [],
      };

    // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get(`http://localhost:8080/donor/get`)
      .then((res) => {
        console.log(res);
        this.setState({ donors: res.data });
      })
      .catch((err) => console.log(err));
  }  
 

  handleDelete = (donorId) => { 
    axios
      .delete(`http://localhost:8080/donors/${donorId}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const donors = this.state.donors.filter(
          (s) => s.donorId !== donorId
        );
        this.setState({ donors: donors });
        alert(res.data.donorName + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };
  
    render() { 
      console.log(this.state.donors);
        return (
            <div>   <h1>Donor Details</h1>
            <div className="w-75 mx-auto" >
              <Link to="/donor/add" className="btn btn-info float-end">
                Add
              </Link>
      
              <table className="table">
                <thead>
                  <tr>
                    <th>DonorId</th>
                    <th>DonorName</th>
                    <th>DonorEmail</th>
                    <th>DonorPhone</th>
                    <th>DonorUsername</th>
                    <th>city</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.donors.map((s) => (
                    <tr key={s.donorId}>
                      <td>{s.donorId}</td>
                      <td>{s.donorName}</td>
                      <td>{s.donorEmail}</td>
                      <td>{s.donorPhone}</td>
                      <td>{s.donorUsername}</td>
                      <td>
                      <Link 
                          to={`/donor/address/get`}
                          className="btn btn-primary">Address
                        </Link>
                        <Link 
                          to={`/donor/update/${s.donorId}`}
                          className="btn btn-primary">Update
                        </Link>
                        
                        <button
                          className="btn btn-danger"
                          onClick={() => this.handleDelete(s.donorId)}
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
 
export default Donor;