import React, { Component } from "react";
import "../../App.css";
//import axios from "axios";
//import cookie from "react-cookies";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
//import NavLoginRecruiter from "./navLoginRecruiter";
import LoginNavbar from "./LoginNavbar";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import logo from "./linkedinlogo.png";

//import { tlogin } from "../actions";
import __ from "lodash";
import { createApplicant } from "../../actions";
import bkg from "./linkedin_login_bkg_applicant.jpeg";

//Define a SignUp Component
class LoginApplicant extends Component {

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

  //Removes the error meeage when inputs are focussed
  // handleFocus = () => {
  //   this.setState({ error: false });
  // };
  //Call the Will Mount to set the auth Flag to false
  // componentWillMount() {
  //   this.setState({
  //     authFlag: false
  //   });
  // }
  // //email change handler to update state variable with the text entered by the user
  // emailChangeHandler = e => {
  //   this.setState({
  //     email: e.target.value
  //   });
  // };
  // //password change handler to update state variable with the text entered by the user
  // passwordChangeHandler = e => {
  //   this.setState({
  //     password: e.target.value
  //   });
  // };

  submitlogin(values) {
    console.log(values);
    //this.props.tlogin(values);
  }

  submitregister(values) {
    
    values.type="applicant";
    console.log("signup data",values);
    this.props.createApplicant(values);
  }


  render() {
    const { handleSubmit } = this.props;
    let redirect = null;
    let nav = <LoginNavbar navdata={this.props.navdata}/>

    if (this.props.register.code === 200) {
      redirect = (
        <Redirect
          to={{
            pathname: "/applicant/loginApplicant"
          }}
        />
      );
    }
    let errorMessage = null;
    if (this.props.register.code == 402) {
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
          <h5>User Already exists.</h5>
        </div>
      );
    }

    return (
      <React.Fragment>
        {redirect}
        {nav}
        <div
          className="container-fluid"
          style={{
            backgroundColor: "rgb(51,125,165)" ,
            backgroundImage : "url(" +  bkg  + ")"
          }}
        >
        <div style={{ textAlign: "center",backgroundColor:"transparent" }}>
          <img src={logo} alt="linkedin" style={{ marginTop: "5%" }} />
          </div>
          
        <div
            className="text-center"
            style={{
              marginTop: "5%",
              width: "30%",
              alignItems:"center",position:"center",
              backgroundColor: "rgb(238,238,238)",
              marginLeft : "35%"
            }}
          >
       
        <h2
          className="text-center"
          style={{ color: "black", textAlign: "center" }}
        > Be great at what you do
        </h2>
        <p
          className="text-center"
          style={{ color: "black", textAlign: "center" }}
        > Get started - it'sfree
        </p>

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
                Join now
              </button>
              <h4
                style={{
                  marginTop: "20px",
                  color: "#286695",
                  paddingBottom: "10px"
                }}
              >
                {" "}
                <span style={{ color: "black" }}> Recruiter? </span>
                <Link to="/recruiter/loginRecruiter">Log in</Link>
              </h4>
            </form>

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
          </div>
          
          .
        </div>
      </React.Fragment>
    );
  }
}

//   render() {
//     console.log(this.props.login);
//     const { handleSubmit } = this.props;

//     //redirect based on successful login
//     let redirectVar = null;
//     if (this.props.login.code == 200 && localStorage.getItem("email")) {
//       redirectVar = (
//         <Redirect
//           to={{
//             pathname: "/"
//           }}
//         />
//       );
//     }
//     let errorMessage = null;
//     if (this.props.login.code == 401) {
//       errorMessage = (
//         <div
//           style={{
//             backgroundColor: "orange",
//             fontSize: "12px",
//             color: "white",
//             textAlign: "center",
//             padding: "6px"
//           }}
//         >
//           <h5>The username or password you entered is incorrect.</h5>
//         </div>
//       );
//     }
//     if (this.props.login.code == 404) {
//       errorMessage = (
//         <div
//           style={{
//             backgroundColor: "orange",
//             fontSize: "12px",
//             color: "white",
//             textAlign: "center",
//             padding: "6px"
//           }}
//         >
//           <h5>User does not exist</h5>
//         </div>
//       );
//     }
//     return (
//       <React.Fragment>
//         <body id="login">
//           <div>
//             {redirectVar}

//             <NavLoginApplicant navdata={this.props.navdata} />
//             <div
//               class="container-fluid"
//               style={{
//                 backgroundColor: "#dfdfdf",
//                 WebkitBoxShadow:
//                   "0 1px 1px rgba(0,0,0,0.15), -1px 0 0 rgba(0,0,0,0.03), 1px 0 0 rgba(0,0,0,0.03)"
//               }}
//             >
//               <div class="login-top">
//                 <h4
//                   style={{
//                     textAlign: "left",
//                     color: "#333333",
//                     fontWeight: "bold",
//                     fontSize: "18px",
//                     marginTop: "50px",
//                     marginLeft: "27%"
//                   }}
//                 >
//                   Sign in to LinkedIn Recruiter
//                 </h4>

//                 <span>
//                   <hr style={{ margin: "0px", color: "grey" }} />
//                 </span>
//                 <br />
//               </div>
//               <div
//                 className="text-center"
//                 style={{
//                   marginTop: "20px",

//                   width: "35%",
//                   marginLeft: "30%",
//                   height: "auto",
//                   backgroundColor: "white",
//                   borderRadius: "8px"
//                 }}
//               >
//                 <div>{errorMessage}</div>
//                 <form onSubmit={handleSubmit(this.submitlogin.bind(this))}>
//                   <Field
//                     name="email"
//                     placeholder="Email Address"
//                     component={this.renderField}
//                   />
//                   <Field
//                     name="password"
//                     placeholder="Password"
//                     component={this.renderField1}
//                   />
//                    <div class="form-group">
//                       <input
//                         type="text"
//                         class="form-control"
//                         name="email"
//                         placeholder="email"
//                         onChange={this.emailChangeHandler}
//                         onFocus={this.handleFocus}
//                         required
//                       />
//                       <br />
//                       <input
//                         type="password"
//                         class="form-control"
//                         name="password"
//                         placeholder="Password"
//                         onFocus={this.handleFocus}
//                         onChange={this.passwordChangeHandler}
//                       />
//                     </div> 
//                   <button
//                     class="btn btn-primary"
//                     style={{
//                       fontWeight: "bold",
//                       borderWidth: "1px",
//                       borderStyle: "solid",
//                       cursor: "pointer",
//                       color: "white",
//                       textAlign: "center",
//                       textShadow: "0 1px 1px rgba(0,0,0,0.35)",
//                       height: "auto",
//                       width: "90%"
//                       //  backgroundColor: "#3b7392"
//                     }}
//                   >
//                     Log In
//                   </button>
//                   <br />
//                   <h4
//                     style={{
//                       marginTop: "20px",
//                       color: "#286695",
//                       paddingBottom: "10px"
//                     }}
//                   >
//                     {" "}
//                     <span style={{ color: "black" }}> New to Linkedin? </span>
//                     <Link to="/recruiter/addRecruiter">Sign Up</Link>
//                   </h4>
//                 </form>
//               </div>
//               <div
//                 style={{
//                   marginTop: "30px",
//                   marginLeft: "20%",
//                   marginBottom: "400px"
//                 }}
//               >
//                 By using this site, you agree to LinkedIn's{" "}
//                 <a href="">terms of use.</a>
//                 Commercial use of this site without express authorization is
//                 prohibited.
//               </div>
//               .
//             </div>
//           </div>
//         </body>
//       </React.Fragment>
//     );
//   }
// }

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
    register: state.createApplicant
  };
}
export default reduxForm({
  validate,
  form: "RegisterForm"
})(
  connect(
    mapStateToProps,
    { createApplicant }
  )(LoginApplicant)
);

// function mapStateToProps(state) {
//   return {
//     login: state.login
//   };
// }
// export default reduxForm({
//   validate,
//   form: "Login",
//   destroyOnUnmount: false,
//   forceUnregisterOnUnmount: true,
//   keepDirtyOnReinitialize: true
// })(connect(mapStateToProps)(LoginRecruiter));
//export Sign Up Component
//export default Login;
