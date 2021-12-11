import React from 'react';
import { Link,NavLink } from "react-router-dom";
class EmployeeTable extends React.Component {
    
    render() { 
        const {employees,handleDelete} =this.props;
        return (
        <div>
            <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Username</th>
              
            </tr>
          </thead>
          <tbody>
            {employees.map((s) => (
              <tr key={s.employeeId}>
                <td>{s.employeeId}</td>
                <td>{s.employeeName}</td>
                <td>{s.email}</td>
                <td>{s.phone}</td>
                <td>{s.username}</td>
                
                <td>
                <Link 
                    to={`/employee/get/address/${s.address.addressId}`}
                    className="btn btn-primary">More Info
                  </Link>
                  <Link 
                    to={`/employee/update/${s.employeeId}`}
                    className="btn btn-primary">Update
                  </Link>
                  
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(s.employeeId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        );
    }
}
 
export default EmployeeTable;