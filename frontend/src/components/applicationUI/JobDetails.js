// import React, { Component } from "react";
// import { Route, withRouter, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import "../../App.css";
// import { Redirect } from "react-router";
// import cookie from "react-cookies";
// import axios from "axios";
// import { getProfile,apply } from '../../actions'
// //import validator from "validator";
// //import ApplicationNavbar from "./ApplicationNavbar";
// import Navbar from "../applicantUI/Navbar";
// import {
//     Button, 
//     Modal, 
//     ModalHeader, 
//     ModalBody, 
//     Input, 
//     Label, 
//     FormGroup,
//     Alert
// } from 'reactstrap';
// import MuiThemeProvider from 
//   'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';
// import { connect } from 'react-redux';
// import { Apply } from '../../actions/'
// // import EasyApplyModal from './EasyApplyModal';
// //jobID from job search list applicantID as well

// class JobDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       jobDetails: [],
//       jobIdFetch: null
//       // jobDetails: [{ name: "abc", type: "def" }]
//     };
//     this.handleApply = this.handleApply.bind(this);
//    // this.handleEasyApply = this.handleEasyApply.bind(this);
//   }
  
//   // For Easy Apply Modal
//   state = {
//     modal: false,
//     firstName: '',
//     lastName: '',
//     email: '',
//     resume: '',
//     danger: false,
//     warning: false
//   }


//   componentDidMount() {
//     const data = {jobId: this.props.location.state.displayprops};
//     //   const data = localStorage.getItem(jobId);
//     //console.log("Job ID: " + data);
//     this.setState({
//       jobIdFetch: data.jobId
//     });
//     //console.log("Job Fetch ID: "+this.jobIdFetch);
//     console.log("Job Fetch ID: "+this.props.location.state.displayprops);
//     console.log("Job ID: " + data.jobId);
//     axios
//       .get(`http://localhost:3001/applicationModule/jobDetails/${data.jobId}`)
//       .then(response => {
//         //update the state with the response data
//         console.log("Response UI: " + response.data);
//         if (response.status === 200) {
//           this.setState({
//             flag: true,
//             jobDetails: response.data
//           });
//           //console.log("HELLO FIND ME");
//           console.log("jobDetails state variable is: ", this.state.jobDetails);
//           console.log();
//         } else {
//           window.alert("Page cannot be fetched right now");
//         }
//       });
//   }

//   handleApply = e => {
//     window.localStorage.setItem("jobId", this.props.location.state.displayprops);
//   };

// //   handleEasyApply = e => {
// //     window.localStorage.setItem("jobId", this.props.location.state.displayprops);
// //   };
//     // For Easy Apply Modal
//     toggle = () => {
//         this.setState({
//             modal: !this.state.modal
//         });
//     }

//     onChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value,
//             danger: false,
//             warning: false
//         })
//     }

//     // Handle Resume
//     handleResume = (e) => {
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
//             // Multipart Formdata
//             const formData = new FormData();
//             formData.append('applicantEmail', applicantEmail)
//             formData.append('firstName', this.state.firstName);
//             formData.append('lastName', this.state.lastName);
//             formData.append('email', this.state.email);
//             formData.append('resume', this.state.resume);

//             // Call easyApply action
//             this.props.apply(formData);

//             // Close modal
//             this.toggle();

//             // redirect to applicant home page
//             //
//             //
//         }
//     };

//   render() {
//     const { jobDetails } = this.state;
//     let jobFetch = null;
// console.log(jobDetails.easyApply);
//     /*if (
//       this.state.jobIdFetch === 1 ||
//       this.state.jobIdFetch === 3 ||
//       this.state.jobIdFetch === 5
//     )*/
//     if (
//       jobDetails.easyApply === "no" ||  jobDetails.easyApply === "No"
//     )     {
//       console.log("jobID if: "+this.props.location.state.displayprops);
//       jobFetch =
//        (
//         <div>
          
//           <div>
//             <div class="container-fluid">
//               <div class="container1">
//                 <div class="row1">
//                   <h2>
//                     <b>Job Details</b>
//                   </h2>
//                   <hr />
//                 </div>
//                 <div class="conatainer-fluid">
//                   <div class="row2">
//                     <h4>
//                       <i>
//                         <b>
//                           <u> Job Title :</u>
//                         </b>
//                       </i>
//                     </h4>

//                     <div class="card">
//                       <div class="card-body">
//                         <p
//                           style={{
//                             fontWeight: "200",
//                             fontFamily: "Sans Serif"
//                           }}
//                         >
//                           {jobDetails.jobTitle}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div class="row2">
//                     <h4>
//                       <i>
//                         <b>
//                           <u>Location :</u>
//                         </b>
//                       </i>
//                     </h4>

//                     <div class="card">
//                       <div class="card-body">
//                         <p
//                           style={{
//                             fontWeight: "200",
//                             fontFamily: "Sans Serif"
//                           }}
//                         >
//                           {jobDetails.location}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div class="row2">
//                     <h4>
//                       <i>
//                         <b>
//                           <u>About the Job :</u>
//                         </b>
//                       </i>
//                     </h4>

//                     <div class="card">
//                       <div class="card-body">
//                         <p
//                           style={{
//                             fontWeight: "200",
//                             fontFamily: "Sans Serif"
//                           }}
//                         >
//                           {" "}
//                           Company Name : {jobDetails.companyName}
//                         </p>
//                         <hr />

//                         <p
//                           style={{
//                             fontWeight: "200",
//                             fontFamily: "Sans Serif"
//                           }}
//                         >
//                           {" "}
//                           Industry :{jobDetails.industry}
//                         </p>
//                         <hr />

//                         <p
//                           style={{
//                             fontWeight: "200",
//                             fontFamily: "Sans Serif"
//                           }}
//                         >
//                           {" "}
//                           Job Description : {jobDetails.jobDescription}
//                         </p>
//                         <hr />

//                         <p
//                           style={{
//                             fontWeight: "200",
//                             fontFamily: "Sans Serif"
//                           }}
//                         >
//                           {" "}
//                           Job Function : {jobDetails.jobFunction}
//                         </p>
//                         <hr />

//                         <p
//                           style={{
//                             fontWeight: "200",
//                             fontFamily: "Sans Serif"
//                           }}
//                         >
//                           {" "}
//                           Employment Type : {jobDetails.employmentType}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <hr />
//                 <Link 
//                   to="/Application" 
//                   target="_blank" 
//                 >
//                   <button type="submit" class="btn " onClick={this.handleApply}>
//                     Apply
//                   </button>
//                 </Link>
//                     {/* <a href="/Application"> Apply</a> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     } else 
//     {
//       console.log("jobID else: "+this.props.location.state.displayprops);
      
//        // return( <EasyApplyModal> // </EasyApplyModal> ) 
     
//       jobFetch = 
//       (
//         <div>
//           <Navbar /> // <Navbar />
//           <div>
//             <div class="container-fluid">
//               <div class="container1">
//                 <div class="row1">
//                   <h2>
//                     <b>Job Details</b>
//                   </h2>
//                   <hr />
//                 </div>
//                 <div class="conatainer-fluid">
//                   <div class="row2">
//                     <h4>
//                       <i>
//                         <b>
//                           <u> Job Title :</u>
//                         </b>
//                       </i>
//                     </h4>

//                     <div class="card">
//                       <div class="card-body">
//                         <p
//                           style={{
//                             fontWeight: "200",
//                             fontFamily: "Sans Serif"
//                           }}
//                         >
//                           {jobDetails.jobTitle}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div class="row2">
//                     <h4>
//                       <i>
//                         <b>
//                           <u>Location :</u>
//                         </b>
//                       </i>
//                     </h4>

//                     <div class="card">
//                       <div class="card-body">
//                         <p
//                           style={{
//                             fontWeight: "200",
//                             fontFamily: "Sans Serif"
//                           }}
//                         >
//                           {jobDetails.location}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div class="row2">
//                     <h4>
//                       <i>
//                         <b>
//                           <u>About the Job :</u>
//                         </b>
//                       </i>
//                     </h4>

//                     <div class="card">
//                       <div class="card-body">
//                         <p
//                           style={{
//                             fontWeight: "200",
//                             fontFamily: "Sans Serif"
//                           }}
//                         >
//                           {" "}
//                           Company Name : {jobDetails.companyName}
//                         </p>
//                         <hr />

//                         <p
//                           style={{
//                             fontWeight: "200",
//                             fontFamily: "Sans Serif"
//                           }}
//                         >
//                           {" "}
//                           Industry :{jobDetails.industry}
//                         </p>
//                         <hr />

//                         <p
//                           style={{
//                             fontWeight: "200",
//                             fontFamily: "Sans Serif"
//                           }}
//                         >
//                           {" "}
//                           Job Description : {jobDetails.jobDescription}
//                         </p>
//                         <hr />

//                         <p
//                           style={{
//                             fontWeight: "200",
//                             fontFamily: "Sans Serif"
//                           }}
//                         >
//                           {" "}
//                           Job Function : {jobDetails.jobFunction}
//                         </p>
//                         <hr />

//                         <p
//                           style={{
//                             fontWeight: "200",
//                             fontFamily: "Sans Serif"
//                           }}
//                         >
//                           {" "}
//                           Employment Type : {jobDetails.employmentType}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <hr />
//                 <MuiThemeProvider>
//                   <Link 
//                     to="/EasyApply" 
//                     target="_blank"
//                   >
//                     <Button
//                       color="dark"
//                       style={{ marginBottom: '2rem' }}
//                       onClick={this.toggle}
//                     >
//                       Easy Apply
//                     </Button>
//                   </Link>
//                   {/* <a href="/EasyApply">Easy Apply</a> */}
//                {/*} <Modal
//                     isOpen={this.state.modal}
//                     toggle={this.toggle}
//                 >
//                     <ModalHeader toggle={this.toggle}>Apply in a few seconds using easy apply!</ModalHeader>
//                     <ModalBody>
//                         <Alert
//                             isOpen={this.state.danger}
//                             color='danger'
//                         >
//                             All fields are required!
//                         </Alert>
//                         <Alert
//                             isOpen={this.state.warning}
//                             color='warning'
//                         >
//                             Only pdf and doc/docx files are allowed
//                         </Alert>
//                         <FormGroup>
//                             <Label for="item">Item</Label>
//                             <Input 
//                                 type="text"
//                                 name="firstName"
//                                 id="firstName"
//                                 placeholder="First Name"
//                                 onChange={this.onChange}
//                                 value={this.state.firstName}
//                             />
//                             <br/>
//                             <Input 
//                                 type="text"
//                                 name="lastName"
//                                 id="lastName"
//                                 placeholder="Last Name"
//                                 onChange={this.onChange}
//                                 value={this.state.lastName}
//                             />
//                             <br/>
//                             <Input 
//                                 type="text"
//                                 name="email"
//                                 id="email"
//                                 placeholder="Email"
//                                 onChange={this.onChange}
//                                 value={this.state.email}
//                             />
//                             <br/>
//                             <RaisedButton
//                                 containerElement="label"
//                                 label="Add a Resume"
//                             >
//                                 <input
//                                     name="resume"
//                                     type="file" 
//                                     onChange={this.handleResume}
//                                     hidden 
//                                 />
//                             </RaisedButton>
//                             <p id="displayResume"></p>
//                             <br/>
//                             <Button
//                                 color="dark"
//                                 style={{marginTop: '2rem'}}
//                                 onClick={this.onSubmit}
//                                 block     
//                             >Add Item
//                             </Button>
//                         </FormGroup>
//                     </ModalBody>
//                         </Modal>*/}
//                 </MuiThemeProvider>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//     return  (
//       <div>
//       <Navbar /> // <Navbar />
//     {jobFetch}
//     </div>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//   profileInfo: state.getProfileInfo
// });

// export default connect(mapStateToProps, { apply , getProfile })(JobDetails);

// //export default JobDetails;









import React, { Component } from "react";
import { Route, withRouter, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import "../../App.css";
import { Redirect } from "react-router";
import cookie from "react-cookies";
import axios from "axios";
import { getProfile,apply } from '../../actions'
//import validator from "validator";
//import ApplicationNavbar from "./ApplicationNavbar";
import Navbar from "../applicantUI/Navbar";
import {
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    Input, 
    Label, 
    FormGroup,
    Alert
} from 'reactstrap';
import MuiThemeProvider from 
  'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { Apply } from '../../actions/'
// import EasyApplyModal from './EasyApplyModal';
//jobID from job search list applicantID as well

class JobDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobDetails: [],
      jobIdFetch: null
      // jobDetails: [{ name: "abc", type: "def" }]
    };
    this.handleApply = this.handleApply.bind(this);
   // this.handleEasyApply = this.handleEasyApply.bind(this);
  }
  
  // For Easy Apply Modal
  state = {
    modal: false,
    firstName: '',
    lastName: '',
    email: '',
    resume: '',
    danger: false,
    warning: false
  }


  componentDidMount() {
    const data = {jobId: this.props.location.state.displayprops};
    //   const data = localStorage.getItem(jobId);
    //console.log("Job ID: " + data);
    this.setState({
      jobIdFetch: data.jobId
    });
    //console.log("Job Fetch ID: "+this.jobIdFetch);
    console.log("Job Fetch ID: "+this.props.location.state.displayprops);
    console.log("Job ID: " + data.jobId);
    axios
      .get(`http://localhost:3001/applicationModule/jobDetails/${data.jobId}`)
      .then(response => {
        //update the state with the response data
        console.log("Response UI: " + response.data);
        if (response.status === 200) {
          this.setState({
            flag: true,
            jobDetails: response.data
          });
          //console.log("HELLO FIND ME");
          console.log("jobDetails state variable is: ", this.state.jobDetails);
          console.log();
        } else {
          window.alert("Page cannot be fetched right now");
        }
      });
  }

  handleApply = e => {
    window.localStorage.setItem("jobId", this.props.location.state.displayprops);
  };

//   handleEasyApply = e => {
//     window.localStorage.setItem("jobId", this.props.location.state.displayprops);
//   };
    // For Easy Apply Modal
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            danger: false,
            warning: false
        })
    }

    // Handle Resume
    handleResume = (e) => {
        e.preventDefault();
        this.setState({
            danger: false
        })
        console.log(e.target.files);
        var resume = e.target.files;
        var ext = resume[0].name.substr(resume[0].name.lastIndexOf('.') + 1);
        console.log("ext:",ext)
        if(ext==='pdf' || ext==='docx' || ext==='doc'){
            this.setState({
                resume: resume[0],
                warning: false
            });
            document.getElementById('displayResume').innerHTML = resume[0].name;
        } else {
            this.setState({
                warning: true
            })
        }
    }

    
      setItems = data => (e) => {
        localStorage.setItem("jobTitle", data.jobTitle)
        localStorage.setItem("companyName", data.companyName)
        const data1 = {
          "jobId": localStorage.getItem("jobId")
        }
        axios.post('http://localhost:3001/halfApply', data1)
      }
  
    

    onSubmit = (e) => {
        e.preventDefault();
        // Check if anything is empty
        if( !this.state.firstName ||
            !this.state.lastName ||
            !this.state.email ||
            !this.state.resume) {
                this.setState({
                    danger: true
                })
        }
        else {
            const applicantEmail = localStorage.getItem('email')
            // Multipart Formdata
            const formData = new FormData();
            formData.append('applicantEmail', applicantEmail)
            formData.append('firstName', this.state.firstName);
            formData.append('lastName', this.state.lastName);
            formData.append('email', this.state.email);
            formData.append('resume', this.state.resume);

            // Call easyApply action
            this.props.apply(formData);

            // Close modal
            this.toggle();

            // redirect to applicant home page
            //
            //
        }
    };

  render() {
    const { jobDetails } = this.state;
    let jobFetch = null;
    const data = {
      "jobTitle": jobDetails.jobTitle,
      "companyName": jobDetails.companyName
    }

    /*if (
      this.state.jobIdFetch === 1 ||
      this.state.jobIdFetch === 3 ||
      this.state.jobIdFetch === 5
    )*/
    if (
      jobDetails.easyApply === "no" || jobDetails.easyApply === "No"
    )     {
      console.log("jobID if: "+this.props.location.state.displayprops);
      jobFetch =
       (
        <div>
          
          <div>
            <div class="container-fluid">
              <div class="container1">
                <div class="row1">
                  <h2>
                    <b>Job Details</b>
                  </h2>
                  <hr />
                </div>
                <div class="conatainer-fluid">
                  <div class="row2">
                    <h4>
                      <i>
                        <b>
                          <u> Job Title :</u>
                        </b>
                      </i>
                    </h4>

                    <div class="card">
                      <div class="card-body">
                        <p
                          style={{
                            fontWeight: "200",
                            fontFamily: "Sans Serif"
                          }}
                        >
                          {jobDetails.jobTitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="row2">
                    <h4>
                      <i>
                        <b>
                          <u>Location :</u>
                        </b>
                      </i>
                    </h4>

                    <div class="card">
                      <div class="card-body">
                        <p
                          style={{
                            fontWeight: "200",
                            fontFamily: "Sans Serif"
                          }}
                        >
                          {jobDetails.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="row2">
                    <h4>
                      <i>
                        <b>
                          <u>About the Job :</u>
                        </b>
                      </i>
                    </h4>

                    <div class="card">
                      <div class="card-body">
                        <p
                          style={{
                            fontWeight: "200",
                            fontFamily: "Sans Serif"
                          }}
                        >
                          {" "}
                          Company Name : {jobDetails.companyName}
                        </p>
                        <hr />

                        <p
                          style={{
                            fontWeight: "200",
                            fontFamily: "Sans Serif"
                          }}
                        >
                          {" "}
                          Industry :{jobDetails.industry}
                        </p>
                        <hr />

                        <p
                          style={{
                            fontWeight: "200",
                            fontFamily: "Sans Serif"
                          }}
                        >
                          {" "}
                          Job Description : {jobDetails.jobDescription}
                        </p>
                        <hr />

                        <p
                          style={{
                            fontWeight: "200",
                            fontFamily: "Sans Serif"
                          }}
                        >
                          {" "}
                          Job Function : {jobDetails.jobFunction}
                        </p>
                        <hr />

                        <p
                          style={{
                            fontWeight: "200",
                            fontFamily: "Sans Serif"
                          }}
                        >
                          {" "}
                          Employment Type : {jobDetails.employmentType}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <Link 
                  to="/Application" 
                  target="_blank" 
                >
                  <button type="submit" class="btn " onClick={this.setItems(data)}>
                    Apply
                  </button>
                </Link>
                    {/* <a href="/Application"> Apply</a> */}
              </div>
            </div>
          </div>
        </div>
      );
    } else 
    {
      console.log("jobID else: "+this.props.location.state.displayprops);
      
       // return( <EasyApplyModal> // </EasyApplyModal> ) 
     
      jobFetch = 
      (
        <div>
          <Navbar /> // <Navbar />
          <div>
            <div class="container-fluid">
              <div class="container1">
                <div class="row1">
                  <h2>
                    <b>Job Details</b>
                  </h2>
                  <hr />
                </div>
                <div class="conatainer-fluid">
                  <div class="row2">
                    <h4>
                      <i>
                        <b>
                          <u> Job Title :</u>
                        </b>
                      </i>
                    </h4>

                    <div class="card">
                      <div class="card-body">
                        <p
                          style={{
                            fontWeight: "200",
                            fontFamily: "Sans Serif"
                          }}
                        >
                          {jobDetails.jobTitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="row2">
                    <h4>
                      <i>
                        <b>
                          <u>Location :</u>
                        </b>
                      </i>
                    </h4>

                    <div class="card">
                      <div class="card-body">
                        <p
                          style={{
                            fontWeight: "200",
                            fontFamily: "Sans Serif"
                          }}
                        >
                          {jobDetails.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="row2">
                    <h4>
                      <i>
                        <b>
                          <u>About the Job :</u>
                        </b>
                      </i>
                    </h4>

                    <div class="card">
                      <div class="card-body">
                        <p
                          style={{
                            fontWeight: "200",
                            fontFamily: "Sans Serif"
                          }}
                        >
                          {" "}
                          Company Name : {jobDetails.companyName}
                        </p>
                        <hr />

                        <p
                          style={{
                            fontWeight: "200",
                            fontFamily: "Sans Serif"
                          }}
                        >
                          {" "}
                          Industry :{jobDetails.industry}
                        </p>
                        <hr />

                        <p
                          style={{
                            fontWeight: "200",
                            fontFamily: "Sans Serif"
                          }}
                        >
                          {" "}
                          Job Description : {jobDetails.jobDescription}
                        </p>
                        <hr />

                        <p
                          style={{
                            fontWeight: "200",
                            fontFamily: "Sans Serif"
                          }}
                        >
                          {" "}
                          Job Function : {jobDetails.jobFunction}
                        </p>
                        <hr />

                        <p
                          style={{
                            fontWeight: "200",
                            fontFamily: "Sans Serif"
                          }}
                        >
                          {" "}
                          Employment Type : {jobDetails.employmentType}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <MuiThemeProvider>
                  <Link 
                    to="/EasyApply" 
                    target="_blank"
                  >
                    <Button
                      color="dark"
                      style={{ marginBottom: '2rem' }}
                      
                      onClick={this.setItems(data)}
                    >
                      Easy Apply
                    </Button>
                  </Link>
                  {/* <a href="/EasyApply">Easy Apply</a> */}
               {/*} <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Apply in a few seconds using easy apply!</ModalHeader>
                    <ModalBody>
                        <Alert
                            isOpen={this.state.danger}
                            color='danger'
                        >
                            All fields are required!
                        </Alert>
                        <Alert
                            isOpen={this.state.warning}
                            color='warning'
                        >
                            Only pdf and doc/docx files are allowed
                        </Alert>
                        <FormGroup>
                            <Label for="item">Item</Label>
                            <Input 
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="First Name"
                                onChange={this.onChange}
                                value={this.state.firstName}
                            />
                            <br/>
                            <Input 
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Last Name"
                                onChange={this.onChange}
                                value={this.state.lastName}
                            />
                            <br/>
                            <Input 
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                                onChange={this.onChange}
                                value={this.state.email}
                            />
                            <br/>
                            <RaisedButton
                                containerElement="label"
                                label="Add a Resume"
                            >
                                <input
                                    name="resume"
                                    type="file" 
                                    onChange={this.handleResume}
                                    hidden 
                                />
                            </RaisedButton>
                            <p id="displayResume"></p>
                            <br/>
                            <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                onClick={this.onSubmit}
                                block     
                            >Add Item
                            </Button>
                        </FormGroup>
                    </ModalBody>
                        </Modal>*/}
                </MuiThemeProvider>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return  (
      <div>
      <Navbar /> // <Navbar />
    {jobFetch}
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profileInfo: state.getProfileInfo
});

export default connect(mapStateToProps, { apply , getProfile })(JobDetails);

//export default JobDetails;
