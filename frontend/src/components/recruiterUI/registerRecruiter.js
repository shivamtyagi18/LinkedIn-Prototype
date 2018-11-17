import React, { Component } from "react";
import { Route, withRouter, Link } from "react-router-dom";
// import axios from "axios";
// import cookie from "react-cookies";
import { Redirect } from "react-router";
//import Navlogin from "./navlogin";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import logo from "./linkedinlogo.png";
import { addRecruiter } from "../../actions";

class RegisterRecruiter extends Component {
  constructor() {
    super();
    this.state = {
      authFlag: false,
      userFlag: false
    };
  }
  componentWillMount() {
    this.setState({
      authFlag: false
    });
  }

  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = `${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <input
          type="text"
          {...field.input}
          placeholder="First name"
          style={{
            width: "90%",

            height: "32px",
            marginBottom: "15px",
            marginTop: "20px",
            paddingLeft: "6px",
            fontSize: "16px",
            border: "1px solid #bfbfbf"
          }}
        />
        <div
          className="text-help"
          style={{
            backgroundColor: "rgb(51,125,165)",
            color: "white",
            textAlign: "center",
            width: "90%",
            marginLeft: "20px",
            marginBottom: "15px"
          }}
        >
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderField1(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = ` ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <input
          type="text"
          {...field.input}
          placeholder="Last name"
          style={{
            width: "90%",

            height: "32px",
            marginBottom: "15px",
            paddingLeft: "6px",
            fontSize: "16px",
            border: "1px solid #bfbfbf"
          }}
        />
        <div
          className="text-help"
          style={{
            backgroundColor: "rgb(51,125,165)",
            color: "white",
            textAlign: "center",
            width: "90%",
            marginLeft: "20px",
            marginBottom: "15px"
          }}
        >
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderField2(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = ` ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <input
          type="email"
          {...field.input}
          placeholder="Email address"
          style={{
            width: "90%",

            height: "32px",
            marginBottom: "15px",
            paddingLeft: "6px",
            fontSize: "16px",
            border: "1px solid #bfbfbf"
          }}
        />
        <div
          className="text-help"
          style={{
            backgroundColor: "rgb(51,125,165)",
            color: "white",
            textAlign: "center",
            width: "90%",
            marginLeft: "20px",
            marginBottom: "15px"
          }}
        >
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderField3(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = ` ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <input
          type="password"
          {...field.input}
          placeholder="Password"
          style={{
            width: "90%",

            height: "32px",
            paddingLeft: "6px",
            fontSize: "16px",
            border: "1px solid #bfbfbf",
            marginBottom: "15px"
          }}
        />
        <div
          className="text-help"
          style={{
            backgroundColor: "rgb(51,125,165)",
            color: "white",
            textAlign: "center",
            width: "90%",
            marginLeft: "20px",
            marginBottom: "15px"
          }}
        >
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  submitregister(values) {
    console.log(values);

    this.props.addRecruiter(values);
  }

  render() {
    const { handleSubmit } = this.props;
    let redirect = null;

    if (this.props.register.code == 200) {
      redirect = (
        <Redirect
          to={{
            pathname: "/recruiter/loginRecruiter"
          }}
        />
      );
    }
    let errorMessage = null;
    if (this.props.register.code == 404) {
      errorMessage = (
        <div
          style={{
            backgroundColor: "red",
            fontSize: "12px",
            color: "white",
            textAlign: "center",
            padding: "6px",
            marginTop: "10px"
          }}
        >
          <h5>Recruiter Already exists.</h5>
        </div>
      );
    }

    return (
      <React.Fragment>
        {redirect}
        <div
          className="container-fluid"
          style={{
            backgroundColor: "rgb(51,125,165)"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img src={logo} alt="linkedin" style={{ marginTop: "20px" }} />
          </div>
          <h1
            className="text-center"
            style={{ color: "white", textAlign: "center" }}
          >
            Make the most of your professional life
          </h1>
          <div
            className="text-center"
            style={{
              marginTop: "20px",

              width: "30%",
              marginLeft: "500px",

              backgroundColor: "rgb(238,238,238)"
            }}
          >
            <div>{errorMessage}</div>
            <form
              onSubmit={handleSubmit(this.submitregister.bind(this))}
              className="form-group form-group-lg recruiter"
            >
              <Field name="firstName" component={this.renderField} />
              <Field name="lastName" component={this.renderField1} />
              <Field
                name="email"
                placeholder="Email Address"
                component={this.renderField2}
              />
              <Field
                name="password"
                placeholder="Password"
                component={this.renderField3}
              />
              <p
                style={{
                  textAlign: "center",
                  marginLeft: "12px",
                  fontSize: "14px"
                }}
              >
                <span style={{ color: "#7f8182" }}>
                  You agree to the LinkedIn{" "}
                </span>
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
                  User Agreement
                </a>
                ,{" "}
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
                  Privacy Policy
                </a>
                <span style={{ color: "#7f8182" }}>, and </span>
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
                  {" "}
                  Cookie Policy
                </a>
              </p>
              <button
                type="submit"
                className="btn btn-primary "
                style={{
                  fontWeight: "bold",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  cursor: "pointer",
                  textAlign: "center",
                  textShadow: "0 1px 1px rgba(0,0,0,0.35)",
                  height: "auto",
                  width: "90%",
                  backgroundImage:
                    "-webkit-linear-gradient(top, #287bbc 0%,#23639a 100%)"
                }}
              >
                Agree & Join
              </button>
              <h4
                style={{
                  marginTop: "20px",
                  color: "#286695",
                  paddingBottom: "10px"
                }}
              >
                {" "}
                <span style={{ color: "black" }}> Already on Linkedin? </span>
                <Link to="/recruiter/loginRecruiter">Log in</Link>
              </h4>
            </form>
          </div>
          <p
            style={{
              color: "#cccfd2",
              textAlign: "center",
              marginTop: "4px",
              marginBottom: "300px"
            }}
          >
            Linkedin Corporation &copy; 2018
          </p>
          .
        </div>
      </React.Fragment>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Enter first name ";
  }
  if (!values.lastName) {
    errors.lastName = "Enter last name";
  }
  if (!values.email) {
    errors.email = "Enter an email";
  }
  if (!values.password) {
    errors.password = "Enter password";
  }
  return errors;
}
function mapStateToProps(state) {
  return {
    register: state.addRecruiter
  };
}
export default reduxForm({
  validate,
  form: "RegisterForm"
})(
  connect(
    mapStateToProps,
    { addRecruiter }
  )(RegisterRecruiter)
);
