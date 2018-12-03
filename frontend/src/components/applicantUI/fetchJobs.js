import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import { fetchJobs,saveJobs } from "../../actions";
import { connect } from "react-redux";
import _ from "lodash";
import { SplitButton,DropdownButton, MenuItem, Button, Image } from 'react-bootstrap';
import SearchBar from './SearchBar';
import Pagination from "../Pagination"  //pagination
//import Footbar from '../LandingPage/Footbar';
var moment = require("moment");

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {  
            authFlag : false,
            imageView : [],
            displayprop :"",
            savjobprop:"",
            Per_page_Property : [],  //pagination
            page : 1,   //pagination
            total : "",   //pagination
            searchJobName:"",
            error: false,
            jobs: [],
            searchedJobs :[],
            searchFlag: false,
            divClickFlag: false
        }  
        this.jobsChangeHandler = this.jobsChangeHandler.bind(this);
        this.searchChangeHandler = this.searchChangeHandler.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
       // this.handlePageChange = this.handlePageChange.bind(this);
        //this.handlePriceFilter = this.handlePriceFilter.bind(this)
        //this.handleGuestsFilter = this.handleGuestsFilter.bind(this)
        //this.handleBedroomsFilter = this.handleBedroomsFilter.bind(this)
    } 
    
    componentWillMount(){
        this.setState({
            authFlag : false
        })   
    }

    // jobsChangeHandler = (e) => {
    //     this.setState({
    //         displayprop : e.target.dataset.attr,
    //     })
    //     console.log("Successful test - ", e.target.dataset.attr)
    // }

    jobsChangeHandler=(e)=> {
        this.setState({
            displayprop : e.target.value,
        })
        console.log("Successful test - ", this.state.displayprop)
    }

    jobsSaveHandler=(e)=> {
        localStorage.setItem("jobId",e.target.value)
            this.state.savjobprop =localStorage.getItem("jobId") 
        console.log("Successful test - ", this.state.savjobprop)
        const data = {
            email : localStorage.getItem("email"),
            jobId : this.state.savjobprop,
            companyName: e.target.dataset.attr,
            jobTitle : e.target.dataset.value
        }

        console.log("Successful data - ", data)
        this.props.saveJobs(data);
        window.alert("Saved...!!!")

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

    // handlePageChange(page) {                            //pagination
    //     // console.log(`active page is ${pageNumber}`);
    //     // this.setState({activePage: pageNumber});
    //     const properties = Object.keys(this.props.property).map(property => this.props.property[property])
    //     const itemsLeft = true;
    //     const Per_page_Property = properties.slice((page - 1) * 5, (page - 1) * 5 + 5);
    //     this.setState({ page, Per_page_Property});
    //   }

    componentDidMount(){

        this.props.fetchJobs();             
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

    render(){

        //let finalProperty = null;
        let searchbar = <SearchBar searchrender={this.props.searchrender}/>
        let nav = <Navbar navdata={this.props.navdata}/>
       // let foot = <Footbar footrender={this.props.footrender}/>

       // const { page, total, Per_page_Jobs } = this.state;  //pagination
       var date=moment().toDate();
       date = new Date()
      
        
        console.log("total 1",this.props.Jobs) 
        
        const No_of_Results = Object.keys(this.props.Jobs).map(Jobs => this.props.Jobs[Jobs])  //pagination
        this.state.total = No_of_Results.length
        console.log("total--",this.state.total);
           
    let details = Object.keys(this.props.Jobs).map(job => {
         var jobs=this.props.Jobs[job]
         var temp_date = new Date(jobs.postedOn)
         var posted_date = temp_date.getDate()+1
         var current_date = date.getDate()+1
         var weeks = Math.floor((current_date-posted_date)/7)
          // const imgurl = require(`../uploads/${property.img}`);
           // const imgurl1 = require(`../uploads/${property.img}`);            
           const imgurl2 = `https://s3.us-east-2.amazonaws.com/linkedin-images/${jobs.companyLogo}`;
                // const imgurl2 = `https://s3.us-east-2.amazonaws.com/linkedin-shivam/${jobs.companyLogo}`;
            console.log("jobs",jobs)
            return( 
    <React.Fragment>

       
             
    <div class="row col-sm-7">
    <div class="displayjobinfo container-fluid"> 
    
                <div class="col-sm-4">
                    <div><img src={imgurl2} width="100%"></img></div>
                </div>
    <div class="col-sm-8">
        <div class="col-sm-10">  
                  
                <div class="headline">
                    <h3 class="hit-headline"><a><div name="displayjob" data-value={jobs.jobId} onClick={this.onDivClick}>{jobs.jobTitle}</div></a></h3>
                    <h4 class="hit-companynameheadline"><div name="displaycompanyname">{jobs.companyName}</div></h4>
                    <h5 class="hit-locationheadline"><div name="location">
                    <i class="fa fa-location-arrow" aria-hidden="true"></i>
                    {/* <li-icon aria-hidden="true" type="map-marker-icon" class="job-card-search__exact-location-icon mr1" size="small"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M8,4a2,2,0,1,0,2,2A2,2,0,0,0,8,4ZM8,7.13A1.13,1.13,0,1,1,9.13,6,1.13,1.13,0,0,1,8,7.13ZM8,1A5,5,0,0,0,3,6a5.37,5.37,0,0,0,.41,2S5.91,13,7.22,15.52A0.86,0.86,0,0,0,8,16H8a0.86,0.86,0,0,0,.78-0.48C10.09,13,12.59,8,12.59,8A5.37,5.37,0,0,0,13,6,5,5,0,0,0,8,1Zm2.88,6.24L8,12.92,5.12,7.24A3.49,3.49,0,0,1,4.88,6a3.13,3.13,0,0,1,6.25,0A3.49,3.49,0,0,1,10.88,7.24Z" class="small-icon" style="fill-opacity: 1"></path></svg></li-icon> */}
                    {jobs.location}</div></h5>
                    <div class="hit-jobdescriptionheadline"><p class="displayjobdescription">{jobs.jobDescription}</p></div>
                   
                    <div class="postedOn">
                   <p class="displayjobdescription"> 
                   Posted {weeks} weeks ago
                </p></div>
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
                    <div class="hit-jobdescriptionheadline"><p class="displayjobdescription">Type : {jobs.employmentType}</p></div>
                    </div>
                    <div class="col-sm-12">
                    <div class="hit-jobdescriptionheadline"><p class="displayjobdescription">Industry : {jobs.industry}</p></div>
                    </div>
                    <div class="col-sm-12">
                    <div class="hit-jobdescriptionheadline"><p class="displayjobdescription">Vacancies : {jobs.jobOpenings}</p></div>
                    </div>
                    <div class="col-sm-12">
                    <div class="hit-jobdescriptionheadline"><p class="displayjobdescription">Location : {jobs.location}</p></div>
                    </div>
                    <div class="col-sm-12">
                    <div class="hit-jobdescriptionheadline"><p class="displayjobdescription">Job Profile : {jobs.jobFunction}</p></div>
                    </div>

                   <div class="col-sm-12" style={{height:"10%",marginTop:"10%"}}>
                        
                            <button class="btn" name="savejobprop" id="savejobprop" onClick={this.jobsSaveHandler} value={jobs.jobId} data-attr={jobs.companyName} style={{backgroundColor:"#0073b1",color:"white",fontSize:"1.5rem"}}>Save</button>
                    
                    </div>  
                    
                </div>
               
                </div>
                </div>
            </div>
            
    </React.Fragment>
    
            )
        })
        let redirectVar = null;

          
       if(this.state.displayprop!==""){
            this.props.history.push({
                pathname : '/applicantion/job',
                state : {
                    displayprops : this.state.displayprop
                }

            })
        }



     
        return(

            <div>
            {redirectVar}
            {nav}
            {searchbar} 
            

            <div style={{marginLeft:"30px",marginTop:"100px",backgroundColor:"white"}}>
            {/*filter*/}     
            <p style={{fontSize:"30px",fontFamily:"Lato, Roboto !important"}}>
                    Total {this.state.total} Jobs found</p>


                
                <div>
                        <tbody>
                            {/*Display the Tbale row based on data recieved*/}
                            {details}
                            
                        </tbody>
                        
                </div> 
            </div> 
            
            </div>    
        )
}
}

//export Home Component

function mapStateToProps(state) {
    return { Jobs: state.Jobs };
  }
  
  export default connect(mapStateToProps, { fetchJobs,saveJobs })(Search);