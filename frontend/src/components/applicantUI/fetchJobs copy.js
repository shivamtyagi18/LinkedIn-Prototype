import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import { fetchJobs } from "../../actions";
import { connect } from "react-redux";
import _ from "lodash";
import { SplitButton,DropdownButton, MenuItem, Button, Image } from 'react-bootstrap';

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
            Per_page_Property : [],  //pagination
            page : 1,   //pagination
            total : "",   //pagination
        }  
        this.jobsChangeHandler = this.jobsChangeHandler.bind(this);
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

    render(){
        //let finalProperty = null;
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
           // const imgurl2 = require(`../uploads/${property.img}`);
                 const imgurl2 = `https://s3.us-east-2.amazonaws.com/linkedin-shivam/noprofile.png`;
            console.log("jobs",jobs)
            return( 
        <div>
            
            <div class="row col-sm-7">
                <div class="col-sm-4">
                    <div><img src={imgurl2} width="100%"></img></div>
                </div>
                <div class="col-sm-8">
                <div class="col-sm-10">
                   
                    <div class="col-sm-12" style={{fontSize:"2.2rem",fontWeight:"500",textAlign:"left"}}>{jobs.jobTitle}</div>
                    
                    <div class="col-sm-12">
                        <div class="col-sm-4" ><div class="col-sm-12" style={{fontSize:"2rem",fontWeight:"500",textAlign:"left"}}>{jobs.companyName}</div></div>
                        <div class="col-sm-4" ><div class="col-sm-12" style={{fontSize:"2rem",fontWeight:"500",textAlign:"left"}}>{jobs.location}</div></div>
                        <div class="col-sm-4" ><div class="col-sm-12" style={{fontSize:"2rem",fontWeight:"500",textAlign:"left"}}>{jobs.jobFunction}</div></div>
                    </div>
                    
                </div>
               
              
                </div>
            </div>

            <div class="row col-sm-5">
                <div class="col-sm-12">
                <div class="col-sm-10">
                <div class="col-sm-12" style={{height:"10%",marginTop:"10%"}}>
                        <td style={{fontSize:"2rem",fontFamily:"Courier New",fontWeight:"550"}}>
                        {jobs.jobTitle}--{jobs.jobId}
                        </td>
                    </div>

                    <div class="col-sm-12" style={{height:"10%"}}>
                    <div class="col-sm-12" ><div class="col-sm-12" style={{fontSize:"1.5rem",fontWeight:"500",textAlign:"left"}}>{jobs.companyName}.{jobs.location}.USA</div></div>
                    </div>
                    <div class="col-sm-12" style={{height:"10%"}}>
                    <div class="col-sm-12" ><div class="col-sm-12" style={{fontSize:"1.5rem",fontWeight:"500",textAlign:"left"}}>Posted {weeks} weeks ago</div></div>
                    </div>
                    
                    <div class="col-sm-12" style={{backgroundColor:"#eee",marginLeft:"10%"}}>
                    <div class="col-sm-12" style={{fontSize:"1.5rem",fontWeight:"500",textAlign:"left"}}>{jobs.jobDescription}</div>
                    </div>

                    <div class="col-sm-12" style={{height:"10%",marginTop:"10%"}}>
                        
                            <button class="btn" name="displayprop" id="displayprop" onClick={this.jobsChangeHandler} value={jobs.jobId} style={{backgroundColor:"#0073b1",color:"white",fontSize:"1.5rem"}}>To Save, Apply & Easy Apply</button>
                    
                    </div>
                    
                </div>
               
              
                </div>
            </div>

        </div>
    
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

                <Pagination   
                   margin={2}
                   page={this.state.page}
                   count={Math.ceil(this.state.total / 5)}
                   onPageChange={this.handlePageChange}

                 />
            </div> 
            
            </div>    
        )
}
}

//export Home Component

function mapStateToProps(state) {
    return { Jobs: state.Jobs };
  }
  
  export default connect(mapStateToProps, { fetchJobs })(Search);