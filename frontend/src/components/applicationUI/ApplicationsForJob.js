import React, { Component } from "react";
import { Route, withRouter, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import { Redirect } from "react-router";
import cookie from "react-cookies";
import axios from "axios";
//import validator from "validator";
import Navbar from "./Navbar";
//import "./ApplicationsForJob.css";
import _ from "lodash";
 
class ApplicationsForJob extends Component {
constructor(props) {
super(props);
this.state = {
Applications: []
// jobDetails: [{ name: "abc", type: "def" }]
};
}
componentDidMount() {
//jobID from localStorage.getItem (Recruiter profile)
//const data = window.localStorgae.getItem(jobId);
//Navbar from recruiter
const data = { jobId: 1 };
console.log("Job ID: " + data.jobId);
axios
.get(
`http://localhost:3001/applicationModule/applicationsForJob/${
data.jobId
}`
)
.then(response => {
//update the state with the response data
console.log("Response UI applications: " + response.data);
if (response.status === 200) {
this.setState({
flag: true,
Applications: response.data
});
console.log("HELLO FIND ME");
console.log(
"jobDetails state variable is: ",
this.state.Applications
);
console.log();
} else {
window.alert("Page cannot be fetched right now");
}
});
}
 
render() {
    //let details = this.state.jobDetails.map(detail => {
    const details = Object.keys(this.state.Applications).map(
    detail => this.state.Applications[detail]
    );
    let finaldetails = _.map(details, Applications => {
    //const details = _.map(this.state.Applications, detail => {
    return (
    <div className="container-fluid">
    <div class="row3">
    <div class="media">
    <div class="media-body">
    <h5 class="mt-0 mb-1" style={{ textAlign: "center" }}>
    <b>
    <u>Job ID: {Applications.jobId}</u>
    </b>
    </h5>
    <p style={{ fontWeight: "200", fontFamily: "Sans Serif" }}>
    {" "}
    <b> Name of Applicant : </b>
    {Applications.fname} {Applications.lname}{" "}
    </p>
    <p>Address : {Applications.address}</p>
    </div>
    </div>
    </div>
    </div>
    )
    })

    let nav = <Navbar navdata={this.props.navdata}/>
    
    return (
    <div>
        {nav}
        <div class="container-fluid1">
            <div>
                <h2 style={{textAlign: "center"}}>
                    <b><u>List of Applications</u></b>
                </h2>
            </div>
            {finaldetails}
        </div>
    </div>
        
    );
    }
    }

    export default ApplicationsForJob;