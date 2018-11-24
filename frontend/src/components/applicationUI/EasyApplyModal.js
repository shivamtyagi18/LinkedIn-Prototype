import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import { easyApply } from '../../actions'

class EasyApplyModal extends Component {
    state = {
        modal: false,
        firstName: '',
        lastName: '',
        email: '',
        resume: '',
        danger: false,
        warning: false
    }

    componentWillMount() {
        const applicantEmail = localStorage.getItem('applicantEmail');
        this.props.getApplicant(applicantEmail);
        const { applicant } = this.props.applicant;
        this.setState({
            firstName: applicant.firstName,
            lastName: applicant.lastName,
            email: applicant.email
        })
    }

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
            const applicantEmail = localStorage.getItem('applicantEmail')
            // Multipart Formdata
            const formData = new FormData();
            formData.append('applicantEmail', applicantEmail)
            formData.append('firstName', this.state.firstName);
            formData.append('lastName', this.state.lastName);
            formData.append('email', this.state.email);
            formData.append('resume', this.state.resume);

            // Call easyApply action
            this.props.easyApply(formData);

            // Close modal
            this.toggle();
        }
    };

    render() {
        return(
            <MuiThemeProvider>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >Easy Apply
                </Button>

                <Modal
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
                </Modal>
            </MuiThemeProvider>
        );
    }
}

EasyApplyModal.propTypes = {
    getApplicant: PropTypes.func.isRequired,
    applicant: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    applicant: state.applicant
});

export default connect(mapStateToProps, { easyApply })(EasyApplyModal);