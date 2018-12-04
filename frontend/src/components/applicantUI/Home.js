import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import Navbar from './Navbar';
//import Footbar from './Footbar';
import SearchBar from './SearchBar';
//import Dashboard from '../Home/Dashboard';
import {Link} from 'react-router-dom';
//import { url } from 'inspector';
import { connect } from "react-redux";
import _ from "lodash";
import {Chart} from "react-charts";
import { loginUser } from "../../actions";
import { getProfile} from "../../actions";
class Home extends Component {
    
    constructor(props){
    super(props);
        //maintain the state required for this component
        this.state = {
            homeFlag : false,
            login : "",
            displayprop :"",
        }
        //Bind the handlers to this class
    }
    //get the books data from backend  
    componentWillMount() {
        console.log("user email in will mount is: ", localStorage.getItem("email"));
        const data = {
          email: localStorage.getItem("email")
        };
        this.props.getProfile(data);
      }

      onDivClick = (e) => {
        e.preventDefault();
        console.log(e.target.dataset.value)
        this.setState({
            displayprop : e.target.dataset.value,
        })
        localStorage.setItem("jobId",e.target.dataset.value)
        this.setState({
          divClickFlag: true
        })
      }

    
      
    render(){
        const lineChart = (
            // A react-chart hyper-responsively and continuusly fills the available
            // space of its parent element automatically
            <div
              style={{
                width: "400px",
                height: "300px"
              }}
            >
              <Chart
                data={[
                  {
                    label: "Series 1",
                    data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, this.props.profileInfo.clickCounts]]
                  },
                  {
                    label: "Series 2",
                    data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
                  }
                ]}
                axes={[
                  { primary: true, type: "linear", position: "bottom" },
                  { type: "linear", position: "left" }
                ]}
              />
            </div>
          );
        let searchbar = <SearchBar searchrender={this.props.searchrender}/>
       //let foot = <Footbar footrender={this.props.footrender}/>
        let nav = <Navbar navdata={this.props.navdata}/>
        //let dashboard = <Dashboard dashdata={this.props.dashdata}/>
       // let details = Object.keys(this.props.profileInfo).map(job => {
        let details = _.map(this.props.profileInfo.savedJobs,job => {
            //var savedJobs=this.props.profileInfo[job]
            console.log("jobs",job)
            var jobId = job.slice(0,2)
            console.log("jobId",jobId)
            return(
                <React.Fragment>
                <div class="row col-sm-7">
                <div class="displayjobinfo container-fluid">
                <div class="headline">
                    <h3 class="hit-headline"><a><div name="displayjob" data-value={jobId} onClick={this.onDivClick}>{job.slice(2)}</div></a></h3>
                    <div class="headline" style={{fontSize:"1.5rem",fontWeight:"500",textAlign:"centre"}}>Job Id {job.slice(0,2)}</div>
                </div>
                </div>
                </div>
                </React.Fragment>
                )
        })
        if(!localStorage.getItem('token')){
            redirectVar = <Redirect to= "/"/>
        }
        if(this.state.displayprop!==""){
            this.props.history.push({
                pathname : '/applicantion/job',
                state : {
                    displayprops : this.state.displayprop
                }
            })
        }
                   
        const imgurl2 = `https://s3.us-east-2.amazonaws.com/linkedin-images/${this.props.profileInfo.img}`;
        let redirectVar = null;
        this.state.login=localStorage.getItem("email")
        console.log("details",this.state.login)
        console.log("detail props",this.props.profileInfo)
       
       
        return(
            <div>
                {redirectVar}
                {nav}
                {searchbar} 
        <div class="displayjobinfo container-fluid">
        <div class="companypic  col-md-2" style={{marginTop:"5px",borderRadius:"15px"}}>
        <img src={imgurl2} height="130px" width="150px" style={{borderRadius:"15px"}}></img>
        </div>
            <div class="headline col-md-10" style={{}}>
            <h3 class="hit-headline"><a><div>{this.props.profileInfo.firstName} {this.props.profileInfo.lastName}</div></a></h3>
                
                    {/* <div class="" style={{fontSize:"1.5rem",fontWeight:"500",textAlign:"left"}}>Location : {this.props.profileInfo.city}</div>
                
               
                    <div class="" style={{fontSize:"1.5rem",fontWeight:"500",textAlign:"centre"}}>Connections : {this.props.profileInfo.connections}</div> */}
                
              
                    <div class="" style={{fontSize:"1.5rem",fontWeight:"500",textAlign:"centre"}}>Profile Views : {this.props.profileInfo.clickCounts}</div>
                    <div class="" style={{fontSize:"2.2rem",fontWeight:"500",textAlign:"centre"}}>Saved Jobs :</div>
                    {details}
                  
            </div> 
            </div>
            <div style={{marginTop:"100px"}}>{lineChart}</div> 
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { login: state.loginApplicant, profileInfo: state.getProfileInfo };
  }
 
  export default connect(mapStateToProps, { loginUser,getProfile })(Home);
//export Home Component
//export default Home;