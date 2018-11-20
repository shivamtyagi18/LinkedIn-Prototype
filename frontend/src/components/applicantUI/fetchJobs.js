import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
//import NavbarResult from '../LandingPage/NavbarResult';
import { fetchJobs } from "../../actions";
import { connect } from "react-redux";
import _ from "lodash";
import { SplitButton,DropdownButton, MenuItem, Button, Image } from 'react-bootstrap';

//import Pagination from "../Pagination"  //pagination
//import Footbar from '../LandingPage/Footbar';


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
            price : "",
            name : false,
            bedroom : false,
            guests : false
        }  
        this.propertyChangeHandler = this.propertyChangeHandler.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePriceFilter = this.handlePriceFilter.bind(this)
        this.handleGuestsFilter = this.handleGuestsFilter.bind(this)
        this.handleBedroomsFilter = this.handleBedroomsFilter.bind(this)
    } 
    
    componentWillMount(){
        this.setState({
            authFlag : false
        })   
    }

    handlePriceFilter = (e) => {
        this.setState({
            price : true,
            guests : false,
            bedrooms : false,
            
        })
        console.log("Filter by price results")
    }

    handleGuestsFilter = (e) => {
        this.setState({
            price : false,
            guests : true,
            bedrooms : false,
        })
        console.log("Filter by guests results")
    }

    handleBedroomsFilter = (e) => {
        this.setState({
            price :false,
            guests : false,
            bedrooms : true,
        })
        console.log("Filter by bedrooms results")
    }

    propertyChangeHandler = (e) => {
        this.setState({
            displayprop : e.target.dataset.attr,
        })
        console.log("Successful test - ",this.state.displayprop)
    }

    handlePageChange(page) {                            //pagination
        // console.log(`active page is ${pageNumber}`);
        // this.setState({activePage: pageNumber});
        const properties = Object.keys(this.props.property).map(property => this.props.property[property])
        const itemsLeft = true;
        const Per_page_Property = properties.slice((page - 1) * 5, (page - 1) * 5 + 5);
        this.setState({ page, Per_page_Property});
      }

    componentDidMount(){

        this.props.fetchJobs();             
    }

    

    render(){
        let finalProperty = null;
        //let nav = <NavbarResult navdata={this.props.navdata}/>
        //let foot = <Footbar footrender={this.props.footrender}/>

        const { page, total, Per_page_Property } = this.state;  //pagination

        const No_of_Results = Object.keys(this.props.property).map(property => this.props.property[property])  //pagination
        this.state.total = No_of_Results.length
        console.log("total",this.state.total) 

        if(!this.state.price && !this.state.bedrooms && !this.state.guests){
            
            var properties = Object.keys(this.props.property).map(property => this.props.property[property]).slice(0,5);    //pagination
            finalProperty = this.state.Per_page_Property.length !== 0 ? this.state.Per_page_Property : properties; 
        }

       
        
        if(this.state.price){

            const properties_sort_price = Object.keys(this.props.property).map(property => this.props.property[property]).sort(function(a, b) {
                var priceA = a.price; // ignore upper and lowercase
                var priceB = b.price;
                // var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                // var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                // if (nameA < nameB) {
                //   return -1;
                // }
                // if (nameA > nameB) {
                //   return 1;
                // }
    
                if (priceA < priceB) {
                      return -1;
                    }
                    if (priceA > priceB) {
                      return 1;
                    }
              
                // names must be equal
                return 0;
              });    //pagination
              console.log("sorted properties by price", this.state.price,properties_sort_price)
              properties = properties_sort_price.slice(0,5);
              console.log("sorted properties by price", properties)
              finalProperty = this.state.Per_page_Property.length !== 0 ? this.state.Per_page_Property : properties; 
              
        }
        
        if(this.state.bedrooms){
          const properties_sort_bedroom = Object.keys(this.props.property).map(property => this.props.property[property]).sort(function(a, b) {
            var bedroomA = a.bedroom; // ignore upper and lowercase
            var bedroomB = b.bedroom;
            if (bedroomA < bedroomB) {
                  return -1;
                }
                if (bedroomA > bedroomB) {
                  return 1;
                }
            // names must be equal
            return 0;
          });    //pagination
          console.log("sorted properties bedroom", this.state.bedrooms,properties_sort_bedroom)
          properties = properties_sort_bedroom.slice(0,5);
          finalProperty = this.state.Per_page_Property.length !== 0 ? this.state.Per_page_Property : properties; 
        }

        if(this.state.guests){
          const properties_sort_guests = Object.keys(this.props.property).map(property => this.props.property[property]).sort(function(a, b) {
            var guestsA = a.guests; // ignore upper and lowercase
            var guestsB = b.guests;
            if (guestsA < guestsB) {
                  return -1;
                }
                if (guestsA > guestsB) {
                  return 1;
                }
            // names must be equal
            return 0;
          });    //pagination
          console.log("sorted properties guests", this.state.guests, properties_sort_guests)
          properties = properties_sort_guests.slice(0,5);
          finalProperty = this.state.Per_page_Property.length !== 0 ? this.state.Per_page_Property : properties; 
        }

        // let finalProperty = this.state.Per_page_Property.length !== 0 ? this.state.Per_page_Property : properties;   //pagination
        
       //<td><button style={{backgroundColor:"#0067db",borderColor:"#0067db",fontSize:"18px"}} class="btn btn-primary button-search">Open</button></td>
       console.log("final properties",finalProperty)
       
       let details= _.map(finalProperty,property => { 
        //    console.log("properties",this.props.property)
           
       //let details = this.state.Properties.map(property => {
          // const imgurl = require(`../uploads/${property.img}`);
           // const imgurl1 = require(`../uploads/${property.img}`);            // const imgurl2 = require(`../uploads/${property.img}`);
            const imgurl2 = `https://s3.us-east-2.amazonaws.com/homeawayuploads/${property.img}`;
            
            return( 
        <div>
            
            <div class="row main-div-search1">
                <div class="col-sm-12">

                    <div class="col-sm-6">
                        <img src={imgurl2} height="400px" width="550px"></img>
                    </div>

                <div class="col-sm-6">
                    <div class="col-sm-12" style={{height:"60px",marginTop:"30px",marginBottom:"30px",marginLeft:"40px"}}>
                        <td onClick={this.propertyChangeHandler} name="displayprop" data-attr={property.name} style={{fontSize:"35px",fontFamily:"Courier New",fontWeight:"550"}}>
                        {property.name}
                        </td>
                    </div>
                    <div class="col-sm-12" style={{height:"200px",marginTop:"30px"}}>
                    <div class="col-sm-3" ><div class="col-sm-12" style={{fontSize:"19px",fontWeight:"500",textAlign:"left"}}>{property.bedroom} BR</div></div>
                    <div class="col-sm-3" ><div class="col-sm-12" style={{fontSize:"19px",fontWeight:"500",textAlign:"left"}}>{property.bathroom} BA</div></div>
                    <div class="col-sm-3" ><div class="col-sm-12" style={{fontSize:"19px",fontWeight:"500",textAlign:"left"}}>Sleeps {property.guests}</div></div>
                    </div>
                    
                    <div class="col-sm-12" style={{backgroundColor:"#eee",marginLeft:"40px"}}>
                    <div class="col-sm-12" style={{fontSize:"26px",fontWeight:"500",textAlign:"left"}}> $ {property.price} per night</div>
                    </div>
                    
                </div>
               
              
                </div>
            </div>

        </div>
    
            )
        })

        let filter = null;

        filter = (
            <ul class="nav navbar-nav navbar-right navbar-brand" style={{marginTop:"20px"}}>
            <DropdownButton title="Filter by" style={{backgroundColor:"transparent",font:"80%",color:"blue",marginTop:"0px"}} >
                <MenuItem eventKey="1" onClick={this.handlePriceFilter}>Price</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="2" onClick={this.handleGuestsFilter}>Guests</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="3" onClick={this.handleBedroomsFilter}>Bedrooms</MenuItem>
            </DropdownButton>
            </ul>
        )

        let redirectVar = null;

          
       if(this.state.displayprop!==""){
            this.props.history.push({
                pathname : '/property',
                state : {
                    displayprops : this.state.displayprop
                }

            })
        }

        
       
        
           
        return(

            <div>
            {redirectVar}
            
            

            <div class="main-div-book col-sm-12" style={{marginLeft:"30px",marginBottom:"100px",backgroundColor:"#eee"}}>
            {filter}     
            <p style={{fontSize:"30px",fontFamily:"Lato, Roboto !important"}}>
                    Total {this.state.total} properties found</p>
                
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

// <Pagination   
//                    margin={2}
//                    page={page}
//                    count={Math.ceil(this.state.total / 5)}
//                    onPageChange={this.handlePageChange}

//                  />

//export Home Component

function mapStateToProps(state) {
    return { property: state.property };
  }
  
  export default connect(mapStateToProps, { fetchJobs })(Search);
//export default Search;