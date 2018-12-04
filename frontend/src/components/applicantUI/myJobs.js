import React, { Component } from "react";
import axios from "axios";
import cookie from "react-cookies";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router";
import { withRouter } from "react-router";
import Pagination from "../Pagination";
import { myJobs } from "../../actions/index";
import Navbar from './Navbar';

class MyJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      authFlag: false,

      total: "",
      renderedProperty: [],
      page: 1
    };
  }

  //   handlePageChange = page => {
  //     const properties = Object.keys(this.props.properties).map(
  //       property => this.props.properties[property]
  //     );
  //     const itemsLeft = true;
  //     const renderedProperty = properties.slice(
  //       (page - 1) * 5,
  //       (page - 1) * 5 + 5
  //     );
  //     console.log(renderedProperty);

  //     this.setState({ page, renderedProperty, itemsLeft });
  //   };

  handleLogout = e => {
    this.props.logoutUser();
  };

  componentDidMount() {
    console.log("I am hereeeeeeee");
    const data = {
      email: localStorage.getItem("email")
    };
    this.props.myJobs(data);
  }

  render() {
    let nav = <Navbar navdata={this.props.navdata}/>
    console.log(this.props.connectionsInfo);
    const { connectionsInfo } = this.props;
    let p = null;
    let showproperty = Object.keys(connectionsInfo).map(prop => {
      p = connectionsInfo[prop];
      return (
        <div>
          <br />
          <div class="row">
            
             
            <div class="col-md-12" style={{ textAlign: "left" }}>
              <h2
                style={{
                  fontWeight: "400",
                  fontSize: "19px",
                  fontFamily: "Sans Serif",
                  marginLeft:"12px"
                }}
              >
                {p.firstName} {p.lastName}
              </h2>

              
             
              <div class="col-md-12">
                <h2
                  style={{
                    fontWeight: "400",
                  fontSize: "19px",
                  fontFamily: "Sans Serif"
                  }}
                >
                Company Name :  {p.companyName}
                </h2>
              </div>
              <div class="col-md-12">
                <h2
                  style={{
                    fontWeight: "400",
                  fontSize: "19px",
                  fontFamily: "Sans Serif"
                  }}
                >
                 Job Title : {p.jobTitle}
                </h2>
              </div>
              <div class="col-md-12">
                <h2
                  style={{
                    fontWeight: "400",
                  fontSize: "19px",
                  fontFamily: "Sans Serif"
                  }}
                >
                 Job Id : {p.jobId}
                </h2>
              </div>
            </div>
          </div>
          <br />
          <br />
          <hr />
        </div>
      );
    });

    return (
      <React.Fragment>
      {nav}
        <div className="container-fluid" style={{ backgroundColor: "#eee" }}>
          <div>
            <h2
              style={{
                fontSize: "30px",
                fontFamily: "Sans Serif",
                textAlign: "center",
                fontWeight: "500",
                marginTop: "80px",
                marginBottom: "20px",
                position: "relative"
              }}
            >
              Applied Jobs
            </h2>
            <section
              className="profile-block-introduction"
              style={{ border: "none" }}
            >
              {showproperty}

              <div className="container" />
            </section>
          </div>
          <div>
            {/* <Pagination
              margin={2}
              page={page}
              count={Math.ceil(this.state.total / 5)}
              onPageChange={this.handlePageChange}
            /> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    connectionsInfo: state.myJobs
  };
};

export default connect(
  mapStateToProps,
  { myJobs }
)(withRouter(MyJobs));
