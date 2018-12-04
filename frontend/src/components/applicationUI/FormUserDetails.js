// import React, { Component } from 'react';
// import MuiThemeProvider from 
//   'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
// import { Alert } from 'reactstrap';
// import Navbar from './Navbar';

// export class FormUserDetails extends Component {
//   state = {
//     danger: false,
//   }
//   continue = (e) => {
//     const { values } = this.props;
//     e.preventDefault();
//     if(!values.firstName || !values.lastName || !values.email || !values.resume) {
//       this.setState({
//         danger: true
//       })
//     } else {
//       this.props.nextStep();
//     }
//   }

 

//   render() {
//     let nav = <Navbar navdata={this.props.navdata}/>
//     const { values, handleChange, handleCL, handleResume } = this.props;
//     return (
//       <MuiThemeProvider>
//         <React.Fragment>
        
//           <AppBar title="Enter User Details" />
//           <Alert
//             isOpen={this.state.danger}
//             color='danger'
//             style={{marginTop: 10}}
//           >
//             All fields are required! (Cover Letter is optional)
//           </Alert>
//           <Alert
//             isOpen={values.fileTypeErr}
//             color='warning'
//             style={{marginTop: 10}}
//           >
//             File uploads can only be pdf or doc/docx
//           </Alert>
//           <TextField
//             hintText="Enter Your First Name"
//             floatingLabelText="First Name"
//             onChange={handleChange('firstName')}
//             defaultValue={values.firstName}
//           />
//           <br/>
//           <TextField
//             hintText="Enter Your Last Name"
//             floatingLabelText="Last Name"
//             onChange={handleChange('lastName')}
//             defaultValue={values.lastName}
//           />
//           <br/>
//           <TextField
//             hintText="Enter Your Email"
//             floatingLabelText="Email"
//             onChange={handleChange('email')}
//             defaultValue={values.email}
            
//           />
//           <br/>
//           <RaisedButton
//             containerElement="label"
//             label="Add a Resume"
//             style={styles.button}
//           >
//             <input
//               name="resume"
//               type="file" 
//               onChange={handleResume}
//               hidden 
//             />
//           </RaisedButton>
//           <p id="displayResume"></p>
//           <RaisedButton
//             containerElement="label"
//             label="Add a Cover Letter (Optional)"
//             style={styles.button}
//           >
//             <input
//               name="coverLetter"
//               type="file" 
//               onChange={handleCL}
//               hidden 
//             />
//           </RaisedButton>
//           <p id="displayCL"></p>
//           <RaisedButton
//             label="Continue"
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

// export default FormUserDetails













import React, { Component } from 'react';
import MuiThemeProvider from 
  'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Navbar from './Navbar';

export class FormUserDetails extends Component {
  state = {
    danger: "none",
  }
  continue = (e) => {
    const { values } = this.props;
    e.preventDefault();
    if(!values.firstName || !values.lastName || !values.email || !values.resume) {
      this.setState({
        danger: "block"
      })
    } else {
      this.props.nextStep();
    }
  }

  render() {
    let nav = <Navbar navdata={this.props.navdata}/>
    const { values, handleChange, handleCL, handleResume } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
        
          <AppBar title="Enter User Details" />
          <div
            color='danger'
            style={{
              marginTop: 10,
              display: this.state.danger,
              color: "red"
            }}
          >
            All fields are required! (Cover Letter is optional)
          </div>
          <div
            color='warning'
            style={{
              marginTop: 10,
              display: values.fileTypeErr,
            }}
          >
            File uploads can only be pdf or doc/docx
          </div>
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br/>
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br/>
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
            disabled
          />
          <br/>
          <RaisedButton
            containerElement="label"
            label="Add a Resume"
            style={styles.button}
          >
            <input
              name="resume"
              type="file" 
              onChange={handleResume}
              hidden 
            />
          </RaisedButton>
          <p id="displayResume"></p>
          <RaisedButton
            containerElement="label"
            label="Add a Cover Letter (Optional)"
            style={styles.button}
          >
            <input
              name="coverLetter"
              type="file" 
              onChange={handleCL}
              hidden 
            />
          </RaisedButton>
          <p id="displayCL"></p>
          <RaisedButton
            label="Continue"
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

export default FormUserDetails