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

class Home extends Component {
    
    constructor(props){
    super(props);
        //maintain the state required for this component
        this.state = {
            homeFlag : false,
        }
        //Bind the handlers to this class
    }
    //get the books data from backend  

    render(){

        let searchbar = <SearchBar searchrender={this.props.searchrender}/>

       //let foot = <Footbar footrender={this.props.footrender}/>

        let nav = <Navbar navdata={this.props.navdata}/>

        //let dashboard = <Dashboard dashdata={this.props.dashdata}/>

                   
        if(this.props.location.state!==undefined){
            nav =(
                <Navbar 
                navdata= {this.props.navdata}
                loginFlag = {this.props.location.state.loginFlag}
                email = {this.props.location.state.email}
                />
            )
        }else{
            nav = (
                <Navbar 
                navdata= {this.props.navdata}
                /> 
            )
        }

        let redirectVar = null;
       
        if(!localStorage.getItem('token')){
            redirectVar = <Redirect to= "/"/>
        }

        return(

            <div>
                {redirectVar}
                {nav}
                {searchbar}  
            </div> 
        )
    }
}
//export Home Component
export default Home;
