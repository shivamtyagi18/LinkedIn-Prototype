import React, { Component } from "react";
import axios from "axios";
import cookie from "react-cookies";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router";
import { withRouter } from "react-router";
import logo from "../recruiterUI/nojobs.svg";
import Pagination from "../Pagination";
import { myNetwork, myNetworkRequests, acceptConnectionRequest} from "../../actions/index";
import NavRecruiterHome from "../recruiterUI/navbarHome";
class RecruiterNetwork extends Component {
  
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

  connectAcceptButton = e => {
    console.log(e.target.value);
    const data = {
      sender: e.target.value,
      receiver:localStorage.getItem("email")
    };
    console.log("Accept works!",data)
    this.props.acceptConnectionRequest(data);
window.location.reload(1);
  }

  componentDidMount() {
    console.log("I am hereeeeeeee");
    const data = {
      email: localStorage.getItem("email")
    };
    this.props.myNetwork(data);
    this.props.myNetworkRequests(data);
  }

  render() {
    let nav = <NavRecruiterHome navdata={this.props.navdata}/>
    console.log(this.props.connectionsInfo);
    console.log(this.props.connectionRequestsInfo[0]);
    const { connectionsInfo } = this.props;
    const { connectionRequestsInfo } = this.props;

    let showconnectionrequests;
    let showproperty;
    let p = null;
    let c = null;
if(this.props.connectionRequestsInfo.length > 0){
  showconnectionrequests = Object.keys(connectionRequestsInfo).map(prop => {
    c = connectionRequestsInfo[prop];
    var imgurl2 = `https://s3.us-east-2.amazonaws.com/linkedin-images/${c.img}`;
    return (
      <div>
        <br />
        <div class="row" style={{}}>
          <div class="col-md-2 banner-sec">
            <div
              className="row col-md-12"
              style={{
                width: "150px",
                overflow: "visible",
                height: "120px",
                margin: "0 auto",
                position: "relative",
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
                marginTop:"20px",
                marginLeft: "20px"
              }}
            >
              <img
                src={imgurl2}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius:"5px"
                }}
              />
            </div>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-9" style={{ textAlign: "left"}}>
            <h2
              style={{
                fontWeight: "400",
                fontSize: "19px",
                fontFamily: "Sans Serif"
              }}
            >
              {c.firstName} {c.lastName}
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
                {c.headline}
              </h2>
            </div>
            <span
              style={{
                fontSize: "15px",
                fontFamily: "sans-serif",
                color: "grey"
              }}
            >
              {c.city}
            </span>
           
          </div>
          <div class="col-md-12">
            <button
                        class="btn btn-primary"
                        type="button"
                        value={c.email}
                        onClick={this.connectAcceptButton}
                        aria-expanded="false"
                        style={{
                          marginLeft:"170px",
                          position: "relative",
                          verticalAlign: "middle",
                          display: "inline-block",
                          textAlign: "center",
                          height: "40px",
                          width: "170px",
                          marginTop: "10px",
                          backgroundColor: "#0073b1",
                          borderColor: "transparent",
                          borderRadius: "0px",
                          color: "white"
                        }}
                      >
                       Accept Request
            </button>
              </div>
        </div>
        <br />
        <br />
        <hr />
      </div>
    );
  })
  }
  else {
    showconnectionrequests = (
      <div>
        <br />
        <div className="mainWindow">
      <img src={logo} style={{marginLeft:"220px"}}></img>
     
      <header class="projects-actions-bar__title-bar1">
  <h1 data-test-roles-title="" class="projects-actions-bar__title1">
    There are no connection requests to <br></br> display.
  </h1>
</header>
 </div>
      </div>
    );
 
  }

  if(this.props.connectionsInfo.length > 0){
    showproperty = Object.keys(connectionsInfo).map(prop => {
      p = connectionsInfo[prop];
      var imgurl = `https://s3.us-east-2.amazonaws.com/linkedin-images/${p.img}`;
      return (
        <div>
          <br />
          <div class="row">
            <div class="col-md-2 banner-sec">
              <div
                className="row col-md-12"
                style={{
                  width: "150px",
                overflow: "visible",
                height: "120px",
                margin: "0 auto",
                position: "relative",
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
                marginTop:"20px",
                marginLeft: "20px"
                }}
              >
                <img
                  src={imgurl}
                  style={{
                    width: "100%",
                  height: "100%",
                  borderRadius:"5px"
                  }}
                />
              </div>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-8" style={{ textAlign: "left" }}>
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
    })
  }else {
    showproperty = (
      <div>
        <br />
        <div className="mainWindow">
      <img src={logo} style={{marginLeft:"220px"}}></img>
     
      <header class="projects-actions-bar__title-bar1">
  <h1 data-test-roles-title="" class="projects-actions-bar__title1">
    There are no connections to <br></br> display.
  </h1>
</header>
 </div>
      </div>
    );
  }

    return (
      <React.Fragment>
      {nav}
        <div className="container-fluid" style={{ backgroundColor: "#eee",height:"1200px" }}>
          <div className="connreq col-md-6">
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
              Connection Requests
            </h2>
            <section
              className="profile-block-introduction"
              style={{ border: "none" }}
            >
             
              {showconnectionrequests}
              <div className="container" />
            </section>
          </div>
          <div className="conns col-md-6">
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
              Connections
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
    connectionsInfo: state.myNetwork , connectionRequestsInfo : state.myNetworkRequests
  };
};

export default connect(
  mapStateToProps,
  { myNetwork,myNetworkRequests,acceptConnectionRequest }
)(withRouter(RecruiterNetwork));
