import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import { fetchUsers } from "../../actions";
import { connect } from "react-redux";
import _ from "lodash";
import { SplitButton,DropdownButton, MenuItem, Button, Image } from 'react-bootstrap';
import SearchBar from './SearchBar';
import Pagination from "../Pagination"  //pagination
//import Footbar from '../LandingPage/Footbar';
var moment = require("moment");

class SearchUser extends Component {

    constructor(props){
        super(props);
        this.state = {  
            authFlag : false,
            imageView : [],
            displayprop :"",
            Per_page_Property : [],  //pagination
            page : 1,   //pagination
            total : "",   //pagination
            searchUserName:"",
            error: false,
            jobs: [],
            searchedJobs :[],
            searchFlag: false,
            divClickFlag: false
        }  
        this.usersChangeHandler = this.usersChangeHandler.bind(this);
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

    usersChangeHandler=(e)=> {
        this.setState({
            displayprop : e.target.value,
        })
        console.log("Successful test - ", this.state.displayprop)
    }

    onDivClick = (e) => {
        e.preventDefault();
        console.log(e.target.dataset.value)
        this.setState({
            displayprop : e.target.dataset.value,
        })
        // localStorage.setItem("jobId",e.target.dataset.value)
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
        this.props.fetchUsers();             
    }

    searchChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            searchUserName : e.target.value
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
      
        
        console.log("total 1",this.props.Users) 
        
        const No_of_Results = Object.keys(this.props.Users).map(Users => this.props.Users[Users])  //pagination
        this.state.total = No_of_Results.length
        console.log("total--",this.state.total);
           
    let details = Object.keys(this.props.Users).map(user => {
        
         var user=this.props.Users[user]
            console.log("jobs",user)
            const imgurl2 = `https://s3.us-east-2.amazonaws.com/linkedin-images/${user.img}`;
            return( 
    <React.Fragment>

             
    <div class="row col-sm-12">
    <div class="displayjobinfo container-fluid"> 
    
                
    <div class="col-sm-12">
    <div class="col-sm-2">
                    <div><img src={imgurl2} width="100%"></img></div>
                </div>
        <div class="col-sm-10">  
                  
                <div class="headline">
                    <h3 class="hit-headline"><a><div name="displayjob" data-value={user.email} onClick={this.onDivClick}>{user.firstName}  {user.lastName}</div></a></h3>
                    <div class="hit-jobdescriptionheadline"><p class="displayjobdescription" style={{fontSize:"1.4rem",fontWeight:"400px"}}>{user.headline}</p></div> 
                    <h5 class="hit-locationheadline"><div name="location">
                    {user.city}</div></h5>
                    
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
                pathname : '/applicant/profile/getSearchProfile',
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
                    Total {this.state.total} Users found</p>


                
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
    return { Users: state.Users };
  }
  
  export default connect(mapStateToProps, { fetchUsers })(SearchUser);