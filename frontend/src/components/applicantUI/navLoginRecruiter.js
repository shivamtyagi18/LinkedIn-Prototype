import React, { Component } from "react";
import "../../App.css";
import logo from "./loginlogo.png";
//create the Navbar Component
class NavLoginRecruiter extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-light"
        style={{
          backgroundColor: "4f4f4f",
          height: "32px",
          backgroundImage:
            "-webkit-linear-gradient(top, #4f4f4f 0%,#696969 2%,#404040 100%)",
          verticalAlign: "baseline",
          paddingTop: "9px",
          marginBottom: "0px"
        }}
      >
        <div class="container-fluid">
          <div>
            <a href="">
              <img
                src={logo}
                alt="logo"
                style={{
                  marginLeft: "220px"
                }}
              />
            </a>
            <span
              style={{
                color: "#c4c4c4",
                fontSize: "20px"
              }}
            >
              &nbsp; &nbsp;
              <a
                href=""
                style={{
                  color: "#c4c4c4",
                  textDecoration: "none",
                  paddingRight: "20px",
                  borderRight: "1px solid rgb(67,67,67)"
                }}
              >
                {" "}
                Recruiter
              </a>
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavLoginRecruiter;
