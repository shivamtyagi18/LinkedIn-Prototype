import React, { Component } from "react";
import axios from "axios";
import cookie from "react-cookies";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router";
import { withRouter } from "react-router";
import Pagination from "../Pagination";
import { myNetwork } from "../../actions/index";

class MyNetwork extends Component {
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
    this.props.myNetwork(data);
  }

  render() {
    console.log(this.props.connectionsInfo);
    const { connectionsInfo } = this.props;
    let p = null;
    let showproperty = Object.keys(connectionsInfo).map(prop => {
      p = connectionsInfo[prop];
      return (
        <div>
          <br />
          <div class="row">
            <div class="col-md-2 banner-sec">
              <div
                className="row col-md-12"
                style={{
                  width: "120px",
                  overflow: "visible",
                  height: "80px",
                  margin: "0 auto",
                  position: "relative",
                  backgroundColor: "transparent",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  boxSizing: "border-box",

                  marginLeft: "20px"
                }}
              >
                <img
                  src="/images/profile_img.jpg"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%"
                  }}
                />
              </div>
            </div>
            <div class="col-md-10" style={{ textAlign: "left" }}>
              <h2
                style={{
                  fontWeight: "400",
                  fontSize: "19px",
                  fontFamily: "Sans Serif"
                }}
              >
                {p.firstName} {p.lastName}
              </h2>

              <div className="row" />
              <br />

              <br />
              <div class="col-md-12">
                <h2
                  style={{
                    fontWeight: "300",
                    fontSize: "17px",
                    fontFamily: "Courier New",
                    marginLeft: "-15px",
                    color: "black"
                  }}
                >
                  {p.headline}
                </h2>
              </div>
              <span
                style={{
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  color: "grey"
                }}
              >
                {p.city}
              </span>
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
        <div className="container-fluid" style={{ backgroundColor: "#eee" }}>
          <div>
            <h2
              style={{
                fontSize: "30px",
                fontFamily: "Comic Sans MS",
                textAlign: "center",
                fontWeight: "500",
                marginTop: "80px",
                marginBottom: "20px",
                position: "relative"
              }}
            >
              Your Connections
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
    connectionsInfo: state.myNetwork
  };
};

export default connect(
  mapStateToProps,
  { myNetwork }
)(withRouter(MyNetwork));
