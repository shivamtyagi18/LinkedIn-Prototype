import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Navbar from "./Navbar";
import { getProfile, saveDetails,  sendConnectionRequest  } from "../../actions";
import { Link } from "react-router-dom";

class newSearchProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileInfo: [],
      firstName: "",
      lastName: "",
      headline: "",
      profileSummary: "",
      country: "",
      zipcode: "",
      state: "",
      locationNearby: "",
      industry: "",
      phone: "",
      phoneType: "",
      gender: "",
      address: "",
      skills: "",
      education: "",
      experience: "",
      city: "",
      flag: false,
      messageFlag:false,
      check:false
    };
  }


  connectButton = e => {
    const data = {
      receiver: this.props.profileInfo.email,
      sender:localStorage.getItem("email")
    };
    console.log("Connect Button Works")
    console.log(data);
    this.props.sendConnectionRequest(data);
  }


  handleFirstName = e => {
    this.setState({
      firstName: e.target.value
    });
  };

  handleLastName = e => {
    this.setState({
      lastName: e.target.value
    });
  };
  handleGender = e => {
    this.setState({
      gender: e.target.value
    });
  };
  handleCity = e => {
    this.setState({
      city: e.target.value
    });
  };

  handleHeadline = e => {
    this.setState({
      headline: e.target.value
    });
  };

  handleCountry = e => {
    this.setState({
      country: e.target.value
    });
  };

  handleZipCode = e => {
    this.setState({
      zipcode: e.target.value
    });
  };

  handleSummary = e => {
    this.setState({
      profileSummary: e.target.value
    });
  };

  handleLocationNearBy = e => {
    this.setState({
      locationNearby: e.target.value
    });
  };

  handleIndustry = e => {
    this.setState({
      industry: e.target.value
    });
  };

  handlePhone = e => {
    this.setState({
      phone: e.target.value
    });
  };

  handlePhoneType = e => {
    this.setState({
      phoneType: e.target.value
    });
  };

  handleAddress = e => {
    this.setState({
      address: e.target.value
    });
  };

  handleExperience = e => {
    this.setState({
      experience: e.target.value
    });
  };

  handleEducation = e => {
    this.setState({
      education: e.target.value
    });
  };

  handleSkills = e => {
    this.setState({
      skills: e.target.value
    });
  };

  handleState = e => {
    this.setState({
      state: e.target.value
    });
  };

  messageChangeHandler = e => {
    this.setState({
      message: e.target.value
    });
  };
 
  sendMessage = e => {
    e.preventDefault();
 
    const data = {
      senderemail: localStorage.getItem("email"),
      receiveremail: this.props.profileInfo.email,
 
      message: this.state.message
    };
    console.log(data);
    if (localStorage.getItem("email")) {
      axios.defaults.withCredentials = true;
      axios
        .post("http://localhost:3001/applicant/profile/messageFromSender", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.data.code == 200) {
            this.setState({
              messageFlag: true
              //propArray: response.data
            });
          } else {
            this.setState({
              messageFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ messageFlag: false });
          console.log(err);
        });
    } else {
      this.setState({
        check: true
      });
    }
  };

  handleSave = e => {
    console.log("entered here in handler of save button");
    const data = {
      email: this.props.profileInfo.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      headline: this.state.headline,
      profileSummary: this.state.profileSummary,
      country: this.state.country,
      city: this.state.city,
      zipcode: this.state.zipcode,
      state: this.state.state,
      locationNearby: this.state.locationNearby,
      industry: this.state.industry,
      phone: this.state.phone,
      phoneType: this.state.phoneType,
      address: this.state.address,
      skills: this.state.skills,
      gender: this.state.gender,
      experience: this.state.experience,
      education: this.state.education
    };
    this.props.saveDetails(data);
  };

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if (nextProps.profileInfo !== undefined) {
      this.setState({
        firstName: nextProps.profileInfo.firstName,
        lastName: nextProps.profileInfo.lastName,
        headline: nextProps.profileInfo.headline,
        profileSummary: nextProps.profileInfo.profileSummary,
        country: nextProps.profileInfo.country,
        zipcode: nextProps.profileInfo.zipcode,
        state: nextProps.profileInfo.state,
        locationNearby: nextProps.profileInfo.locationNearby,
        industry: nextProps.profileInfo.industry,
        city: nextProps.profileInfo.city,
        phone: nextProps.profileInfo.phone,
        phoneType: nextProps.profileInfo.phoneType,
        address: nextProps.profileInfo.address,
        skills: nextProps.profileInfo.skills,
        gender: nextProps.profileInfo.gender,
        experience: nextProps.profileInfo.experience,
        education: nextProps.profileInfo.education
      });
    }
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    const data = {email: this.props.location.state.displayprops};
    this.setState({
        email: data.email
      });
    this.props.getProfile(data);
  }

  render() {
console.log(this.props.ConnectionRequest);
let successmessage = null;
   if (this.props.ConnectionRequest == "Error") {
     successmessage = (
       <div
         style={{
           backgroundColor: "white",
           fontSize: "12px",
           color: "red",
           textAlign: "center",
           padding: "6px",
           marginTop: "10px"
         }}
       >
         <h5>Connection Request already sent.</h5>
       </div>
     );
   }

    if (this.state.messageFlag) {
      window.alert("Message sent successfully");
      this.state.messageFlag = false;
    }
    
    if(this.props.ConnectionRequest.firstName){
        successmessage = (
          <div
            style={{
              backgroundColor: "green",
              fontSize: "12px",
              color: "white",
              textAlign: "center",
              padding: "6px",
              marginTop: "10px"
            }}
          >
            <h5>Connection Request sent to {this.props.ConnectionRequest.firstName}.</h5>
          </div>
        );
      }
    let nav = <Navbar navdata={this.props.navdata} />;
    console.log(this.state.firstName);
    console.log("Usr is: ", this.props.user);
    const { profileInfo } = this.state;
    if (this.state.gender === "Female") imgurl2 = "/images/female.png";
    if (this.state.gender === "Male" || this.state.gender === "gender");
    var imgurl2 = `https://s3.us-east-2.amazonaws.com/linkedin-images/${this.props.profileInfo.img}`;

    return (
      <React.Fragment>
        {nav}
        <div className="container-fluid" style={{ backgroundColor: "#eee" }}>
          <div className="profile-block-introduction">
            <div className="container-fluid">
              <div className="profile-background-picture">
                <img
                  src="/images/bg_img.jpeg"
                  className="col-md-12"
                  style={{
                    padding: "0px 0px 0px 0px",
                    margin: "0px 0px 0px 0px",
                    maxWidth: "100%"
                  }}
                />
              </div>
              <div className="row">
                <div
                  className="col-md-6"
                  style={{
                    width: "150px",
                    overflow: "visible",
                    height: "150px",
                    margin: "0 auto",
                    position: "relative",
                    backgroundColor: "transparent",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    boxSizing: "border-box",
                    marginTop: "-80px",
                    marginLeft: "20px"
                  }}
                >
                  <img
                    src={imgurl2}
                    style={{
                      width: "152px",
                      height: "152px",
                      borderRadius: "50%",
                      border: "1px solid grey"
                    }}
                  />
                </div>
              </div>

              <div className="row col-md-12" style={{ padding: "20px" }}>
                <div className="col-md-6">
                  <div className="col-md-12">
                    <span>
                      <h3
                        style={{
                          fontWeight: "300",
                          fontFamily: "Sans Serif"
                          // marginLeft: "18px"
                        }}
                      >
                        {this.state.firstName} {this.state.lastName}
                      </h3>
                    </span>
                  </div>
                  <div className="col-md-12">
                    <span>
                      <h4
                        style={{
                          fontWeight: "200",
                          fontFamily: "Sans Serif"
                        }}
                      >
                        {this.state.headline}
                      </h4>
                    </span>
                  </div>
                  <div className="col-md-12">
                    <span>
                      <h4
                        style={{
                          fontWeight: "200",
                          fontFamily: "Sans Serif",
                          color: "Grey"
                        }}
                      >
                        {this.state.city}
                      </h4>
                    </span>
                  </div>
                  
                  <div className="row col-md-12">
                    <div className="col-md-8">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        onClick={this.connectButton}
                        style={{
                          margin: "center ",
                          position: "relative",
                          verticalAlign: "middle",
                          display: "inline-block",
                          textAlign: "center",
                          height: "43px",
                          width: "180px",
                          marginTop: "10px",
                          backgroundColor: "#0073b1",
                          borderColor: "transparent",
                          borderRadius: "0px",
                          color: "white"
                        }}
                      >
                        Connect
                      </button>
                      {successmessage}

                    </div>
                    <div className="col-md-4">
                      <button
                        class="btn btn-secondary bg-light dropdown-toggle"
                        type="button"
                        data-toggle="modal"
                        data-target="#inboxModal"
                        style={{
                          margin: "center ",
                          position: "relative",
                          verticalAlign: "middle",
                          display: "inline-block",
                          textAlign: "center",
                          height: "43px",
                          width: "180px",
                          marginTop: "10px",
                          backgroundColor: "#0073b1",
                          borderColor: "transparent",
                          borderRadius: "0px",
                          color: "white"
                        }}
                      >
                        Message
                      </button>

                        <div
                         class="modal fade"
                         id="inboxModal"
                         role="dialog"
                         position="relative"
                         tabIndex="-1"
                       >
                         <div
                           class="modal-dialog modal-dialog-centered"
                           role="document"
                           position="relative"
                         >
                           <div class="modal-content">
                             <div class="modal-header">
                               <button
                                 type="button"
                                 class="close"
                                 data-dismiss="modal"
                               >
                                 &times;
                               </button>
                               <h4 class="modal-title">
                                 Message {this.state.firstName} {this.state.lastName}

                               </h4>
                             </div>
                             <div class="modal-body">
                               <div class="travelerinbox-area">
                                 <textarea
                                   type="text"
                                   className="messageText"
                                   name="message"
                                   id="message"
                                   placeholder="Type Your Message"
                                   onChange={this.messageChangeHandler}
                                   style={{ width: "500px", height: "200px" }}
                                 />
                               </div>
                             </div>
                             <div
                               class="modal-footer"
                               style={{ textAlign: "center" }}
                             >
                               <button
                                 type="button"
                                 class="askbtn1 btn-sm"
                                 data-dismiss="modal"
                               >
                                 Close
                               </button>
                               <button
                                 type="submit"
                                 class="askbtn1 btn-sm"
                                 data-dismiss="modal"
                                 onClick={this.sendMessage}
                               >
                                 Send
                               </button>
                             </div>
                           </div>
                         </div>
                       </div>

                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row col-md-12">
                    <a style={{ cursor: "pointer", color: "black" }}>
                      <div className="col-md-2">
                        <svg
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          x="0"
                          y="0"
                          preserveAspectRatio="xMinYMin meet"
                          focusable="false"
                          style={{ marginTop: "20px", color: "grey" }}
                        >
                          <path
                            d="M16,15H10a3.24,3.24,0,0,1,1.79-2.89L12,12h2l0.21,0.11A3.24,3.24,0,0,1,16,15ZM13,8h0a2,2,0,0,0-2,2h0a2,2,0,0,0,2,2h0a2,2,0,0,0,2-2h0A2,2,0,0,0,13,8Zm8-4V20a2,2,0,0,1-2,2H5V19H3V17H5V13H3V11H5V7H3V5H5V2H19A2,2,0,0,1,21,4ZM19,4H7V20H19V4Z"
                            class="large-icon"
                            style={{ fill: "currentColor" }}
                          />
                        </svg>
                      </div>
                      <div className="col-md-10">
                        <span>
                          <p
                            style={{
                              fontSize: "16px",
                              marginTop: "20px",
                              marginLeft: "-35px",
                              fontWeight: "300",
                              fontFamily: "Sans Serif"
                            }}
                          >
                            See Contact Info
                          </p>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="row col-md-12">
                    <a style={{ cursor: "pointer", color: "black" }}>
                      <div className="col-md-2">
                        <svg
                          viewBox="0 0 24 24"
                          width="24px"
                          height="24px"
                          x="0"
                          y="0"
                          preserveAspectRatio="xMinYMin meet"
                          class="artdeco-icon"
                          focusable="false"
                          style={{ marginTop: "10px", color: "grey" }}
                        >
                          <path
                            d="M20.74,14.2L19,13.54V12.86l0.25-.41A5,5,0,0,0,20,9.82V9a3,3,0,0,0-6,0V9.82a5,5,0,0,0,.75,2.63L15,12.86v0.68l-1,.37a4,4,0,0,0-.58-0.28l-2.45-1V10.83A8,8,0,0,0,12,7V6A4,4,0,0,0,4,6V7a8,8,0,0,0,1,3.86v1.84l-2.45,1A4,4,0,0,0,0,17.35V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.74,14.2ZM16,8.75a1,1,0,0,1,2,0v1.44a3,3,0,0,1-.38,1.46l-0.33.6a0.25,0.25,0,0,1-.22.13H16.93a0.25,0.25,0,0,1-.22-0.13l-0.33-.6A3,3,0,0,1,16,10.19V8.75ZM6,5.85a2,2,0,0,1,4,0V7.28a6,6,0,0,1-.71,2.83L9,10.72a1,1,0,0,1-.88.53H7.92A1,1,0,0,1,7,10.72l-0.33-.61A6,6,0,0,1,6,7.28V5.85ZM14,19H2V17.25a2,2,0,0,1,1.26-1.86L7,13.92v-1a3,3,0,0,0,1,.18H8a3,3,0,0,0,1-.18v1l3.72,1.42A2,2,0,0,1,14,17.21V19Zm7,0H16V17.35a4,4,0,0,0-.55-2l1.05-.4V14.07a2,2,0,0,0,.4.05h0.2a2,2,0,0,0,.4-0.05v0.88l2.53,1a1.5,1.5,0,0,1,1,1.4V19Z"
                            class="large-icon"
                            style={{ fill: "currentColor" }}
                          />
                        </svg>
                      </div>
                      <div className="col-md-10">
                        <span>
                          <Link to="/applicant/profile/viewConnections">
                            <p
                              style={{
                                fontSize: "16px",
                                marginTop: "10px",
                                fontWeight: "300",
                                marginLeft: "-35px",
                                fontFamily: "Sans Serif",
                                color: "black"
                              }}
                            >
                              See Connections
                            </p>
                          </Link>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="col-md-12" style={{ padding: "20px" }}>
                  <hr />
                  <span>
                    <h4
                      style={{
                        fontWeight: "300",

                        fontFamily: "Sans Serif"
                      }}
                    >
                      {this.state.profileSummary}
                    </h4>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-block-experience">
            <div className="container-fluid">
              <div>
                <div className="row col-md-12" style={{ padding: "20px" }}>
                  <div className="col-md-6">
                    <span>
                      <h3
                        style={{
                          fontWeight: "300",
                          fontFamily: "Sans Serif"
                          // marginLeft: "18px"
                        }}
                      >
                        Experience
                      </h3>
                    </span>
                  </div>
                </div>
                <div className="col-md-12" style={{ padding: "20px" }}>
                  <span>
                    <h4
                      style={{
                        fontWeight: "300",

                        fontFamily: "Sans Serif"
                      }}
                    >
                      {this.state.experience}
                    </h4>
                  </span>
                </div>
              </div>
              <div>
                <div className="row col-md-12" style={{ padding: "20px" }}>
                  <hr />
                  <div className="col-md-6">
                    <span>
                      <h3
                        style={{
                          fontWeight: "300",
                          fontFamily: "Sans Serif"
                          // marginLeft: "18px"
                        }}
                      >
                        Education
                      </h3>
                    </span>
                  </div>
                </div>
                <div className="col-md-12" style={{ padding: "20px" }}>
                  <span>
                    <h4
                      style={{
                        fontWeight: "300",

                        fontFamily: "Sans Serif"
                      }}
                    >
                      {this.state.education}
                    </h4>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-block-skills">
            <div className="container-fluid">
              <div>
                <div className="row col-md-12" style={{ padding: "20px" }}>
                  <div className="col-md-6">
                    <span>
                      <h3
                        style={{
                          fontWeight: "300",
                          fontFamily: "Sans Serif"
                          // marginLeft: "18px"
                        }}
                      >
                        Skills & Endorsements
                      </h3>
                    </span>
                  </div>
                </div>
                <div className="col-md-12" style={{ padding: "20px" }}>
                  <span>
                    <h4
                      style={{
                        fontWeight: "300",

                        fontFamily: "Sans Serif"
                      }}
                    >
                      {this.state.skills}
                    </h4>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { profileInfo: state.getProfileInfo, user: state.loginApplicant, ConnectionRequest: state.sendConnectionRequest  };
}

export default connect(
  mapStateToProps,
  { getProfile, saveDetails, sendConnectionRequest }
)(newSearchProfilePage);
