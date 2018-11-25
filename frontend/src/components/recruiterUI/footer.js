import React, { Component } from "react";
import "../../App.css";
import logo from "./logowhitebg.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//create the Navbar Component
class FooterRecruiterHome extends Component {
  render() {
    return (
        <div class="container-fluid" style={{borderTop:"1 px solid lightgray"}}>
        <p class="footerdata">By using this site, you agree to LinkedIn <a href="https://www.linkedin.com/legal/user-agreement" style={{color:"#0073b1",cursor:"pointer"}}>terms of use</a>. Commercial use of this site without express authorization is prohibited.</p>
        <p class="footerdata1">LinkedIn Corporation © 2018 </p>
        </div>
        
    );
  }
}

export default FooterRecruiterHome;
