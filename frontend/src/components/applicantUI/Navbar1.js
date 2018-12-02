import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import { SplitButton,DropdownButton, MenuItem, Button, Image } from 'react-bootstrap';
//import { createUser } from "../../actions";
import { connect } from "react-redux";
import _ from "lodash";
import UserSearchBar from './UserSearchBar';
import { loginUser } from "../../actions";
import { logoutUser } from "../../actions";
import { tlogout } from "../../actions";


//create the Navbar Component
class Navbar1 extends Component {
    constructor(props){
        super(props);
        this.state = {  
           // username : "test",
           username : "",
           // username : cookie.load("cookie"),
            authFlag : this.props.loginFlag,
            userdisplay : false
        }  
        this.handleLogout = this.handleLogout.bind(this);
      //  this.handleUser = this.handleUser.bind(this);
      console.log("in construtor",this.props.login.email)
    }

    // componentDidMount(){
    // //    let signup_res= this.props.createUser();
    // //    console.log("signup response",signup_res)
                 
    // }
    
    //handle logout to destroy the cookie
    handleLogout = () => {
        cookie.remove('cookie', { path: '/' })
        //this.props.logoutUser(); 
        this.props.tlogout();
        
        
            
    }
    
    render(){
        //if Cookie is set render Logout and user Button
        //<li><Link to="/" onClick = {this.handleLogout}><span class="glyphicon glyphicon-user"></span>Logout</Link></li>
        let navLogin = null;
        let help = null;
        let listyourproperty = null;
        
        let searchbar1 = <UserSearchBar searchrender={this.props.searchrender}/>
        let redirectVar = null;

        // let details= _.map(this.props.login.email, login => { 
           
           // console.log("User flag Page:",login.token);
       // })
        if(localStorage.getItem('token')){
            console.log("Able to read token");
            console.log("User Info Page:",this.state.username);
            console.log("User login info Page:",this.props.login.email);
            // console.log("User Info Page:",this.props.email);
            // console.log("User flag Page:",this.props.token);
            //  <MenuItem eventKey="2" onClick={this.handleUser}>

            this.state.email=localStorage.getItem("email")
            
            navLogin = (
                <ul class="nav navbar-nav navbar-right navbar-brand" style={{marginTop:"-7px",marginRight:"1%"}}>
                        <DropdownButton title={this.state.email} style={{backgroundColor:"transparent",font:"50%",color:"white",marginTop:"0px",width:"100%"}} >
                            <MenuItem eventKey="1" ><Link to="/applicant/profile/myJobs">My Jobs</Link></MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="2"><Link to="/applicant/profile/getprofile">My Profile</Link></MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="3" ><Link to="/account">Account</Link></MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="4"><Link to="/applicant/profile/getprofile">Dashboard</Link></MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="5" onClick={this.handleLogout}><Link to="/">Logout</Link></MenuItem>
                        </DropdownButton>
                </ul>
            );
        }

       
        

        
          // {redirectVar} 

        return(
            <div style={{opacity:"1",zIndex:"1000",position:"absolute"}}>
            {redirectVar}  
            <nav class="navbar navbar-light navbar-fixed-top" style={{backgroundColor:"#283e4a",height:"5%"}}>
                <div class="container" >
                    <div class="navbar-header">
                        <a class="navbar-brand" href="/"><img alt="LinkedIn logo" class="site-header-logo__img img-responsive" role="presentation" src="https://static.licdn.com/sc/h/95o6rrc5ws6mlw6wqzy0xgj7y"></img></a>
                    </div>

                    
                    
                    {/* {navLogin} */}
                    

                   

                    
                      
                    <div class="nav navbar-nav navbar-right navbar-brand" style={{marginLeft:"5px",borderRight:"1px solid white",marginRight:"50px"}}>
                    <Link to="/recruiter/home">
                        <p style={{ color: "white",fontFamily:"Serif"}}>Recruiter Home</p>
                    </Link>
                    </div>

                     <div class="nav navbar-nav navbar-right navbar-brand" style={{borderRight:"1px solid white",borderLeft:"1px solid white"}}>
                    <Link to="/">
                        <p style={{ color: "white" ,fontFamily:"Serif"}}>Applicant Home</p>
                    </Link>
                    </div>
                </div>
            </nav>
    </div>
            
        )
    }
}
 function mapStateToProps(state) {
     return { login: state.login };
   }
  
   export default connect(mapStateToProps, { loginUser, logoutUser,tlogout })(Navbar1);
//export default Navbar;