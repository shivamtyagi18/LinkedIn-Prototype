import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
//import {browserHistory} from 'history';

import cookie from 'react-cookies';
import {Redirect, browserHistory } from 'react-router';
import { Link, withRouter } from 'react-router-dom';
import { SplitButton,DropdownButton, MenuItem, Button, Image } from 'react-bootstrap';
import Navbar from './Navbar';
import Footbar from './Footbar';
import { searchProp } from "../../actions";
import { connect } from "react-redux";
import _ from "lodash";
import { Field, reduxForm } from "redux-form";
import LandingPage from './LandingPage';
var moment = require("moment");





//create the Navbar Component
class SearchBar extends Component {
    constructor(props){
    super(props);
        //maintain the state required for this component
        this.state = {
            authFlag : false,
            searchFlag : false,
            message : ""
        }
    }
    //get the books data from backend  

    componentWillMount(){
        this.setState({
            authFlag : false,
            searchFlag : false
        })
    }
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;
    
        return (
          <div className={className}>
            <label>{field.label}</label>
            <input style={{fontSize:"18px"}} className="form-control" type="text" {...field.input}  placeholder={field.placeholder}/>
            <div className="text-help"  style={{fontSize:"22px",backgroundColor:"red"}}>
              {touched ? error : ""}
            </div>
          </div>
        );
      }

      renderFieldDates(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;
    
        return (
          <div className={className}>
            <label>{field.label}</label>
            <input style={{fontSize:"18px"}} className="form-control" type="date" {...field.input}  placeholder={field.placeholder}/>
            <div className="text-help" style={{fontSize:"22px",backgroundColor:"red"}} >
              {touched ? error : ""}
            </div>
          </div>
        );
      }

      renderFieldGuests(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;
    
        return (
          <div className={className}>
            <label>{field.label}</label>
            <input style={{fontSize:"18px"}} className="form-control" type="number" {...field.input}  placeholder={field.placeholder}/>
            <div className="text-help"  style={{fontSize:"22px",backgroundColor:"red"}}>
              {touched ? error : ""}
            </div>
          </div>
        );
      }

    onSubmit(values) {
        console.log("search data",values);
        this.props.searchProp(values, () => {
           //this.props.history.push("/search");
           window.location.href="/search";
           //console.log("Promise")
            //<Redirect to= "/search"/> 
         });
      }

    render(){
        //if not logged in go to login page
        const { handleSubmit } = this.props;
        let redirectVar = null;
    
        //  if(this.state.searchFlag){
        //          redirectVar = <Redirect to= "/search"/>
        //      }   


            

        const imgurl = require(`../Images/large.jpg`);
            //<img src={require('../Images/bkg.png')}/>
            // <div style={{backgroundColor: "yellow"}}>
            //<div class="container" style={{backgroundColor: "green"}} >
            // <div class="login-form" style={{backgroundImage:`url(${imgurl})`}}>
            // <div class="main-div-login" style={{backgroundColor: "red"}}>
            //style={{backgroundImage:`url(${imgurl})`, backgroundSize:'cover'}}

        return(


            <div style={{backgroundImage:`url(${imgurl})`,backgroundSize:"cover",backgroundPosition:"100%",backgroundRepeat:"no-repeat",height:"700px"}}> 
                {redirectVar} 
              
            <div class="container">
                <div class="login-form"> 
                    <div class="main-div-search" style={{backgroundColor:"transparent"}}>
                        <div class="panel" style={{backgroundColor:"transparent"}}>
                            Book beach houses, cabins,<br></br>
                            condons and more, worldwide
                        </div> 

                        <div style={{backgroundColor: "red"}}>
                            <h3>{this.state.message}</h3> 
                        </div> 

                        
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}> 
                            <div class="col-sm-3">
                                <Field
                                    name="location"
                                    component={this.renderField}
                                    placeholder="Where do you want to go?"
                                /></div>
                            <div class="col-sm-2">
                                <Field
                                    name="checkin"
                                    component={this.renderFieldDates}
                                    placeholder="Check In"
                                /></div>
                            <div class="col-sm-2">
                                <Field
                                    name="checkout"
                                    component={this.renderFieldDates}
                                    placeholder="Check Out"
                                /></div>
                            <div class="col-sm-2">
                                <Field
                                    name="guests"
                                    component={this.renderFieldGuests}
                                    placeholder="Guests"
                                /></div>
                            <div class="col-sm-3">
                                <button style={{backgroundColor:"#0067db",borderColor:"#0067db",fontSize:"18px"}} class="btn btn-primary button-search">Search</button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>

            <div style={{backgroundColor:"transparent",fontSize:"18px",color:"#ffff",textAlign:"center",marginTop:"100px"}} >
                <div class="col-sm-4">
                    <div class="panel" style={{backgroundColor:"transparent"}}>
                        Your whole vacation starts here<br></br>
                        <p style={{color:"white",fontSize:"10px"}}>Choose a rental from the world's best selection</p>
                    </div> 
                </div>

                <div class="col-sm-4">
                    <div class="panel" style={{backgroundColor:"transparent"}}>
                        Book and stay with confidence<br></br>
                        <p style={{color:"white",fontSize:"10px"}}>Secure payments, peace of mind</p>
                    </div> 
                </div>

                <div class="col-sm-4">
                    <div class="panel" style={{backgroundColor:"transparent"}}>
                        Your vacation your way<br></br>
                        <p style={{color:"white",fontSize:"10px"}}>More space, more privacy, no compromises</p>
                    </div> 
                </div>
            
            </div>   
            </div>
            
        )
    }
}

function validate(values) {
    var date=moment().toDate();
    date = moment(date).format("YYYY-MM-DD");
    const errors = {};
  
    // Validate the inputs from 'values'
    if (!values.location) {
      errors.location = "Enter a location"; 
    }
    
    if (!values.checkin) {
      errors.checkin = "Enter checkin date";
    }
    if (values.checkin<date) {
        errors.checkin = "Enter future date";
      }
    if (!values.checkout) {
        errors.checkout = "Enter checkout date";
      }
      if (values.checkout<date) {
        errors.checkout = "Enter future date";
      } 
      if (values.checkout<=values.checkin) {
        errors.checkout = "Check checkout date";
      }  
      if (!values.guests) {
        errors.guests = "Enter number of guests";
      }
    
  
    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
  }

  export default reduxForm({
    validate,
    form: "NewBookForm"
  })(connect(null, { searchProp })(SearchBar));
//export default SearchBar;