import React, { Component } from "react";
//import NavProfile from "./naveditprofile";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import "../../App.css";
//import Footer from "./footer";
import axios from "axios";
import NavRecruiterHome from "./navbarHome";
import FooterRecruiterHome from "./footer";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class editJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Recruiter: "",
      jobTitle: "",
      jobDescription: "",
      industry: "",
      employmentType: "",
      location: "",
      jobFunction: "",
      jobOpenings: "",
      jobId:"",
      companyName:"",
      authFlag: false
    };
    this.setState = this.setState.bind(this);
  }

  componentWillMount() {
    this.setState({
      authFlag: false,
    });
  }

  componentDidMount() {
    if (localStorage.getItem("email")) {
      const data = {
        email: localStorage.getItem("email"),
        jobId: localStorage.getItem("jobId")
      };
      axios
        .get(`http://localhost:3001/recruiter/displayJob/${data.jobId}/${data.email}`)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log("Status", response.data);

          if (response.status === 200) {
            console.log(response.data);
            this.setState({
              Recruiter: response.data.value
            });

            this.setState({
              jobTitle: this.state.Recruiter.jobTitle,
              jobDescription: this.state.Recruiter.jobDescription,
              industry: this.state.Recruiter.industry,
              employmentType: this.state.Recruiter.employmentType,
              location: this.state.Recruiter.location,
              jobFunction: this.state.Recruiter.jobFunction,
              jobOpenings:this.state.Recruiter.jobOpenings
             
            });
          }

          console.log("User Data", this.state.Recruiter);
          console.log("User1 Data", response.data.value);
        });
    }
  }

  jobTitleChangeHandler = e => {
    this.setState({
      jobTitle: e.target.value
    });
  };
  jobDescriptionChangeHandler = e => {
    this.setState({
      jobDescription: e.target.value
    });
  };

  industryChangeHandler = e => {
    this.setState({
      industry: e.target.value
    });
  };
  employmentTypeChangeHandler = e => {
    this.setState({
      employmentType: e.target.value
    });
  };

  jobFunctionChangeHandler = e => {
    this.setState({
      jobFunction: e.target.value
    });
  };

  jobOpeningsChangeHandler = e => {
    this.setState({
      jobOpenings: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    const data = {
      email: localStorage.getItem("email"),
      jobId: localStorage.getItem("jobId"),
      jobTitle: this.state.jobTitle,
      jobDescription: this.state.jobDescription,
      jobFunction: this.state.jobFunction,
      jobOpenings: this.state.jobOpenings,
      employmentType: this.state.employmentType,
      industry: this.state.industry
    };

    console.log("email", data.email);
    console.log("data", data);
    //set the with credentials to true
    axios.defaults.withCredentials = true;
    //make a post request with the user data
    axios
      .put(
        `http://localhost:3001/recruiter/editJob/${data.jobId}/${data.email}`,
        data
      )
      .then(response => {
        console.log("Status Code : ", response.data.value);
        if (response.status === 200) {
          this.setState({
            authFlag: true,
            message: "Congratulations! Successfully updated"
          });
          // axios.post("http://localhost:3001/userimage", formData).then(result => {
          //   // access results...
          // });
          window.location.reload(1);
        } else {
          this.setState({
            authFlag: false,
            message: "Invalid Data "
          });
        }
      });
  };

  render() {
    var redirect = null;
    // if (!localStorage.getItem("type")) {
    //   redirect = <Redirect to="/login" />;
    // }

    if (localStorage.getItem("email")) {
      return (
        <React.Fragment>
          {redirect}
          <NavRecruiterHome navdata={this.props.navdata} />

          <div
            className="main-division"
            style={{
              backgroundColor: "#f5f5f5",
              height: "900px",
            
            }}
          >
            <div
              className="sub-div1 col-md-6"
              style={{
                border: "1px solid lightgray",
                backgroundColor: "white",
                borderRadius:"10px",
                height: "auto",
                marginTop: "2%",
                marginLeft: "25%",
                textAlign:"center",
                padding: "20px"
              }}
            >
              <header class="projects-actions-bar__title-bar">
                {/* <img src={logo} alt="gg" /> */}
                <h2
                  data-test-roles-title=""
                  class="projects-actions-bar__title"
                  style={{
                    
                    paddingBottom: "10px",
                    color: "rgba(0,0,0,.9)",
                    textAlign: "center",
                    fontSize: "2.5rem",
                    fontWeight: "normal"
                  }}
                >
                  Edit Job
                </h2>
              </header>
<br></br>
              <div className="row">
                <div
                  style={{
                    textAlign: "left",
                    color: "rgba(0,0,0,.9)",
                    padding: "6px"
                  }}
                  class="form-group form-group-lg col-md-2"
                >
                  <label for="currentpassword">Job Title:</label>
                </div>
                <div className="left col-md-10 ">
                  <input
                    type="text"
                    class="form-control"
                    id="jobTitle"
                    placeholder="Job Title"
                    name="jobTitle"
                    onChange={this.jobTitleChangeHandler}
                    value={this.state.jobTitle}
                    style={{ marginBottom: "20px" }}
                  />
                </div>{" "}
              </div>

              <div className="row">
                <div
                  style={{
                    textAlign: "left",
                    color: "rgb(0,0,0,.9)",
                    padding: "6px",
                    
                  }}
                  class="form-group form-group-lg col-md-2"
                >
                  <label for="currentpassword">Job Description:</label>
                </div>
                <div className="left col-md-10 ">
                  <input
                    type="textarea"
                    class="form-control"
                    id="jobDescription"
                    placeholder="Job Description"
                    name="jobDescription"
                    style={{ marginBottom: "20px",wordBreak:"break-word"}}
                    value={this.state.jobDescription}
                    onChange={this.jobDescriptionChangeHandler}
                  />
                </div>{" "}
              </div>
              <div className="row">
                <div
                  style={{
                    textAlign: "left",
                    color: "rgb(0,0,0,.9)",
                    padding: "6px"
                  }}
                  class="form-group form-group-lg col-md-2"
                >
                  <label for="currentpassword">Industry:</label>
                </div>
                <div className="left col-md-10 ">
                  <input
                    type="text"
                    class="form-control"
                    id="industry"
                    placeholder="Industry"
                    name="industry"
                    style={{ marginBottom: "20px" }}
                    value={this.state.industry}
                    onChange={this.industryChangeHandler}
                  />
                </div>{" "}
              </div>
              <div className="row">
                <div
                  style={{
                    textAlign: "left",
                    color: "rgb(0,0,0,.9)",
                    padding: "6px"
                  }}
                  class="form-group form-group-lg col-md-2"
                >
                  <label for="currentpassword">Employment Type:</label>
                </div>
                <div className="left col-md-10 ">
                  <input
                    type="text"
                    class="form-control"
                    id="employmentType"
                    placeholder="Employment Type"
                    name="employmentType"
                    style={{ marginBottom: "20px" }}
                    value={this.state.employmentType}
                    onChange={this.employmentTypeChangeHandler}
                  />
                </div>{" "}
              </div>
              <div className="row">
                <div
                  style={{
                    textAlign: "left",
                    color: "rgb(0,0,0,.9)",
                    padding: "6px"
                  }}
                  class="form-group form-group-lg col-md-2"
                >
                  <label for="currentpassword">Job Function:</label>
                </div>
                <div className="left col-md-10 ">
                  <input
                    type="text"
                    class="form-control"
                    id="jobFunction"
                    placeholder="Job Function"
                    name="jobFunction"
                    style={{ marginBottom: "20px" }}
                    onChange={this.jobFunctionChangeHandler}
                    value={this.state.jobFunction}
                  />
                </div>{" "}
              </div>
              <div className="row">
                <div
                  style={{
                    textAlign: "left",
                    color: "rgb(0,0,0,.9)",
                    padding: "6px"
                  }}
                  class="form-group form-group-lg col-md-2"
                >
                  <label for="currentpassword">Job Openings:</label>
                </div>
                <div className="left col-md-10 ">
                  <input
                    type="text"
                    class="form-control"
                    id="jobOpenings"
                    placeholder="Job Openings"
                    name="jobOpenings"
                    style={{ marginBottom: "20px" }}
                    onChange={this.jobOpeningsChangeHandler}
                    value={this.state.jobOpenings}
                  />
                </div>{" "}
              </div>
              
              <button
                type="submit"
                className="btn btn-primary col-md-12"
                onClick={this.submit}
                style={{
                  fontWeight: "bold",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  cursor: "pointer",
                  textAlign: "center",
                  textShadow: "0 1px 1px rgba(0,0,0,0.35)",
                  marginBottom: "20px"
                }}
              >
                Save Job
              </button>
            </div>{" "}
            
            <div className="footer col-sm-12" 
            style={{
              marginTop:"10px",
              borderTop:"1 px solid black"
            }}>
            <FooterRecruiterHome footdata={this.props.footdata}/>
            </div>
          </div>
         
          {/* <div className="profilephoto" style={{ textAlign: "center" }}>
            {details}
          </div> */}
          {/* <div style={{ marginTop: "100px" }}>
            <Footer footdata={this.props.footdata} />
          </div> */}
        </React.Fragment>
      );
    } else {
      return (
        <div>
          <NavRecruiterHome navdata={this.props.navdata} />
          {redirect}
          <div>
            <h2>No results for this query. Login to view this page!</h2>
          </div>
          {/* <div style={{ marginTop: "100px" }}>
            <Footer footdata={this.props.footdata} />
          </div> */}
        </div>
      );
    }
  }
}

export default editJob;