// import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
// import { Alert } from 'reactstrap';
// import axios from 'axios';
// import { apply, getProfile } from '../../actions'
// import { connect } from "react-redux";
// import Navbar from './Navbar';
// const ROOT_URL = "http://localhost:3001";

// export class EasyApply extends Component {
//     state = {
//         email: '',
//         resume: '',
//         danger: false,
//         warning: false,
//         profileInfo: [],
//         firstName: "",
//         lastName: "",
//         flag: false
//     }
//     onChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value,
//             danger: false,
//             warning: false
//         })
//     }

//     componentWillMount() {
//         console.log("user email in will mount is: ", localStorage.getItem("email"));
//         const data = {
//           email: localStorage.getItem("email")
//         };

//         this.props.getProfile(data);

//         this.setState({
//         email: localStorage.getItem("email"),
//         firstName: this.state.firstName,
//         lastName: this.state.lastName,
//         })
//         console.log("state", this.state)
//       }

//       componentWillReceiveProps(nextProps) {
//         if (nextProps.profileInfo !== undefined) {
//           this.setState({
//             firstName: nextProps.profileInfo.firstName,
//             lastName: nextProps.profileInfo.lastName,
//           });
//         }
//       }

//     handleResume = (e) => {
//         console.log("Inside Handle Resume")
//         e.preventDefault();
//         this.setState({
//             danger: false
//         })
//         console.log(e.target.files);
//         var resume = e.target.files;
//         var ext = resume[0].name.substr(resume[0].name.lastIndexOf('.') + 1);
//         console.log("ext:",ext)
//         if(ext==='pdf' || ext==='docx' || ext==='doc'){
//             this.setState({
//                 resume: resume[0],
//                 warning: false
//             });
//             document.getElementById('displayResume').innerHTML = resume[0].name;
//         } else {
//             this.setState({
//                 warning: true
//             })
//         }
//     }
//     onSubmit = (e) => {
//         e.preventDefault();
//         // Check if anything is empty
//         if( !this.state.firstName ||
//             !this.state.lastName ||
//             !this.state.email ||
//             !this.state.resume) {
//                 this.setState({
//                     danger: true
//                 })
//         }
//         else {
//             const applicantEmail = localStorage.getItem('email')
//             const data = { 
//                 jobId:localStorage.getItem("jobId"),
//                 firstName: this.state.firstName, 
//                 lastName: this.state.lastName, 
//                 email: applicantEmail
//             }
//             // Multipart Formdata
//             const formDataResume = new FormData();
//             formDataResume.append('applicantEmail', applicantEmail)
//             formDataResume.append('resume', this.state.resume);

//             // Call apply action
//             this.props.apply(data);
            
//             console.log("formData")

//             axios.post(`${ROOT_URL}/resume`, formDataResume)
//                 .then((result) => {
//                     // access results...
//                     console.log("Successfull image upload")
//                 });
//         }
//     }
//   render() {
//     let nav = <Navbar navdata={this.props.navdata}/>
//     console.log("state", this.props.profileInfo)
//     return (
//         <div >
//         {nav}
//       <div style={{marginTop:"5%"}}>
      
//         <h1 style={{textAlign: 'center'}}>Easy Apply</h1>
//         <div className="container" style={{width: 500, marginTop: 60, textAlign: 'left',fontSize:"2rem"}}>
//             <Alert
//                 isOpen={this.state.danger}
//                 color='danger'
//             >
//                 All fields are required!
//             </Alert>
//             <Alert
//                 isOpen={this.state.warning}
//                 color='warning'
//             >
//                 Only pdf and doc/docx files are allowed
//             </Alert>
//             <div className="form-group">
//                 <label for="firstName">First Name:</label>
//                 <input type="text" onChange={this.onChange} className="form-control" placeholder="Enter First Name" value={this.state.firstName} name="firstName" style={{fontSize:"2rem"}} />
//             </div>
//             <br/>
//             <div className="form-group">
//                 <label for="pwd">Last Name:</label>
//                 <input type="text" onChange={this.onChange} value={this.state.lastName} className="form-control" placeholder="Enter Last Name" name="lastName" style={{fontSize:"2rem"}} />
//             </div>
//             <br/>
//             <div className="form-group">
//                 <label for="email">Email:</label>
//                 <input type="email" readOnly value={this.state.email} className="form-control" placeholder="Enter email" name="email" style={{fontSize:"2rem"}}/>
//             </div>
//             <br/>
//             <div className="form-group">
//             <button class="btn btn-primary" style={{backgroundColor:"grey",borderColor:"black",fontSize:"18px",paddingLeft:"10px",paddingRight:"15px"}}>
//                 Resume
//                     <input type="file" onChange={this.handleResume} name="resume" style={{marginRight:"5px"}} />
//                 </button>
//                 <p id="displayResume"></p>
//             </div>
            
//             <br/>
//             <button  onClick={this.onSubmit} className="btn btn-primary" style={{backgroundColor:"grey",borderColor:"black",fontSize:"2rem"}}>Submit</button>
//         </div>
//         .
//       </div>
//       </div>
//     )
//   }
// }

// function mapStateToProps(state) {
//     return {profileInfo: state.getProfileInfo};
//   }
  
//   export default connect(mapStateToProps, { apply, getProfile })(EasyApply);







import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { apply, getProfile } from '../../actions'
import { connect } from "react-redux";
import Navbar from './Navbar';
import { Redirect } from "react-router";
const ROOT_URL = "http://localhost:3001";

export class EasyApply extends Component {
    state = {
        redirectVar: false,
        email: '',
        resume: '',
        danger: "none",
        warning: "none",
        profileInfo: [],
        firstName: "",
        lastName: "",
        resume: "",
        flag: false
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            danger: "none",
            warning: "none"
        })
    }

    componentWillMount() {
        console.log("user email in will mount is: ", localStorage.getItem("email"));
        const data = {
          email: localStorage.getItem("email")
        };

        this.props.getProfile(data);

        this.setState({
        email: localStorage.getItem("email"),
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        resume: this.state.resume
        })
        console.log("state", this.state)
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.profileInfo !== undefined) {
        this.setState({
          firstName: nextProps.profileInfo.firstName,
          lastName: nextProps.profileInfo.lastName,
        });
        if(nextProps.profileInfo.resume) {
          this.setState({
            resume: nextProps.profileInfo.resume
          })
          document.getElementById('displayResume').innerHTML = nextProps.profileInfo.resume
        }
      }
    }

    handleResume = (e) => {
        e.preventDefault();
        this.setState({
            danger: "none"
        })
        console.log(e.target.files);
        var resume = e.target.files;
        var ext = resume[0].name.substr(resume[0].name.lastIndexOf('.') + 1);
        console.log("ext:",ext)
        if(ext==='pdf' || ext==='docx' || ext==='doc'){
            this.setState({
                resume: resume[0],
                warning: "none"
            });
            document.getElementById('displayResume').innerHTML = resume[0].name;
        } else {
            this.setState({
                warning: "block"
            })
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        // Check if anything is empty
        if( !this.state.firstName ||
            !this.state.lastName ||
            !this.state.email ||
            !this.state.resume) {
                this.setState({
                    danger: "block"
                })
        }
        else {
            const applicantEmail = localStorage.getItem('email')
            const companyName = localStorage.getItem('companyName')
            const jobTitle = localStorage.getItem('jobTitle')
            const data = { 
                jobId:localStorage.getItem("jobId"),
                firstName: this.state.firstName, 
                lastName: this.state.lastName, 
                email: applicantEmail,
                companyName: companyName,
                jobTitle: jobTitle
            }
            // Multipart Formdata
            const formDataResume = new FormData();
            formDataResume.append('applicantEmail', applicantEmail)
            formDataResume.append('resume', this.state.resume);

            // Call apply action
            this.props.apply(data);
            
            console.log("formData")

            axios.post(`${ROOT_URL}/resume`, formDataResume)
                .then((result) => {
                    // access results...
                    console.log("Successfull image upload")
                });
            this.setState({
                redirectVar: true
            })
            console.log('here')
        }
    }
  render() {
let errorMessage=null;
    if (this.props.application.code == 405) {
        errorMessage = (
          <div
            style={{
              fontSize: "24px",
   
              lineHeight: "20px",
              color: "red",
              textAlign: "center",
              padding: "10px"
            }}
          >
            <p style={{ color: "red" }}>You have already applied for this job.</p>
          </div>
        );
      }

    let redirectVar = null;
    if(this.props.application.code==200){
        redirectVar=<Redirect to="/applicant/profile/myJobs"/>
    }
    let nav = <Navbar navdata={this.props.navdata}/>
    console.log("state", this.props.profileInfo)
    return (
        <div >
        {redirectVar}
        {nav}
      <div style={{marginTop:"5%"}}>
      
        <h1 style={{textAlign: 'center'}}>Easy Apply</h1>
        {errorMessage}
        <div className="container" style={{width: 500, marginTop: 60, textAlign: 'left',fontSize:"2rem"}}>
            <div
                style={{display: this.state.danger, color: "red"}}
            >
                All fields are required!
            </div>
            <div
                style={{display: this.state.warning}}
            >
                Only pdf and doc/docx files are allowed
            </div>
            <div className="form-group">
                <label for="firstName">First Name:</label>
                <input type="text" onChange={this.onChange} className="form-control" placeholder="Enter First Name" value={this.state.firstName} name="firstName" style={{fontSize:"2rem"}} />
            </div>
            <br/>
            <div className="form-group">
                <label for="pwd">Last Name:</label>
                <input type="text" onChange={this.onChange} value={this.state.lastName} className="form-control" placeholder="Enter Last Name" name="lastName" style={{fontSize:"2rem"}} />
            </div>
            <br/>
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" readOnly value={this.state.email} className="form-control" placeholder="Enter email" name="email" style={{fontSize:"2rem"}}/>
            </div>
            <br/>
            <div className="form-group">
            <button class="btn btn-primary" style={{backgroundColor:"grey",borderColor:"black",fontSize:"18px",paddingLeft:"10px",paddingRight:"15px"}}>
                Resume
                    <input type="file" onChange={this.handleResume} name="resume" style={{marginRight:"5px"}} />
                </button>
                <p id="displayResume"></p>
            </div>
            
            <br/>
            <button  onClick={this.onSubmit} className="btn btn-primary" style={{backgroundColor:"grey",borderColor:"black",fontSize:"2rem"}}>Submit</button>
        </div>
        .
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {profileInfo: state.getProfileInfo, application:state.application};
  }
  
  export default connect(mapStateToProps, { apply, getProfile })(EasyApply);