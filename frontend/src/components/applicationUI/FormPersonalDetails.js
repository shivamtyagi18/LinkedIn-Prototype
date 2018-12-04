// import React, { Component } from 'react';
// import MuiThemeProvider from 
//   'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
// import { Alert } from 'reactstrap';

// export class FormPersonalDetails extends Component {
//   state = {
//     danger: false,
//   }
//   continue = (e) => {
//     const { values } = this.props;
//     console.log(values)
//     e.preventDefault();
//     if(!values.education || !values.occupation || !values.city || !values.bio) {
//       this.setState({
//         danger: true
//       })
//     } else {
//       this.props.nextStep();
//     }
//   }

//   back = (e) => {
//     e.preventDefault();
//     this.props.prevStep();
//   }

//   render() {
//     const { values, handleChange } = this.props;
//     return (
//       <MuiThemeProvider>
//         <React.Fragment>
//           <AppBar title="Enter User Details" />
//           <Alert
//             isOpen={this.state.danger}
//             color='danger'
//             style={{marginTop: 10}}
//           >
//             All fields are required!
//           </Alert>
//           <TextField
//             hintText="Enter Your Education History"
//             floatingLabelText="Education"
//             onChange={handleChange('education')}
//             defaultValue={values.education}
//           />
//           <br/>
//           <TextField
//             hintText="Enter Your Occupation"
//             floatingLabelText="Occupation"
//             onChange={handleChange('occupation')}
//             defaultValue={values.occupation}
//           />
//           <br/>
//           <TextField
//             hintText="Enter Your City"
//             floatingLabelText="City"
//             onChange={handleChange('city')}
//             defaultValue={values.city}
//           />
//           <br/>
//           <TextField
//             hintText="Enter Your Bio"
//             floatingLabelText="Bio"
//             onChange={handleChange('bio')}
//             defaultValue={values.bio}
//           />
//           <br/>
//           <RaisedButton
//             label="Back"
//             primary={false }
//             style={styles.button}
//             onClick={this.back}
//           />
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

// export default FormPersonalDetails














import React, { Component } from 'react';
import MuiThemeProvider from 
  'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
  state = {
    danger: "none",
  }
  continue = (e) => {
    const { values } = this.props;
    console.log(values)
    e.preventDefault();
    if(!values.education || !values.occupation || !values.city || !values.bio) {
      this.setState({
        danger: "block"
      })
    } else {
      this.props.nextStep();
    }
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <div
            style={{
              marginTop: 10,
              display: this.state.danger,
              color: "red"
            }}
          >
            All fields are required!
          </div>
          <TextField
            hintText="Enter Your Education History"
            floatingLabelText="Education"
            onChange={handleChange('education')}
            defaultValue={values.education}
          />
          <br/>
          <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br/>
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br/>
          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br/>
          <RaisedButton
            label="Back"
            primary={false }
            style={styles.button}
            onClick={this.back}
          />
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

export default FormPersonalDetails