// import React, { Component } from 'react';
// import MuiThemeProvider from 
//   'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import axios from 'axios';
// import { List, ListItem } from 'material-ui/List';
// import RaisedButton from 'material-ui/RaisedButton';
// import { apply } from '../../actions'
// import { connect } from "react-redux";
// var moment = require("moment");
// const ROOT_URL = "http://localhost:3001";
// export class Confirm extends Component {

//   continue = (e) => {
//     e.preventDefault();
//     var date = moment().toDate();
//     date = moment(date).format("MM/DD/YYYY");
//    // const { values: { firstName, lastName, email, education, occupation, city, bio, about, sponsorship, disability, resume, coverLetter } } = this.props;
//     const data= { 
//       jobId:localStorage.getItem("jobId"),
//       firstName: this.props.values.firstName, 
//       lastName: this.props.values.lastName, 
//       email: this.props.values.email, 
//       education:this.props.values.education,
//       occupation: this.props.values.occupation, 
//       city:this.props.values.city, 
//       bio:this.props.values.bio, 
//       about:this.props.values.about, 
//       sponsorship:this.props.values.sponsorship,
//       disability:this.props.values.disability, 
//       resume:"resume"+this.props.values.email,
//       coverLetter:"coverLetter"+this.props.values.email,
//       appliedOn: date
//     }  
//     console.log("values",data)
//     const applicantEmail = localStorage.getItem('email')
//     const formDataResume = new FormData();
//     const formDataCoverLetter = new FormData();
    
//     formDataResume.append('applicantEmail',applicantEmail)
//     formDataResume.append('resume', this.props.values.resume)
//     formDataCoverLetter.append('applicantEmail',applicantEmail)
//     formDataCoverLetter.append('coverLetter', this.props.values.coverLetter)
//     // Send request to backend
    
//     this.props.apply(data);
//     console.log("formData")
//     axios.post(`${ROOT_URL}/resume`, formDataResume)
//                             .then((result) => {
//                               // access results...
//                               console.log("Successfull image upload")
//                             });
//     axios.post(`${ROOT_URL}/coverletter`, formDataCoverLetter)
//                             .then((result) => {
//                               // access results...
//                               console.log("Successfull image upload")
//                             });                        
//     this.props.nextStep();
//   }
//   back = (e) => {
//     e.preventDefault();
//     this.props.prevStep();
//   }
//   render() {
//     const { values: { firstName, lastName, email, education, occupation, city, bio, about, sponsorship, disability } } = this.props;
//     return (
//       <MuiThemeProvider>
//         <React.Fragment>
//           <AppBar title="Confirm User Data" />
//           <List>
//             <ListItem
//               primaryText="First Name"
//               secondaryText={ firstName }
//             />
//             <ListItem
//               primaryText="Last Name"
//               secondaryText={ lastName }
//             />
//             <ListItem
//               primaryText="Email"
//               secondaryText={ email }
//             />
//             <ListItem
//               primaryText="Education Level"
//               secondaryText={ education }
//             />
//             <ListItem
//               primaryText="Occupation"
//               secondaryText={ occupation }
//             />
//             <ListItem
//               primaryText="City"
//               secondaryText={ city }
//             />
//             <ListItem
//               primaryText="Bio"
//               secondaryText={ bio }
//             />
//             <ListItem
//               primaryText="How Did You Hear About Us"
//               secondaryText={ about }
//             />
//             <ListItem
//               primaryText="Sponsorship Requirements"
//               secondaryText={ sponsorship }
//             />
//             <ListItem
//               primaryText="Disabilities"
//               secondaryText={ disability }
//             />
//           </List>
//           <RaisedButton
//             label="Back"
//             primary={false}
//             style={styles.button}
//             onClick={this.back}
//           />
//           <RaisedButton
//             label="Confirm & Continue"
//             primary={true}
//             style={styles.button}
//             onClick={this.continue}
//           />
//         </React.Fragment>
//       </MuiThemeProvider>
//     )
//   }
// }
// const styles = {
//   button: {
//     margin: 15
//   }
// }
// function mapStateToProps(state) {
//   return { user: state.user };
// }
// export default connect(mapStateToProps, { apply })(Confirm);



// import React, { Component } from 'react';
// import MuiThemeProvider from 
//   'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import axios from 'axios';
// import { List, ListItem } from 'material-ui/List';
// import RaisedButton from 'material-ui/RaisedButton';
// import { apply } from '../../actions'
// import { connect } from "react-redux";
// const ROOT_URL = "http://localhost:3001";
// export class newConfirm extends Component {
  
//   continue = (e) => {
//     e.preventDefault();
//    // const { values: { firstName, lastName, email, education, occupation, city, bio, about, sponsorship, disability, resume, coverLetter } } = this.props;
//     const data= { 
//       jobId:localStorage.getItem("jobId"),
//       firstName: this.props.values.firstName, 
//       lastName: this.props.values.lastName, 
//       email: this.props.values.email, 
//       education:this.props.values.education,
//       occupation: this.props.values.occupation, 
//       city:this.props.values.city, 
//       bio:this.props.values.bio, 
//       about:this.props.values.about, 
//       sponsorship:this.props.values.sponsorship,
//       disability:this.props.values.disability, 
//       resume:"resume"+this.props.values.email,
//       coverLetter:"coverLetter"+this.props.values.email 
//     }  
//     console.log("values",data)
//     const applicantEmail = localStorage.getItem('email')
//     const formDataResume = new FormData();
//     const formDataCoverLetter = new FormData();
    
//     formDataResume.append('applicantEmail',applicantEmail)
//     formDataResume.append('resume', this.props.values.resume)
//     formDataCoverLetter.append('applicantEmail',applicantEmail)
//     formDataCoverLetter.append('coverLetter', this.props.values.coverLetter)
//     // Send request to backend
    
//     this.props.apply(data);
//     console.log("formData")
//     axios.post(`${ROOT_URL}/resume`, formDataResume)
//                             .then((result) => {
//                               // access results...
//                               console.log("Successfull image upload")
//                             });
//     axios.post(`${ROOT_URL}/coverletter`, formDataCoverLetter)
//                             .then((result) => {
//                               // access results...
//                               console.log("Successfull image upload")
//                             });                        
//     this.props.nextStep();
//   }
//   back = (e) => {
//     e.preventDefault();
//     this.props.prevStep();
//   }
//   render() {
//     const { values: { firstName, lastName, email, education, occupation, city, bio, about, sponsorship, disability } } = this.props;
//     return (
//       <MuiThemeProvider>
//         <React.Fragment>
//           <AppBar title="Confirm User Data" />
//           <List>
//             <ListItem
//               primaryText="First Name"
//               secondaryText={ firstName }
//             />
//             <ListItem
//               primaryText="Last Name"
//               secondaryText={ lastName }
//             />
//             <ListItem
//               primaryText="Email"
//               secondaryText={ email }
//             />
//             <ListItem
//               primaryText="Education Level"
//               secondaryText={ education }
//             />
//             <ListItem
//               primaryText="Occupation"
//               secondaryText={ occupation }
//             />
//             <ListItem
//               primaryText="City"
//               secondaryText={ city }
//             />
//             <ListItem
//               primaryText="Bio"
//               secondaryText={ bio }
//             />
//             <ListItem
//               primaryText="How Did You Hear About Us"
//               secondaryText={ about }
//             />
//             <ListItem
//               primaryText="Sponsorship Requirements"
//               secondaryText={ sponsorship }
//             />
//             <ListItem
//               primaryText="Disabilities"
//               secondaryText={ disability }
//             />
//           </List>
//           <RaisedButton
//             label="Back"
//             primary={false}
//             style={styles.button}
//             onClick={this.back}
//           />
//           <RaisedButton
//             label="Confirm & Continue"
//             primary={true}
//             style={styles.button}
//             onClick={this.continue}
//           />
//         </React.Fragment>
//       </MuiThemeProvider>
//     )
//   }
// }
// const styles = {
//   button: {
//     margin: 15
//   }
// }
// function mapStateToProps(state) {
//   return { user: state.user };
// }
// export default connect(mapStateToProps, { apply })(newConfirm);
















import React, { Component } from 'react';
import MuiThemeProvider from 
  'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import axios from 'axios';
import {Redirect} from 'react-router';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { apply } from '../../actions'
import { connect } from "react-redux";
var moment = require("moment");
const ROOT_URL = "http://localhost:3001";
export class Confirm extends Component {
  
  continue = (e) => {
    e.preventDefault();
    var date = moment().toDate();
    date = moment(date).format("MM/DD/YYYY");
   // const { values: { firstName, lastName, email, education, occupation, city, bio, about, sponsorship, disability, resume, coverLetter } } = this.props;
    const data= { 
      jobId: localStorage.getItem("jobId"),
      jobTitle: localStorage.getItem("jobTitle"),
      companyName: localStorage.getItem("companyName"),
      firstName: this.props.values.firstName, 
      lastName: this.props.values.lastName, 
      email: this.props.values.email, 
      education:this.props.values.education,
      occupation: this.props.values.occupation, 
      city:this.props.values.city, 
      bio:this.props.values.bio, 
      about:this.props.values.about, 
      sponsorship:this.props.values.sponsorship,
      disability:this.props.values.disability, 
      resume:"resume"+this.props.values.email,
      appliedOn: date,
      coverLetter:"coverLetter"+this.props.values.email 
    }  
    console.log("values",data)
    const applicantEmail = localStorage.getItem('email')
    const formDataResume = new FormData();
    const formDataCoverLetter = new FormData();
    
    formDataResume.append('applicantEmail',applicantEmail)
    formDataResume.append('resume', this.props.values.resume)
    formDataCoverLetter.append('applicantEmail',applicantEmail)
    formDataCoverLetter.append('coverLetter', this.props.values.coverLetter)
    // Send request to backend
    
    this.props.apply(data);
    console.log("formData")
    axios.post(`${ROOT_URL}/resume`, formDataResume)
                            .then((result) => {
                              // access results...
                              console.log("Successfull image upload")
                            });
    axios.post(`${ROOT_URL}/coverletter`, formDataCoverLetter)
                            .then((result) => {
                              // access results...
                              console.log("Successfull image upload")
                            });                        
    // this.props.nextStep();
  }
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    
    let redirectVar=null;
    if (this.props.application.code == 200) {
      redirectVar = <Redirect to="/applicant/profile/myJobs" />;
    }
    let errorMessage = null;
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

    const { values: { firstName, lastName, email, education, occupation, city, bio, about, sponsorship, disability } } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          {redirectVar}
          {errorMessage}
          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={ firstName }
            />
            <ListItem
              primaryText="Last Name"
              secondaryText={ lastName }
            />
            <ListItem
              primaryText="Email"
              secondaryText={ email }
            />
            <ListItem
              primaryText="Education Level"
              secondaryText={ education }
            />
            <ListItem
              primaryText="Occupation"
              secondaryText={ occupation }
            />
            <ListItem
              primaryText="City"
              secondaryText={ city }
            />
            <ListItem
              primaryText="Bio"
              secondaryText={ bio }
            />
            <ListItem
              primaryText="How Did You Hear About Us"
              secondaryText={ about }
            />
            <ListItem
              primaryText="Sponsorship Requirements"
              secondaryText={ sponsorship }
            />
            <ListItem
              primaryText="Disabilities"
              secondaryText={ disability }
            />
          </List>
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
const styles = {
  button: {
    margin: 15
  }
}
function mapStateToProps(state) {
  return { user: state.user ,application:state.application};
}
export default connect(mapStateToProps, { apply })(Confirm);