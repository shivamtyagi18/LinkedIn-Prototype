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
import { loginUser } from "../../actions";

class Home extends Component {
    
    constructor(props){
    super(props);
        //maintain the state required for this component
        this.state = {
            homeFlag : false,
            login : ""
        }
        //Bind the handlers to this class
    }
    //get the books data from backend  

    render(){

        let searchbar = <SearchBar searchrender={this.props.searchrender}/>

       //let foot = <Footbar footrender={this.props.footrender}/>

        let nav = <Navbar navdata={this.props.navdata}/>

        //let dashboard = <Dashboard dashdata={this.props.dashdata}/>

                   
        // if(this.props.location.state!==undefined){
        //     nav =(
        //         <Navbar 
        //         navdata= {this.props.navdata}
        //         loginFlag = {this.props.location.state.loginFlag}
        //         email = {this.props.location.state.email}
        //         />
        //     )
        // }else{
        //     nav = (
        //         <Navbar 
        //         navdata= {this.props.navdata}
        //         /> 
        //     )
        // }
        const imgurl2 = `https://s3.us-east-2.amazonaws.com/homeawayuploads/noproperty`;
        let redirectVar = null;
        this.state.login=localStorage.getItem("email")

        console.log("details",this.state.login)
       
        if(!localStorage.getItem('token')){
            redirectVar = <Redirect to= "/"/>
        }

        return(

            <div>
                {redirectVar}
                {nav}
                {searchbar} 
                
                <div class="col-sm-3" style={{marginLeft:"5%",marginTop:"5%",backgroundColor:"#eee"}}>
                
                
                <div class="col-sm-12" style={{marginTop:"5%"}}>
                    <div><img src={imgurl2} width="100%"></img></div>
                </div>
                <div class="col-sm-8">
                    <div class="col-sm-12" style={{fontSize:"1.5rem",fontWeight:"500",textAlign:"centre"}}>{this.state.login}</div>
                </div>
           


        </div> 
        </div>
        )
    }
}

function mapStateToProps(state) {
    return { login: state.loginApplicant };
  }
 
  export default connect(mapStateToProps, { loginUser })(Home);
//export Home Component
//export default Home;
