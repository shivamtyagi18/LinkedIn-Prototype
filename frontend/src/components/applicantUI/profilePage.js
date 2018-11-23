import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Navbar from './Navbar';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileInfo: [],
      flag: false
    };
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    const data = {
      email: localStorage.getItem("email")
    };
    axios
      .get(`http://localhost:3001/applicant/profile/getprofile/${data.email}`)
      .then(res => {
        console.log("Response in getProfile is: ", res.data);
        if (res.status === 200) {
          this.setState({
            flag: true,
            profileInfo: res.data
          });
          console.log(
            "ProfileInfo state variable is: ",
            this.state.profileInfo
          );
        } else {
          window.alert("Profile cannot be fetched right now");
        }
      });
  }

  render() {

    let nav = <Navbar navdata={this.props.navdata}/>
    const { profileInfo } = this.state;
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
              <div className="row col-md-12">
                <div
                  className="col-md-4"
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
                    src="/images/profile_img.jpg"
                    style={{
                      width: "152px",
                      height: "152px",
                      borderRadius: "50%"
                    }}
                  />
                </div>
                <div className="col-md-8" style={{ textAlign: "right" }}>
                  <svg
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                    x="0"
                    y="0"
                    preserveAspectRatio="xMinYMin meet"
                    class="artdeco-icon"
                    focusable="false"
                    style={{
                      color: "#0073b1",
                      marginTop: "19px"
                    }}
                  >
                    <path
                      d="M21.71,5L19,2.29a1,1,0,0,0-1.41,0L4,15.85,2,22l6.15-2L21.71,6.45A1,1,0,0,0,22,5.71,1,1,0,0,0,21.71,5ZM6.87,18.64l-1.5-1.5L15.92,6.57l1.5,1.5ZM18.09,7.41l-1.5-1.5,1.67-1.67,1.5,1.5Z"
                      class="large-icon"
                      style={{ fill: "currentColor" }}
                    />
                  </svg>
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
                        {profileInfo.firstName} {profileInfo.lastName}
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
                        {profileInfo.profileSummary}
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
                        {profileInfo.city}
                      </h4>
                    </span>
                  </div>
                  <div className="row col-md-12">
                    <div className="col-md-8">
                      <div class="dropdown">
                        <button
                          class="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenu1"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          style={{
                            margin: "center ",
                            position: "relative",
                            verticalAlign: "middle",
                            display: "inline-block",
                            textAlign: "center",
                            height: "43px",
                            width: "230px",
                            marginTop: "10px",
                            backgroundColor: "#0073b1",
                            borderColor: "transparent",
                            borderRadius: "0px",
                            color: "white"
                          }}
                        >
                          Add profile section
                          {/* <span
                            style={{
                              marginLeft: "5px",
                              top: "30px",
                              verticalAlign: "top"
                            }}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              width="24px"
                              height="24px"
                              x="0"
                              y="0"
                              preserveAspectRatio="xMinYMin meet"
                              class="artdeco-icon"
                              focusable="false"
                              style={{
                                color: "white"
                              }}
                            >
                              <path
                                d="M8.8,10.66L14,5.12A0.07,0.07,0,0,0,13.93,5H2.07A0.07,0.07,0,0,0,2,5.12L7.2,10.66A1.1,1.1,0,0,0,8.8,10.66Z"
                                class="small-icon"
                                style={{
                                  fillOpacity: "1",
                                  fill: "currentColor"
                                }}
                              />
                            </svg>
                          </span> */}
                        </button>
                        <div class="dropdown-menu">
                          <button
                            class="dropdown-item"
                            role="menuitem"
                            style={{
                              width: "275px",
                              backgroundColor: "transparent",
                              border: "none",
                              fontSize: "18px"
                            }}
                          >
                            Intro
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div class="dropdown">
                        <button
                          class="btn btn-secondary bg-light dropdown-toggle"
                          type="button"
                          id="dropdownMenu1"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          style={{
                            margin: "center",
                            position: "relative",
                            verticalAlign: "middle",
                            display: "inline-block",
                            textAlign: "center",
                            height: "43px",
                            width: "100px",
                            marginTop: "10px",
                            backgroundColor: "transparent",
                            borderColor: "Grey",
                            borderRadius: "2px",
                            color: "Grey"
                          }}
                        >
                          More...
                        </button>
                        <div
                          class="dropdown-menu dropdown-menu-center"
                          aria-labelledby="dropdownMenu1"
                        >
                          <button
                            class="dropdown-item"
                            role="menuitem"
                            style={{
                              width: "275px",
                              backgroundColor: "transparent",
                              border: "none",
                              fontSize: "18px"
                            }}
                          >
                            Intro
                          </button>
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
                          <p
                            style={{
                              fontSize: "16px",
                              marginTop: "10px",
                              fontWeight: "300",
                              marginLeft: "-35px",
                              fontFamily: "Sans Serif"
                            }}
                          >
                            See Connections
                          </p>
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
                      {profileInfo.profileSummary}
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
                  <div className="col-md-6" style={{ textAlign: "right" }}>
                    <svg
                      viewBox="0 0 24 24"
                      width="24px"
                      height="24px"
                      x="0"
                      y="0"
                      preserveAspectRatio="xMinYMin meet"
                      class="artdeco-icon"
                      focusable="false"
                      style={{ marginTop: "16px", color: "#0073b1" }}
                    >
                      <path
                        d="M21,13H13v8H11V13H3V11h8V3h2v8h8v2Z"
                        class="large-icon"
                        style={{ fill: "currentColor" }}
                      />
                    </svg>
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
                      {profileInfo.experience}
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
                  <div className="col-md-6" style={{ textAlign: "right" }}>
                    <svg
                      viewBox="0 0 24 24"
                      width="24px"
                      height="24px"
                      x="0"
                      y="0"
                      preserveAspectRatio="xMinYMin meet"
                      class="artdeco-icon"
                      focusable="false"
                      style={{ marginTop: "16px", color: "#0073b1" }}
                    >
                      <path
                        d="M21,13H13v8H11V13H3V11h8V3h2v8h8v2Z"
                        class="large-icon"
                        style={{ fill: "currentColor" }}
                      />
                    </svg>
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
                      {profileInfo.education}
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
                  <div className="col-md-6" style={{ textAlign: "right" }}>
                    <svg
                      viewBox="0 0 24 24"
                      width="24px"
                      height="24px"
                      x="0"
                      y="0"
                      preserveAspectRatio="xMinYMin meet"
                      class="artdeco-icon"
                      focusable="false"
                      style={{ marginTop: "16px", color: "#0073b1" }}
                    >
                      <path
                        d="M21,13H13v8H11V13H3V11h8V3h2v8h8v2Z"
                        class="large-icon"
                        style={{ fill: "currentColor" }}
                      />
                    </svg>
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
                      {profileInfo.skills}
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

export default ProfilePage;
