import "./App.css";
import Nav from "./components/nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/home";
import Login from "./components/employee/employeelogin";
import Register from "./components/register";
import Employee from "./components/employee/employee";
import AddEmployee from "./components/employee/addemployee";
import UpdateEmployee from "./components/employee/updateemployee";
import EmployeeAddress from "./components/employee/employeeaddress";
import Donor from "./components/donor/donor";
import AddDonor from "./components/donor/adddonor";
import Donation from "./components/donation/donation";
import AddDonation from "./components/donation/adddonation";
import Counter from "./components/counter";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route
            path="/employee/update/:employeeId"
            component={UpdateEmployee}
          />
          <Route path="/employee/add" component={AddEmployee} />
          <Route
            path="/employee/get/address/:addressId"
            component={EmployeeAddress}
          />
          <Route path="/employee/get" component={Employee} />
          <Route path="/donor/add" component={AddDonor} />
          <Route path="/donor/get" component={Donor} />
          <Route path="/donation/add" component={AddDonation} />
          <Route path="/donation/get" component={Donation} />
          <Redirect exact path="/" to="/home" />
          <Route path="/counter" component={Counter} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
