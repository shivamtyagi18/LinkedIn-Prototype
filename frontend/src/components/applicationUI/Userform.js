// import React, { Component } from 'react';
// import FormUserDetails from './FormUserDetails';
// import FormPersonalDetails from './FormPersonalDetails';
// import FormQuestions from './FormQuestions';
// import newConfirm from './newConfirm';
// import Confirm from './Confirm'
// import Success from './Success';
// import EasyApplyModal from './EasyApplyModal';
// import Navbar from './Navbar';

// export class UserForm extends Component {
//   state = {
//     step: 1,
//     firstName: "",
//     lastName: "",
//     email: "",
//     occupation: "",
//     city: "",
//     bio: "",
//     education: "",
//     about: "",
//     sponsorship: "",
//     disability: "",
//     resume: "",
//     coverLetter: "",
//     fileTypeErr: false,
//     companyName:"",
//     jobId:" "
//   }

//   // Proceed to the next step
//   nextStep = () => {
//     const { step } = this.state;
//     this.setState({
//       step: step + 1
//     });
//   }

//   // Go back to the previous step
//   prevStep = () => {
//     const { step } = this.state;
//     this.setState({
//       step: step - 1
//     });
//   }

//   // Handle fields change
//   handleChange = input => (e) => {
//     this.setState({ [input]: e.target.value });
//   }

//   // Handle Resume
//   handleResume = (e) => {
//     console.log(e.target.files);
//     this.setState({
//       fileTypeErr: false
//     })
//     var resume = e.target.files;
//     var ext = resume[0].name.substr(resume[0].name.lastIndexOf('.') + 1);
//     if(ext==='pdf' || ext==='docx' || ext==='doc'){
//       this.setState({
//         resume: resume[0] 
//       });
//       document.getElementById('displayResume').innerHTML = resume[0].name + '<br/>';
//     } else {
//       this.setState({
//         fileTypeErr: true
//       })
//     }
//   }

//   // Handle Cover Letter
//   handleCL = (e) => {
//     console.log(e.target.files);
//     this.setState({
//       fileTypeErr: false
//     })
//     var coverLetter = e.target.files;
//     var ext = coverLetter[0].name.substr(coverLetter[0].name.lastIndexOf('.') + 1);
//     if(ext==='pdf' || ext==='docx' || ext==='doc'){
//         this.setState({
//         coverLetter: coverLetter[0] 
//         });
//         document.getElementById('displayCL').innerHTML = coverLetter[0].name + '<br/>';
//     } else {
//       this.setState({
//         fileTypeErr: true
//       })
//     }
//   }

//   render() {
//     let nav = <Navbar navdata={this.props.navdata}/>
//     const jobId = localStorage.getItem("jobId")
//     const { step } = this.state;
//     const { firstName, lastName, email, education, occupation, city, bio, about, sponsorship, disability, resume, coverLetter, fileTypeErr } = this.state;
//     const values = { firstName, lastName, email, education, occupation, city, bio, about, sponsorship, disability, resume, coverLetter, fileTypeErr }
   
//     switch (step) {
//         case 1: 
//           return (
//             <FormUserDetails
//               nextStep={this.nextStep}
//               handleChange={this.handleChange}
//               handleResume={this.handleResume}
//               handleCL={this.handleCL}
//               values={values}
//             />
//           )
//         case 2:
//           return (
//             <FormPersonalDetails
//               nextStep={this.nextStep}
//               prevStep={this.prevStep}
//               handleChange={this.handleChange}
//               values={values}
//             />
//           )
//         case 3:
//           return (
//             <FormQuestions
//               nextStep={this.nextStep}
//               prevStep={this.prevStep}
//               handleChange={this.handleChange}
//               values={values}
//             />
//           )
//         case 4:
//           return (
//             <Confirm
//               nextStep={this.nextStep}
//               prevStep={this.prevStep}
//               values={values}
//             />
//         )
//         case 5:
//           return (
//             <Success />
//         )
//     }
//   }
// }

// export default UserForm







import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormQuestions from './FormQuestions';
import Confirm from './Confirm';
import Success from './Success';
import { getProfile } from '../../actions'
import EasyApplyModal from './EasyApplyModal';
import Navbar from './Navbar';
import { connect } from "react-redux";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
    education: "",
    about: "",
    sponsorship: "",
    disability: "",
    resume: "",
    coverLetter: "",
    fileTypeErr: false,
    companyName:"",
    jobId:" "
  }

  componentWillMount() {
    console.log("user email in will mount is: ", localStorage.getItem("email"));
    const data = {
      email: localStorage.getItem("email")
    };

    this.props.getProfile(data);

    this.setState({
      email: localStorage.getItem("email"),
    })
    console.log("state", this.state)
  }

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  // Go back to the previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  // Handle fields change
  handleChange = input => (e) => {
    this.setState({ [input]: e.target.value });
  }

  // Handle Resume
  handleResume = (e) => {
    console.log(e.target.files);
    this.setState({
      fileTypeErr: "none"
    })
    var resume = e.target.files;
    var ext = resume[0].name.substr(resume[0].name.lastIndexOf('.') + 1);
    if(ext==='pdf' || ext==='docx' || ext==='doc'){
      this.setState({
        resume: resume[0] 
      });
      document.getElementById('displayResume').innerHTML = resume[0].name + '<br/>';
    } else {
      this.setState({
        fileTypeErr: "block"
      })
    }
  }

  // Handle Cover Letter
  handleCL = (e) => {
    console.log(e.target.files);
    this.setState({
      fileTypeErr: "none"
    })
    var coverLetter = e.target.files;
    var ext = coverLetter[0].name.substr(coverLetter[0].name.lastIndexOf('.') + 1);
    if(ext==='pdf' || ext==='docx' || ext==='doc'){
        this.setState({
        coverLetter: coverLetter[0] 
        });
        document.getElementById('displayCL').innerHTML = coverLetter[0].name + '<br/>';
    } else {
      this.setState({
        fileTypeErr: "block"
      })
    }
  }

  render() {
    let nav = <Navbar navdata={this.props.navdata}/>
    const jobId = localStorage.getItem("jobId")
    const { step } = this.state;
    const { firstName, lastName, email, education, occupation, city, bio, about, sponsorship, disability, resume, coverLetter, fileTypeErr } = this.state;
    const values = { firstName, lastName, email, education, occupation, city, bio, about, sponsorship, disability, resume, coverLetter, fileTypeErr }
   
    switch (step) {
        case 1: 
          return (
            <FormUserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              handleResume={this.handleResume}
              handleCL={this.handleCL}
              values={values}
            />
          )
        case 2:
          return (
            <FormPersonalDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          )
        case 3:
          return (
            <FormQuestions
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          )
        case 4:
          return (
            <Confirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
        )
        case 5:
          return (
            <Success />
        )
    }
  }
}

function mapStateToProps(state) {
  return {profileInfo: state.getProfileInfo};
}

export default connect(mapStateToProps, { getProfile }) (UserForm)