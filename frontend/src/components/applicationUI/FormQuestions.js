// import React, { Component } from 'react';
// import MuiThemeProvider from 
//   'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton'
// import { Alert } from 'reactstrap';

// export class FormQuestions extends Component {
//   state = {
//     danger: false,
//   }
//   continue = (e) => {
//     const { values } = this.props;
//     e.preventDefault();
//     if(!values.about || !values.sponsorship || !values.disability) {
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
//           <AppBar title="Please Answer Some Questions" />
//           <Alert
//             isOpen={this.state.danger}
//             color='danger'
//             style={{marginTop: 10}}
//           >
//             Please answer all questions.
//           </Alert>
//           <TextField
//             hintText="How did you hear about us"
//             floatingLabelText="How did you hear about us"
//             onChange={handleChange('about')}
//             defaultValue={values.about}
//           />
//           <br/>
//           <TextField
//             hintText="If yes, please explain"
//             floatingLabelText="Need Sponsorship?"
//             onChange={handleChange('sponsorship')}
//             defaultValue={values.sponsorship}
//           />
//           <br/>
//           <TextField
//             select
//             hintText="If yes, please describe."
//             floatingLabelText="Disability?"
//             onChange={handleChange('disability')}
//             defaultValue={values.disability}
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

// export default FormQuestions











import React, { Component } from 'react';
import MuiThemeProvider from 
  'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

export class FormQuestions extends Component {
  state = {
    danger: "none",
  }
  continue = (e) => {
    const { values } = this.props;
    e.preventDefault();
    if(!values.about || !values.sponsorship || !values.disability) {
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
          <AppBar title="Please Answer Some Questions" />
          <div
            style={{
              marginTop: 10,
              display: this.state.danger,
              color: "red"
            }}
          >
            Please answer all questions.
          </div>
          <TextField
            hintText="How did you hear about us"
            floatingLabelText="How did you hear about us"
            onChange={handleChange('about')}
            defaultValue={values.about}
          />
          <br/>
          <TextField
            hintText="If yes, please explain"
            floatingLabelText="Need Sponsorship?"
            onChange={handleChange('sponsorship')}
            defaultValue={values.sponsorship}
          />
          <br/>
          <TextField
            select
            hintText="If yes, please describe."
            floatingLabelText="Disability?"
            onChange={handleChange('disability')}
            defaultValue={values.disability}
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

export default FormQuestions