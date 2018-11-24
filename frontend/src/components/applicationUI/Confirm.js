import React, { Component } from 'react';
import MuiThemeProvider from 
  'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { apply } from '../../actions'
import { connect } from "react-redux";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    const { values } = this.props;
    console.log(values.firstName)
    const applicantEmail = localStorage.getItem('email')
    const formData = new FormData();
    formData.append('applicantEmail', applicantEmail)
    formData.append('firstName', values.firstName)
    formData.append('lastName', values.lastName)
    formData.append('email', values.email)
    formData.append('education', values.education)
    formData.append('occupation', values.occupation)
    formData.append('city', values.city)
    formData.append('bio', values.bio)
    formData.append('about', values.about)
    formData.append('sponsorship', values.sponsorship)
    formData.append('disability', values.disability)
    formData.append('resume', values.resume)
    // Send request to backend
    console.log("formdata",formData)
    this.props.apply(formData);

    this.props.nextStep();
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values: { firstName, lastName, email, education, occupation, city, bio, about, sponsorship, disability } } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
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
  return { user: state.user };
}

export default connect(mapStateToProps, { apply })(Confirm);