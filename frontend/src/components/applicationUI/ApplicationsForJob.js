import React, { Component } from "react";
import { Route, withRouter, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import { Redirect } from "react-router";
import cookie from "react-cookies";
import axios from "axios";
//import validator from "validator";
import NavRecruiterHome from '../recruiterUI/navbarHome';
import { Document, Page } from 'react-pdf';
//import "./ApplicationsForJob.css";
import _ from "lodash";

class ApplicationsForJob extends Component {
constructor(props) {
super(props);
this.state = {
Applications: [],
nameRedirect:"",
numPages: null,
pageNumber: 1
// jobDetails: [{ name: "abc", type: "def" }]
};
}
onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

nameHandler = (e) => {
    console.log(e.target.dataset.value)
    this.setState({
      nameRedirect: e.target.dataset.value
    })
}

componentDidMount() {
//jobID from localStorage.getItem (Recruiter profile)
//const data = window.localStorgae.getItem(jobId);
//Navbar from recruiter
const data = { jobId: this.props.location.state.displayPostedJob };
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
const { pageNumber, numPages } = this.state;

    if(this.state.nameRedirect!==""){
        this.props.history.push({
            pathname : '/applicant/profile/getSearchProfile',
            state : {
                displayprops : this.state.nameRedirect
            }
        })
    }

    //let details = this.state.jobDetails.map(detail => {
    const details = Object.keys(this.state.Applications).map(
    detail => this.state.Applications[detail]
    );
    let finaldetails = _.map(details, Applications => {
        const resume = `https://s3.us-east-2.amazonaws.com/linkedin-images/${Applications.resume}`
        console.log(resume)
    //const details = _.map(this.state.Applications, detail => {
    return (
    <div className="container-fluid">
    <div class="row3">
    <div class="media">
    <div class="media-body">
    <h5 class="mt-0 mb-1" style={{ textAlign: "center" }}>
    <b>
    
    <div onClick={this.nameHandler} style={{cursor:"pointer"}} data-value={Applications.applicantId}>  <b> Name of Applicant : </b> {Applications.firstName} {Applications.lastName}{" "}</div>
    </b>
    </h5>
    <p style={{ fontWeight: "200", fontFamily: "Sans Serif" }}>
    {" "}
   
    <u>Job ID: {Applications.jobId}</u>
    </p>
    <p>City : {Applications.city}</p>
    <div>
        <Document
          file={resume}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>

    </div>
    </div>
    </div>
    </div>
    )
    })

    let nav = <NavRecruiterHome navdata={this.props.navdata}/>
    
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