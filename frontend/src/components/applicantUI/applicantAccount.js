import React, { Component } from "react";
//import NavProfile from "./naveditprofile";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import "../../App.css";
//import Footer from "./footer";
import axios from "axios";
// import NavRecruiterHome from "./navbarHome";
// import FooterRecruiterHome from "./footer";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Navbar from "./Navbar";
class ApplicantProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldpassword: "",
      newpassword: "",
      confirmpassword: "",
      wrongFlag: false,
      alertFlag: false,
      deleteFlag: false
    };
    this.setState = this.setState.bind(this);
  }
  componentWillMount() {
    this.setState({
      authFlag: false,
      Traveller: []
    });
  }
  componentDidMount() {}
  passwordChangeHandler = e => {
    this.setState({
      oldpassword: e.target.value
    });
  };
  newPasswordChangeHandler = e => {
    this.setState({
      newpassword: e.target.value
    });
  };
  confirmNewChangeHandler = e => {
    this.setState({
      confirmpassword: e.target.value
    });
  };
  deleteAccount = e => {
    e.preventDefault();
    window.alert("Are you sure you want to delete your account");
    const data = {
      email: localStorage.getItem("email")
    };
    //set the with credentials to true
    axios.defaults.withCredentials = true;
    console.log(data);
    //make a post request with the user data
    axios
      .post(`http://localhost:3001/applicant/profile/deleteAccount`, data)
      .then(response => {
        console.log("Status Code : ", response.data);
        if (response.status === 200) {
          this.setState({
            deleteFlag: true
          });
        } else {
          this.setState({
            deleteFlag: false
          });
        }
      });
  };
  submitPassword = e => {
    if (
      this.state.newpassword == this.state.confirmpassword &&
      this.state.newpassword !== ""
    ) {
      e.preventDefault();
      const data = {
        email: localStorage.getItem("email"),
        oldpassword: this.state.oldpassword,
        confirmpassword: this.state.confirmpassword
      };
      //set the with credentials to true
      axios.defaults.withCredentials = true;
      console.log(data);
      //make a post request with the user data
      axios
        .post(`http://localhost:3001/applicant/profile/changePassword`, data)
        .then(response => {
          console.log("Status Code : ", response.data);
          console.log(response.data.code);
          if (response.data.code == 200) {
            this.setState({
              passwordFlag: true
            });
          } else if (response.data.code == 401) {
            this.setState({
              wrongFlag: true
            });
          } else {
            this.setState({
              passwordFlag: false
            });
          }
        });
    } else {
      this.setState({
        alertFlag: true
      });
    }
  };
  render() {
    var redirect = null;
    // if (!localStorage.getItem("type")) {
    //   redirect = <Redirect to="/login" />;
    // }
    let errormessage = null;
    let errormessage1 = null;
    let errormessage2 = null;
    if (this.state.deleteFlag) {
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      localStorage.removeItem("jobId");
      localStorage.removeItem("type");
      localStorage.removeItem("firstName");
      redirect = <Redirect to="/" />;
      window.location.reload(1);
    }
    if (this.state.alertFlag) {
      errormessage1 = (
        <div
          style={{
            fontSize: "14px",
            backgroundColor: "#ed605a",
            lineHeight: "20px",
            color: "white",
            textAlign: "center",
            marginLeft: "30%",
            width: "310px"
          }}
        >
          <p>Confirm your new password again!.</p>
        </div>
      );
    }
    if (this.state.wrongFlag) {
      errormessage2 = (
        <div
          style={{
            fontSize: "14px",
            backgroundColor: "#ed605a",
            lineHeight: "20px",
            color: "white",
            textAlign: "center",
            marginLeft: "30%",
            width: "310px"
          }}
        >
          <p>Retry with correct current password!.</p>
        </div>
      );
    }
    if (this.state.passwordFlag) {
      alert("Password changed successfully");
    }
    return (
      <React.Fragment>
        {redirect}
        <Navbar navdata={this.props.navdata} />
        <div
          className="main-division"
          style={{
            backgroundColor: "#f5f5f5",
            height: "900px"
          }}
        >
          <div
            className="sub-div2 col-md-8"
            style={{
              border: "1px solid lightgray",
              backgroundColor: "white",
              height: "auto",
              marginTop: "7%",
              marginLeft: "17%"
            }}
          >
            <header class="projects-actions-bar__title-bar">
              <h2
                data-test-roles-title=""
                class="projects-actions-bar__title"
                style={{
                  textAlign: "center",
                  color: "rgba(0,0,0,.9)",
                  fontSize: "2.5rem",
                  fontWeight: "normal"
                }}
              >
                Delete Your Account
              </h2>
              {errormessage}
            </header>
            <h4
              style={{
                padding: "10px",
                textAlign: "center",
                color: "red",
                fontSize: "2.5rem",
                fontWeight: "normal"
              }}
            >
              {" "}
              Doing this will permanently delete your account details.
            </h4>
            <button
              type="submit"
              className=" btn-primary col-md-4"
              onClick={this.deleteAccount}
              style={{
                fontWeight: "bold",
                borderWidth: "1px",
                borderStyle: "solid",
                cursor: "pointer",
                textAlign: "center",
                textShadow: "0 1px 1px rgba(0,0,0,0.35)",
                marginBottom: "20px",
                borderRadius: "10px",
                marginLeft: "35%"
              }}
            >
              Delete Account
            </button>
          </div>{" "}
          <div
            className="sub-div3 col-md-8"
            style={{
              border: "1px solid lightgray",
              backgroundColor: "white",
              height: "auto",
              marginTop: "2%",
              marginLeft: "17%"
            }}
          >
            <header class="projects-actions-bar__title-bar">
              <h2
                data-test-roles-title=""
                class="projects-actions-bar__title"
                style={{
                  padding: "10px",
                  textAlign: "center",
                  color: "rgba(0,0,0,.9)",
                  fontSize: "2.5rem",
                  fontWeight: "normal"
                }}
              >
                Change Password
              </h2>
              {errormessage1}
              {errormessage2}
            </header>
            <br />
            <div className="row">
              <div
                style={{
                  textAlign: "left",
                  color: "rgba(0,0,0,.9)",
                  padding: "6px"
                }}
                class="form-group form-group-lg col-md-3"
              >
                <label for="currentpassword" style={{ paddingLeft: "6px" }}>
                  Current Password:
                </label>
              </div>
              <div className="left col-md-9 ">
                <input
                  type="password"
                  class="form-control"
                  id="currentPassword"
                  placeholder="Current Password"
                  onChange={this.passwordChangeHandler}
                  style={{ marginBottom: "20px" }}
                />
              </div>{" "}
            </div>
            <div className="row">
              <div
                style={{
                  textAlign: "left",
                  color: "rgba(0,0,0,.9)",
                  padding: "6px"
                }}
                class="form-group form-group-lg col-md-3"
              >
                <label for="currentpassword" style={{ paddingLeft: "6px" }}>
                  New Password:
                </label>
              </div>
              <div className="left col-md-9 ">
                <input
                  type="password"
                  class="form-control"
                  id="newPassword"
                  placeholder="New Password"
                  name="newPassword"
                  onChange={this.newPasswordChangeHandler}
                  style={{ marginBottom: "20px" }}
                />
              </div>{" "}
            </div>
            <div className="row">
              <div
                style={{
                  textAlign: "left",
                  color: "rgba(0,0,0,.9)",
                  padding: "6px"
                }}
                class="form-group form-group-lg col-md-3"
              >
                <label for="currentpassword" style={{ paddingLeft: "6px" }}>
                  Confirm Password:
                </label>
              </div>
              <div className="left col-md-9 ">
                <input
                  type="password"
                  class="form-control"
                  id="confirmPassword"
                  placeholder="Confirm New Password"
                  name="confirmpassword"
                  onChange={this.confirmNewChangeHandler}
                  style={{ marginBottom: "20px" }}
                />
              </div>{" "}
            </div>
            <button
              type="submit"
              className=" btn-primary col-md-4"
              style={{
                fontWeight: "bold",
                borderWidth: "1px",
                borderStyle: "solid",
                cursor: "pointer",
                textAlign: "center",
                textShadow: "0 1px 1px rgba(0,0,0,0.35)",
                marginBottom: "20px",
                borderRadius: "10px",
                marginLeft: "35%"
              }}
              onClick={this.submitPassword}
            >
              Save
            </button>
          </div>{" "}
          <div
            className="footer col-sm-12"
            style={{
              marginTop: "10px",
              borderTop: "1 px solid black"
            }}
          >
            {/* <FooterRecruiterHome footdata={this.props.footdata} /> */}
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
  }
}
export default ApplicantProfile;