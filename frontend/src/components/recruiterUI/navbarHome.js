import React, { Component } from "react";
import "../../App.css";
import logo from "./logowhitebg.png";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { tlogout } from "../../actions";
import { loginRecruiter } from "../../actions";
import { connect } from "react-redux";
import RecruiterUserSearchBar from "../applicantUI/RecruiterUserSearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//create the Navbar Component
class NavRecruiterHome extends Component {
  constructor(props){
    super(props);
    this.state = {  
       // username : "test",
       email: "",
       homeFlag:false,
       postJobFlag:false,
       profileFlag:false
    }  
    // this.handleLogout = this.handleLogout.bind(this);
  //  this.handleUser = this.handleUser.bind(this);
}
handleLogout = () => {
  this.props.tlogout();
}
handleClick = () => {
  this.setState ({
    homeFlag: true
  })
}
handleClick1 = () => {
  this.setState ({
    postJobFlag: true
  })
}
handleClick2 = () => {
  this.setState ({
    profileFlag: true
  })
}
  render() {

    let searchbar1 = <RecruiterUserSearchBar searchrender={this.props.searchrender}/>;
    let redirectVar = null;
    if(this.state.homeFlag){
   
      redirectVar=<Redirect to= {
        {
            pathname: '/recruiter/home',
          
           
        }
  }/>
          window.location.reload(1);

    
  }
  if(this.state.postJobFlag){
   
    redirectVar=<Redirect to= {
      {
          pathname: '/recruiter/post',
         
          
      }
}/>
window.location.reload(1);
  
}
if(this.state.profileFlag){
   
  redirectVar=<Redirect to= {
    {
        pathname: '/recruiter/profile/viewConnections',
       
        
    }
}/>
window.location.reload(1);

}
    this.state.email=localStorage.getItem("email");
    return (
      <nav
        className="navbar navbar-light"
        style={{
          backgroundColor: "#006097",
          height: "32px",
          marginBottom: '0px'
        }}
      >
        <div class="container">
        {redirectVar}
          <div  style={{
                verticalAlign:"middle",
                marginTop:"14px"
              }}>
            <a href="/recruiter/home">
              <img
                src={logo}
                alt="logo"
                style={{
                  height:"21px",
                  
                }}
              />
            </a>
            <span
              style={{
                fontSize: "14px",
                letterSpacing: ".2em",
                color: "white",
                fontWeight:"600",
                marginLeft:"8px"
              }}
            >
                JOBS
            </span>
          </div>
          <ul class="nav navbar-nav navbar-right">
          <li><button class="btn navbar-btn3" onClick={this.handleClick} style={{textDecoration:"none",fontWeight: "600"}}>HOME</button></li>
          <li><button class="btn navbar-btn2" onClick={this.handleClick1} style={{textDecoration:"none",fontWeight: "600"}}>POST A JOB</button></li>
          <li><button class="btn navbar-btn1" onClick={this.handleClick2} style={{textDecoration:"none",fontWeight: "600"}}>MY NETWORK</button></li>
          <li class="messaging dropdown">
          <a class="messaging dropdown-toggle" data-toggle="dropdown"><i class="far fa-envelope fa-lg" style={{marginTop:"6px"}}></i> </a>
                        <ul class="dropdown-menu message">
                           <li><Link to="/messaging" class="test1" >MESSAGES <i class="fas fa-caret-right"></i></Link></li>
                         </ul>
          </li>
          <li class="usersearch">
          {searchbar1}
          </li>
          <li class="dropdown">
                       <a class="dropdown-toggle" data-toggle="dropdown">{localStorage.getItem("email")} <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                           <li><Link to="/recruiter/dashboard" class="test">Dashboard</Link></li>
                           <li><Link to="/recruiter/loginRecruiter" onClick={this.handleLogout} class="test" >Sign Out</Link></li>
                         </ul>
          </li>
          
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state){
  return {
      nameproperty: state.loginRecruiter
  };
}

export default connect(
  mapStateToProps,
  {loginRecruiter,tlogout}
)(NavRecruiterHome);
