import React,{Component} from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import { SplitButton,DropdownButton, MenuItem, Button, Image } from 'react-bootstrap';
//import { createUser } from "../../actions";
import { connect } from "react-redux";
import _ from "lodash";
import { loginUser } from "../../actions";
import { searchUsers } from "../../actions";
import { Field, reduxForm } from "redux-form";



//create the Navbar Component
class UserSearchBar extends Component {
    constructor(props){
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            // email : "",
            // password : "",
            // type : "",
            loginFlag : false,
            err : null //"Enter valid credentials"
        }
    }

    // componentDidMount(){
    // //    let signup_res= this.props.createUser();
    // //    console.log("signup response",signup_res)
                 
    // }
    
    //handle logout to destroy the cookie

    renderFieldUser(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;
    
        return (
          <div className={className}>
            <label>{field.label}</label>
            <input style={{fontSize:"2.2rem",backgroundColor:"white",borderColor:"black",fontSize:"16px",borderRadius:"15px",color:"black",padding:"5px"}} className="form-control" type="text" {...field.input}  placeholder={field.placeholder}/>
            <div className="text-help">
              {touched ? error : ""}
            </div>
          </div>
        );
      }


      onSubmit(values) {
        console.log("search data",values);
        this.props.searchUsers(values, () => {
           //this.props.history.push("/applicant/applicantHome");
         // this.props.history.push("/applicant/fetchJobs");
          window.location.href="/applicant/fetchUsers";
          // window.location.reload(1); //refreshes the page so redux state is lost
           console.log("tested")
         });
      }

      handleFocus = () => { 
        this.setState({err : null});
    }
    
    render(){

        const { handleSubmit } = this.props;
       // this.state.email=localStorage.getItem("email")
        //if Cookie is set render Logout and user Button
        //<li><Link to="/" onClick = {this.handleLogout}><span class="glyphicon glyphicon-user"></span>Logout</Link></li>
       
            //Else display login button
            

            let redirectVar = null;

        return(
           
            

                    <div className="co" style={{}} >
                    {redirectVar}  
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                    

                    <div class="col-sm-4" style={{marginTop:"-17px",width:"150px"}}>
                    <Field
                    name="User"
                    component={this.renderFieldUser}
                    placeholder="User"
                    />
                    </div>

                    <div class="col-sm-6" style={{width:"170px",marginTop:"4px"}}>
                    <button class="btn1 btn-primary" style={{backgroundColor:"white",borderColor:"black",fontSize:"16px",borderRadius:"15px",color:"black",padding:"5px"}}>Search People...</button>
                    </div>

                    </form>
                      
                </div>
                
            
    
            
        )
    }
}

function validate(values) {

    const errors = {};
  
    // Validate the inputs from 'values'
    if (!values.User) {
      errors.location = "Enter Name of User";
    }
    
  
    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
  }

  function mapStateToProps(state) {
    return { loginApplicant: state.loginApplicant };
  }


export default reduxForm({
    validate,
    form: "UserSearchForm"
  })(connect(mapStateToProps, { loginUser, searchUsers })(UserSearchBar));
 
  
//export default connect(mapStateToProps, { loginUser, logoutUser })(LoginNavbar);
//export default Navbar;