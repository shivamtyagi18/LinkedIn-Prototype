import React, { Component } from "react";
import { Route, withRouter, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import { Redirect } from "react-router";
import cookie from "react-cookies";
import axios from "axios";
//import validator from "validator";
//import ApplicationNavbar from "./ApplicationNavbar";
import Navbar from './Navbar';
//jobID from job search list applicantID as well
 
class JobDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobDetails: []
      // jobDetails: [{ name: "abc", type: "def" }]
    };
  }
 
  componentDidMount() {
    const data = { jobId: 1 };
    //   const data = localStorage.getItem(jobId);
    //console.log("Job ID: " + data);
    console.log("Job ID: " + data.jobId);
    axios
      .get(`http://localhost:3001/applicationModule/jobDetails/${data.jobId}`)
      .then(response => {
        //update the state with the response data
        console.log("Response UI: " + response.data);
        if (response.status === 200) {
          this.setState({
            flag: true,
            jobDetails: response.data
          });
          //console.log("HELLO FIND ME");
          console.log("jobDetails state variable is: ", this.state.jobDetails);
          console.log();
        } else {
          window.alert("Page cannot be fetched right now");
        }
      });
  }
  /*this.setState({
          jobDetails: this.state.jobDetails.concat(response.data)
        });*/
 
  render() {
    const { jobDetails } = this.state;
    return (
      <div>
        <Navbar /> // <Navbar />
 
        <div>
          <div class="container-fluid">
            <div class="row1" style={{backgroundColor:"#eee",marginTop:"5%"}}>
              <h2>
                <b>Job Details</b>
              </h2>
              <hr />
            </div>
            <div class="conatainer-fluid">
              <div class="row2">
                <h4>
                  <i>
                    <b>
                      <u> Job Title :</u>
                    </b>
                  </i>
                </h4>
 
                <div class="card">
                  <div class="card-body">
                    <p style={{ fontWeight: "200", fontFamily: "Sans Serif",fontSize:"2.2rem"}}>
                      {jobDetails.jobTitle}
                    </p>
                  </div>
                </div>
              </div>
 
              <div class="row2">
                <h4>
                  <i>
                    <b>
                      <u>Location :</u>
                    </b>
                  </i>
                </h4>
 
                <div class="card">
                  <div class="card-body">
                    <p style={{ fontWeight: "200", fontFamily: "Sans Serif", fontSize:"2rem" }}>
                      {jobDetails.location}
                    </p>
                  </div>
                </div>
              </div>
 
              <div class="row2">
                <h4>
                  <i>
                    <b>
                      <u>About the Job :</u>
                    </b>
                  </i>
                </h4>
 
                <div class="card">
                  <div class="card-body">
                    <p style={{ fontWeight: "200", fontFamily: "Sans Serif",fontSize:"2rem" }}>
                      {" "}
                      Company Name : {jobDetails.companyName}
                    </p>
                    <hr />
 
                    <p style={{ fontWeight: "200", fontFamily: "Sans Serif",fontSize:"2rem" }}>
                      {" "}
                      Industry :{jobDetails.industry}
                    </p>
                    <hr />
 
                    <p style={{ fontWeight: "200", fontFamily: "Sans Serif",fontSize:"1.5rem" }}>
                      {" "}
                      Job Description : {jobDetails.jobDescription}
                    </p>
                    <hr />
 
                    <p style={{ fontWeight: "200", fontFamily: "Sans Serif",fontSize:"2rem" }}>
                      {" "}
                      Job Function : {jobDetails.jobFunction}
                    </p>
                    <hr />
 
                    <p style={{ fontWeight: "200", fontFamily: "Sans Serif" , fontSize:"2rem" }}>
                      {" "}
                      Employment Type : {jobDetails.employmentType}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <button type="submit" class="btn " style={{backgroundColor:"#eee",borderColor:"black"}}>
              <a href="/Application"> Apply</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
 
export default JobDetails;
