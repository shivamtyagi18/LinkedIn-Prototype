// import React, { Component } from "react";
// import "../../App.css";
// import axios from "axios";
// import cookie from "react-cookies";
// import { Redirect } from "react-router";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import { fetchJobs, saveJobs } from "../../actions";
// import { connect } from "react-redux";
// import _ from "lodash";
// import {
//   SplitButton,
//   DropdownButton,
//   MenuItem,
//   Button,
//   Image
// } from "react-bootstrap";
// import SearchBar from "./SearchBar";
// import Pagination from "../Pagination"; //pagination
// //import Footbar from '../LandingPage/Footbar';
// var moment = require("moment");

// class newSearch extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       authFlag: false,
//       imageView: [],
//       displayprop: "",
//       savjobprop: "",
//       Per_page_Property: [], //pagination
//       page: 1, //pagination
//       total: "", //pagination
//       searchJobName: "",
//       error: false,
//       jobs: [],
//       searchedJobs: [],
//       searchFlag: false,
//       divClickFlag: false,
//       companyFilterValue: "",
//       jobTypeFilterValue: "",
//       industryFiltervalue: ""
//     };
//     this.jobsChangeHandler = this.jobsChangeHandler.bind(this);
//     this.searchChangeHandler = this.searchChangeHandler.bind(this);
//     this.submitSearch = this.submitSearch.bind(this);
//     // this.handlePageChange = this.handlePageChange.bind(this);
//     //this.handlePriceFilter = this.handlePriceFilter.bind(this)
//     //this.handleGuestsFilter = this.handleGuestsFilter.bind(this)
//     //this.handleBedroomsFilter = this.handleBedroomsFilter.bind(this)
//   }

//   componentWillMount() {
//     this.setState({
//       authFlag: false
//     });
//   }

//   // jobsChangeHandler = (e) => {
//   //     this.setState({
//   //         displayprop : e.target.dataset.attr,
//   //     })
//   //     console.log("Successful test - ", e.target.dataset.attr)
//   // }

//   jobsChangeHandler = e => {
//     this.setState({
//       displayprop: e.target.value
//     });
//     console.log("Successful test - ", this.state.displayprop);
//   };

//   jobsSaveHandler = e => {
//     localStorage.setItem("jobId", e.target.value);
//     this.state.savjobprop = localStorage.getItem("jobId");
//     console.log("Successful test - ", this.state.savjobprop);
//     const data = {
//       email: localStorage.getItem("email"),
//       jobId: this.state.savjobprop,
//       companyName: e.target.dataset.attr
//     };

//     console.log("Successful data - ", data);
//     this.props.saveJobs(data);
//     window.alert("Saved...!!!");
//   };

//   handleCompanyFilter = e => {
//     console.log("The company filter is: ", e.target.value);
//     this.setState({
//       companyFilterValue: e.target.value
//     });
//   };

//   handleJobTypeFilter = e => {
//     console.log("Job type filter is: ", e.target.value);
//     this.setState({
//       jobTypeFilterValue: e.target.value
//     });
//   };

//   handleClearFilters = e => {
//     this.setState({
//       companyFilterValue: "",
//       jobTypeFilterValue: "",
//       industryFiltervalue: ""
//     });
//   };

//   handleIndustryFilter = e => {
//     console.log("Industry Filter is: ", e.target.value);
//     this.setState({
//       industryFiltervalue: e.target.value
//     });
//   };

//   onDivClick = e => {
//     e.preventDefault();
//     console.log(e.target.dataset.value);
//     this.setState({
//       displayprop: e.target.dataset.value
//     });
//     localStorage.setItem("jobId", e.target.dataset.value);
//     this.setState({
//       divClickFlag: true
//     });
//   };

//   // handlePageChange(page) {                            //pagination
//   //     // console.log(`active page is ${pageNumber}`);
//   //     // this.setState({activePage: pageNumber});
//   //     const properties = Object.keys(this.props.property).map(property => this.props.property[property])
//   //     const itemsLeft = true;
//   //     const Per_page_Property = properties.slice((page - 1) * 5, (page - 1) * 5 + 5);
//   //     this.setState({ page, Per_page_Property});
//   //   }

//   componentDidMount() {
//     this.props.fetchJobs();
//   }

//   searchChangeHandler = e => {
//     e.preventDefault();
//     this.setState({
//       searchJobName: e.target.value
//     });
//   };

//   submitSearch = e => {
//     e.preventDefault();
//     this.setState({
//       searchFlag: true
//     });
//   };

//   render() {
//     let Jobs = this.props.Jobs;

//     if (this.state.companyFilterValue !== "") {
//       Jobs = Jobs.filter(job => {
//         return (
//           job.companyName
//             .toLocaleLowerCase()
//             .indexOf(this.state.companyFilterValue.toLocaleLowerCase()) !== -1
//         );
//       });
//     }

//     if (this.state.jobTypeFilterValue !== "") {
//       Jobs = Jobs.filter(job => {
//         return (
//           job.employmentType
//             .toLocaleLowerCase()
//             .indexOf(this.state.jobTypeFilterValue.toLocaleLowerCase()) !== -1
//         );
//       });
//     }

//     if (this.state.industryFiltervalue !== "") {
//       Jobs = Jobs.filter(job => {
//         return (
//           job.industry
//             .toLocaleLowerCase()
//             .indexOf(this.state.industryFiltervalue.toLocaleLowerCase()) !== -1
//         );
//       });
//     }

//     let searchbar = <SearchBar searchrender={this.props.searchrender} />;
//     let nav = <Navbar navdata={this.props.navdata} />;

//     var date = moment().toDate();
//     date = new Date();

//     console.log("total 1", Jobs);

//     const No_of_Results = Object.keys(Jobs).map(jobs => Jobs[jobs]); //pagination
//     this.state.total = No_of_Results.length;
//     console.log("total--", this.state.total);

//     let details = Object.keys(Jobs).map(job => {
//       var jobs = Jobs[job];
//       var temp_date = new Date(jobs.postedOn);
//       var posted_date = temp_date.getDate() + 1;
//       var current_date = date.getDate() + 1;
//       var weeks = Math.floor(Math.abs(current_date - posted_date) / 7);
//       // const imgurl = require(`../uploads/${property.img}`);
//       // const imgurl1 = require(`../uploads/${property.img}`);
//       const imgurl2 = `https://s3.us-east-2.amazonaws.com/linkedin-images/${
//         jobs.companyLogo
//       }`;
//       // const imgurl2 = `https://s3.us-east-2.amazonaws.com/linkedin-shivam/${jobs.companyLogo}`;
//       console.log("jobs", jobs);
//       return (
//         <React.Fragment>
//           <div class="row col-sm-7">
//             <div class="displayjobinfo container-fluid">
//               <div class="col-sm-4">
//                 <div>
//                   <img src={imgurl2} width="100%" />
//                 </div>
//               </div>
//               <div class="col-sm-8">
//                 <div class="col-sm-10">
//                   <div class="headline">
//                     <h3 class="hit-headline">
//                       <a>
//                         <div
//                           name="displayjob"
//                           data-value={jobs.jobId}
//                           onClick={this.onDivClick}
//                         >
//                           {jobs.jobTitle}
//                         </div>
//                       </a>
//                     </h3>
//                     <h4 class="hit-companynameheadline">
//                       <div name="displaycompanyname">{jobs.companyName}</div>
//                     </h4>
//                     <h5 class="hit-locationheadline">
//                       <div name="location">
//                         <i class="fa fa-location-arrow" aria-hidden="true" />
//                         {/* <li-icon aria-hidden="true" type="map-marker-icon" class="job-card-search__exact-location-icon mr1" size="small"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M8,4a2,2,0,1,0,2,2A2,2,0,0,0,8,4ZM8,7.13A1.13,1.13,0,1,1,9.13,6,1.13,1.13,0,0,1,8,7.13ZM8,1A5,5,0,0,0,3,6a5.37,5.37,0,0,0,.41,2S5.91,13,7.22,15.52A0.86,0.86,0,0,0,8,16H8a0.86,0.86,0,0,0,.78-0.48C10.09,13,12.59,8,12.59,8A5.37,5.37,0,0,0,13,6,5,5,0,0,0,8,1Zm2.88,6.24L8,12.92,5.12,7.24A3.49,3.49,0,0,1,4.88,6a3.13,3.13,0,0,1,6.25,0A3.49,3.49,0,0,1,10.88,7.24Z" class="small-icon" style="fill-opacity: 1"></path></svg></li-icon> */}
//                         {jobs.location}
//                       </div>
//                     </h5>
//                     <div class="hit-jobdescriptionheadline">
//                       <p class="displayjobdescription">{jobs.jobDescription}</p>
//                     </div>

//                     <div class="postedOn">
//                       <p class="displayjobdescription">
//                         Posted {weeks} weeks ago
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="row col-sm-5">
//             <div class="displayjobinfo container-fluid">
//               <div class="col-sm-12">
//                 <div class="col-sm-10">
//                   <div class="col-sm-12">
//                     <div class="hit-jobdescriptionheadline">
//                       <p class="displayjobdescription">
//                         Type : {jobs.employmentType}
//                       </p>
//                     </div>
//                   </div>
//                   <div class="col-sm-12">
//                     <div class="hit-jobdescriptionheadline">
//                       <p class="displayjobdescription">
//                         Industry : {jobs.industry}
//                       </p>
//                     </div>
//                   </div>
//                   <div class="col-sm-12">
//                     <div class="hit-jobdescriptionheadline">
//                       <p class="displayjobdescription">
//                         Vacancies : {jobs.jobOpenings}
//                       </p>
//                     </div>
//                   </div>
//                   <div class="col-sm-12">
//                     <div class="hit-jobdescriptionheadline">
//                       <p class="displayjobdescription">
//                         Location : {jobs.location}
//                       </p>
//                     </div>
//                   </div>
//                   <div class="col-sm-12">
//                     <div class="hit-jobdescriptionheadline">
//                       <p class="displayjobdescription">
//                         Job Profile : {jobs.jobFunction}
//                       </p>
//                     </div>
//                   </div>

//                   <div
//                     class="col-sm-12"
//                     style={{ height: "10%", marginTop: "10%" }}
//                   >
//                     <button
//                       class="btn"
//                       name="savejobprop"
//                       id="savejobprop"
//                       onClick={this.jobsSaveHandler}
//                       value={jobs.jobId}
//                       data-attr={jobs.companyName}
//                       style={{
//                         backgroundColor: "#0073b1",
//                         color: "white",
//                         fontSize: "1.5rem"
//                       }}
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </React.Fragment>
//       );
//     });
//     let redirectVar = null;

//     if (this.state.displayprop !== "") {
//       this.props.history.push({
//         pathname: "/applicantion/job",
//         state: {
//           displayprops: this.state.displayprop
//         }
//       });
//     }

//     return (
//       <div>
//         <div>
//           {redirectVar}
//           {nav}
//           {searchbar}
//         </div>
//         <div className="row col-md-6" style={{ textAlign: "left" }}>
//           <div className="btn-group">
//             <button
//               class="btn btn-secondary dropdown-toggle"
//               type="button"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//               style={{
//                 position: "relative",
//                 textAlign: "center",
//                 height: "39px",
//                 width: "150px",
//                 marginTop: "10px",
//                 backgroundColor: "transparent",
//                 borderColor: "#0073b1",
//                 borderRadius: "0px",
//                 color: "#0073b1",
//                 marginLeft: "20px"
//               }}
//             >
//               Company
//             </button>
//             <div
//               className="dropdown-menu dropdown-menu-right"
//               style={{ marginLeft: "10px" }}
//             >
//               <button
//                 onClick={this.handleCompanyFilter}
//                 className="dropdown-item"
//                 role="menuitem"
//                 value="Google"
//                 style={{
//                   width: "100%",
//                   height: "30px",
//                   backgroundColor: "transparent",
//                   border: "none"
//                 }}
//               >
//                 Google
//               </button>
//               <button
//                 onClick={this.handleCompanyFilter}
//                 className="dropdown-item"
//                 role="menuitem"
//                 value="Apple"
//                 style={{
//                   width: "100%",
//                   height: "30px",
//                   backgroundColor: "transparent",
//                   border: "none"
//                 }}
//               >
//                 Apple
//               </button>
//             </div>
//           </div>
//           <div className="btn-group">
//             <button
//               class="btn btn-secondary dropdown-toggle"
//               type="button"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//               style={{
//                 position: "relative",
//                 textAlign: "center",
//                 height: "39px",
//                 width: "150px",
//                 marginTop: "10px",
//                 backgroundColor: "transparent",
//                 borderColor: "#0073b1",
//                 borderRadius: "0px",
//                 color: "#0073b1",
//                 marginLeft: "20px"
//               }}
//             >
//               Job Type
//             </button>
//             <div className="dropdown-menu dropdown-menu-right">
//               <button
//                 onClick={this.handleJobTypeFilter}
//                 className="dropdown-item"
//                 role="menuitem"
//                 value="Intern"
//                 style={{
//                   width: "100%",
//                   height: "30px",
//                   backgroundColor: "transparent",
//                   border: "none"
//                 }}
//               >
//                 Internship
//               </button>
//               <button
//                 onClick={this.handleJobTypeFilter}
//                 className="dropdown-item"
//                 role="menuitem"
//                 value="Full Time"
//                 style={{
//                   width: "100%",
//                   height: "30px",
//                   backgroundColor: "transparent",
//                   border: "none"
//                 }}
//               >
//                 Full-Time
//               </button>
//             </div>
//           </div>
//           <div className="btn-group">
//             <button
//               class="btn btn-secondary dropdown-toggle"
//               type="button"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//               style={{
//                 position: "relative",
//                 textAlign: "center",
//                 height: "39px",
//                 width: "150px",
//                 marginTop: "10px",
//                 backgroundColor: "transparent",
//                 borderColor: "#0073b1",
//                 borderRadius: "0px",
//                 color: "#0073b1",
//                 marginLeft: "20px"
//               }}
//             >
//               Industry
//             </button>
//             <div className="dropdown-menu dropdown-menu-right">
//               <button
//                 onClick={this.handleIndustryFilter}
//                 className="dropdown-item"
//                 role="menuitem"
//                 value="Software"
//                 style={{
//                   width: "100%",
//                   height: "30px",
//                   backgroundColor: "transparent",
//                   border: "none"
//                 }}
//               >
//                 Software
//               </button>
//               <button
//                 onClick={this.handleIndustryFilter}
//                 className="dropdown-item"
//                 role="menuitem"
//                 value="Civil"
//                 style={{
//                   width: "100%",
//                   height: "30px",
//                   backgroundColor: "transparent",
//                   border: "none"
//                 }}
//               >
//                 Civil
//               </button>
//             </div>
//           </div>
//           <button
//             class="btn btn-secondary dropdown-toggle"
//             type="button"
//             onClick={this.handleClearFilters}
//             style={{
//               position: "relative",
//               textAlign: "center",
//               height: "39px",
//               width: "150px",
//               marginTop: "10px",
//               backgroundColor: "#0073b1",
//               borderColor: "#0073b1",
//               borderRadius: "0px",
//               color: "white",
//               marginLeft: "20px"
//             }}
//           >
//             Clear Filters
//           </button>
//         </div>
//         <div
//           style={{
//             textAlign: "left",
//             marginTop: "120px",
//             backgroundColor: "white"
//           }}
//         >
//           <p
//             style={{ fontSize: "30px", fontFamily: "Lato, Roboto !important" }}
//           >
//             Total {this.state.total} Jobs found
//           </p>

//           <div>
//             <tbody>
//               {/*Display the Tbale row based on data recieved*/}
//               {details}
//             </tbody>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// //export Home Component

// function mapStateToProps(state) {
//   return { Jobs: state.Jobs };
// }

// export default connect(
//   mapStateToProps,
//   { fetchJobs, saveJobs }
// )(newSearch);
import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { fetchJobs } from "../../actions";
import { connect } from "react-redux";
import classnames from "classnames";
import _ from "lodash";
import {
  SplitButton,
  DropdownButton,
  MenuItem,
  Button,
  Image
} from "react-bootstrap";
import SearchBar from "./SearchBar";
import Pagination from "../Pagination"; //pagination
//import Footbar from '../LandingPage/Footbar';
var moment = require("moment");

class newSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authFlag: false,
      imageView: [],
      displayprop: "",
      savjobprop: "",
      Per_page_Property: [], //pagination
      page: 1, //pagination
      total: "", //pagination
      searchJobName: "",
      error: false,
      jobs: [],
      searchedJobs: [],
      searchFlag: false,
      divClickFlag: false,
      companyFilterValue: "",
      jobTypeFilterValue: "",
      industryFiltervalue: "",
      errorSaveJob: ""
    };
    this.jobsChangeHandler = this.jobsChangeHandler.bind(this);
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    // this.handlePageChange = this.handlePageChange.bind(this);
    //this.handlePriceFilter = this.handlePriceFilter.bind(this)
    //this.handleGuestsFilter = this.handleGuestsFilter.bind(this)
    //this.handleBedroomsFilter = this.handleBedroomsFilter.bind(this)
  }

  componentWillMount() {
    this.setState({
      authFlag: false
    });
  }

  // jobsChangeHandler = (e) => {
  //     this.setState({
  //         displayprop : e.target.dataset.attr,
  //     })
  //     console.log("Successful test - ", e.target.dataset.attr)
  // }

  jobsChangeHandler = e => {
    this.setState({
      displayprop: e.target.value
    });
    console.log("Successful test - ", this.state.displayprop);
  };

  jobsSaveHandler = e => {
    localStorage.setItem("jobId", e.target.value);
    this.state.savjobprop = localStorage.getItem("jobId");
    console.log("Successful test - ", this.state.savjobprop);
    const data = {
      email: localStorage.getItem("email"),
      jobId: this.state.savjobprop,
      companyName: e.target.dataset.attr
    };

    axios.post("http://localhost:3001/saveJob", data).then(response => {
      console.log("Status Code : ", response.status);
      if (response.status == 200) {
        this.setState({
          errorSaveJob: ""
        });
        window.alert("Saved...!!!");
      } else if (response.status == 202) {
        this.setState({
          errorSaveJob: "Job Already Saved"
        });
        window.alert(this.state.errorSaveJob);
      }
    });
  };

  handleCompanyFilter = e => {
    console.log("The company filter is: ", e.target.value);
    this.setState({
      companyFilterValue: e.target.value
    });
  };

  handleJobTypeFilter = e => {
    console.log("Job type filter is: ", e.target.value);
    this.setState({
      jobTypeFilterValue: e.target.value
    });
  };

  handleClearFilters = e => {
    this.setState({
      companyFilterValue: "",
      jobTypeFilterValue: "",
      industryFiltervalue: ""
    });
  };

  handleIndustryFilter = e => {
    console.log("Industry Filter is: ", e.target.value);
    this.setState({
      industryFiltervalue: e.target.value
    });
  };

  onDivClick = e => {
    e.preventDefault();
    console.log(e.target.dataset.value);
    this.setState({
      displayprop: e.target.dataset.value
    });
    localStorage.setItem("jobId", e.target.dataset.value);
    this.setState({
      divClickFlag: true
    });
  };

  // handlePageChange(page) {                            //pagination
  //     // console.log(`active page is ${pageNumber}`);
  //     // this.setState({activePage: pageNumber});
  //     const properties = Object.keys(this.props.property).map(property => this.props.property[property])
  //     const itemsLeft = true;
  //     const Per_page_Property = properties.slice((page - 1) * 5, (page - 1) * 5 + 5);
  //     this.setState({ page, Per_page_Property});
  //   }

  componentDidMount() {
    this.props.fetchJobs();
  }

  searchChangeHandler = e => {
    e.preventDefault();
    this.setState({
      searchJobName: e.target.value
    });
  };

  submitSearch = e => {
    e.preventDefault();
    this.setState({
      searchFlag: true
    });
  };

  render() {
    let Jobs = this.props.Jobs;
    const { errorSaveJob } = this.state;
    if (this.state.companyFilterValue !== "") {
      Jobs = Jobs.filter(job => {
        return (
          job.companyName
            .toLocaleLowerCase()
            .indexOf(this.state.companyFilterValue.toLocaleLowerCase()) !== -1
        );
      });
    }

    if (this.state.jobTypeFilterValue !== "") {
      Jobs = Jobs.filter(job => {
        return (
          job.employmentType
            .toLocaleLowerCase()
            .indexOf(this.state.jobTypeFilterValue.toLocaleLowerCase()) !== -1
        );
      });
    }

    if (this.state.industryFiltervalue !== "") {
      Jobs = Jobs.filter(job => {
        return (
          job.industry
            .toLocaleLowerCase()
            .indexOf(this.state.industryFiltervalue.toLocaleLowerCase()) !== -1
        );
      });
    }

    let searchbar = <SearchBar searchrender={this.props.searchrender} />;
    let nav = <Navbar navdata={this.props.navdata} />;

    var date = moment().toDate();
    date = new Date();

    console.log("total 1", Jobs);

    const No_of_Results = Object.keys(Jobs).map(jobs => Jobs[jobs]); //pagination
    this.state.total = No_of_Results.length;
    console.log("total--", this.state.total);

    let details = Object.keys(Jobs).map(job => {
      var jobs = Jobs[job];
      var temp_date = new Date(jobs.postedOn);
      var posted_date = temp_date.getDate() + 1;
      var current_date = date.getDate() + 1;
      var weeks = Math.floor(Math.abs(current_date - posted_date) / 7);
      // const imgurl = require(`../uploads/${property.img}`);
      // const imgurl1 = require(`../uploads/${property.img}`);
      const imgurl2 = `https://s3.us-east-2.amazonaws.com/linkedin-images/${
        jobs.companyLogo
      }`;
      // const imgurl2 = `https://s3.us-east-2.amazonaws.com/linkedin-shivam/${jobs.companyLogo}`;
      console.log("jobs", jobs);
      return (
        <React.Fragment>
          <div class="row col-sm-7">
            <div class="displayjobinfo container-fluid">
              <div class="col-sm-4">
                <div>
                  <img src={imgurl2} width="100%" />
                </div>
              </div>
              <div class="col-sm-8">
                <div class="col-sm-10">
                  <div class="headline">
                    <h3 class="hit-headline">
                      <a>
                        <div
                          name="displayjob"
                          data-value={jobs.jobId}
                          onClick={this.onDivClick}
                        >
                          {jobs.jobTitle}
                        </div>
                      </a>
                    </h3>
                    <h4 class="hit-companynameheadline">
                      <div name="displaycompanyname">{jobs.companyName}</div>
                    </h4>
                    <h5 class="hit-locationheadline">
                      <div name="location">
                        <i class="fa fa-location-arrow" aria-hidden="true" />
                        {/* <li-icon aria-hidden="true" type="map-marker-icon" class="job-card-search__exact-location-icon mr1" size="small"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M8,4a2,2,0,1,0,2,2A2,2,0,0,0,8,4ZM8,7.13A1.13,1.13,0,1,1,9.13,6,1.13,1.13,0,0,1,8,7.13ZM8,1A5,5,0,0,0,3,6a5.37,5.37,0,0,0,.41,2S5.91,13,7.22,15.52A0.86,0.86,0,0,0,8,16H8a0.86,0.86,0,0,0,.78-0.48C10.09,13,12.59,8,12.59,8A5.37,5.37,0,0,0,13,6,5,5,0,0,0,8,1Zm2.88,6.24L8,12.92,5.12,7.24A3.49,3.49,0,0,1,4.88,6a3.13,3.13,0,0,1,6.25,0A3.49,3.49,0,0,1,10.88,7.24Z" class="small-icon" style="fill-opacity: 1"></path></svg></li-icon> */}
                        {jobs.location}
                      </div>
                    </h5>
                    <div class="hit-jobdescriptionheadline">
                      <p class="displayjobdescription">{jobs.jobDescription}</p>
                    </div>

                    <div class="postedOn">
                      <p class="displayjobdescription">
                        Posted {weeks} weeks ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row col-sm-5">
            <div class="displayjobinfo container-fluid">
              <div class="col-sm-12">
                <div class="col-sm-10">
                  <div class="col-sm-12">
                    <div class="hit-jobdescriptionheadline">
                      <p class="displayjobdescription">
                        Type : {jobs.employmentType}
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="hit-jobdescriptionheadline">
                      <p class="displayjobdescription">
                        Industry : {jobs.industry}
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="hit-jobdescriptionheadline">
                      <p class="displayjobdescription">
                        Vacancies : {jobs.jobOpenings}
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="hit-jobdescriptionheadline">
                      <p class="displayjobdescription">
                        Location : {jobs.location}
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="hit-jobdescriptionheadline">
                      <p class="displayjobdescription">
                        Job Profile : {jobs.jobFunction}
                      </p>
                    </div>
                  </div>

                  <div
                    class="col-sm-12"
                    style={{ height: "10%", marginTop: "10%" }}
                  >
                    <button
                      className="btn"
                      name="savejobprop"
                      id="savejobprop"
                      onClick={this.jobsSaveHandler}
                      value={jobs.jobId}
                      data-attr={jobs.companyName}
                      style={{
                        backgroundColor: "#0073b1",
                        color: "white",
                        fontSize: "1.5rem"
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });
    let redirectVar = null;

    if (this.state.displayprop !== "") {
      this.props.history.push({
        pathname: "/applicantion/job",
        state: {
          displayprops: this.state.displayprop
        }
      });
    }

    return (
      <div>
        <div>
          {redirectVar}
          {nav}
          {searchbar}
        </div>
        <div className="row col-md-6" style={{ textAlign: "left" }}>
          <div className="btn-group">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{
                position: "relative",
                textAlign: "center",
                height: "39px",
                width: "150px",
                marginTop: "10px",
                backgroundColor: "transparent",
                borderColor: "#0073b1",
                borderRadius: "0px",
                color: "#0073b1",
                marginLeft: "20px"
              }}
            >
              Company
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              style={{ marginLeft: "10px" }}
            >
              <button
                onClick={this.handleCompanyFilter}
                className="dropdown-item"
                role="menuitem"
                value="Google"
                style={{
                  width: "100%",
                  height: "30px",
                  backgroundColor: "transparent",
                  border: "none"
                }}
              >
                Google
              </button>
              <button
                onClick={this.handleCompanyFilter}
                className="dropdown-item"
                role="menuitem"
                value="Apple"
                style={{
                  width: "100%",
                  height: "30px",
                  backgroundColor: "transparent",
                  border: "none"
                }}
              >
                Apple
              </button>
            </div>
          </div>
          <div className="btn-group">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{
                position: "relative",
                textAlign: "center",
                height: "39px",
                width: "150px",
                marginTop: "10px",
                backgroundColor: "transparent",
                borderColor: "#0073b1",
                borderRadius: "0px",
                color: "#0073b1",
                marginLeft: "20px"
              }}
            >
              Job Type
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button
                onClick={this.handleJobTypeFilter}
                className="dropdown-item"
                role="menuitem"
                value="Intern"
                style={{
                  width: "100%",
                  height: "30px",
                  backgroundColor: "transparent",
                  border: "none"
                }}
              >
                Internship
              </button>
              <button
                onClick={this.handleJobTypeFilter}
                className="dropdown-item"
                role="menuitem"
                value="Full Time"
                style={{
                  width: "100%",
                  height: "30px",
                  backgroundColor: "transparent",
                  border: "none"
                }}
              >
                Full-Time
              </button>
            </div>
          </div>
          <div className="btn-group">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{
                position: "relative",
                textAlign: "center",
                height: "39px",
                width: "150px",
                marginTop: "10px",
                backgroundColor: "transparent",
                borderColor: "#0073b1",
                borderRadius: "0px",
                color: "#0073b1",
                marginLeft: "20px"
              }}
            >
              Industry
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button
                onClick={this.handleIndustryFilter}
                className="dropdown-item"
                role="menuitem"
                value="Software"
                style={{
                  width: "100%",
                  height: "30px",
                  backgroundColor: "transparent",
                  border: "none"
                }}
              >
                Software
              </button>
              <button
                onClick={this.handleIndustryFilter}
                className="dropdown-item"
                role="menuitem"
                value="Civil"
                style={{
                  width: "100%",
                  height: "30px",
                  backgroundColor: "transparent",
                  border: "none"
                }}
              >
                Civil
              </button>
            </div>
          </div>
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            onClick={this.handleClearFilters}
            style={{
              position: "relative",
              textAlign: "center",
              height: "39px",
              width: "150px",
              marginTop: "10px",
              backgroundColor: "#0073b1",
              borderColor: "#0073b1",
              borderRadius: "0px",
              color: "white",
              marginLeft: "20px"
            }}
          >
            Clear Filters
          </button>
        </div>
        <div
          style={{
            textAlign: "left",
            marginTop: "120px",
            backgroundColor: "white"
          }}
        >
          <p
            style={{ fontSize: "30px", fontFamily: "Lato, Roboto !important" }}
          >
            Total {this.state.total} Jobs found
          </p>

          <div>
            <tbody>
              {/*Display the Tbale row based on data recieved*/}
              {details}
            </tbody>
          </div>
        </div>
      </div>
    );
  }
}

//export Home Component

function mapStateToProps(state) {
  return { Jobs: state.Jobs };
}

export default connect(
  mapStateToProps,
  { fetchJobs }
)(newSearch);
