// import React,{Component} from 'react';
// import {Link} from 'react-router-dom';
// import axios from 'axios';
// import cookie from 'react-cookies';
// import {Redirect} from 'react-router';
// import { SplitButton,DropdownButton, MenuItem, Button, Image } from 'react-bootstrap';
// //import { createUser } from "../../actions";
// import { connect } from "react-redux";
// import _ from "lodash";
// import UserSearchBar from './UserSearchBar';
// import { loginUser } from "../../actions";
// import { logoutUser } from "../../actions";
// import { tlogout } from "../../actions";


// //create the Navbar Component
// class Navbar extends Component {
//     constructor(props){
//         super(props);
//         this.state = {  
//            // username : "test",
//            username : "",
//            // username : cookie.load("cookie"),
//             authFlag : this.props.loginFlag,
//             userdisplay : false
//         }  
//         this.handleLogout = this.handleLogout.bind(this);
//       //  this.handleUser = this.handleUser.bind(this);
//       console.log("in construtor",this.props.login.email)
//     }

//     // componentDidMount(){
//     // //    let signup_res= this.props.createUser();
//     // //    console.log("signup response",signup_res)
                 
//     // }
    
//     //handle logout to destroy the cookie
//     handleLogout = () => {
//         cookie.remove('cookie', { path: '/' })
//         //this.props.logoutUser(); 
//         this.props.tlogout();
        
        
            
//     }
    
//     render(){
//         //if Cookie is set render Logout and user Button
//         //<li><Link to="/" onClick = {this.handleLogout}><span class="glyphicon glyphicon-user"></span>Logout</Link></li>
//         let navLogin = null;
//         let help = null;
//         let listyourproperty = null;
        
//         let searchbar1 = <UserSearchBar searchrender={this.props.searchrender}/>
//         let redirectVar = null;

//         // let details= _.map(this.props.login.email, login => { 
           
//            // console.log("User flag Page:",login.token);
//        // })
//         if(localStorage.getItem('token')){
//             console.log("Able to read token");
//             console.log("User Info Page:",this.state.username);
//             console.log("User login info Page:",this.props.login.email);
//             // console.log("User Info Page:",this.props.email);
//             // console.log("User flag Page:",this.props.token);
//             //  <MenuItem eventKey="2" onClick={this.handleUser}>

//             this.state.email=localStorage.getItem("email")
            
//             navLogin = (
//                 <ul class="nav navbar-nav navbar-right navbar-brand" style={{marginTop:"-7px",marginRight:"1%"}}>
//                         <DropdownButton title={this.state.email} style={{backgroundColor:"transparent",font:"50%",color:"white",marginTop:"0px",width:"100%"}} >
//                             <MenuItem eventKey="1" ><Link to="/applicant/profile/myJobs">My Jobs</Link></MenuItem>
//                             <MenuItem divider />
//                             <MenuItem eventKey="2"><Link to="/applicant/profile/getprofile">My Profile</Link></MenuItem>
//                             <MenuItem divider />
//                             <MenuItem eventKey="3" ><Link to="/account">Account</Link></MenuItem>
//                             <MenuItem divider />
//                             <MenuItem eventKey="4"><Link to="/applicant/profile/getprofile">Dashboard</Link></MenuItem>
//                             <MenuItem divider />
//                             <MenuItem eventKey="5" onClick={this.handleLogout}><Link to="/">Logout</Link></MenuItem>
//                         </DropdownButton>
//                 </ul>
//             );
//         }

       
        

        
//           // {redirectVar} 

//         return(
//             <div style={{opacity:"1",zIndex:"1000",position:"absolute"}}>
//             {redirectVar}  
//             <nav class="navbar navbar-light navbar-fixed-top" style={{backgroundColor:"#283e4a",height:"5%"}}>
//                 <div class="container-fluid" >
//                     <div class="navbar-header">
//                         <a class="navbar-brand" href="/"><img alt="LinkedIn logo" class="site-header-logo__img img-responsive" role="presentation" src="https://static.licdn.com/sc/h/95o6rrc5ws6mlw6wqzy0xgj7y"></img></a>
//                     </div>

                    
                    
//                     {navLogin}
                    
//                     <div class="nav navbar-nav navbar-right navbar-brand">
//                        <Link to="/applicant/notifications">
//                        <p style={{ color: "white" }}>Notifications</p>
//                        </Link> 
//                     </div>

//                     <div class="nav navbar-nav navbar-right navbar-brand">
//                     <Link to="/messaging">
//                         <p style={{ color: "white" }}>Messaging</p>
//                     </Link>
//                     </div>

//                     <div class="nav navbar-nav navbar-right navbar-brand">
//                     <Link to="/applicant/profile/myJobs">
//                         <p style={{ color: "white" }}>Jobs</p>
//                     </Link>
//                     </div>

//                     <div class="nav navbar-nav navbar-right navbar-brand">
//                     <a href="/profile/viewConnections">
//                         <p style={{ color: "white" }}>My Network</p>
//                     </a>
//                     </div>

//                     <div class="nav navbar-nav navbar-right navbar-brand">
//                     <Link to="/applicant/applicantHome">
//                     <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="nav-icon" focusable="false" style={{color:"white"}} xmlns="http://www.w3.org/2000/svg"><path d="M22,8.45L12.85,2.26a1.5,1.5,0,0,0-1.69,0L2,8.45,3.06,10,4,9.37V19a1,1,0,0,0,1,1h5V15h4v5h5a1,1,0,0,0,1-1V9.37L20.94,10Z" class="active-item" style={{fillOpacity: "1"}}></path><path d="M22,9.45L12.85,3.26a1.5,1.5,0,0,0-1.69,0L2,9.45,3.06,11,4,10.37V20a1,1,0,0,0,1,1h6V16h2v5h6a1,1,0,0,0,1-1V10.37L20.94,11ZM18,19H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v4H6V8.89l6-4,6,4V19Z" class="inactive-item" style={{fill:"currentColor"}}></path></svg>
//                     </Link>
//                     </div>

//                      <div class="nav navbar-nav navbar-right navbar-brand">
//                     {searchbar1}
//                     </div>
                      
//                 </div>
//             </nav>
//     </div>
            
//         )
//     }
// }
//  function mapStateToProps(state) {
//      return { login: state.login };
//    }
  
//    export default connect(mapStateToProps, { loginUser, logoutUser,tlogout })(Navbar);
// //export default Navbar;




import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import {
  SplitButton,
  DropdownButton,
  MenuItem,
  Button,
  Image
} from "react-bootstrap";
//import { createUser } from "../../actions";
import { connect } from "react-redux";
import _ from "lodash";
import UserSearchBar from "./UserSearchBar";
import { loginUser } from "../../actions";
import { logoutUser } from "../../actions";
import { tlogout } from "../../actions";

//create the Navbar Component
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // username : "test",
      username: "",
      // username : cookie.load("cookie"),
      authFlag: this.props.loginFlag,
      userdisplay: false
    };
    this.handleLogout = this.handleLogout.bind(this);
    //  this.handleUser = this.handleUser.bind(this);
    console.log("in construtor", this.props.login.email);
  }

  // componentDidMount(){
  // //    let signup_res= this.props.createUser();
  // //    console.log("signup response",signup_res)

  // }

  //handle logout to destroy the cookie
  handleLogout = () => {
    cookie.remove("cookie", { path: "/" });
    //this.props.logoutUser();
    this.props.tlogout();
  };

  render() {
    //if Cookie is set render Logout and user Button
    //<li><Link to="/" onClick = {this.handleLogout}><span class="glyphicon glyphicon-user"></span>Logout</Link></li>
    let navLogin = null;
    let help = null;
    let listyourproperty = null;

    let searchbar1 = <UserSearchBar searchrender={this.props.searchrender} />;
    let redirectVar = null;

    // let details= _.map(this.props.login.email, login => {

    // console.log("User flag Page:",login.token);
    // })
    if (localStorage.getItem("token")) {
      console.log("Able to read token");
      console.log("User Info Page:", this.state.username);
      console.log("User login info Page:", this.props.login.email);
      // console.log("User Info Page:",this.props.email);
      // console.log("User flag Page:",this.props.token);
      //  <MenuItem eventKey="2" onClick={this.handleUser}>

      this.state.email = localStorage.getItem("email");

      navLogin = (
        <ul
          class="nav navbar-nav navbar-right navbar-brand"
          style={{ marginTop: "2px", marginRight: "1%" }}
        >
          <DropdownButton
            title={this.state.email}
            style={{
              backgroundColor: "transparent",
              font: "50%",
              color: "white",
              marginTop: "0px",
              width: "100%"
            }}
          >
            <MenuItem eventKey="1">
              <Link to="/applicant/profile/myJobs">My Jobs</Link>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="2">
              <Link to="/applicant/profile/getprofile">My Profile</Link>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="3">
              <Link to="/account">Account</Link>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">
              <Link to="/applicant/applicantHome">Dashboard</Link>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="5" onClick={this.handleLogout}>
              <Link to="/">Logout</Link>
            </MenuItem>
          </DropdownButton>
        </ul>
      );
    }

    // {redirectVar}

    return (
      <div style={{ opacity: "1", zIndex: "1000", position: "absolute" }}>
        {redirectVar}
        <nav
          class="navbar navbar-light navbar-fixed-top"
          style={{
            backgroundColor: "#283e4a",
            height: "9%"
          }}
        >
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="/">
                <img
                  alt="LinkedIn logo"
                  class="site-header-logo__img img-responsive"
                  role="presentation"
                  src="https://static.licdn.com/sc/h/95o6rrc5ws6mlw6wqzy0xgj7y"
                />
              </a>
            </div>
            {navLogin}
            <div
              class="nav navbar-nav navbar-right navbar-brand"
              style={{ textAlign: "center", marginLeft: "10px" }}
            >
              <Link to="/messaging">
                <svg
                  viewBox="0 0 24 24"
                  width="30px"
                  height="30px"
                  x="0"
                  y="0"
                  preserveAspectRatio="xMinYMin meet"
                  class="nav-icon"
                  focusable="false"
                  style={{ color: "white", textAlign: "center" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21,9H8a1,1,0,0,0-1,1V20a1,1,0,0,0,1,1H18l4,3V10A1,1,0,0,0,21,9Zm-4,8H12V16h5v1Zm1-3H11V13h7v1ZM17,5V7H6A1,1,0,0,0,5,8v8H3a1,1,0,0,1-1-1V5A1,1,0,0,1,3,4H16A1,1,0,0,1,17,5Z"
                    class="active-item"
                    style={{ fillOpacity: "1" }}
                  />
                  <path
                    d="M21,8H8A1,1,0,0,0,7,9V19a1,1,0,0,0,1,1H18l4,3V9A1,1,0,0,0,21,8ZM20,19.11L18.52,18H9V10H20v9.11ZM12,15h5v1H12V15ZM4,13H5v2H3a1,1,0,0,1-1-1V4A1,1,0,0,1,3,3H16a1,1,0,0,1,1,1V6H15V5H4v8Zm14,0H11V12h7v1Z"
                    class="inactive-item"
                    style={{ fill: "currentColor" }}
                  />
                </svg>
                <p
                  style={{
                    color: "white",
                    fontSize: "12px"
                  }}
                >
                  Messaging
                </p>
              </Link>
            </div>
            <div
              class="nav navbar-nav navbar-right navbar-brand"
              style={{ textAlign: "center", marginLeft: "10px" }}
            >
              <Link to="/applicant/profile/myJobs">
                <svg
                  viewBox="0 0 24 24"
                  width="30px"
                  height="30px"
                  x="0"
                  y="0"
                  preserveAspectRatio="xMinYMin meet"
                  class="nav-icon"
                  focusable="false"
                  style={{ color: "white" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2,13H22v6a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V13ZM22,8v4H2V8A1,1,0,0,1,3,7H7V6a3,3,0,0,1,3-3h4a3,3,0,0,1,3,3V7h4A1,1,0,0,1,22,8ZM15,6a1,1,0,0,0-1-1H10A1,1,0,0,0,9,6V7h6V6Z"
                    class="active-item"
                    style={{ fillOpacity: "1" }}
                  />
                  <path
                    d="M21,7H17V6a3,3,0,0,0-3-3H10A3,3,0,0,0,7,6V7H3A1,1,0,0,0,2,8V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8A1,1,0,0,0,21,7ZM9,6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V7H9V6ZM20,18H4V13H20v5Zm0-6H4V9H20v3Z"
                    class="inactive-item"
                    style={{ fill: "currentColor" }}
                  />
                </svg>{" "}
                <p
                  style={{
                    color: "white",
                    fontSize: "12px"
                  }}
                >
                  Jobs
                </p>
              </Link>
            </div>

            <div
              class="nav navbar-nav navbar-right navbar-brand"
              style={{ textAlign: "center", marginLeft: "10px" }}
            >
              <Link to="/profile/viewConnections">
                <svg
                  viewBox="0 0 24 24"
                  width="30px"
                  height="30px"
                  x="0"
                  y="0"
                  preserveAspectRatio="xMinYMin meet"
                  class="nav-icon"
                  focusable="false"
                  style={{ color: "white" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16,17.85V20a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V17.85a4,4,0,0,1,2.55-3.73l2.95-1.2V11.71l-0.73-1.3A6,6,0,0,1,4,7.47V6a4,4,0,0,1,4.39-4A4.12,4.12,0,0,1,12,6.21V7.47a6,6,0,0,1-.77,2.94l-0.73,1.3v1.21l2.95,1.2A4,4,0,0,1,16,17.85Zm4.75-3.65L19,13.53v-1a6,6,0,0,0,1-3.31V9a3,3,0,0,0-6,0V9.18a6,6,0,0,0,.61,2.58A3.61,3.61,0,0,0,16,13a3.62,3.62,0,0,1,2,3.24V21h4a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.75,14.2Z"
                    class="active-item"
                    style={{ fillOpacity: "1" }}
                  />
                  <path
                    d="M20.74,14.2L19,13.54V12.86l0.25-.41A5,5,0,0,0,20,9.82V9a3,3,0,0,0-6,0V9.82a5,5,0,0,0,.75,2.63L15,12.86v0.68l-1,.37a4,4,0,0,0-.58-0.28l-2.45-1V10.83A8,8,0,0,0,12,7V6A4,4,0,0,0,4,6V7a8,8,0,0,0,1,3.86v1.84l-2.45,1A4,4,0,0,0,0,17.35V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.74,14.2ZM16,8.75a1,1,0,0,1,2,0v1.44a3,3,0,0,1-.38,1.46l-0.33.6a0.25,0.25,0,0,1-.22.13H16.93a0.25,0.25,0,0,1-.22-0.13l-0.33-.6A3,3,0,0,1,16,10.19V8.75ZM6,5.85a2,2,0,0,1,4,0V7.28a6,6,0,0,1-.71,2.83L9,10.72a1,1,0,0,1-.88.53H7.92A1,1,0,0,1,7,10.72l-0.33-.61A6,6,0,0,1,6,7.28V5.85ZM14,19H2V17.25a2,2,0,0,1,1.26-1.86L7,13.92v-1a3,3,0,0,0,1,.18H8a3,3,0,0,0,1-.18v1l3.72,1.42A2,2,0,0,1,14,17.21V19Zm7,0H16V17.35a4,4,0,0,0-.55-2l1.05-.4V14.07a2,2,0,0,0,.4.05h0.2a2,2,0,0,0,.4-0.05v0.88l2.53,1a1.5,1.5,0,0,1,1,1.4V19Z"
                    class="inactive-item"
                    style={{ fill: "currentColor" }}
                  />
                </svg>
                <p
                  style={{
                    color: "white",
                    fontSize: "12px"
                  }}
                >
                  My Network
                </p>
              </Link>
            </div>

            <div
              class="nav navbar-nav navbar-right navbar-brand"
              style={{ textAlign: "center", marginLeft: "10px" }}
            >
              <Link to="/applicant/applicantHome">
                <svg
                  viewBox="0 0 24 24"
                  width="30px"
                  height="30px"
                  x="0"
                  y="0"
                  preserveAspectRatio="xMinYMin meet"
                  class="nav-icon"
                  focusable="false"
                  style={{ color: "white" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22,8.45L12.85,2.26a1.5,1.5,0,0,0-1.69,0L2,8.45,3.06,10,4,9.37V19a1,1,0,0,0,1,1h5V15h4v5h5a1,1,0,0,0,1-1V9.37L20.94,10Z"
                    class="active-item"
                    style={{ fillOpacity: "1" }}
                  />
                  <path
                    d="M22,9.45L12.85,3.26a1.5,1.5,0,0,0-1.69,0L2,9.45,3.06,11,4,10.37V20a1,1,0,0,0,1,1h6V16h2v5h6a1,1,0,0,0,1-1V10.37L20.94,11ZM18,19H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v4H6V8.89l6-4,6,4V19Z"
                    class="inactive-item"
                    style={{ fill: "currentColor" }}
                  />
                </svg>
                <p
                  style={{
                    color: "white",
                    fontSize: "12px"
                  }}
                >
                  Home
                </p>
              </Link>
            </div>
            <div class="nav navbar-nav navbar-right navbar-brand">
              {searchbar1}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { login: state.login };
}

export default connect(
  mapStateToProps,
  { loginUser, logoutUser, tlogout }
)(Navbar);
//export default Navbar;