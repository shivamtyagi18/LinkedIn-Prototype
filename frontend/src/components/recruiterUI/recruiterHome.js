import React, { Component } from "react";
import "../../App.css";
//import axios from "axios";
//import cookie from "react-cookies";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import logo from "./nojobs.svg";
import NavRecruiterHome from "./navbarHome";
import FooterRecruiterHome from "./footer";
import { connect } from "react-redux";
import { getRecruiterJobs } from "../../actions";
import _ from "lodash";

class HomeRecruiter extends Component {

constructor (props) {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            searchJobName:"",
            error: false,
            jobs: [],
            searchedJobs :[],
            postFlag:false,
            searchFlag: false,
            divClickFlag: false,
            displayPostedJob: ""
        }
        //Bind the handlers to this class
        this.searchChangeHandler = this.searchChangeHandler.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
    }

    componentDidMount() {
this.props.getRecruiterJobs();
    }


  searchChangeHandler = (e) => {
    e.preventDefault();
    this.setState({
        searchJobName : e.target.value
    })
}

submitSearch = (e) => {
  e.preventDefault();
  this.setState({
    searchFlag : true
})
}

onDivClick = (e) => {
  e.preventDefault();
  console.log(e.target.dataset.value)
  localStorage.setItem("jobId",e.target.dataset.value)
  this.setState({
    divClickFlag: true
  })
}

viewPostedApps = (e) => {
  e.preventDefault();
  console.log(e.target.dataset.value)
  this.setState({
    displayPostedJob: e.target.dataset.value
  })
}

postJob = (e) => {
  e.preventDefault();
  this.setState({
    postFlag : true
  })
}

renderJobResults() {
  let searchedJobs = null;
  var jobResults = Object.keys(this.props.getJobs);
  console.log(jobResults);
  console.log(this.state.searchJobName);
  searchedJobs =  Object.keys(this.props.getJobs)
    .map(jobs => this.props.getJobs[jobs])
   if(this.state.searchFlag == true){
    searchedJobs =  Object.keys(this.props.getJobs)
    .map(jobs => this.props.getJobs[jobs])
    .filter(jobs => jobs.jobTitle === this.state.searchJobName);
      console.log(searchedJobs); }
    // .filter(jobs => jobs.jobTitle <= this.state.searchJobName);
  return _.map(searchedJobs, jobs => {
    console.log("frontend job name->"+jobs.jobTitle);
    const imgurl = `https://s3.us-east-2.amazonaws.com/linkedin-images/${jobs.companyLogo}`;
    var date=new Date();
    let temp_date = new Date(jobs.postedOn);
    var posted_date = temp_date.getDate();
    var posted_month = temp_date.getMonth()+1;
    var posted_year = temp_date.getFullYear();
   var current_date = date.getDate()+1
  var weeks = Math.floor((current_date-posted_date)/7)
  return (<React.Fragment>
        
  <div class="displayjobinfo container-fluid">       
            <div class="companypic col-md-2" style={{marginTop:"5px"}}>
            <img src={imgurl} height="50px" width="100px"></img>
            </div>
                        <div class="headline col-md-10">
                            <h3 class="hit-headline"><a><div name="displayjob" data-value={jobs.jobId} onClick={this.onDivClick}>{jobs.jobTitle}</div></a></h3>
                            <h4 class="hit-companynameheadline"><div name="displaycompanyname">{jobs.companyName}</div></h4>
                            <h5 class="hit-locationheadline"><div name="location">
                            <i class="fa fa-location-arrow" aria-hidden="true"></i>
                            {jobs.location}</div></h5>
                            <div class="hit-jobdescriptionheadline"><p class="displayjobdescription">{jobs.jobDescription}</p></div>
                           
                            <div class="postedOn">
                           <p class="displayjobdescription"> Posted On : 
                             {posted_date}/{posted_month}/{posted_year}
                             </p></div>
                             <button class="btn1 btn-primary" data-value={jobs.jobId} onClick={this.viewPostedApps}>
                               View Posted Applications
                             </button>

                        </div>
                      
</div>
        </React.Fragment>
  );
});
}

render() {
  let redirectVar = null;

  if(this.state.displayPostedJob!==""){
    this.props.history.push({
        pathname : '/ApplicationsForJob',
        state : {
            displayPostedJob : this.state.displayPostedJob
        }
    })
}

  console.log(this.state.divClickFlag);
  if(this.state.divClickFlag){
    redirectVar=<Redirect to= {
      {
          pathname: '/recruiter/editJob',
         
          
      }
  }/>
  }
  if(this.state.postFlag){
    redirectVar=<Redirect to= {
      {
          pathname: '/recruiter/post',
         
          
      }
  }/>
  }
  var jobResults = this.props.getJobs;
  console.log(jobResults);
  let jobwindow= null;
  console.log(this.state.searchFlag);
  if(jobResults.length > 0){
    jobwindow = (
      <div className="mainWindow">
      <div className="textpostedjobs">
        <h4 class="textpostedjobs">Recently Posted Jobs :</h4>
        {this.renderJobResults()}
      </div>
   
      </div>
    )}
    else 
    jobwindow = (
      <div className="mainWindow">
      <img src={logo} style={{marginLeft:"250px"}}></img>
     
      <header class="projects-actions-bar__title-bar1">
  <h1 data-test-roles-title="" class="projects-actions-bar__title1">
    Sorry, there are no jobs to <br></br> display.
  </h1>
</header>
 </div>
    )
  
  return (

    <React.Fragment>
    <body id="homerecruiter" style={{backgroundColor:"#f5f5f5"}}>
    {redirectVar}
 <NavRecruiterHome navdata={this.props.navdata} />
        <div
          className="homemain container">
          <div className="row">
          <div className="home-left col-lg-8">
          <div className="home-inner col-lg-12">
          <header class="projects-actions-bar__title-bar">
  <h1 data-test-roles-title="" class="projects-actions-bar__title">
    Jobs
  </h1>
</header>

<form class="form-inline" onsubmit="return false" method="post">
<div class="form-group form-group-sm">  
    <label class="sr-only" for="jobsearch">Search...</label>
    <input type="text" class="form-control" id="jobsearch" placeholder="Search..." name="jobsearch" onChange = {this.searchChangeHandler} style={{width:'180px'}}/>
    <button type="submit" onClick = {this.submitSearch} class="btn btn-sm">Search a Job</button>
</div>
</form>

<div className="mainWindow">
{jobwindow}
</div>

 
<br></br><br></br><br></br>
          </div>
          </div>

          <div className="home-rightouter col-lg-4">
          <div className="home-right col-lg-12">
          <div className="postjob">
          <br></br>
          <button type="submit" onClick = {this.postJob} class="btn btn-sm">Post a Job</button>
          <br></br> <br></br>
          </div>
          
          <div className="manageaccount">
          <br></br>
           <a href="/recruiter/profile" style={{textDecoration:"none",color:"rgba(0,0,0,.55)",fontSize:"1.4rem",fontWeight:"600"}}> Manage Account </a>
           <br></br>
          </div>
          </div>
          </div>
          </div>
          </div>
          <br></br> <br></br> 
          <div style={{borderTop:"1px solid lightgray",marginBottom:"100px"}}>
          <br></br> 
          <FooterRecruiterHome footdata={this.props.footdata}/>
          <br></br> <br></br> <br></br><br></br><br></br>
          </div>
    </body>
  </React.Fragment>
)
  
}}

function mapStateToProps(state){
  return {
      getJobs: state.getJobs
  };
}
export default connect(
  mapStateToProps,
  {getRecruiterJobs}
)(HomeRecruiter);

// export default HomeRecruiter;
//export Sign Up Component
//export default Login;
