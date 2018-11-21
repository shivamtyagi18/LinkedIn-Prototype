import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import cookie from "react-cookies";
import { Redirect } from "react-router";
// import { SplitButton,DropdownButton, MenuItem, Button, Image } from 'react-bootstrap';
//import { createUser } from "../../actions";
import { connect } from "react-redux";
import _ from "lodash";
import { loginUser } from "../../actions";
import { logoutUser } from "../../actions";
import { Field, reduxForm } from "redux-form";

//create the Navbar Component
class LoginNavbar extends Component {
  constructor(props) {
    //Call the constrictor of Super class i.e The Component
    super(props);
    //maintain the state required for this component
    this.state = {
      // email : "",
      // password : "",
      // type : "",
      loginFlag: false,
      err: null //"Enter valid credentials"
    };
  }

  // componentDidMount(){
  // //    let signup_res= this.props.createUser();
  // //    console.log("signup response",signup_res)

  // }

  //handle logout to destroy the cookie

  renderFieldemail(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          style={{ fontSize: "1.2rem" }}
          className="form-control"
          type="email"
          {...field.input}
          placeholder={field.placeholder}
        />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  renderFieldpassword(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          style={{ fontSize: "1.2rem" }}
          className="form-control"
          type="password"
          {...field.input}
          placeholder={field.placeholder}
        />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  renderFieldType(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          style={{ fontSize: "18px" }}
          className="form-control"
          type="text"
          value="Traveller"
          placeholder={field.placeholder}
        />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(values) {
    console.log("login data", values);
    values.type = "applicant";
    console.log("login data", values);
    this.props.loginUser(values, () => {
      //this.props.history.push("/applicant/applicantHome");
      // window.location.reload(1); //refreshes the page so redux state is lost
      console.log("tested");
    });
  }

  handleFocus = () => {
    this.setState({ err: null });
  };

  render() {
    const { handleSubmit } = this.props;
    // this.state.email=localStorage.getItem("email")
    //if Cookie is set render Logout and user Button
    //<li><Link to="/" onClick = {this.handleLogout}><span class="glyphicon glyphicon-user"></span>Logout</Link></li>

    //Else display login button
    console.log("Not Able to read cookie", this.props.loginApplicant.code);

    let redirectVar = null;

    if (this.props.loginApplicant.code === "401") {
      this.state.err = "Invalid Login";
      window.alert(this.state.err);
      window.location.reload(1);
      // redirectVar = <Redirect to= "/login"/>
    } else if (this.props.loginApplicant == "Error") {
      this.state.err = "Server not available, try again";
      window.alert(this.state.err);
      window.location.reload(1);
      // redirectVar = <Redirect to= "/login"/>
    }
    //<p>Please enter your username and password</p>
    else if (localStorage.getItem("token")) {
      redirectVar = (
        <Redirect
          to={{
            pathname: "/applicant/applicantHome",
            state: {
              email: this.state.email,
              loginFlag: this.state.loginFlag
            }
          }}
        />
      );

      //    this.props.history.push({
      //   pathname : '/applicant/applicantHome',
      //   state : {
      //       username : this.state.email,
      //       loginFlag : this.state.loginFlag
      //   }
      // })
      console.log(this.state.email);
      // console.log(this.state.loginFlag)
    }

    return (
      <div style={{ opacity: "1", zIndex: "1000", position: "absolute" }}>
        {redirectVar}
        <nav
          class="navbar navbar-light navbar-fixed-top"
          style={{ backgroundColor: "#283e4a", height: "5%" }}
        >
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="/">
                <img
                  alt="LinkedIn"
                  class="site-header-logo__img img-responsive"
                  role="presentation"
                  src="https://static.licdn.com/sc/h/95o6rrc5ws6mlw6wqzy0xgj7y"
                />
              </a>
            </div>

            <div class="nav navbar-nav navbar-right navbar-brand">
              <p style={{ color: "white" }}>Forgot Password</p>
            </div>

            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <div
                class="nav navbar-nav navbar-right navbar-brand"
                style={{ marginTop: "-1%" }}
              >
                <button
                  class="btn btn-primary"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "white",
                    fontSize: "18px"
                  }}
                >
                  Sign In
                </button>
              </div>

              <div
                class="nav navbar-nav navbar-right navbar-brand"
                style={{ marginTop: "-2%" }}
              >
                <Field
                  name="password"
                  component={this.renderFieldpassword}
                  placeholder="Password"
                />
              </div>

              <div
                class="nav navbar-nav navbar-right navbar-brand"
                style={{ marginTop: "-2%" }}
              >
                <Field
                  name="email"
                  component={this.renderFieldemail}
                  placeholder="Email"
                />
              </div>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.username) {
    errors.username = "Enter an ID";
  }
  if (!values.password) {
    errors.password = "Enter Password";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

function mapStateToProps(state) {
  return { loginApplicant: state.loginApplicant };
}

export default reduxForm({
  validate,
  form: "NewLoginForm"
})(
  connect(
    mapStateToProps,
    { loginUser, logoutUser }
  )(LoginNavbar)
);

//export default connect(mapStateToProps, { loginUser, logoutUser })(LoginNavbar);
//export default Navbar;
