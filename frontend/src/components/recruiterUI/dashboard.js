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
import { graph1 , graph2, graph3, graph4, graph5} from "../../actions/index";
import Navbar from "../recruiterUI/navbarHome";
import { Line } from 'react-chartjs-2';
class RecruiterDashboard extends Component {
  
    constructor(props) {
    super(props);
    this.state = {
      uname: "",
      authFlag: false,
      jobId:"",
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
    // this.props.myNetwork(data);
    // this.props.myNetworkRequests(data);
  }

  graph1Click = (e) => {
   
    const data = {
      email: localStorage.getItem("email"),
      jobId:this.state.jobId
    };
    console.log(data);
    this.props.graph1(data);
  }

  graph2Click = (e) => {
    
    const data = {
      email: localStorage.getItem("email"),
      jobId:this.state.jobId
    };
    console.log(data);
    this.props.graph2(data);
  }

  graph3Click = (e) => {
    
    const data = {
      email: localStorage.getItem("email")
    };
    console.log(data);
    this.props.graph3(data);
  }

  graph4Click = (e) => {
   
    const data = {
      email: localStorage.getItem("email")
    };
    console.log(data);
    this.props.graph4(data);
  }

  graph5Click = (e) => {
   
    const data = {
      email: localStorage.getItem("email"),
      jobId:this.state.jobId
    };
    console.log(data);
    this.props.graph5(data);
  }

  graph6Click = (e) => {
    
    const data = {
      email: localStorage.getItem("email"),
      jobId:this.state.jobId
    };
    console.log(data);
    // this.props.graph6(data);
  }

  jobIdChangeHandler = (e) => {
   
      this.setState({
        jobId: e.target.value
      });

  }

  render() {
    console.log(this.props.graph1state);
    console.log(this.props.graph2state);
    console.log(this.props.graph3state);
    console.log(this.props.graph4state);
    console.log(this.props.graph5state);
    console.log(this.state.jobId);
  
    let nav = <Navbar navdata={this.props.navdata}/>
    // console.log(this.props.connectionsInfo);
    // console.log(this.props.connectionRequestsInfo[0]);
    const { graph3state } = this.props;
    const { graph4state } = this.props;
   
    // const { connectionRequestsInfo } = this.props;
let g4 = null;
    let g3 = null;
    
  let showgraph3 = Object.keys(graph3state).map(prop => {
    g3 = graph3state[prop];
    const data = {
      labels: [
        "",g3.jobId,""
      ],
      datasets: [
        {
          label: 'Number Of Applicants',
          data: ["",g3.numberOfApplicants,""],
          fill: false,          // Don't fill area under the line
          borderColor: 'green'  // Line color
        }
      ]
    };
    return (
      <div>
        <br />
        <div class="row" style={{}}>
        <article className="canvas-container">
          <Line data={data}/>
        </article>
          <div class="col-md-1"></div>
          <div class="col-md-9" style={{ textAlign: "left"}}>
            <h2
              style={{
                fontWeight: "400",
                fontSize: "19px",
                fontFamily: "Sans Serif"
              }}
            >Number Of Applicants :
              {g3.numberOfApplicants}
            </h2>

            <div className="row" />
            <br />

            <br />
            <span
              style={{
                fontSize: "15px",
                fontFamily: "sans-serif",
                color: "grey"
              }}
            >
            Number of Views :
              {g3.numberOfViews}
            </span>

<br />

<br />
             <span
              style={{
                fontSize: "15px",
                fontFamily: "sans-serif",
                color: "grey"
              }}
            >
            Job Id :
              {g3.jobId}
            </span>
           
          </div>
        </div>
        <br />
        <br />
        <hr />
      </div>
    );
  })
  
console.log(showgraph3);

    
let showgraph4 = Object.keys(graph4state).map(prop => {
  g4 = graph4state[prop];
  
  return (
    <div>
      <br />
      <div class="row" style={{}}>
        <div class="col-md-1"></div>
        <div class="col-md-9" style={{ textAlign: "left"}}>
          <h2
            style={{
              fontWeight: "400",
              fontSize: "19px",
              fontFamily: "Sans Serif"
            }}
          >Number Of Saves :
            {g4.numberOfSaves}
          </h2>

          <div className="row" />
          <br />

          <br />
          <span
            style={{
              fontSize: "15px",
              fontFamily: "sans-serif",
              color: "grey"
            }}
          >
          Number of Views :
            {g4.numberOfViews}
          </span>

<br />

<br />
           <span
            style={{
              fontSize: "15px",
              fontFamily: "sans-serif",
              color: "grey"
            }}
          >
          Job Id :
            {g4.jobId}
          </span>
         
        </div>
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
})
  //   showproperty = Object.keys(connectionsInfo).map(prop => {
  //     p = connectionsInfo[prop];
  //     return (
  //       <div>
  //         <br />
  //         <div class="row">
  //           <div class="col-md-2 banner-sec">
  //             <div
  //               className="row col-md-12"
  //               style={{
  //                 width: "150px",
  //               overflow: "visible",
  //               height: "120px",
  //               margin: "0 auto",
  //               position: "relative",
  //               backgroundColor: "transparent",
  //               display: "flex",
  //               flexDirection: "column",
  //               justifyContent: "center",
  //               alignItems: "center",
  //               boxSizing: "border-box",
  //               marginTop:"20px",
  //               marginLeft: "20px"
  //               }}
  //             >
  //               <img
  //                 src="/images/profile_img.jpg"
  //                 style={{
  //                   width: "100%",
  //                 height: "100%",
  //                 borderRadius:"5px"
  //                 }}
  //               />
  //             </div>
  //           </div>
  //           <div class="col-md-2"></div>
  //           <div class="col-md-8" style={{ textAlign: "left" }}>
  //             <h2
  //               style={{
  //                 fontWeight: "400",
  //               fontSize: "19px",
  //               fontFamily: "Sans Serif"
                  
  //               }}
  //             >
  //               {p.firstName} {p.lastName}
  //             </h2>

  //             <div className="row" />
  //             <br />

  //             <br />
  //             <div class="col-md-12">
  //               <h2
  //                 style={{
  //                   fontWeight: "300",
  //                 fontSize: "17px",
  //                 fontFamily: "Courier New",
  //                 marginLeft: "-15px",
  //                 color: "black"
  //                 }}
  //               >
  //                 {p.headline}
  //               </h2>
  //             </div>
  //             <span
  //               style={{
  //                 fontSize: "15px",
  //               fontFamily: "sans-serif",
  //               color: "grey"
  //               }}
  //             >
  //               {p.city}
  //             </span>
  //           </div>
  //         </div>
  //         <br />
  //         <br />
  //         <hr />
  //       </div>
  //     );
  //   })
  

    return (
      <React.Fragment>
      {nav}
        <div className="container-fluid" style={{ backgroundColor: "#eee" }}>
        <div className="row" style={{textAlign:"center",marginLeft:"450px"}}>
        <div
                  style={{
                    textAlign: "right",
                    color: "rgba(0,0,0,.9)",
                    padding: "6px"
                  }}
                  class="form-group form-group-lg col-md-2"
                >
                  <label for="jobId">Enter Job Id:</label>
                </div>
        <div className="col-md-10 ">
                  <input
                    type="text"
                    class="form-control"
                    id="jobId"
                    placeholder="Job ID"
                    name="jobId"
                    onChange={this.jobIdChangeHandler}
                    style={{ marginBottom: "20px",width:"30%" }}
                  />
                </div>{" "}
                </div>
        <div class="col-md-2">
                  <div><h4>Citywise Applications</h4></div>
            <button
                        class="btn btn-primary"
                        type="button"
                        aria-expanded="false"
                        onClick={this.graph1Click}
                        style={{
                          
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
                       Display Graph 1
            </button>
            </div>
            <div class="col-md-2">
            <div><h4>First 10 Jobs</h4></div>
            <button
                        class="btn btn-primary"
                        type="button"
                        aria-expanded="false"
                        onClick={this.graph2Click}
                        style={{
                         
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
                       Display Graph 2
            </button>
            </div>
            <div class="col-md-2">
            <div><h4>Top 5 Jobs</h4></div>
            <button
                        class="btn btn-primary"
                        type="button"
                        aria-expanded="false"
                        onClick={this.graph3Click}
                        style={{
                          
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
                       Display Graph 3
            </button>
            </div>
            <div class="col-md-2">
            <div><h4>Job Saves</h4></div>
            <button
                        class="btn btn-primary"
                        type="button"
                        aria-expanded="false"
                        onClick={this.graph4Click}
                        style={{
                          
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
                      Display Graph 4
            </button>
            </div>
            <div class="col-md-2">
            <div><h4>Monthwise Applications</h4></div>
            <button
                        class="btn btn-primary"
                        type="button"
                        aria-expanded="false"
                        onClick={this.graph5Click}
                        style={{
                          
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
                       Display Graph 5
            </button>
            </div>
            <div class="col-md-2">
            <div><h4> Job Views </h4></div>
            <button
                        class="btn btn-primary"
                        type="button"
                        aria-expanded="false"
                        onClick={this.graph6Click}
                        style={{
                          
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
                      Display Graph 6
            </button>
              </div>
          <div className="connreq col-md-12">
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
              Graph Result
            </h2>
            <section
              className="profile-block-introduction"
              style={{ border: "none" }}
            >
             
              {showgraph3}
              {showgraph4}
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
    graph1state: state.graph1reducer , graph2state: state.graph2reducer,
     graph3state: state.graph3reducer, graph4state: state.graph4reducer,
    graph5state: state.graph5reducer
  };
};

export default connect(
  mapStateToProps,
  { graph1,graph2,graph3,graph4,graph5 }
)(withRouter(RecruiterDashboard));
