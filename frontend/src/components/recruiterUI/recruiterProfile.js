// import React, { Component } from "react";
// //import NavProfile from "./naveditprofile";
// import cookie from "react-cookies";
// import { Redirect } from "react-router";
// import "../../App.css";
// //import Footer from "./footer";
// import axios from "axios";
// import NavRecruiterHome from "./navbarHome";
// import FooterRecruiterHome from "./footer";
// import { Field, reduxForm } from "redux-form";
// import { connect } from "react-redux";

// class RecruiterProfile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Recruiter: "",
//       firstName: "",
//       lastName: "",
//       address: "",
//       city: "",
//       company: "",
//       state: "",
//       zipCode: "",
//       phoneNumber: "",
//       authFlag: false
//     };
//     this.setState = this.setState.bind(this);
//   }

//   componentWillMount() {
//     this.setState({
//       authFlag: false,
//       Traveller: []
//     });
//   }

//   componentDidMount() {
//     if (localStorage.getItem("email")) {
//       const data = {
//         email: localStorage.getItem("email")
//       };
//       axios
//         .get(`http://localhost:3001/recruiter/recruiterDisplay/${data.email}`)
//         .then(response => {
//           console.log("Status Code : ", response.status);
//           console.log("Status", response.data);

//           if (response.status === 200) {
//             console.log(response.data);
//             this.setState({
//               Recruiter: response.data.value
//             });

//             this.setState({
//               firstName: this.state.Recruiter.firstName,
//               lastName: this.state.Recruiter.lastName,
//               address: this.state.Recruiter.address,
//               city: this.state.Recruiter.city,
//               company: this.state.Recruiter.companyName,
//               state: this.state.Recruiter.state,
//               zipCode: this.state.Recruiter.zipcode,
//               phoneNumber: this.state.Recruiter.phone
//             });
//           }

//           console.log("User Data", this.state.Recruiter);
//           console.log("User1 Data", response.data.value);
//         });
//     }
//   }

//   firstNameChangeHandler = e => {
//     this.setState({
//       firstName: e.target.value
//     });
//   };
//   lastNameChangeHandler = e => {
//     this.setState({
//       lastName: e.target.value
//     });
//   };

//   addressChangeHandler = e => {
//     this.setState({
//       address: e.target.value
//     });
//   };
//   cityChangeHandler = e => {
//     this.setState({
//       city: e.target.value
//     });
//   };

//   companyChangeHandler = e => {
//     this.setState({
//       company: e.target.value
//     });
//   };

//   stateChangeHandler = e => {
//     this.setState({
//       state: e.target.value
//     });
//   };

//   zipCodeChangeHandler = e => {
//     this.setState({
//       zipCode: e.target.value
//     });
//   };
//   phoneNumberChangeHandler = e => {
//     this.setState({
//       phoneNumber: e.target.value
//     });
//   };

//   submit = e => {
//     e.preventDefault();
//     const data = {
//       email: localStorage.getItem("email"),
//       firstName: this.state.firstName,
//       lastName: this.state.lastName,
//       address: this.state.address,
//       city: this.state.city,
//       company: this.state.company,
//       state: this.state.state,
//       zipCode: this.state.zipCode,
//       phoneNumber: this.state.phoneNumber
//     };

//     console.log("email", data.email);
//     console.log("data", data);
//     //set the with credentials to true
//     axios.defaults.withCredentials = true;
//     //make a post request with the user data
//     axios
//       .put(
//         `http://localhost:3001/recruiter/modifyRecruiterAccount/${data.email}`,
//         data
//       )
//       .then(response => {
//         console.log("Status Code : ", response.data.value);
//         if (response.status === 200) {
//           this.setState({
//             authFlag: true,
//             message: "Congratulations! Successfully updated"
//           });
//           // axios.post("http://localhost:3001/userimage", formData).then(result => {
//           //   // access results...
//           // });
//           window.location.reload(1);
//         } else {
//           this.setState({
//             authFlag: false,
//             message: "Invalid Data "
//           });
//         }
//       });
//   };

//   render() {
//     var redirect = null;
//     // if (!localStorage.getItem("type")) {
//     //   redirect = <Redirect to="/login" />;
//     // }

//     if (localStorage.getItem("email")) {
//       return (
//         <React.Fragment>
//           {redirect}
//           <NavRecruiterHome navdata={this.props.navdata} />

//           <div
//             className="main-division"
//             style={{
//               backgroundColor: "#f5f5f5",
//               height: "900px"
//             }}
//           >
//             <div
//               className="sub-div1 col-md-6"
//               style={{
//                 border: "1px solid lightgray",
//                 backgroundColor: "white",
//                 height: "auto",
//                 marginTop: "2%",
//                 marginLeft: "7%",
//                 padding: "20px"
//               }}
//             >
//               <header class="projects-actions-bar__title-bar">
//                 {/* <img src={logo} alt="gg" /> */}
//                 <h2
//                   data-test-roles-title=""
//                   class="projects-actions-bar__title"
//                   style={{
                    
//                     paddingBottom: "10px",
//                     color: "rgba(0,0,0,.9)",
//                     textAlign: "center",
//                     fontSize: "2.5rem",
//                     fontWeight: "normal"
//                   }}
//                 >
//                   Profile Settings
//                 </h2>
//               </header>
// <br></br>
//               <div className="row">
//                 <div
//                   style={{
//                     textAlign: "left",
//                     color: "rgba(0,0,0,.9)",
//                     padding: "6px"
//                   }}
//                   class="form-group form-group-lg col-md-2"
//                 >
//                   <label for="currentpassword">First Name:</label>
//                 </div>
//                 <div className="left col-md-10 ">
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="firstNsme"
//                     placeholder="First Name"
//                     name="firstName"
//                     onChange={this.firstNameChangeHandler}
//                     value={this.state.firstName}
//                     style={{ marginBottom: "20px" }}
//                   />
//                 </div>{" "}
//               </div>

//               <div className="row">
//                 <div
//                   style={{
//                     textAlign: "left",
//                     color: "rgb(0,0,0,.9)",
//                     padding: "6px"
//                   }}
//                   class="form-group form-group-lg col-md-2"
//                 >
//                   <label for="currentpassword">Last Name:</label>
//                 </div>
//                 <div className="left col-md-10 ">
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="lastName"
//                     placeholder="Last name"
//                     name="lastname"
//                     style={{ marginBottom: "20px" }}
//                     value={this.state.lastName}
//                     onChange={this.lastNameChangeHandler}
//                   />
//                 </div>{" "}
//               </div>
//               <div className="row">
//                 <div
//                   style={{
//                     textAlign: "left",
//                     color: "rgb(0,0,0,.9)",
//                     padding: "6px"
//                   }}
//                   class="form-group form-group-lg col-md-2"
//                 >
//                   <label for="currentpassword">Address:</label>
//                 </div>
//                 <div className="left col-md-10 ">
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="address"
//                     placeholder="Address"
//                     name="address"
//                     style={{ marginBottom: "20px" }}
//                     value={this.state.address}
//                     onChange={this.addressChangeHandler}
//                   />
//                 </div>{" "}
//               </div>
//               <div className="row">
//                 <div
//                   style={{
//                     textAlign: "left",
//                     color: "rgb(0,0,0,.9)",
//                     padding: "6px"
//                   }}
//                   class="form-group form-group-lg col-md-2"
//                 >
//                   <label for="currentpassword">City:</label>
//                 </div>
//                 <div className="left col-md-10 ">
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="city"
//                     placeholder="City"
//                     name="city"
//                     style={{ marginBottom: "20px" }}
//                     value={this.state.city}
//                     onChange={this.cityChangeHandler}
//                   />
//                 </div>{" "}
//               </div>
//               <div className="row">
//                 <div
//                   style={{
//                     textAlign: "left",
//                     color: "rgb(0,0,0,.9)",
//                     padding: "6px"
//                   }}
//                   class="form-group form-group-lg col-md-2"
//                 >
//                   <label for="currentpassword">State:</label>
//                 </div>
//                 <div className="left col-md-10 ">
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="state"
//                     placeholder="State"
//                     name="state"
//                     style={{ marginBottom: "20px" }}
//                     onChange={this.stateChangeHandler}
//                     value={this.state.state}
//                   />
//                 </div>{" "}
//               </div>
//               <div className="row">
//                 <div
//                   style={{
//                     textAlign: "left",
//                     color: "rgb(0,0,0,.9)",
//                     padding: "6px"
//                   }}
//                   class="form-group form-group-lg col-md-2"
//                 >
//                   <label for="currentpassword">Zip Code:</label>
//                 </div>
//                 <div className="left col-md-10 ">
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="zipCode"
//                     placeholder="Zip Code"
//                     name="zipCode"
//                     style={{ marginBottom: "20px" }}
//                     onChange={this.zipCodeChangeHandler}
//                     value={this.state.zipCode}
//                   />
//                 </div>{" "}
//               </div>
//               <div className="row">
//                 <div
//                   style={{
//                     textAlign: "left",
//                     color: "rgb(0,0,0,.9)",
//                     padding: "6px"
//                   }}
//                   class="form-group form-group-lg col-md-2"
//                 >
//                   <label for="currentpassword">Phone No:</label>
//                 </div>
//                 <div className="left col-md-10 ">
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="phoneNumber"
//                     placeholder="Phone Number"
//                     name="phoneNumber"
//                     style={{ marginBottom: "20px" }}
//                     onChange={this.phoneNumberChangeHandler}
//                     value={this.state.phoneNumber}
//                   />
//                 </div>{" "}
//               </div>
//               <div className="row">
//                 <div
//                   style={{
//                     textAlign: "left",
//                     color: "rgb(0,0,0,.9)",
//                     padding: "6px"
//                   }}
//                   class="form-group form-group-lg col-md-2"
//                 >
//                   <label for="currentpassword">Company:</label>
//                 </div>
//                 <div className="left col-md-10 ">
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="companyName"
//                     placeholder="Company name"
//                     name="companyName"
//                     style={{ marginBottom: "20px" }}
//                     onChange={this.companyChangeHandler}
//                     value={this.state.company}
//                   />
//                 </div>{" "}
//               </div>
//               <button
//                 type="submit"
//                 className="btn btn-primary col-md-12"
//                 onClick={this.submit}
//                 style={{
//                   fontWeight: "bold",
//                   borderWidth: "1px",
//                   borderStyle: "solid",
//                   cursor: "pointer",
//                   textAlign: "center",
//                   textShadow: "0 1px 1px rgba(0,0,0,0.35)",
//                   marginBottom: "20px"
//                 }}
//               >
//                 Save Changes
//               </button>
//             </div>{" "}
//             <div
//               className="sub-div2 col-md-3"
//               style={{
//                 border: "1px solid lightgray",
//                 backgroundColor: "white",
//                 height: "auto",
//                 marginTop: "2%",
//                 marginLeft: "10%"
//               }}
//             >
//               <header class="projects-actions-bar__title-bar">
//                 <h2
//                   data-test-roles-title=""
//                   class="projects-actions-bar__title"
//                   style={{
//                     padding: "10px",
//                     textAlign: "center",
//                     color: "rgba(0,0,0,.9)",

//                     fontSize: "2.5rem",
//                     fontWeight: "normal"
//                   }}
//                 >
//                   Change Email
//                 </h2>
//               </header>
//               <br></br>
//               <div className="row">
//                 <div
//                   style={{
//                     textAlign: "left",
//                     color: "rgba(0,0,0,.9)",
//                     padding: "6px"
//                   }}
//                   class="form-group form-group-lg col-md-2"
//                 >
//                   <label for="currentpassword" style={{ paddingLeft: "6px" }}>
//                     Email:
//                   </label>
//                 </div>
//                 <div className="left col-md-10 ">
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="email"
//                     placeholder="Email"
//                     name="email"
//                     onChange={this.searchChangeHandler}
//                     style={{ marginBottom: "20px" }}
//                   />
//                 </div>{" "}
//               </div>
//               <button
//                 type="submit"
//                 className="btn btn-primary col-md-12"
//                 onClick={this.submit}
//                 style={{
//                   fontWeight: "bold",
//                   borderWidth: "1px",
//                   borderStyle: "solid",
//                   cursor: "pointer",
//                   textAlign: "center",
//                   textShadow: "0 1px 1px rgba(0,0,0,0.35)",
//                   marginBottom: "20px"
//                 }}
//               >
//                 Save
//               </button>
//             </div>{" "}
//             <div
//               className="sub-div3 col-md-3"
//               style={{
//                 border: "1px solid lightgray",
//                 backgroundColor: "white",
//                 height: "auto",
//                 marginTop: "2%",
//                 marginLeft: "10%"
//               }}
//             >
//               <header class="projects-actions-bar__title-bar">
//                 <h2
//                   data-test-roles-title=""
//                   class="projects-actions-bar__title"
//                   style={{
                    
//                     padding: "10px",
//                     textAlign: "center",
//                     color: "rgba(0,0,0,.9)",

//                     fontSize: "2.5rem",
//                     fontWeight: "normal"
//                   }}
//                 >
//                   Change Password
//                 </h2>
//               </header>
//               <br></br>
//               <div className="row">
//                 <div
//                   style={{
//                     textAlign: "left",
//                     color: "rgba(0,0,0,.9)",
//                     padding: "6px"
//                   }}
//                   class="form-group form-group-lg col-md-3"
//                 >
//                   <label for="currentpassword" style={{ paddingLeft: "6px" }}>
//                     Current Password:
//                   </label>
//                 </div>
//                 <div className="left col-md-9 ">
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="currentPassword"
//                     placeholder="Current Password"
//                     onChange={this.searchChangeHandler}
//                     style={{ marginBottom: "20px" }}
//                   />
//                 </div>{" "}
//               </div>
//               <div className="row">
//                 <div
//                   style={{
//                     textAlign: "left",
//                     color: "rgba(0,0,0,.9)",
//                     padding: "6px"
//                   }}
//                   class="form-group form-group-lg col-md-3"
//                 >
//                   <label for="currentpassword" style={{ paddingLeft: "6px" }}>
//                     New Password:
//                   </label>
//                 </div>
//                 <div className="left col-md-9 ">
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="newPassword"
//                     placeholder="New Password"
//                     name="newPassword"
//                     onChange={this.searchChangeHandler}
//                     style={{ marginBottom: "20px" }}
//                   />
//                 </div>{" "}
//               </div>
//               <div className="row">
//                 <div
//                   style={{
//                     textAlign: "left",
//                     color: "rgba(0,0,0,.9)",
//                     padding: "6px"
//                   }}
//                   class="form-group form-group-lg col-md-3"
//                 >
//                   <label for="currentpassword" style={{ paddingLeft: "6px" }}>
//                     Confirm Password:
//                   </label>
//                 </div>
//                 <div className="left col-md-9 ">
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="confirmPassword"
//                     placeholder="Confirm New Password"
//                     name="confirmpassword"
//                     onChange={this.searchChangeHandler}
//                     style={{ marginBottom: "20px" }}
//                   />
//                 </div>{" "}
//               </div>
//               <button
//                 type="submit"
//                 className="btn btn-primary col-md-12"
//                 style={{
//                   fontWeight: "bold",
//                   borderWidth: "1px",
//                   borderStyle: "solid",
//                   cursor: "pointer",
//                   textAlign: "center",
//                   textShadow: "0 1px 1px rgba(0,0,0,0.35)",
//                   marginBottom: "20px"
//                 }}
//               >
//                 Save
//               </button>
              
//             </div>{" "}
//             <div className="footer col-sm-12" 
//             style={{
//               marginTop:"10px",
//               borderTop:"1 px solid black"
//             }}>
//             <FooterRecruiterHome footdata={this.props.footdata}/>
//             </div>
//           </div>
         
//           {/* <div className="profilephoto" style={{ textAlign: "center" }}>
//             {details}
//           </div> */}
//           {/* <div style={{ marginTop: "100px" }}>
//             <Footer footdata={this.props.footdata} />
//           </div> */}
//         </React.Fragment>
//       );
//     } else {
//       return (
//         <div>
//           <NavRecruiterHome navdata={this.props.navdata} />
//           {redirect}
//           <div>
//             <h2>No results for this query</h2>
//           </div>
//           {/* <div style={{ marginTop: "100px" }}>
//             <Footer footdata={this.props.footdata} />
//           </div> */}
//         </div>
//       );
//     }
//   }
// }

// export default RecruiterProfile;

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
import classnames from "classnames";

class RecruiterProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Recruiter: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      company: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      authFlag: false,
      errorModify: ""
    };
    this.setState = this.setState.bind(this);
  }

  componentWillMount() {
    this.setState({
      authFlag: false,
      Traveller: []
    });
  }

  componentDidMount() {
    if (localStorage.getItem("email")) {
      const data = {
        email: localStorage.getItem("email")
      };
      axios
        .get(`http://localhost:3001/recruiter/recruiterDisplay/${data.email}`)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log("Status", response.data);

          if (response.status === 200) {
            console.log(response.data);
            this.setState({
              Recruiter: response.data.value
            });

            this.setState({
              firstName: this.state.Recruiter.firstName,
              lastName: this.state.Recruiter.lastName,
              address: this.state.Recruiter.address,
              city: this.state.Recruiter.city,
              company: this.state.Recruiter.companyName,
              state: this.state.Recruiter.state,
              zipCode: this.state.Recruiter.zipcode,
              phoneNumber: this.state.Recruiter.phone
            });
          }

          console.log("User Data", this.state.Recruiter);
          console.log("User1 Data", response.data.value);
        });
    }
  }

  firstNameChangeHandler = e => {
    this.setState({
      firstName: e.target.value
    });
  };
  lastNameChangeHandler = e => {
    this.setState({
      lastName: e.target.value
    });
  };

  addressChangeHandler = e => {
    this.setState({
      address: e.target.value
    });
  };
  cityChangeHandler = e => {
    this.setState({
      city: e.target.value
    });
  };

  companyChangeHandler = e => {
    this.setState({
      company: e.target.value
    });
  };

  stateChangeHandler = e => {
    this.setState({
      state: e.target.value
    });
  };

  zipCodeChangeHandler = e => {
    this.setState({
      zipCode: e.target.value
    });
  };

  phoneNumberChangeHandler = e => {
    this.setState({
      phoneNumber: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    const data = {
      email: localStorage.getItem("email"),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      city: this.state.city,
      company: this.state.company,
      state: this.state.state,
      zipCode: this.state.zipCode,
      phoneNumber: this.state.phoneNumber
    };

    console.log("email", data.email);
    console.log("data", data);
    //set the with credentials to true
    axios.defaults.withCredentials = true;
    //make a post request with the user data
    axios
      .put(
        `http://localhost:3001/recruiter/modifyRecruiterAccount/${data.email}`,
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
        } else if (response.status === 202) {
          this.setState({
            errorModify: response.data
          });
        }
      });
  };

  render() {
    var redirect = null;
    const { errorModify } = this.state;

    if (localStorage.getItem("email")) {
      return (
        <React.Fragment>
          {redirect}
          <NavRecruiterHome navdata={this.props.navdata} />

          <div
            className="main-division"
            style={{
              backgroundColor: "#f5f5f5",
              height: "900px"
            }}
          >
            <div
              className="sub-div1 col-md-6"
              style={{
                border: "1px solid lightgray",
                backgroundColor: "white",
                height: "auto",
                marginTop: "2%",
                marginLeft: "7%",
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
                  Profile Settings
                </h2>
              </header>
              <br />
              <div className="row">
                <div
                  style={{
                    textAlign: "left",
                    color: "rgba(0,0,0,.9)",
                    padding: "6px"
                  }}
                  class="form-group form-group-lg col-md-2"
                >
                  <label for="currentpassword">First Name:</label>
                </div>
                <div className="left col-md-10 ">
                  {errorModify.firstName && (
                    <div
                      style={{ width: "300px", color: "red" }}
                      className="invalid-feedback"
                    >
                      {errorModify.firstName}
                    </div>
                  )}
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errorModify.firstName
                    })}
                    id="firstNsme"
                    placeholder="First Name"
                    name="firstName"
                    onChange={this.firstNameChangeHandler}
                    value={this.state.firstName}
                    style={{ marginBottom: "20px" }}
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
                  <label for="currentpassword">Last Name:</label>
                </div>
                <div className="left col-md-10 ">
                  {errorModify.lastName && (
                    <div
                      style={{ width: "300px", color: "red" }}
                      className="invalid-feedback"
                    >
                      {errorModify.lastName}
                    </div>
                  )}
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errorModify.lastName
                    })}
                    id="lastName"
                    placeholder="Last name"
                    name="lastname"
                    style={{ marginBottom: "20px" }}
                    value={this.state.lastName}
                    onChange={this.lastNameChangeHandler}
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
                  <label for="currentpassword">Address:</label>
                </div>
                <div className="left col-md-10 ">
                  {errorModify.address && (
                    <div
                      style={{ width: "300px", color: "red" }}
                      className="invalid-feedback"
                    >
                      {errorModify.address}
                    </div>
                  )}
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errorModify.address
                    })}
                    id="address"
                    placeholder="Address"
                    name="address"
                    style={{ marginBottom: "20px" }}
                    value={this.state.address}
                    onChange={this.addressChangeHandler}
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
                  <label for="currentpassword">City:</label>
                </div>
                <div className="left col-md-10 ">
                  {errorModify.city && (
                    <div
                      style={{ width: "300px", color: "red" }}
                      className="invalid-feedback"
                    >
                      {errorModify.city}
                    </div>
                  )}
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errorModify.city
                    })}
                    id="city"
                    placeholder="City"
                    name="city"
                    style={{ marginBottom: "20px" }}
                    value={this.state.city}
                    onChange={this.cityChangeHandler}
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
                  <label for="currentpassword">State:</label>
                </div>
                <div className="left col-md-10 ">
                  {errorModify.state && (
                    <div
                      style={{ width: "300px", color: "red" }}
                      className="invalid-feedback"
                    >
                      {errorModify.state}
                    </div>
                  )}
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errorModify.state
                    })}
                    id="state"
                    placeholder="State"
                    name="state"
                    style={{ marginBottom: "20px" }}
                    onChange={this.stateChangeHandler}
                    value={this.state.state}
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
                  <label for="currentpassword">Zip Code:</label>
                </div>
                <div className="left col-md-10 ">
                  {errorModify.zipCode && (
                    <div
                      style={{ width: "300px", color: "red" }}
                      className="invalid-feedback"
                    >
                      {errorModify.zipCode}
                    </div>
                  )}
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errorModify.zipCode
                    })}
                    id="zipCode"
                    placeholder="Zip Code"
                    name="zipCode"
                    style={{ marginBottom: "20px" }}
                    onChange={this.zipCodeChangeHandler}
                    value={this.state.zipCode}
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
                  <label for="currentpassword">Phone No:</label>
                </div>
                <div className="left col-md-10 ">
                  {errorModify.phoneNumber && (
                    <div
                      style={{ width: "300px", color: "red" }}
                      className="invalid-feedback"
                    >
                      {errorModify.phoneNumber}
                    </div>
                  )}
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errorModify.phoneNumber
                    })}
                    id="phoneNumber"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    style={{ marginBottom: "20px" }}
                    onChange={this.phoneNumberChangeHandler}
                    value={this.state.phoneNumber}
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
                  <label for="currentpassword">Company:</label>
                </div>
                <div className="left col-md-10 ">
                  {errorModify.company && (
                    <div
                      style={{ width: "300px", color: "red" }}
                      className="invalid-feedback"
                    >
                      {errorModify.company}
                    </div>
                  )}
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errorModify.company
                    })}
                    id="companyName"
                    placeholder="Company name"
                    name="companyName"
                    style={{ marginBottom: "20px" }}
                    onChange={this.companyChangeHandler}
                    value={this.state.company}
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
                  marginBottom: "20px",
                  width: "200px",
                  marginLeft: "250px"
                }}
              >
                Save Changes
              </button>
            </div>{" "}
            <div
              className="sub-div2 col-md-3"
              style={{
                border: "1px solid lightgray",
                backgroundColor: "white",
                height: "auto",
                marginTop: "2%",
                marginLeft: "10%"
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
                  Change Email
                </h2>
              </header>
              <br />
              <div className="row">
                <div
                  style={{
                    textAlign: "left",
                    color: "rgba(0,0,0,.9)",
                    padding: "6px"
                  }}
                  class="form-group form-group-lg col-md-2"
                >
                  <label for="currentpassword" style={{ paddingLeft: "6px" }}>
                    Email:
                  </label>
                </div>
                <div className="left col-md-10 ">
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="Email"
                    name="email"
                    onChange={this.searchChangeHandler}
                    style={{ marginBottom: "20px" }}
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
                  marginBottom: "20px",
                  marginLeft: "130px"
                }}
              >
                Save
              </button>
            </div>{" "}
            <div
              className="sub-div3 col-md-3"
              style={{
                border: "1px solid lightgray",
                backgroundColor: "white",
                height: "auto",
                marginTop: "2%",
                marginLeft: "10%"
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
                    type="text"
                    class="form-control"
                    id="currentPassword"
                    placeholder="Current Password"
                    onChange={this.searchChangeHandler}
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
                    type="text"
                    class="form-control"
                    id="newPassword"
                    placeholder="New Password"
                    name="newPassword"
                    onChange={this.searchChangeHandler}
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
                    type="text"
                    class="form-control"
                    id="confirmPassword"
                    placeholder="Confirm New Password"
                    name="confirmpassword"
                    onChange={this.searchChangeHandler}
                    style={{ marginBottom: "20px" }}
                  />
                </div>{" "}
              </div>
              <button
                type="submit"
                className="btn btn-primary col-md-12"
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
              <FooterRecruiterHome footdata={this.props.footdata} />
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
            <h2>No results for this query</h2>
          </div>
          {/* <div style={{ marginTop: "100px" }}>
            <Footer footdata={this.props.footdata} />
          </div> */}
        </div>
      );
    }
  }
}

export default RecruiterProfile;