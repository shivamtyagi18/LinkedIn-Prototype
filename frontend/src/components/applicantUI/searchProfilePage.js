import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Navbar1 from "./Navbar1";
import { getProfile, saveDetails, sendConnectionRequest } from "../../actions";
import {Link} from 'react-router-dom';

class SearchProfilePage extends Component {
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
      address: "",
      skills: "",
      education: "",
      experience: "",
      city: "",
      flag: false
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

  messageButton = e => {
    console.log("Message Button Works")
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
    //console.log("Job Fetch ID: "+this.jobIdFetch);
    console.log("Email of user clicked: "+this.props.location.state.displayprops);
    console.log("Email: " + data.email);

    this.props.getProfile(data);
  }

  render() {
    let successmessage = null;
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
    console.log(this.props.ConnectionRequest.firstName);
    let nav = <Navbar1 navdata={this.props.navdata} />;
    console.log(this.state.firstName);
    console.log("Usr is: ", this.props.user);
    const { profileInfo } = this.state;
    const imgurl2 = `https://s3.us-east-2.amazonaws.com/linkedin-images/noprofile.png`;
    let modalDisplay = (
      <div className="col-md-12">
        <div style={{ textAlign: "right" }}>
          <button
            type="button"
            data-toggle="modal"
            data-target="#exampleModal4"
            class="btn btn-primary"
            style={{
              height: "44px",
              width: "34px",
              border: "none",
              backgroundColor: "transparent",
              outlineColor: "white"
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
          </button>
          <div
            class="modal fade"
            id="exampleModal4"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModal4Label"
            aria-hidden="true"
            position="relative"
          >
            <div
              class="modal-dialog modal-dialog-centered"
              role="document"
              style={{ width: "750px" }}
            >
              <div class="modal-content">
                <div class="modal-header" style={{ height: "58px" }}>
                  <div className="row">
                    <div className="col-md-6">
                      <h5
                        class="modal-title"
                        id="exampleModal4Label"
                        style={{
                          textAlign: "left",
                          fontFamily: "Sans Serif",
                          fontSize: "22px"
                        }}
                      >
                        Edit Information
                      </h5>
                    </div>
                    <div className="col-md-6">
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            fontSize: "42px"
                          }}
                        >
                          &times;
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="modal-body" style={{ marginLeft: "10px" }}>
                  <div className="row">
                    <div className="col-md-6" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        First Name <span style={{ color: "#0073b1" }}>*</span>
                      </label>
                      <input
                        type="text"
                        autofocus
                        value={this.state.firstName}
                        onChange={this.handleFirstName}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                    <div className="col-md-6" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          position: "relative",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Last Name
                        <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <input
                        type="text"
                        autofocus
                        value={this.state.lastName}
                        onChange={this.handleLastName}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  {/* this is for headline */}
                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Headline <span style={{ color: "#0073b1" }}>*</span>
                      </label>
                      <textarea
                        type="text"
                        autofocus
                        value={this.state.headline}
                        onChange={this.handleHeadline}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  {/* This filed is for education */}

                  <div className="row">
                    <div className="col-md-4" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Country <span style={{ color: "#0073b1" }}>*</span>
                      </label>
                      <select
                        data-control-name="location_country_chooser"
                        name="locationCountry"
                        id="location-country"
                        value={this.state.country}
                        onChange={this.handleCountry}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      >
                        <option value="us">United States</option>
                        <option value="af">Afghanistan</option>
                        <option value="ax">Aland Islands</option>
                        <option value="al">Albania</option>
                        <option value="dz">Algeria</option>
                        <option value="as">American Samoa</option>
                        <option value="ad">Andorra</option>
                        <option value="ao">Angola</option>
                        <option value="ai">Anguilla</option>
                        <option value="aq">Antarctica</option>
                        <option value="ag">Antigua and Barbuda</option>
                        <option value="ar">Argentina</option>
                        <option value="am">Armenia</option>
                        <option value="aw">Aruba</option>
                        <option value="au">Australia</option>
                        <option value="at">Austria</option>
                        <option value="az">Azerbaijan</option>
                        <option value="bs">Bahamas</option>
                        <option value="bh">Bahrain</option>
                        <option value="bd">Bangladesh</option>
                        <option value="bb">Barbados</option>
                        <option value="by">Belarus</option>
                        <option value="be">Belgium</option>
                        <option value="bz">Belize</option>
                        <option value="bj">Benin</option>
                        <option value="bm">Bermuda</option>
                        <option value="bt">Bhutan</option>
                        <option value="bo">Bolivia</option>
                        <option value="ba">Bosnia and Herzegovina</option>
                        <option value="bw">Botswana</option>
                        <option value="bv">Bouvet Island</option>
                        <option value="br">Brazil</option>
                        <option value="io">
                          British Indian Ocean Territory
                        </option>
                        <option value="bn">Brunei Darussalam</option>
                        <option value="bg">Bulgaria</option>
                        <option value="bf">Burkina Faso</option>
                        <option value="bi">Burundi</option>
                        <option value="kh">Cambodia</option>
                        <option value="cm">Cameroon</option>
                        <option value="ca">Canada</option>
                        <option value="cv">Cape Verde</option>
                        <option value="cb">Caribbean Nations</option>
                        <option value="ky">Cayman Islands</option>
                        <option value="cf">Central African Republic</option>
                        <option value="td">Chad</option>
                        <option value="cl">Chile</option>
                        <option value="cn">China</option>
                        <option value="cx">Christmas Island</option>
                        <option value="cc">Cocos (Keeling) Islands</option>
                        <option value="co">Colombia</option>
                        <option value="km">Comoros</option>
                        <option value="cg">Congo</option>
                        <option value="ck">Cook Islands</option>
                        <option value="cr">Costa Rica</option>
                        <option value="ci">Cote D’Ivoire (Ivory Coast)</option>
                        <option value="hr">Croatia</option>
                        <option value="cu">Cuba</option>
                        <option value="cy">Cyprus</option>
                        <option value="cz">Czech Republic</option>
                        <option value="cd">
                          Democratic Republic of the Congo
                        </option>
                        <option value="dk">Denmark</option>
                        <option value="dj">Djibouti</option>
                        <option value="dm">Dominica</option>
                        <option value="do">Dominican Republic</option>
                        <option value="ec">Ecuador</option>
                        <option value="eg">Egypt</option>
                        <option value="sv">El Salvador</option>
                        <option value="gq">Equatorial Guinea</option>
                        <option value="er">Eritrea</option>
                        <option value="ee">Estonia</option>
                        <option value="et">Ethiopia</option>
                        <option value="fk">Falkland Islands (Malvinas)</option>
                        <option value="fo">Faroe Islands</option>
                        <option value="fm">
                          Federated States of Micronesia
                        </option>
                        <option value="fj">Fiji</option>
                        <option value="fi">Finland</option>
                        <option value="fr">France</option>
                        <option value="gf">French Guiana</option>
                        <option value="pf">French Polynesia</option>
                        <option value="tf">French Southern Territories</option>
                        <option value="ga">Gabon</option>
                        <option value="gm">Gambia</option>
                        <option value="ge">Georgia</option>
                        <option value="de">Germany</option>
                        <option value="gh">Ghana</option>
                        <option value="gi">Gibraltar</option>
                        <option value="gr">Greece</option>
                        <option value="gl">Greenland</option>
                        <option value="gd">Grenada</option>
                        <option value="gp">Guadeloupe</option>
                        <option value="gu">Guam</option>
                        <option value="gt">Guatemala</option>
                        <option value="gg">Guernsey</option>
                        <option value="gn">Guinea</option>
                        <option value="gw">Guinea-Bissau</option>
                        <option value="gy">Guyana</option>
                        <option value="ht">Haiti</option>
                        <option value="hm">
                          Heard Island and McDonald Islands
                        </option>
                        <option value="hn">Honduras</option>
                        <option value="hk">Hong Kong</option>
                        <option value="hu">Hungary</option>
                        <option value="is">Iceland</option>
                        <option value="in">India</option>
                        <option value="id">Indonesia</option>
                        <option value="ir">Iran</option>
                        <option value="iq">Iraq</option>
                        <option value="ie">Ireland</option>
                        <option value="im">Isle of Man</option>
                        <option value="il">Israel</option>
                        <option value="it">Italy</option>
                        <option value="jm">Jamaica</option>
                        <option value="jp">Japan</option>
                        <option value="je">Jersey</option>
                        <option value="jo">Jordan</option>
                        <option value="kz">Kazakhstan</option>
                        <option value="ke">Kenya</option>
                        <option value="ki">Kiribati</option>
                        <option value="kr">Korea</option>
                        <option value="kp">Korea (North)</option>
                        <option value="ko">Kosovo</option>
                        <option value="kw">Kuwait</option>
                        <option value="kg">Kyrgyzstan</option>
                        <option value="la">Laos</option>
                        <option value="lv">Latvia</option>
                        <option value="lb">Lebanon</option>
                        <option value="ls">Lesotho</option>
                        <option value="lr">Liberia</option>
                        <option value="ly">Libya</option>
                        <option value="li">Liechtenstein</option>
                        <option value="lt">Lithuania</option>
                        <option value="lu">Luxembourg</option>
                        <option value="mo">Macao</option>
                        <option value="mk">Macedonia</option>
                        <option value="mg">Madagascar</option>
                        <option value="mw">Malawi</option>
                        <option value="my">Malaysia</option>
                        <option value="mv">Maldives</option>
                        <option value="ml">Mali</option>
                        <option value="mt">Malta</option>
                        <option value="mh">Marshall Islands</option>
                        <option value="mq">Martinique</option>
                        <option value="mr">Mauritania</option>
                        <option value="mu">Mauritius</option>
                        <option value="yt">Mayotte</option>
                        <option value="mx">Mexico</option>
                        <option value="md">Moldova</option>
                        <option value="mc">Monaco</option>
                        <option value="mn">Mongolia</option>
                        <option value="me">Montenegro</option>
                        <option value="ms">Montserrat</option>
                        <option value="ma">Morocco</option>
                        <option value="mz">Mozambique</option>
                        <option value="mm">Myanmar</option>
                        <option value="na">Namibia</option>
                        <option value="nr">Nauru</option>
                        <option value="np">Nepal</option>
                        <option value="nl">Netherlands</option>
                        <option value="an">Netherlands Antilles</option>
                        <option value="nc">New Caledonia</option>
                        <option value="nz">New Zealand</option>
                        <option value="ni">Nicaragua</option>
                        <option value="ne">Niger</option>
                        <option value="ng">Nigeria</option>
                        <option value="nu">Niue</option>
                        <option value="nf">Norfolk Island</option>
                        <option value="mp">Northern Mariana Islands</option>
                        <option value="no">Norway</option>
                        <option value="pk">Pakistan</option>
                        <option value="pw">Palau</option>
                        <option value="ps">Palestinian Territory</option>
                        <option value="pa">Panama</option>
                        <option value="pg">Papua New Guinea</option>
                        <option value="py">Paraguay</option>
                        <option value="pe">Peru</option>
                        <option value="ph">Philippines</option>
                        <option value="pn">Pitcairn</option>
                        <option value="pl">Poland</option>
                        <option value="pt">Portugal</option>
                        <option value="pr">Puerto Rico</option>
                        <option value="qa">Qatar</option>
                        <option value="re">Reunion</option>
                        <option value="ro">Romania</option>
                        <option value="ru">Russian Federation</option>
                        <option value="rw">Rwanda</option>
                        <option value="gs">
                          S. Georgia and S. Sandwich Islands
                        </option>
                        <option value="sh">Saint Helena</option>
                        <option value="kn">Saint Kitts and Nevis</option>
                        <option value="lc">Saint Lucia</option>
                        <option value="pm">Saint Pierre and Miquelon</option>
                        <option value="vc">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="ws">Samoa</option>
                        <option value="sm">San Marino</option>
                        <option value="st">Sao Tome and Principe</option>
                        <option value="sa">Saudi Arabia</option>
                        <option value="sn">Senegal</option>
                        <option value="rs">Serbia</option>
                        <option value="cs">Serbia and Montenegro</option>
                        <option value="sc">Seychelles</option>
                        <option value="sl">Sierra Leone</option>
                        <option value="sg">Singapore</option>
                        <option value="sk">Slovak Republic</option>
                        <option value="si">Slovenia</option>
                        <option value="sb">Solomon Islands</option>
                        <option value="so">Somalia</option>
                        <option value="za">South Africa</option>
                        <option value="ss">South Sudan</option>
                        <option value="es">Spain</option>
                        <option value="lk">Sri Lanka</option>
                        <option value="sd">Sudan</option>
                        <option value="om">Sultanate of Oman</option>
                        <option value="sr">Suriname</option>
                        <option value="sj">Svalbard and Jan Mayen</option>
                        <option value="sz">Swaziland</option>
                        <option value="se">Sweden</option>
                        <option value="ch">Switzerland</option>
                        <option value="sy">Syria</option>
                        <option value="tw">Taiwan</option>
                        <option value="tj">Tajikistan</option>
                        <option value="tz">Tanzania</option>
                        <option value="th">Thailand</option>
                        <option value="tl">Timor-Leste</option>
                        <option value="tg">Togo</option>
                        <option value="tk">Tokelau</option>
                        <option value="to">Tonga</option>
                        <option value="tt">Trinidad and Tobago</option>
                        <option value="tn">Tunisia</option>
                        <option value="tr">Turkey</option>
                        <option value="tm">Turkmenistan</option>
                        <option value="tc">Turks and Caicos Islands</option>
                        <option value="tv">Tuvalu</option>
                        <option value="ug">Uganda</option>
                        <option value="ua">Ukraine</option>
                        <option value="ae">United Arab Emirates</option>
                        <option value="gb">United Kingdom</option>
                        <option value="uy">Uruguay</option>
                        <option value="uz">Uzbekistan</option>
                        <option value="vu">Vanuatu</option>
                        <option value="va">
                          Vatican City State (Holy See)
                        </option>
                        <option value="ve">Venezuela</option>
                        <option value="vn">Vietnam</option>
                        <option value="vg">Virgin Islands (British)</option>
                        <option value="vi">Virgin Islands (U.S.)</option>
                        <option value="wf">Wallis and Futuna</option>
                        <option value="eh">Western Sahara</option>
                        <option value="ye">Yemen</option>
                        <option value="zm">Zambia</option>
                        <option value="zw">Zimbabwe</option>
                        <option value="oo">Other</option>
                      </select>
                    </div>
                    <div className="col-md-4" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          position: "relative",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Zip Code
                        <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <input
                        type="text"
                        autofocus
                        value={this.state.zipcode}
                        onChange={this.handleZipCode}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                    <div className="col-md-4" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          position: "relative",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        State
                        <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <select
                        aria-label="State"
                        name="stateProvince"
                        value={this.state.state}
                        onChange={this.handleState}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      >
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>

                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Locations within this area{" "}
                      </label>
                      <input
                        type="text"
                        autofocus
                        value={this.state.locationNearby}
                        onChange={this.handleLocationNearBy}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Industry <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <input
                        type="text"
                        autofocus
                        value={this.state.industry}
                        onChange={this.handleIndustry}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>

                  <br />
                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Summary <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <textarea
                        type="text"
                        autofocus
                        value={this.state.profileSummary}
                        onChange={this.handleSummary}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          minHeight: "112px",
                          maxHeight: "initial",
                          padding: "6px 10px 6px 10px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Experience <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <textarea
                        type="text"
                        autofocus
                        value={this.state.experience}
                        onChange={this.handleExperience}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          minHeight: "112px",
                          maxHeight: "initial",
                          padding: "6px 10px 6px 10px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Skills <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <textarea
                        type="text"
                        autofocus
                        value={this.state.skills}
                        onChange={this.handleSkills}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          minHeight: "112px",
                          maxHeight: "initial",
                          padding: "6px 10px 6px 10px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Education <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <textarea
                        type="text"
                        autofocus
                        value={this.state.education}
                        onChange={this.handleEducation}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          minHeight: "112px",
                          maxHeight: "initial",
                          padding: "6px 10px 6px 10px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div
                    className="row"
                    style={{ textAlign: "left", marginLeft: "3px" }}
                  >
                    <label
                      style={{
                        fontSize: "20px",
                        color: "black",
                        textAlign: "left",
                        fontWeight: "400"
                        // padding: "0 0 0 10px"
                      }}
                    >
                      Edit contact Information{" "}
                    </label>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-6" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Phone <span style={{ color: "#0073b1" }}>*</span>
                      </label>
                      <input
                        type="text"
                        autofocus
                        value={this.state.phone}
                        onChange={this.handlePhone}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                    <div className="col-md-6" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          position: "relative",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Type
                        <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <select
                        data-control-name="type_chooser"
                        onChange={this.handlePhoneType}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                        value={this.state.phoneType}
                      >
                        <option value="HOME">Home</option>
                        <option value="WORK">Work</option>
                        <option value="MOBILE">Mobile</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Address <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <textarea
                        type="text"
                        autofocus
                        value={this.state.address}
                        onChange={this.handleAddress}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <button
                    class="btn btn-secondary"
                    type="button"
                    onClick={this.handleSave}
                    style={{
                      margin: "center ",
                      position: "relative",
                      verticalAlign: "middle",
                      display: "inline-block",
                      textAlign: "center",
                      height: "43px",
                      width: "160px",
                      marginTop: "10px",
                      backgroundColor: "#0073b1",
                      borderColor: "transparent",
                      borderRadius: "0px",
                      color: "white"
                    }}
                  >
                    Save
                  </button>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

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
              <div
                className="row col-md-12"
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
                    borderRadius: "50%"
                  }}
                />
              </div>
              {modalDisplay}

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
                            width: "200px",
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
                        <div class="dropdown-menu">
                          <div className="col-md-12">
                            <div style={{ textAlign: "right" }}>
                              <button
                                type="button"
                                class="btn btn-primary"
                                role="menuitem"
                                onClick={this.connectButton}
                                style={{
                                  width: "275px",
                                  color: "black",
                                  backgroundColor: "white",
                                  border: "none",
                                  fontSize: "18px"
                                }}
                              >
                                Send Connection Request
                              </button>
                              <div
                                class="modal fade"
                                id="exampleModal4"
                                tabindex="-1"
                                role="dialog"
                                aria-labelledby="exampleModal4Label"
                                aria-hidden="true"
                                position="relative"
                              >
                                <div
                                  class="modal-dialog modal-dialog-centered"
                                  role="document"
                                  style={{ width: "750px" }}
                                >
                                  <div class="modal-content">
                                    <div
                                      class="modal-header"
                                      style={{ height: "58px" }}
                                    >
                                      <div className="row">
                                        <div className="col-md-6">
                                          <h5
                                            class="modal-title"
                                            id="exampleModal4Label"
                                            style={{
                                              textAlign: "left",
                                              fontFamily: "Sans Serif",
                                              fontSize: "22px"
                                            }}
                                          >
                                            Edit Information
                                          </h5>
                                        </div>
                                        <div className="col-md-6">
                                          <button
                                            type="button"
                                            class="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                          >
                                            <span
                                              aria-hidden="true"
                                              style={{
                                                fontSize: "42px"
                                              }}
                                            >
                                              &times;
                                            </span>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="modal-body"
                                      style={{ marginLeft: "10px" }}
                                    >
                                      <div className="row">
                                        <div
                                          className="col-md-6"
                                          style={{ textAlign: "left" }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12px",
                                              color: "black",
                                              textAlign: "left",
                                              fontWeight: "400"
                                              // padding: "0 0 0 10px"
                                            }}
                                          >
                                            First Name{" "}
                                            <span style={{ color: "#0073b1" }}>
                                              *
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            autofocus
                                            value={this.state.firstName}
                                            onChange={this.handleFirstName}
                                            class="form-control mb-2 mr-sm-2"
                                            style={{
                                              height: "46px",
                                              width: "100%",
                                              border: "1px solid grey",
                                              borderRadius: "30"
                                            }}
                                          />
                                        </div>
                                        <div
                                          className="col-md-6"
                                          style={{ textAlign: "left" }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12px",
                                              color: "black",
                                              position: "relative",
                                              fontWeight: "400"
                                              // padding: "0 0 0 10px"
                                            }}
                                          >
                                            Last Name
                                            <span style={{ color: "#0073b1" }}>
                                              {" "}
                                              *
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            autofocus
                                            value={this.state.lastName}
                                            onChange={this.handleLastName}
                                            class="form-control mb-2 mr-sm-2"
                                            style={{
                                              height: "46px",
                                              width: "100%",
                                              border: "1px solid grey",
                                              borderRadius: "30"
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <br />
                                      {/* this is for headline */}
                                      <div className="row">
                                        <div
                                          className="col-md-12"
                                          style={{ textAlign: "left" }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12px",
                                              color: "black",
                                              textAlign: "left",
                                              fontWeight: "400"
                                              // padding: "0 0 0 10px"
                                            }}
                                          >
                                            Headline{" "}
                                            <span style={{ color: "#0073b1" }}>
                                              *
                                            </span>
                                          </label>
                                          <textarea
                                            type="text"
                                            autofocus
                                            value={this.state.headline}
                                            onChange={this.handleHeadline}
                                            class="form-control mb-2 mr-sm-2"
                                            style={{
                                              height: "46px",
                                              width: "100%",
                                              border: "1px solid grey",
                                              borderRadius: "30"
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <br />
                                      {/* This filed is for education */}

                                      <div className="row">
                                        <div
                                          className="col-md-4"
                                          style={{ textAlign: "left" }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12px",
                                              color: "black",
                                              textAlign: "left",
                                              fontWeight: "400"
                                              // padding: "0 0 0 10px"
                                            }}
                                          >
                                            Country{" "}
                                            <span style={{ color: "#0073b1" }}>
                                              *
                                            </span>
                                          </label>
                                          <select
                                            data-control-name="location_country_chooser"
                                            name="locationCountry"
                                            id="location-country"
                                            value={this.state.country}
                                            onChange={this.handleCountry}
                                            class="form-control mb-2 mr-sm-2"
                                            style={{
                                              height: "46px",
                                              width: "100%",
                                              border: "1px solid grey",
                                              borderRadius: "30"
                                            }}
                                          >
                                            <option value="us">
                                              United States
                                            </option>
                                            <option value="af">
                                              Afghanistan
                                            </option>
                                            <option value="ax">
                                              Aland Islands
                                            </option>
                                            <option value="al">Albania</option>
                                            <option value="dz">Algeria</option>
                                            <option value="as">
                                              American Samoa
                                            </option>
                                            <option value="ad">Andorra</option>
                                            <option value="ao">Angola</option>
                                            <option value="ai">Anguilla</option>
                                            <option value="aq">
                                              Antarctica
                                            </option>
                                            <option value="ag">
                                              Antigua and Barbuda
                                            </option>
                                            <option value="ar">
                                              Argentina
                                            </option>
                                            <option value="am">Armenia</option>
                                            <option value="aw">Aruba</option>
                                            <option value="au">
                                              Australia
                                            </option>
                                            <option value="at">Austria</option>
                                            <option value="az">
                                              Azerbaijan
                                            </option>
                                            <option value="bs">Bahamas</option>
                                            <option value="bh">Bahrain</option>
                                            <option value="bd">
                                              Bangladesh
                                            </option>
                                            <option value="bb">Barbados</option>
                                            <option value="by">Belarus</option>
                                            <option value="be">Belgium</option>
                                            <option value="bz">Belize</option>
                                            <option value="bj">Benin</option>
                                            <option value="bm">Bermuda</option>
                                            <option value="bt">Bhutan</option>
                                            <option value="bo">Bolivia</option>
                                            <option value="ba">
                                              Bosnia and Herzegovina
                                            </option>
                                            <option value="bw">Botswana</option>
                                            <option value="bv">
                                              Bouvet Island
                                            </option>
                                            <option value="br">Brazil</option>
                                            <option value="io">
                                              British Indian Ocean Territory
                                            </option>
                                            <option value="bn">
                                              Brunei Darussalam
                                            </option>
                                            <option value="bg">Bulgaria</option>
                                            <option value="bf">
                                              Burkina Faso
                                            </option>
                                            <option value="bi">Burundi</option>
                                            <option value="kh">Cambodia</option>
                                            <option value="cm">Cameroon</option>
                                            <option value="ca">Canada</option>
                                            <option value="cv">
                                              Cape Verde
                                            </option>
                                            <option value="cb">
                                              Caribbean Nations
                                            </option>
                                            <option value="ky">
                                              Cayman Islands
                                            </option>
                                            <option value="cf">
                                              Central African Republic
                                            </option>
                                            <option value="td">Chad</option>
                                            <option value="cl">Chile</option>
                                            <option value="cn">China</option>
                                            <option value="cx">
                                              Christmas Island
                                            </option>
                                            <option value="cc">
                                              Cocos (Keeling) Islands
                                            </option>
                                            <option value="co">Colombia</option>
                                            <option value="km">Comoros</option>
                                            <option value="cg">Congo</option>
                                            <option value="ck">
                                              Cook Islands
                                            </option>
                                            <option value="cr">
                                              Costa Rica
                                            </option>
                                            <option value="ci">
                                              Cote D’Ivoire (Ivory Coast)
                                            </option>
                                            <option value="hr">Croatia</option>
                                            <option value="cu">Cuba</option>
                                            <option value="cy">Cyprus</option>
                                            <option value="cz">
                                              Czech Republic
                                            </option>
                                            <option value="cd">
                                              Democratic Republic of the Congo
                                            </option>
                                            <option value="dk">Denmark</option>
                                            <option value="dj">Djibouti</option>
                                            <option value="dm">Dominica</option>
                                            <option value="do">
                                              Dominican Republic
                                            </option>
                                            <option value="ec">Ecuador</option>
                                            <option value="eg">Egypt</option>
                                            <option value="sv">
                                              El Salvador
                                            </option>
                                            <option value="gq">
                                              Equatorial Guinea
                                            </option>
                                            <option value="er">Eritrea</option>
                                            <option value="ee">Estonia</option>
                                            <option value="et">Ethiopia</option>
                                            <option value="fk">
                                              Falkland Islands (Malvinas)
                                            </option>
                                            <option value="fo">
                                              Faroe Islands
                                            </option>
                                            <option value="fm">
                                              Federated States of Micronesia
                                            </option>
                                            <option value="fj">Fiji</option>
                                            <option value="fi">Finland</option>
                                            <option value="fr">France</option>
                                            <option value="gf">
                                              French Guiana
                                            </option>
                                            <option value="pf">
                                              French Polynesia
                                            </option>
                                            <option value="tf">
                                              French Southern Territories
                                            </option>
                                            <option value="ga">Gabon</option>
                                            <option value="gm">Gambia</option>
                                            <option value="ge">Georgia</option>
                                            <option value="de">Germany</option>
                                            <option value="gh">Ghana</option>
                                            <option value="gi">
                                              Gibraltar
                                            </option>
                                            <option value="gr">Greece</option>
                                            <option value="gl">
                                              Greenland
                                            </option>
                                            <option value="gd">Grenada</option>
                                            <option value="gp">
                                              Guadeloupe
                                            </option>
                                            <option value="gu">Guam</option>
                                            <option value="gt">
                                              Guatemala
                                            </option>
                                            <option value="gg">Guernsey</option>
                                            <option value="gn">Guinea</option>
                                            <option value="gw">
                                              Guinea-Bissau
                                            </option>
                                            <option value="gy">Guyana</option>
                                            <option value="ht">Haiti</option>
                                            <option value="hm">
                                              Heard Island and McDonald Islands
                                            </option>
                                            <option value="hn">Honduras</option>
                                            <option value="hk">
                                              Hong Kong
                                            </option>
                                            <option value="hu">Hungary</option>
                                            <option value="is">Iceland</option>
                                            <option value="in">India</option>
                                            <option value="id">
                                              Indonesia
                                            </option>
                                            <option value="ir">Iran</option>
                                            <option value="iq">Iraq</option>
                                            <option value="ie">Ireland</option>
                                            <option value="im">
                                              Isle of Man
                                            </option>
                                            <option value="il">Israel</option>
                                            <option value="it">Italy</option>
                                            <option value="jm">Jamaica</option>
                                            <option value="jp">Japan</option>
                                            <option value="je">Jersey</option>
                                            <option value="jo">Jordan</option>
                                            <option value="kz">
                                              Kazakhstan
                                            </option>
                                            <option value="ke">Kenya</option>
                                            <option value="ki">Kiribati</option>
                                            <option value="kr">Korea</option>
                                            <option value="kp">
                                              Korea (North)
                                            </option>
                                            <option value="ko">Kosovo</option>
                                            <option value="kw">Kuwait</option>
                                            <option value="kg">
                                              Kyrgyzstan
                                            </option>
                                            <option value="la">Laos</option>
                                            <option value="lv">Latvia</option>
                                            <option value="lb">Lebanon</option>
                                            <option value="ls">Lesotho</option>
                                            <option value="lr">Liberia</option>
                                            <option value="ly">Libya</option>
                                            <option value="li">
                                              Liechtenstein
                                            </option>
                                            <option value="lt">
                                              Lithuania
                                            </option>
                                            <option value="lu">
                                              Luxembourg
                                            </option>
                                            <option value="mo">Macao</option>
                                            <option value="mk">
                                              Macedonia
                                            </option>
                                            <option value="mg">
                                              Madagascar
                                            </option>
                                            <option value="mw">Malawi</option>
                                            <option value="my">Malaysia</option>
                                            <option value="mv">Maldives</option>
                                            <option value="ml">Mali</option>
                                            <option value="mt">Malta</option>
                                            <option value="mh">
                                              Marshall Islands
                                            </option>
                                            <option value="mq">
                                              Martinique
                                            </option>
                                            <option value="mr">
                                              Mauritania
                                            </option>
                                            <option value="mu">
                                              Mauritius
                                            </option>
                                            <option value="yt">Mayotte</option>
                                            <option value="mx">Mexico</option>
                                            <option value="md">Moldova</option>
                                            <option value="mc">Monaco</option>
                                            <option value="mn">Mongolia</option>
                                            <option value="me">
                                              Montenegro
                                            </option>
                                            <option value="ms">
                                              Montserrat
                                            </option>
                                            <option value="ma">Morocco</option>
                                            <option value="mz">
                                              Mozambique
                                            </option>
                                            <option value="mm">Myanmar</option>
                                            <option value="na">Namibia</option>
                                            <option value="nr">Nauru</option>
                                            <option value="np">Nepal</option>
                                            <option value="nl">
                                              Netherlands
                                            </option>
                                            <option value="an">
                                              Netherlands Antilles
                                            </option>
                                            <option value="nc">
                                              New Caledonia
                                            </option>
                                            <option value="nz">
                                              New Zealand
                                            </option>
                                            <option value="ni">
                                              Nicaragua
                                            </option>
                                            <option value="ne">Niger</option>
                                            <option value="ng">Nigeria</option>
                                            <option value="nu">Niue</option>
                                            <option value="nf">
                                              Norfolk Island
                                            </option>
                                            <option value="mp">
                                              Northern Mariana Islands
                                            </option>
                                            <option value="no">Norway</option>
                                            <option value="pk">Pakistan</option>
                                            <option value="pw">Palau</option>
                                            <option value="ps">
                                              Palestinian Territory
                                            </option>
                                            <option value="pa">Panama</option>
                                            <option value="pg">
                                              Papua New Guinea
                                            </option>
                                            <option value="py">Paraguay</option>
                                            <option value="pe">Peru</option>
                                            <option value="ph">
                                              Philippines
                                            </option>
                                            <option value="pn">Pitcairn</option>
                                            <option value="pl">Poland</option>
                                            <option value="pt">Portugal</option>
                                            <option value="pr">
                                              Puerto Rico
                                            </option>
                                            <option value="qa">Qatar</option>
                                            <option value="re">Reunion</option>
                                            <option value="ro">Romania</option>
                                            <option value="ru">
                                              Russian Federation
                                            </option>
                                            <option value="rw">Rwanda</option>
                                            <option value="gs">
                                              S. Georgia and S. Sandwich Islands
                                            </option>
                                            <option value="sh">
                                              Saint Helena
                                            </option>
                                            <option value="kn">
                                              Saint Kitts and Nevis
                                            </option>
                                            <option value="lc">
                                              Saint Lucia
                                            </option>
                                            <option value="pm">
                                              Saint Pierre and Miquelon
                                            </option>
                                            <option value="vc">
                                              Saint Vincent and the Grenadines
                                            </option>
                                            <option value="ws">Samoa</option>
                                            <option value="sm">
                                              San Marino
                                            </option>
                                            <option value="st">
                                              Sao Tome and Principe
                                            </option>
                                            <option value="sa">
                                              Saudi Arabia
                                            </option>
                                            <option value="sn">Senegal</option>
                                            <option value="rs">Serbia</option>
                                            <option value="cs">
                                              Serbia and Montenegro
                                            </option>
                                            <option value="sc">
                                              Seychelles
                                            </option>
                                            <option value="sl">
                                              Sierra Leone
                                            </option>
                                            <option value="sg">
                                              Singapore
                                            </option>
                                            <option value="sk">
                                              Slovak Republic
                                            </option>
                                            <option value="si">Slovenia</option>
                                            <option value="sb">
                                              Solomon Islands
                                            </option>
                                            <option value="so">Somalia</option>
                                            <option value="za">
                                              South Africa
                                            </option>
                                            <option value="ss">
                                              South Sudan
                                            </option>
                                            <option value="es">Spain</option>
                                            <option value="lk">
                                              Sri Lanka
                                            </option>
                                            <option value="sd">Sudan</option>
                                            <option value="om">
                                              Sultanate of Oman
                                            </option>
                                            <option value="sr">Suriname</option>
                                            <option value="sj">
                                              Svalbard and Jan Mayen
                                            </option>
                                            <option value="sz">
                                              Swaziland
                                            </option>
                                            <option value="se">Sweden</option>
                                            <option value="ch">
                                              Switzerland
                                            </option>
                                            <option value="sy">Syria</option>
                                            <option value="tw">Taiwan</option>
                                            <option value="tj">
                                              Tajikistan
                                            </option>
                                            <option value="tz">Tanzania</option>
                                            <option value="th">Thailand</option>
                                            <option value="tl">
                                              Timor-Leste
                                            </option>
                                            <option value="tg">Togo</option>
                                            <option value="tk">Tokelau</option>
                                            <option value="to">Tonga</option>
                                            <option value="tt">
                                              Trinidad and Tobago
                                            </option>
                                            <option value="tn">Tunisia</option>
                                            <option value="tr">Turkey</option>
                                            <option value="tm">
                                              Turkmenistan
                                            </option>
                                            <option value="tc">
                                              Turks and Caicos Islands
                                            </option>
                                            <option value="tv">Tuvalu</option>
                                            <option value="ug">Uganda</option>
                                            <option value="ua">Ukraine</option>
                                            <option value="ae">
                                              United Arab Emirates
                                            </option>
                                            <option value="gb">
                                              United Kingdom
                                            </option>
                                            <option value="uy">Uruguay</option>
                                            <option value="uz">
                                              Uzbekistan
                                            </option>
                                            <option value="vu">Vanuatu</option>
                                            <option value="va">
                                              Vatican City State (Holy See)
                                            </option>
                                            <option value="ve">
                                              Venezuela
                                            </option>
                                            <option value="vn">Vietnam</option>
                                            <option value="vg">
                                              Virgin Islands (British)
                                            </option>
                                            <option value="vi">
                                              Virgin Islands (U.S.)
                                            </option>
                                            <option value="wf">
                                              Wallis and Futuna
                                            </option>
                                            <option value="eh">
                                              Western Sahara
                                            </option>
                                            <option value="ye">Yemen</option>
                                            <option value="zm">Zambia</option>
                                            <option value="zw">Zimbabwe</option>
                                            <option value="oo">Other</option>
                                          </select>
                                        </div>
                                        <div
                                          className="col-md-4"
                                          style={{ textAlign: "left" }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12px",
                                              color: "black",
                                              position: "relative",
                                              fontWeight: "400"
                                              // padding: "0 0 0 10px"
                                            }}
                                          >
                                            Zip Code
                                            <span style={{ color: "#0073b1" }}>
                                              {" "}
                                              *
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            autofocus
                                            value={this.state.zipcode}
                                            onChange={this.handleZipCode}
                                            class="form-control mb-2 mr-sm-2"
                                            style={{
                                              height: "46px",
                                              width: "100%",
                                              border: "1px solid grey",
                                              borderRadius: "30"
                                            }}
                                          />
                                        </div>
                                        <div
                                          className="col-md-4"
                                          style={{ textAlign: "left" }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12px",
                                              color: "black",
                                              position: "relative",
                                              fontWeight: "400"
                                              // padding: "0 0 0 10px"
                                            }}
                                          >
                                            State
                                            <span style={{ color: "#0073b1" }}>
                                              {" "}
                                              *
                                            </span>
                                          </label>
                                          <select
                                            aria-label="State"
                                            name="stateProvince"
                                            value={this.state.state}
                                            onChange={this.handleState}
                                            class="form-control mb-2 mr-sm-2"
                                            style={{
                                              height: "46px",
                                              width: "100%",
                                              border: "1px solid grey",
                                              borderRadius: "30"
                                            }}
                                          >
                                            <option value="AL">Alabama</option>
                                            <option value="AK">Alaska</option>
                                            <option value="AZ">Arizona</option>
                                            <option value="AR">Arkansas</option>

                                            <option value="CA">
                                              California
                                            </option>
                                            <option value="CO">Colorado</option>
                                            <option value="CT">
                                              Connecticut
                                            </option>
                                            <option value="DE">Delaware</option>
                                            <option value="DC">
                                              District of Columbia
                                            </option>
                                            <option value="FL">Florida</option>
                                            <option value="GA">Georgia</option>
                                            <option value="HI">Hawaii</option>
                                            <option value="ID">Idaho</option>
                                            <option value="IL">Illinois</option>
                                            <option value="IN">Indiana</option>
                                            <option value="IA">Iowa</option>
                                            <option value="KS">Kansas</option>
                                            <option value="KY">Kentucky</option>
                                            <option value="LA">
                                              Louisiana
                                            </option>
                                            <option value="ME">Maine</option>
                                            <option value="MD">Maryland</option>
                                            <option value="MA">
                                              Massachusetts
                                            </option>
                                            <option value="MI">Michigan</option>
                                            <option value="MN">
                                              Minnesota
                                            </option>
                                            <option value="MS">
                                              Mississippi
                                            </option>
                                            <option value="MO">Missouri</option>
                                            <option value="MT">Montana</option>
                                            <option value="NE">Nebraska</option>
                                            <option value="NV">Nevada</option>
                                            <option value="NH">
                                              New Hampshire
                                            </option>
                                            <option value="NJ">
                                              New Jersey
                                            </option>
                                            <option value="NM">
                                              New Mexico
                                            </option>
                                            <option value="NY">New York</option>
                                            <option value="NC">
                                              North Carolina
                                            </option>
                                            <option value="ND">
                                              North Dakota
                                            </option>
                                            <option value="OH">Ohio</option>
                                            <option value="OK">Oklahoma</option>
                                            <option value="OR">Oregon</option>
                                            <option value="PA">
                                              Pennsylvania
                                            </option>
                                            <option value="RI">
                                              Rhode Island
                                            </option>
                                            <option value="SC">
                                              South Carolina
                                            </option>
                                            <option value="SD">
                                              South Dakota
                                            </option>
                                            <option value="TN">
                                              Tennessee
                                            </option>
                                            <option value="TX">Texas</option>
                                            <option value="UT">Utah</option>
                                            <option value="VT">Vermont</option>
                                            <option value="VA">Virginia</option>
                                            <option value="WA">
                                              Washington
                                            </option>
                                            <option value="WV">
                                              West Virginia
                                            </option>
                                            <option value="WI">
                                              Wisconsin
                                            </option>
                                            <option value="WY">Wyoming</option>
                                          </select>
                                        </div>
                                      </div>
                                      <br />
                                      <div className="row">
                                        <div
                                          className="col-md-12"
                                          style={{ textAlign: "left" }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12px",
                                              color: "black",
                                              textAlign: "left",
                                              fontWeight: "400"
                                              // padding: "0 0 0 10px"
                                            }}
                                          >
                                            Locations within this area{" "}
                                          </label>
                                          <input
                                            type="text"
                                            autofocus
                                            value={this.state.locationNearby}
                                            onChange={this.handleLocationNearBy}
                                            class="form-control mb-2 mr-sm-2"
                                            style={{
                                              height: "46px",
                                              width: "100%",
                                              border: "1px solid grey",
                                              borderRadius: "30"
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <br />

                                      <div className="row">
                                        <div
                                          className="col-md-12"
                                          style={{ textAlign: "left" }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12px",
                                              color: "black",
                                              textAlign: "left",
                                              fontWeight: "400"
                                              // padding: "0 0 0 10px"
                                            }}
                                          >
                                            Industry{" "}
                                            <span style={{ color: "#0073b1" }}>
                                              {" "}
                                              *
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            autofocus
                                            value={this.state.industry}
                                            onChange={this.handleIndustry}
                                            class="form-control mb-2 mr-sm-2"
                                            style={{
                                              height: "46px",
                                              width: "100%",
                                              border: "1px solid grey",
                                              borderRadius: "30"
                                            }}
                                          />
                                        </div>
                                      </div>

                                      <br />
                                      <div className="row">
                                        <div
                                          className="col-md-12"
                                          style={{ textAlign: "left" }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12px",
                                              color: "black",
                                              textAlign: "left",
                                              fontWeight: "400"
                                              // padding: "0 0 0 10px"
                                            }}
                                          >
                                            Summary{" "}
                                            <span style={{ color: "#0073b1" }}>
                                              {" "}
                                              *
                                            </span>
                                          </label>
                                          <textarea
                                            type="text"
                                            autofocus
                                            value={this.state.profileSummary}
                                            onChange={this.handleSummary}
                                            class="form-control mb-2 mr-sm-2"
                                            style={{
                                              minHeight: "112px",
                                              maxHeight: "initial",
                                              padding: "6px 10px 6px 10px",
                                              width: "100%",
                                              border: "1px solid grey",
                                              borderRadius: "30"
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <br />

                                      <div className="row">
                                        <div
                                          className="col-md-12"
                                          style={{ textAlign: "left" }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12px",
                                              color: "black",
                                              textAlign: "left",
                                              fontWeight: "400"
                                              // padding: "0 0 0 10px"
                                            }}
                                          >
                                            Experience{" "}
                                            <span style={{ color: "#0073b1" }}>
                                              {" "}
                                              *
                                            </span>
                                          </label>
                                          <textarea
                                            type="text"
                                            autofocus
                                            value={this.state.experience}
                                            onChange={this.handleExperience}
                                            class="form-control mb-2 mr-sm-2"
                                            style={{
                                              minHeight: "112px",
                                              maxHeight: "initial",
                                              padding: "6px 10px 6px 10px",
                                              width: "100%",
                                              border: "1px solid grey",
                                              borderRadius: "30"
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <br />
                                      <div className="row">
                                        <div
                                          className="col-md-12"
                                          style={{ textAlign: "left" }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12px",
                                              color: "black",
                                              textAlign: "left",
                                              fontWeight: "400"
                                              // padding: "0 0 0 10px"
                                            }}
                                          >
                                            Skills{" "}
                                            <span style={{ color: "#0073b1" }}>
                                              {" "}
                                              *
                                            </span>
                                          </label>
                                          <textarea
                                            type="text"
                                            autofocus
                                            value={this.state.skills}
                                            onChange={this.handleSkills}
                                            class="form-control mb-2 mr-sm-2"
                                            style={{
                                              minHeight: "112px",
                                              maxHeight: "initial",
                                              padding: "6px 10px 6px 10px",
                                              width: "100%",
                                              border: "1px solid grey",
                                              borderRadius: "30"
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <br />
                                      <div className="row">
                                        <div
                                          className="col-md-12"
                                          style={{ textAlign: "left" }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12px",
                                              color: "black",
                                              textAlign: "left",
                                              fontWeight: "400"
                                              // padding: "0 0 0 10px"
                                            }}
                                          >
                                            Education{" "}
                                            <span style={{ color: "#0073b1" }}>
                                              {" "}
                                              *
                                            </span>
                                          </label>
                                          <textarea
                                            type="text"
                                            autofocus
                                            value={this.state.education}
                                            onChange={this.handleEducation}
                                            class="form-control mb-2 mr-sm-2"
                                            style={{
                                              minHeight: "112px",
                                              maxHeight: "initial",
                                              padding: "6px 10px 6px 10px",
                                              width: "100%",
                                              border: "1px solid grey",
                                              borderRadius: "30"
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <br />
                                      <div
                                        className="row"
                                        style={{
                                          textAlign: "left",
                                          marginLeft: "3px"
                                        }}
                                      >
                                        <label
                                          style={{
                                            fontSize: "20px",
                                            color: "black",
                                            textAlign: "left",
                                            fontWeight: "400"
                                            // padding: "0 0 0 10px"
                                          }}
                                        >
                                          Edit contact Information{" "}
                                        </label>
                                      </div>
                                      <br />
                                      <div className="row">
                                        <div
                                          className="col-md-6"
                                          style={{ textAlign: "left" }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12px",
                                              color: "black",
                                              textAlign: "left",
                                              fontWeight: "400"
                                              // padding: "0 0 0 10px"
                                            }}
                                          >
                                            Phone{" "}
                                            <span style={{ color: "#0073b1" }}>
                                              *
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            autofocus
                                            value={this.state.phone}
                                            onChange={this.handlePhone}
                                            class="form-control mb-2 mr-sm-2"
                                            style={{
                                              height: "46px",
                                              width: "100%",
                                              border: "1px solid grey",
                                              borderRadius: "30"
                                            }}
                                          />
                                        </div>
                                        <div
                                          className="col-md-6"
                                          style={{ textAlign: "left" }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12px",
                                              color: "black",
                                              position: "relative",
                                              fontWeight: "400"
                                              // padding: "0 0 0 10px"
                                            }}
                                          >
                                            Type
                                            <span style={{ color: "#0073b1" }}>
                                              {" "}
                                              *
                                            </span>
                                          </label>
                                          <select
                                            data-control-name="type_chooser"
                                            onChange={this.handlePhoneType}
                                            class="form-control mb-2 mr-sm-2"
                                            style={{
                                              height: "46px",
                                              width: "100%",
                                              border: "1px solid grey",
                                              borderRadius: "30"
                                            }}
                                            value={this.state.phoneType}
                                          >
                                            <option value="HOME">Home</option>
                                            <option value="WORK">Work</option>
                                            <option value="MOBILE">
                                              Mobile
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <br />
                                      <div className="row">
                                        <div
                                          className="col-md-12"
                                          style={{ textAlign: "left" }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12px",
                                              color: "black",
                                              textAlign: "left",
                                              fontWeight: "400"
                                              // padding: "0 0 0 10px"
                                            }}
                                          >
                                            Address{" "}
                                            <span style={{ color: "#0073b1" }}>
                                              {" "}
                                              *
                                            </span>
                                          </label>
                                          <textarea
                                            type="text"
                                            autofocus
                                            value={this.state.address}
                                            onChange={this.handleAddress}
                                            class="form-control mb-2 mr-sm-2"
                                            style={{
                                              height: "46px",
                                              width: "100%",
                                              border: "1px solid grey",
                                              borderRadius: "30"
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <br />
                                      <button
                                        class="btn btn-secondary"
                                        type="button"
                                        onClick={this.handleSave}
                                        style={{
                                          margin: "center ",
                                          position: "relative",
                                          verticalAlign: "middle",
                                          display: "inline-block",
                                          textAlign: "center",
                                          height: "43px",
                                          width: "160px",
                                          marginTop: "10px",
                                          backgroundColor: "#0073b1",
                                          borderColor: "transparent",
                                          borderRadius: "0px",
                                          color: "white"
                                        }}
                                      >
                                        Save
                                      </button>
                                      <br />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <button
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
                          </button> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div class="dropdown">
                      <button
                          class="btn btn-secondary dropdown-toggle"
                          type="button"
                          onClick={this.messageButton}
                          aria-expanded="false"
                          style={{
                            margin: "center ",
                            position: "relative",
                            verticalAlign: "middle",
                            display: "inline-block",
                            textAlign: "center",
                            height: "43px",
                            width: "200px",
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
                        <Link to="/applicant/profile/viewConnections">
                          <p
                            style={{
                              fontSize: "16px",
                              marginTop: "10px",
                              fontWeight: "300",
                              marginLeft: "-35px",
                              fontFamily: "Sans Serif",
                              color : "black"
                            }}
                          >
                            See Connections
                          </p></Link>
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
                  <div className="col-md-6" style={{ textAlign: "right" }}>
                    <div style={{ textAlign: "right" }}>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#exampleModal4"
                        class="btn btn-primary"
                        style={{
                          height: "44px",
                          width: "34px",
                          border: "none",
                          backgroundColor: "transparent",
                          outlineColor: "white"
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
                      style={{ marginTop: "16px", color: "#0073b1" }}
                    >
                      <path
                        d="M21,13H13v8H11V13H3V11h8V3h2v8h8v2Z"
                        class="large-icon"
                        style={{ fill: "currentColor" }}
                      />
                    </svg>
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal4"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModal4Label"
                        aria-hidden="true"
                        position="relative"
                      >
                        <div
                          class="modal-dialog modal-dialog-centered"
                          role="document"
                          style={{ width: "750px" }}
                        >
                          <div class="modal-content">
                            <div
                              class="modal-header"
                              style={{ height: "58px" }}
                            >
                              <div className="row">
                                <div className="col-md-6">
                                  <h5
                                    class="modal-title"
                                    id="exampleModal4Label"
                                    style={{
                                      textAlign: "left",
                                      fontFamily: "Sans Serif",
                                      fontSize: "22px"
                                    }}
                                  >
                                    Edit Information
                                  </h5>
                                </div>
                                <div className="col-md-6">
                                  <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span
                                      aria-hidden="true"
                                      style={{
                                        fontSize: "42px"
                                      }}
                                    >
                                      &times;
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div
                              class="modal-body"
                              style={{ marginLeft: "10px" }}
                            >
                              <div className="row">
                                <div
                                  className="col-md-6"
                                  style={{ textAlign: "left" }}
                                >
                                  <label
                                    style={{
                                      fontSize: "12px",
                                      color: "black",
                                      textAlign: "left",
                                      fontWeight: "400"
                                      // padding: "0 0 0 10px"
                                    }}
                                  >
                                    First Name{" "}
                                    <span style={{ color: "#0073b1" }}>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    autofocus
                                    value={this.state.firstName}
                                    onChange={this.handleFirstName}
                                    class="form-control mb-2 mr-sm-2"
                                    style={{
                                      height: "46px",
                                      width: "100%",
                                      border: "1px solid grey",
                                      borderRadius: "30"
                                    }}
                                  />
                                </div>
                                <div
                                  className="col-md-6"
                                  style={{ textAlign: "left" }}
                                >
                                  <label
                                    style={{
                                      fontSize: "12px",
                                      color: "black",
                                      position: "relative",
                                      fontWeight: "400"
                                      // padding: "0 0 0 10px"
                                    }}
                                  >
                                    Last Name
                                    <span style={{ color: "#0073b1" }}> *</span>
                                  </label>
                                  <input
                                    type="text"
                                    autofocus
                                    value={this.state.lastName}
                                    onChange={this.handleLastName}
                                    class="form-control mb-2 mr-sm-2"
                                    style={{
                                      height: "46px",
                                      width: "100%",
                                      border: "1px solid grey",
                                      borderRadius: "30"
                                    }}
                                  />
                                </div>
                              </div>
                              <br />
                              {/* this is for headline */}
                              <div className="row">
                                <div
                                  className="col-md-12"
                                  style={{ textAlign: "left" }}
                                >
                                  <label
                                    style={{
                                      fontSize: "12px",
                                      color: "black",
                                      textAlign: "left",
                                      fontWeight: "400"
                                      // padding: "0 0 0 10px"
                                    }}
                                  >
                                    Headline{" "}
                                    <span style={{ color: "#0073b1" }}>*</span>
                                  </label>
                                  <textarea
                                    type="text"
                                    autofocus
                                    value={this.state.headline}
                                    onChange={this.handleHeadline}
                                    class="form-control mb-2 mr-sm-2"
                                    style={{
                                      height: "46px",
                                      width: "100%",
                                      border: "1px solid grey",
                                      borderRadius: "30"
                                    }}
                                  />
                                </div>
                              </div>
                              <br />
                              {/* This filed is for education */}

                              <div className="row">
                                <div
                                  className="col-md-4"
                                  style={{ textAlign: "left" }}
                                >
                                  <label
                                    style={{
                                      fontSize: "12px",
                                      color: "black",
                                      textAlign: "left",
                                      fontWeight: "400"
                                      // padding: "0 0 0 10px"
                                    }}
                                  >
                                    Country{" "}
                                    <span style={{ color: "#0073b1" }}>*</span>
                                  </label>
                                  <select
                                    data-control-name="location_country_chooser"
                                    name="locationCountry"
                                    id="location-country"
                                    value={this.state.country}
                                    onChange={this.handleCountry}
                                    class="form-control mb-2 mr-sm-2"
                                    style={{
                                      height: "46px",
                                      width: "100%",
                                      border: "1px solid grey",
                                      borderRadius: "30"
                                    }}
                                  >
                                    <option value="us">United States</option>
                                    <option value="af">Afghanistan</option>
                                    <option value="ax">Aland Islands</option>
                                    <option value="al">Albania</option>
                                    <option value="dz">Algeria</option>
                                    <option value="as">American Samoa</option>
                                    <option value="ad">Andorra</option>
                                    <option value="ao">Angola</option>
                                    <option value="ai">Anguilla</option>
                                    <option value="aq">Antarctica</option>
                                    <option value="ag">
                                      Antigua and Barbuda
                                    </option>
                                    <option value="ar">Argentina</option>
                                    <option value="am">Armenia</option>
                                    <option value="aw">Aruba</option>
                                    <option value="au">Australia</option>
                                    <option value="at">Austria</option>
                                    <option value="az">Azerbaijan</option>
                                    <option value="bs">Bahamas</option>
                                    <option value="bh">Bahrain</option>
                                    <option value="bd">Bangladesh</option>
                                    <option value="bb">Barbados</option>
                                    <option value="by">Belarus</option>
                                    <option value="be">Belgium</option>
                                    <option value="bz">Belize</option>
                                    <option value="bj">Benin</option>
                                    <option value="bm">Bermuda</option>
                                    <option value="bt">Bhutan</option>
                                    <option value="bo">Bolivia</option>
                                    <option value="ba">
                                      Bosnia and Herzegovina
                                    </option>
                                    <option value="bw">Botswana</option>
                                    <option value="bv">Bouvet Island</option>
                                    <option value="br">Brazil</option>
                                    <option value="io">
                                      British Indian Ocean Territory
                                    </option>
                                    <option value="bn">
                                      Brunei Darussalam
                                    </option>
                                    <option value="bg">Bulgaria</option>
                                    <option value="bf">Burkina Faso</option>
                                    <option value="bi">Burundi</option>
                                    <option value="kh">Cambodia</option>
                                    <option value="cm">Cameroon</option>
                                    <option value="ca">Canada</option>
                                    <option value="cv">Cape Verde</option>
                                    <option value="cb">
                                      Caribbean Nations
                                    </option>
                                    <option value="ky">Cayman Islands</option>
                                    <option value="cf">
                                      Central African Republic
                                    </option>
                                    <option value="td">Chad</option>
                                    <option value="cl">Chile</option>
                                    <option value="cn">China</option>
                                    <option value="cx">Christmas Island</option>
                                    <option value="cc">
                                      Cocos (Keeling) Islands
                                    </option>
                                    <option value="co">Colombia</option>
                                    <option value="km">Comoros</option>
                                    <option value="cg">Congo</option>
                                    <option value="ck">Cook Islands</option>
                                    <option value="cr">Costa Rica</option>
                                    <option value="ci">
                                      Cote D’Ivoire (Ivory Coast)
                                    </option>
                                    <option value="hr">Croatia</option>
                                    <option value="cu">Cuba</option>
                                    <option value="cy">Cyprus</option>
                                    <option value="cz">Czech Republic</option>
                                    <option value="cd">
                                      Democratic Republic of the Congo
                                    </option>
                                    <option value="dk">Denmark</option>
                                    <option value="dj">Djibouti</option>
                                    <option value="dm">Dominica</option>
                                    <option value="do">
                                      Dominican Republic
                                    </option>
                                    <option value="ec">Ecuador</option>
                                    <option value="eg">Egypt</option>
                                    <option value="sv">El Salvador</option>
                                    <option value="gq">
                                      Equatorial Guinea
                                    </option>
                                    <option value="er">Eritrea</option>
                                    <option value="ee">Estonia</option>
                                    <option value="et">Ethiopia</option>
                                    <option value="fk">
                                      Falkland Islands (Malvinas)
                                    </option>
                                    <option value="fo">Faroe Islands</option>
                                    <option value="fm">
                                      Federated States of Micronesia
                                    </option>
                                    <option value="fj">Fiji</option>
                                    <option value="fi">Finland</option>
                                    <option value="fr">France</option>
                                    <option value="gf">French Guiana</option>
                                    <option value="pf">French Polynesia</option>
                                    <option value="tf">
                                      French Southern Territories
                                    </option>
                                    <option value="ga">Gabon</option>
                                    <option value="gm">Gambia</option>
                                    <option value="ge">Georgia</option>
                                    <option value="de">Germany</option>
                                    <option value="gh">Ghana</option>
                                    <option value="gi">Gibraltar</option>
                                    <option value="gr">Greece</option>
                                    <option value="gl">Greenland</option>
                                    <option value="gd">Grenada</option>
                                    <option value="gp">Guadeloupe</option>
                                    <option value="gu">Guam</option>
                                    <option value="gt">Guatemala</option>
                                    <option value="gg">Guernsey</option>
                                    <option value="gn">Guinea</option>
                                    <option value="gw">Guinea-Bissau</option>
                                    <option value="gy">Guyana</option>
                                    <option value="ht">Haiti</option>
                                    <option value="hm">
                                      Heard Island and McDonald Islands
                                    </option>
                                    <option value="hn">Honduras</option>
                                    <option value="hk">Hong Kong</option>
                                    <option value="hu">Hungary</option>
                                    <option value="is">Iceland</option>
                                    <option value="in">India</option>
                                    <option value="id">Indonesia</option>
                                    <option value="ir">Iran</option>
                                    <option value="iq">Iraq</option>
                                    <option value="ie">Ireland</option>
                                    <option value="im">Isle of Man</option>
                                    <option value="il">Israel</option>
                                    <option value="it">Italy</option>
                                    <option value="jm">Jamaica</option>
                                    <option value="jp">Japan</option>
                                    <option value="je">Jersey</option>
                                    <option value="jo">Jordan</option>
                                    <option value="kz">Kazakhstan</option>
                                    <option value="ke">Kenya</option>
                                    <option value="ki">Kiribati</option>
                                    <option value="kr">Korea</option>
                                    <option value="kp">Korea (North)</option>
                                    <option value="ko">Kosovo</option>
                                    <option value="kw">Kuwait</option>
                                    <option value="kg">Kyrgyzstan</option>
                                    <option value="la">Laos</option>
                                    <option value="lv">Latvia</option>
                                    <option value="lb">Lebanon</option>
                                    <option value="ls">Lesotho</option>
                                    <option value="lr">Liberia</option>
                                    <option value="ly">Libya</option>
                                    <option value="li">Liechtenstein</option>
                                    <option value="lt">Lithuania</option>
                                    <option value="lu">Luxembourg</option>
                                    <option value="mo">Macao</option>
                                    <option value="mk">Macedonia</option>
                                    <option value="mg">Madagascar</option>
                                    <option value="mw">Malawi</option>
                                    <option value="my">Malaysia</option>
                                    <option value="mv">Maldives</option>
                                    <option value="ml">Mali</option>
                                    <option value="mt">Malta</option>
                                    <option value="mh">Marshall Islands</option>
                                    <option value="mq">Martinique</option>
                                    <option value="mr">Mauritania</option>
                                    <option value="mu">Mauritius</option>
                                    <option value="yt">Mayotte</option>
                                    <option value="mx">Mexico</option>
                                    <option value="md">Moldova</option>
                                    <option value="mc">Monaco</option>
                                    <option value="mn">Mongolia</option>
                                    <option value="me">Montenegro</option>
                                    <option value="ms">Montserrat</option>
                                    <option value="ma">Morocco</option>
                                    <option value="mz">Mozambique</option>
                                    <option value="mm">Myanmar</option>
                                    <option value="na">Namibia</option>
                                    <option value="nr">Nauru</option>
                                    <option value="np">Nepal</option>
                                    <option value="nl">Netherlands</option>
                                    <option value="an">
                                      Netherlands Antilles
                                    </option>
                                    <option value="nc">New Caledonia</option>
                                    <option value="nz">New Zealand</option>
                                    <option value="ni">Nicaragua</option>
                                    <option value="ne">Niger</option>
                                    <option value="ng">Nigeria</option>
                                    <option value="nu">Niue</option>
                                    <option value="nf">Norfolk Island</option>
                                    <option value="mp">
                                      Northern Mariana Islands
                                    </option>
                                    <option value="no">Norway</option>
                                    <option value="pk">Pakistan</option>
                                    <option value="pw">Palau</option>
                                    <option value="ps">
                                      Palestinian Territory
                                    </option>
                                    <option value="pa">Panama</option>
                                    <option value="pg">Papua New Guinea</option>
                                    <option value="py">Paraguay</option>
                                    <option value="pe">Peru</option>
                                    <option value="ph">Philippines</option>
                                    <option value="pn">Pitcairn</option>
                                    <option value="pl">Poland</option>
                                    <option value="pt">Portugal</option>
                                    <option value="pr">Puerto Rico</option>
                                    <option value="qa">Qatar</option>
                                    <option value="re">Reunion</option>
                                    <option value="ro">Romania</option>
                                    <option value="ru">
                                      Russian Federation
                                    </option>
                                    <option value="rw">Rwanda</option>
                                    <option value="gs">
                                      S. Georgia and S. Sandwich Islands
                                    </option>
                                    <option value="sh">Saint Helena</option>
                                    <option value="kn">
                                      Saint Kitts and Nevis
                                    </option>
                                    <option value="lc">Saint Lucia</option>
                                    <option value="pm">
                                      Saint Pierre and Miquelon
                                    </option>
                                    <option value="vc">
                                      Saint Vincent and the Grenadines
                                    </option>
                                    <option value="ws">Samoa</option>
                                    <option value="sm">San Marino</option>
                                    <option value="st">
                                      Sao Tome and Principe
                                    </option>
                                    <option value="sa">Saudi Arabia</option>
                                    <option value="sn">Senegal</option>
                                    <option value="rs">Serbia</option>
                                    <option value="cs">
                                      Serbia and Montenegro
                                    </option>
                                    <option value="sc">Seychelles</option>
                                    <option value="sl">Sierra Leone</option>
                                    <option value="sg">Singapore</option>
                                    <option value="sk">Slovak Republic</option>
                                    <option value="si">Slovenia</option>
                                    <option value="sb">Solomon Islands</option>
                                    <option value="so">Somalia</option>
                                    <option value="za">South Africa</option>
                                    <option value="ss">South Sudan</option>
                                    <option value="es">Spain</option>
                                    <option value="lk">Sri Lanka</option>
                                    <option value="sd">Sudan</option>
                                    <option value="om">
                                      Sultanate of Oman
                                    </option>
                                    <option value="sr">Suriname</option>
                                    <option value="sj">
                                      Svalbard and Jan Mayen
                                    </option>
                                    <option value="sz">Swaziland</option>
                                    <option value="se">Sweden</option>
                                    <option value="ch">Switzerland</option>
                                    <option value="sy">Syria</option>
                                    <option value="tw">Taiwan</option>
                                    <option value="tj">Tajikistan</option>
                                    <option value="tz">Tanzania</option>
                                    <option value="th">Thailand</option>
                                    <option value="tl">Timor-Leste</option>
                                    <option value="tg">Togo</option>
                                    <option value="tk">Tokelau</option>
                                    <option value="to">Tonga</option>
                                    <option value="tt">
                                      Trinidad and Tobago
                                    </option>
                                    <option value="tn">Tunisia</option>
                                    <option value="tr">Turkey</option>
                                    <option value="tm">Turkmenistan</option>
                                    <option value="tc">
                                      Turks and Caicos Islands
                                    </option>
                                    <option value="tv">Tuvalu</option>
                                    <option value="ug">Uganda</option>
                                    <option value="ua">Ukraine</option>
                                    <option value="ae">
                                      United Arab Emirates
                                    </option>
                                    <option value="gb">United Kingdom</option>
                                    <option value="uy">Uruguay</option>
                                    <option value="uz">Uzbekistan</option>
                                    <option value="vu">Vanuatu</option>
                                    <option value="va">
                                      Vatican City State (Holy See)
                                    </option>
                                    <option value="ve">Venezuela</option>
                                    <option value="vn">Vietnam</option>
                                    <option value="vg">
                                      Virgin Islands (British)
                                    </option>
                                    <option value="vi">
                                      Virgin Islands (U.S.)
                                    </option>
                                    <option value="wf">
                                      Wallis and Futuna
                                    </option>
                                    <option value="eh">Western Sahara</option>
                                    <option value="ye">Yemen</option>
                                    <option value="zm">Zambia</option>
                                    <option value="zw">Zimbabwe</option>
                                    <option value="oo">Other</option>
                                  </select>
                                </div>
                                <div
                                  className="col-md-4"
                                  style={{ textAlign: "left" }}
                                >
                                  <label
                                    style={{
                                      fontSize: "12px",
                                      color: "black",
                                      position: "relative",
                                      fontWeight: "400"
                                      // padding: "0 0 0 10px"
                                    }}
                                  >
                                    Zip Code
                                    <span style={{ color: "#0073b1" }}> *</span>
                                  </label>
                                  <input
                                    type="text"
                                    autofocus
                                    value={this.state.zipcode}
                                    onChange={this.handleZipCode}
                                    class="form-control mb-2 mr-sm-2"
                                    style={{
                                      height: "46px",
                                      width: "100%",
                                      border: "1px solid grey",
                                      borderRadius: "30"
                                    }}
                                  />
                                </div>
                                <div
                                  className="col-md-4"
                                  style={{ textAlign: "left" }}
                                >
                                  <label
                                    style={{
                                      fontSize: "12px",
                                      color: "black",
                                      position: "relative",
                                      fontWeight: "400"
                                      // padding: "0 0 0 10px"
                                    }}
                                  >
                                    State
                                    <span style={{ color: "#0073b1" }}> *</span>
                                  </label>
                                  <select
                                    aria-label="State"
                                    name="stateProvince"
                                    value={this.state.state}
                                    onChange={this.handleState}
                                    class="form-control mb-2 mr-sm-2"
                                    style={{
                                      height: "46px",
                                      width: "100%",
                                      border: "1px solid grey",
                                      borderRadius: "30"
                                    }}
                                  >
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>

                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">
                                      District of Columbia
                                    </option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                  </select>
                                </div>
                              </div>
                              <br />
                              <div className="row">
                                <div
                                  className="col-md-12"
                                  style={{ textAlign: "left" }}
                                >
                                  <label
                                    style={{
                                      fontSize: "12px",
                                      color: "black",
                                      textAlign: "left",
                                      fontWeight: "400"
                                      // padding: "0 0 0 10px"
                                    }}
                                  >
                                    Locations within this area{" "}
                                  </label>
                                  <input
                                    type="text"
                                    autofocus
                                    value={this.state.locationNearby}
                                    onChange={this.handleLocationNearBy}
                                    class="form-control mb-2 mr-sm-2"
                                    style={{
                                      height: "46px",
                                      width: "100%",
                                      border: "1px solid grey",
                                      borderRadius: "30"
                                    }}
                                  />
                                </div>
                              </div>
                              <br />

                              <div className="row">
                                <div
                                  className="col-md-12"
                                  style={{ textAlign: "left" }}
                                >
                                  <label
                                    style={{
                                      fontSize: "12px",
                                      color: "black",
                                      textAlign: "left",
                                      fontWeight: "400"
                                      // padding: "0 0 0 10px"
                                    }}
                                  >
                                    Industry{" "}
                                    <span style={{ color: "#0073b1" }}> *</span>
                                  </label>
                                  <input
                                    type="text"
                                    autofocus
                                    value={this.state.industry}
                                    onChange={this.handleIndustry}
                                    class="form-control mb-2 mr-sm-2"
                                    style={{
                                      height: "46px",
                                      width: "100%",
                                      border: "1px solid grey",
                                      borderRadius: "30"
                                    }}
                                  />
                                </div>
                              </div>

                              <br />
                              <div className="row">
                                <div
                                  className="col-md-12"
                                  style={{ textAlign: "left" }}
                                >
                                  <label
                                    style={{
                                      fontSize: "12px",
                                      color: "black",
                                      textAlign: "left",
                                      fontWeight: "400"
                                      // padding: "0 0 0 10px"
                                    }}
                                  >
                                    Summary{" "}
                                    <span style={{ color: "#0073b1" }}> *</span>
                                  </label>
                                  <textarea
                                    type="text"
                                    autofocus
                                    value={this.state.profileSummary}
                                    onChange={this.handleSummary}
                                    class="form-control mb-2 mr-sm-2"
                                    style={{
                                      minHeight: "112px",
                                      maxHeight: "initial",
                                      padding: "6px 10px 6px 10px",
                                      width: "100%",
                                      border: "1px solid grey",
                                      borderRadius: "30"
                                    }}
                                  />
                                </div>
                              </div>
                              <br />

                              <div className="row">
                                <div
                                  className="col-md-12"
                                  style={{ textAlign: "left" }}
                                >
                                  <label
                                    style={{
                                      fontSize: "12px",
                                      color: "black",
                                      textAlign: "left",
                                      fontWeight: "400"
                                      // padding: "0 0 0 10px"
                                    }}
                                  >
                                    Experience{" "}
                                    <span style={{ color: "#0073b1" }}> *</span>
                                  </label>
                                  <textarea
                                    type="text"
                                    autofocus
                                    value={this.state.experience}
                                    onChange={this.handleExperience}
                                    class="form-control mb-2 mr-sm-2"
                                    style={{
                                      minHeight: "112px",
                                      maxHeight: "initial",
                                      padding: "6px 10px 6px 10px",
                                      width: "100%",
                                      border: "1px solid grey",
                                      borderRadius: "30"
                                    }}
                                  />
                                </div>
                              </div>
                              <br />
                              <div className="row">
                                <div
                                  className="col-md-12"
                                  style={{ textAlign: "left" }}
                                >
                                  <label
                                    style={{
                                      fontSize: "12px",
                                      color: "black",
                                      textAlign: "left",
                                      fontWeight: "400"
                                      // padding: "0 0 0 10px"
                                    }}
                                  >
                                    Skills{" "}
                                    <span style={{ color: "#0073b1" }}> *</span>
                                  </label>
                                  <textarea
                                    type="text"
                                    autofocus
                                    value={this.state.skills}
                                    onChange={this.handleSkills}
                                    class="form-control mb-2 mr-sm-2"
                                    style={{
                                      minHeight: "112px",
                                      maxHeight: "initial",
                                      padding: "6px 10px 6px 10px",
                                      width: "100%",
                                      border: "1px solid grey",
                                      borderRadius: "30"
                                    }}
                                  />
                                </div>
                              </div>
                              <br />
                              <div className="row">
                                <div
                                  className="col-md-12"
                                  style={{ textAlign: "left" }}
                                >
                                  <label
                                    style={{
                                      fontSize: "12px",
                                      color: "black",
                                      textAlign: "left",
                                      fontWeight: "400"
                                      // padding: "0 0 0 10px"
                                    }}
                                  >
                                    Education{" "}
                                    <span style={{ color: "#0073b1" }}> *</span>
                                  </label>
                                  <textarea
                                    type="text"
                                    autofocus
                                    value={this.state.education}
                                    onChange={this.handleEducation}
                                    class="form-control mb-2 mr-sm-2"
                                    style={{
                                      minHeight: "112px",
                                      maxHeight: "initial",
                                      padding: "6px 10px 6px 10px",
                                      width: "100%",
                                      border: "1px solid grey",
                                      borderRadius: "30"
                                    }}
                                  />
                                </div>
                              </div>
                              <br />
                              <div
                                className="row"
                                style={{ textAlign: "left", marginLeft: "3px" }}
                              >
                                <label
                                  style={{
                                    fontSize: "20px",
                                    color: "black",
                                    textAlign: "left",
                                    fontWeight: "400"
                                    // padding: "0 0 0 10px"
                                  }}
                                >
                                  Edit contact Information{" "}
                                </label>
                              </div>
                              <br />
                              <div className="row">
                                <div
                                  className="col-md-6"
                                  style={{ textAlign: "left" }}
                                >
                                  <label
                                    style={{
                                      fontSize: "12px",
                                      color: "black",
                                      textAlign: "left",
                                      fontWeight: "400"
                                      // padding: "0 0 0 10px"
                                    }}
                                  >
                                    Phone{" "}
                                    <span style={{ color: "#0073b1" }}>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    autofocus
                                    value={this.state.phone}
                                    onChange={this.handlePhone}
                                    class="form-control mb-2 mr-sm-2"
                                    style={{
                                      height: "46px",
                                      width: "100%",
                                      border: "1px solid grey",
                                      borderRadius: "30"
                                    }}
                                  />
                                </div>
                                <div
                                  className="col-md-6"
                                  style={{ textAlign: "left" }}
                                >
                                  <label
                                    style={{
                                      fontSize: "12px",
                                      color: "black",
                                      position: "relative",
                                      fontWeight: "400"
                                      // padding: "0 0 0 10px"
                                    }}
                                  >
                                    Type
                                    <span style={{ color: "#0073b1" }}> *</span>
                                  </label>
                                  <select
                                    data-control-name="type_chooser"
                                    onChange={this.handlePhoneType}
                                    class="form-control mb-2 mr-sm-2"
                                    style={{
                                      height: "46px",
                                      width: "100%",
                                      border: "1px solid grey",
                                      borderRadius: "30"
                                    }}
                                    value={this.state.phoneType}
                                  >
                                    <option value="HOME">Home</option>
                                    <option value="WORK">Work</option>
                                    <option value="MOBILE">Mobile</option>
                                  </select>
                                </div>
                              </div>
                              <br />
                              <div className="row">
                                <div
                                  className="col-md-12"
                                  style={{ textAlign: "left" }}
                                >
                                  <label
                                    style={{
                                      fontSize: "12px",
                                      color: "black",
                                      textAlign: "left",
                                      fontWeight: "400"
                                      // padding: "0 0 0 10px"
                                    }}
                                  >
                                    Address{" "}
                                    <span style={{ color: "#0073b1" }}> *</span>
                                  </label>
                                  <textarea
                                    type="text"
                                    autofocus
                                    value={this.state.address}
                                    onChange={this.handleAddress}
                                    class="form-control mb-2 mr-sm-2"
                                    style={{
                                      height: "46px",
                                      width: "100%",
                                      border: "1px solid grey",
                                      borderRadius: "30"
                                    }}
                                  />
                                </div>
                              </div>
                              <br />
                              <button
                                class="btn btn-secondary"
                                type="button"
                                onClick={this.handleSave}
                                style={{
                                  margin: "center ",
                                  position: "relative",
                                  verticalAlign: "middle",
                                  display: "inline-block",
                                  textAlign: "center",
                                  height: "43px",
                                  width: "160px",
                                  marginTop: "10px",
                                  backgroundColor: "#0073b1",
                                  borderColor: "transparent",
                                  borderRadius: "0px",
                                  color: "white"
                                }}
                              >
                                Save
                              </button>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
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
                  <div className="col-md-6" style={{ textAlign: "right" }}>
                  <div style={{ textAlign: "right" }}>
          <button
            type="button"
            data-toggle="modal"
            data-target="#exampleModal4"
            class="btn btn-primary"
            style={{
              height: "44px",
              width: "34px",
              border: "none",
              backgroundColor: "transparent",
              outlineColor: "white"
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
                      style={{ marginTop: "16px", color: "#0073b1" }}
                    >
                      <path
                        d="M21,13H13v8H11V13H3V11h8V3h2v8h8v2Z"
                        class="large-icon"
                        style={{ fill: "currentColor" }}
                      />
                    </svg>
          </button>
          <div
            class="modal fade"
            id="exampleModal4"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModal4Label"
            aria-hidden="true"
            position="relative"
          >
            <div
              class="modal-dialog modal-dialog-centered"
              role="document"
              style={{ width: "750px" }}
            >
              <div class="modal-content">
                <div class="modal-header" style={{ height: "58px" }}>
                  <div className="row">
                    <div className="col-md-6">
                      <h5
                        class="modal-title"
                        id="exampleModal4Label"
                        style={{
                          textAlign: "left",
                          fontFamily: "Sans Serif",
                          fontSize: "22px"
                        }}
                      >
                        Edit Information
                      </h5>
                    </div>
                    <div className="col-md-6">
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            fontSize: "42px"
                          }}
                        >
                          &times;
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="modal-body" style={{ marginLeft: "10px" }}>
                  <div className="row">
                    <div className="col-md-6" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        First Name <span style={{ color: "#0073b1" }}>*</span>
                      </label>
                      <input
                        type="text"
                        autofocus
                        value={this.state.firstName}
                        onChange={this.handleFirstName}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                    <div className="col-md-6" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          position: "relative",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Last Name
                        <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <input
                        type="text"
                        autofocus
                        value={this.state.lastName}
                        onChange={this.handleLastName}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  {/* this is for headline */}
                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Headline <span style={{ color: "#0073b1" }}>*</span>
                      </label>
                      <textarea
                        type="text"
                        autofocus
                        value={this.state.headline}
                        onChange={this.handleHeadline}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  {/* This filed is for education */}

                  <div className="row">
                    <div className="col-md-4" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Country <span style={{ color: "#0073b1" }}>*</span>
                      </label>
                      <select
                        data-control-name="location_country_chooser"
                        name="locationCountry"
                        id="location-country"
                        value={this.state.country}
                        onChange={this.handleCountry}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      >
                        <option value="us">United States</option>
                        <option value="af">Afghanistan</option>
                        <option value="ax">Aland Islands</option>
                        <option value="al">Albania</option>
                        <option value="dz">Algeria</option>
                        <option value="as">American Samoa</option>
                        <option value="ad">Andorra</option>
                        <option value="ao">Angola</option>
                        <option value="ai">Anguilla</option>
                        <option value="aq">Antarctica</option>
                        <option value="ag">Antigua and Barbuda</option>
                        <option value="ar">Argentina</option>
                        <option value="am">Armenia</option>
                        <option value="aw">Aruba</option>
                        <option value="au">Australia</option>
                        <option value="at">Austria</option>
                        <option value="az">Azerbaijan</option>
                        <option value="bs">Bahamas</option>
                        <option value="bh">Bahrain</option>
                        <option value="bd">Bangladesh</option>
                        <option value="bb">Barbados</option>
                        <option value="by">Belarus</option>
                        <option value="be">Belgium</option>
                        <option value="bz">Belize</option>
                        <option value="bj">Benin</option>
                        <option value="bm">Bermuda</option>
                        <option value="bt">Bhutan</option>
                        <option value="bo">Bolivia</option>
                        <option value="ba">Bosnia and Herzegovina</option>
                        <option value="bw">Botswana</option>
                        <option value="bv">Bouvet Island</option>
                        <option value="br">Brazil</option>
                        <option value="io">
                          British Indian Ocean Territory
                        </option>
                        <option value="bn">Brunei Darussalam</option>
                        <option value="bg">Bulgaria</option>
                        <option value="bf">Burkina Faso</option>
                        <option value="bi">Burundi</option>
                        <option value="kh">Cambodia</option>
                        <option value="cm">Cameroon</option>
                        <option value="ca">Canada</option>
                        <option value="cv">Cape Verde</option>
                        <option value="cb">Caribbean Nations</option>
                        <option value="ky">Cayman Islands</option>
                        <option value="cf">Central African Republic</option>
                        <option value="td">Chad</option>
                        <option value="cl">Chile</option>
                        <option value="cn">China</option>
                        <option value="cx">Christmas Island</option>
                        <option value="cc">Cocos (Keeling) Islands</option>
                        <option value="co">Colombia</option>
                        <option value="km">Comoros</option>
                        <option value="cg">Congo</option>
                        <option value="ck">Cook Islands</option>
                        <option value="cr">Costa Rica</option>
                        <option value="ci">Cote D’Ivoire (Ivory Coast)</option>
                        <option value="hr">Croatia</option>
                        <option value="cu">Cuba</option>
                        <option value="cy">Cyprus</option>
                        <option value="cz">Czech Republic</option>
                        <option value="cd">
                          Democratic Republic of the Congo
                        </option>
                        <option value="dk">Denmark</option>
                        <option value="dj">Djibouti</option>
                        <option value="dm">Dominica</option>
                        <option value="do">Dominican Republic</option>
                        <option value="ec">Ecuador</option>
                        <option value="eg">Egypt</option>
                        <option value="sv">El Salvador</option>
                        <option value="gq">Equatorial Guinea</option>
                        <option value="er">Eritrea</option>
                        <option value="ee">Estonia</option>
                        <option value="et">Ethiopia</option>
                        <option value="fk">Falkland Islands (Malvinas)</option>
                        <option value="fo">Faroe Islands</option>
                        <option value="fm">
                          Federated States of Micronesia
                        </option>
                        <option value="fj">Fiji</option>
                        <option value="fi">Finland</option>
                        <option value="fr">France</option>
                        <option value="gf">French Guiana</option>
                        <option value="pf">French Polynesia</option>
                        <option value="tf">French Southern Territories</option>
                        <option value="ga">Gabon</option>
                        <option value="gm">Gambia</option>
                        <option value="ge">Georgia</option>
                        <option value="de">Germany</option>
                        <option value="gh">Ghana</option>
                        <option value="gi">Gibraltar</option>
                        <option value="gr">Greece</option>
                        <option value="gl">Greenland</option>
                        <option value="gd">Grenada</option>
                        <option value="gp">Guadeloupe</option>
                        <option value="gu">Guam</option>
                        <option value="gt">Guatemala</option>
                        <option value="gg">Guernsey</option>
                        <option value="gn">Guinea</option>
                        <option value="gw">Guinea-Bissau</option>
                        <option value="gy">Guyana</option>
                        <option value="ht">Haiti</option>
                        <option value="hm">
                          Heard Island and McDonald Islands
                        </option>
                        <option value="hn">Honduras</option>
                        <option value="hk">Hong Kong</option>
                        <option value="hu">Hungary</option>
                        <option value="is">Iceland</option>
                        <option value="in">India</option>
                        <option value="id">Indonesia</option>
                        <option value="ir">Iran</option>
                        <option value="iq">Iraq</option>
                        <option value="ie">Ireland</option>
                        <option value="im">Isle of Man</option>
                        <option value="il">Israel</option>
                        <option value="it">Italy</option>
                        <option value="jm">Jamaica</option>
                        <option value="jp">Japan</option>
                        <option value="je">Jersey</option>
                        <option value="jo">Jordan</option>
                        <option value="kz">Kazakhstan</option>
                        <option value="ke">Kenya</option>
                        <option value="ki">Kiribati</option>
                        <option value="kr">Korea</option>
                        <option value="kp">Korea (North)</option>
                        <option value="ko">Kosovo</option>
                        <option value="kw">Kuwait</option>
                        <option value="kg">Kyrgyzstan</option>
                        <option value="la">Laos</option>
                        <option value="lv">Latvia</option>
                        <option value="lb">Lebanon</option>
                        <option value="ls">Lesotho</option>
                        <option value="lr">Liberia</option>
                        <option value="ly">Libya</option>
                        <option value="li">Liechtenstein</option>
                        <option value="lt">Lithuania</option>
                        <option value="lu">Luxembourg</option>
                        <option value="mo">Macao</option>
                        <option value="mk">Macedonia</option>
                        <option value="mg">Madagascar</option>
                        <option value="mw">Malawi</option>
                        <option value="my">Malaysia</option>
                        <option value="mv">Maldives</option>
                        <option value="ml">Mali</option>
                        <option value="mt">Malta</option>
                        <option value="mh">Marshall Islands</option>
                        <option value="mq">Martinique</option>
                        <option value="mr">Mauritania</option>
                        <option value="mu">Mauritius</option>
                        <option value="yt">Mayotte</option>
                        <option value="mx">Mexico</option>
                        <option value="md">Moldova</option>
                        <option value="mc">Monaco</option>
                        <option value="mn">Mongolia</option>
                        <option value="me">Montenegro</option>
                        <option value="ms">Montserrat</option>
                        <option value="ma">Morocco</option>
                        <option value="mz">Mozambique</option>
                        <option value="mm">Myanmar</option>
                        <option value="na">Namibia</option>
                        <option value="nr">Nauru</option>
                        <option value="np">Nepal</option>
                        <option value="nl">Netherlands</option>
                        <option value="an">Netherlands Antilles</option>
                        <option value="nc">New Caledonia</option>
                        <option value="nz">New Zealand</option>
                        <option value="ni">Nicaragua</option>
                        <option value="ne">Niger</option>
                        <option value="ng">Nigeria</option>
                        <option value="nu">Niue</option>
                        <option value="nf">Norfolk Island</option>
                        <option value="mp">Northern Mariana Islands</option>
                        <option value="no">Norway</option>
                        <option value="pk">Pakistan</option>
                        <option value="pw">Palau</option>
                        <option value="ps">Palestinian Territory</option>
                        <option value="pa">Panama</option>
                        <option value="pg">Papua New Guinea</option>
                        <option value="py">Paraguay</option>
                        <option value="pe">Peru</option>
                        <option value="ph">Philippines</option>
                        <option value="pn">Pitcairn</option>
                        <option value="pl">Poland</option>
                        <option value="pt">Portugal</option>
                        <option value="pr">Puerto Rico</option>
                        <option value="qa">Qatar</option>
                        <option value="re">Reunion</option>
                        <option value="ro">Romania</option>
                        <option value="ru">Russian Federation</option>
                        <option value="rw">Rwanda</option>
                        <option value="gs">
                          S. Georgia and S. Sandwich Islands
                        </option>
                        <option value="sh">Saint Helena</option>
                        <option value="kn">Saint Kitts and Nevis</option>
                        <option value="lc">Saint Lucia</option>
                        <option value="pm">Saint Pierre and Miquelon</option>
                        <option value="vc">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="ws">Samoa</option>
                        <option value="sm">San Marino</option>
                        <option value="st">Sao Tome and Principe</option>
                        <option value="sa">Saudi Arabia</option>
                        <option value="sn">Senegal</option>
                        <option value="rs">Serbia</option>
                        <option value="cs">Serbia and Montenegro</option>
                        <option value="sc">Seychelles</option>
                        <option value="sl">Sierra Leone</option>
                        <option value="sg">Singapore</option>
                        <option value="sk">Slovak Republic</option>
                        <option value="si">Slovenia</option>
                        <option value="sb">Solomon Islands</option>
                        <option value="so">Somalia</option>
                        <option value="za">South Africa</option>
                        <option value="ss">South Sudan</option>
                        <option value="es">Spain</option>
                        <option value="lk">Sri Lanka</option>
                        <option value="sd">Sudan</option>
                        <option value="om">Sultanate of Oman</option>
                        <option value="sr">Suriname</option>
                        <option value="sj">Svalbard and Jan Mayen</option>
                        <option value="sz">Swaziland</option>
                        <option value="se">Sweden</option>
                        <option value="ch">Switzerland</option>
                        <option value="sy">Syria</option>
                        <option value="tw">Taiwan</option>
                        <option value="tj">Tajikistan</option>
                        <option value="tz">Tanzania</option>
                        <option value="th">Thailand</option>
                        <option value="tl">Timor-Leste</option>
                        <option value="tg">Togo</option>
                        <option value="tk">Tokelau</option>
                        <option value="to">Tonga</option>
                        <option value="tt">Trinidad and Tobago</option>
                        <option value="tn">Tunisia</option>
                        <option value="tr">Turkey</option>
                        <option value="tm">Turkmenistan</option>
                        <option value="tc">Turks and Caicos Islands</option>
                        <option value="tv">Tuvalu</option>
                        <option value="ug">Uganda</option>
                        <option value="ua">Ukraine</option>
                        <option value="ae">United Arab Emirates</option>
                        <option value="gb">United Kingdom</option>
                        <option value="uy">Uruguay</option>
                        <option value="uz">Uzbekistan</option>
                        <option value="vu">Vanuatu</option>
                        <option value="va">
                          Vatican City State (Holy See)
                        </option>
                        <option value="ve">Venezuela</option>
                        <option value="vn">Vietnam</option>
                        <option value="vg">Virgin Islands (British)</option>
                        <option value="vi">Virgin Islands (U.S.)</option>
                        <option value="wf">Wallis and Futuna</option>
                        <option value="eh">Western Sahara</option>
                        <option value="ye">Yemen</option>
                        <option value="zm">Zambia</option>
                        <option value="zw">Zimbabwe</option>
                        <option value="oo">Other</option>
                      </select>
                    </div>
                    <div className="col-md-4" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          position: "relative",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Zip Code
                        <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <input
                        type="text"
                        autofocus
                        value={this.state.zipcode}
                        onChange={this.handleZipCode}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                    <div className="col-md-4" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          position: "relative",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        State
                        <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <select
                        aria-label="State"
                        name="stateProvince"
                        value={this.state.state}
                        onChange={this.handleState}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      >
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>

                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Locations within this area{" "}
                      </label>
                      <input
                        type="text"
                        autofocus
                        value={this.state.locationNearby}
                        onChange={this.handleLocationNearBy}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Industry <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <input
                        type="text"
                        autofocus
                        value={this.state.industry}
                        onChange={this.handleIndustry}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>

                  <br />
                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Summary <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <textarea
                        type="text"
                        autofocus
                        value={this.state.profileSummary}
                        onChange={this.handleSummary}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          minHeight: "112px",
                          maxHeight: "initial",
                          padding: "6px 10px 6px 10px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Experience <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <textarea
                        type="text"
                        autofocus
                        value={this.state.experience}
                        onChange={this.handleExperience}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          minHeight: "112px",
                          maxHeight: "initial",
                          padding: "6px 10px 6px 10px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Skills <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <textarea
                        type="text"
                        autofocus
                        value={this.state.skills}
                        onChange={this.handleSkills}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          minHeight: "112px",
                          maxHeight: "initial",
                          padding: "6px 10px 6px 10px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Education <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <textarea
                        type="text"
                        autofocus
                        value={this.state.education}
                        onChange={this.handleEducation}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          minHeight: "112px",
                          maxHeight: "initial",
                          padding: "6px 10px 6px 10px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div
                    className="row"
                    style={{ textAlign: "left", marginLeft: "3px" }}
                  >
                    <label
                      style={{
                        fontSize: "20px",
                        color: "black",
                        textAlign: "left",
                        fontWeight: "400"
                        // padding: "0 0 0 10px"
                      }}
                    >
                      Edit contact Information{" "}
                    </label>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-6" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Phone <span style={{ color: "#0073b1" }}>*</span>
                      </label>
                      <input
                        type="text"
                        autofocus
                        value={this.state.phone}
                        onChange={this.handlePhone}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                    <div className="col-md-6" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          position: "relative",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Type
                        <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <select
                        data-control-name="type_chooser"
                        onChange={this.handlePhoneType}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                        value={this.state.phoneType}
                      >
                        <option value="HOME">Home</option>
                        <option value="WORK">Work</option>
                        <option value="MOBILE">Mobile</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Address <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <textarea
                        type="text"
                        autofocus
                        value={this.state.address}
                        onChange={this.handleAddress}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <button
                    class="btn btn-secondary"
                    type="button"
                    onClick={this.handleSave}
                    style={{
                      margin: "center ",
                      position: "relative",
                      verticalAlign: "middle",
                      display: "inline-block",
                      textAlign: "center",
                      height: "43px",
                      width: "160px",
                      marginTop: "10px",
                      backgroundColor: "#0073b1",
                      borderColor: "transparent",
                      borderRadius: "0px",
                      color: "white"
                    }}
                  >
                    Save
                  </button>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
                    
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
                  <div className="col-md-6" style={{ textAlign: "right" }}>
                  <div style={{ textAlign: "right" }}>
          <button
            type="button"
            data-toggle="modal"
            data-target="#exampleModal4"
            class="btn btn-primary"
            style={{
              height: "44px",
              width: "34px",
              border: "none",
              backgroundColor: "transparent",
              outlineColor: "white"
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
                      style={{ marginTop: "16px", color: "#0073b1" }}
                    >
                      <path
                        d="M21,13H13v8H11V13H3V11h8V3h2v8h8v2Z"
                        class="large-icon"
                        style={{ fill: "currentColor" }}
                      />
                    </svg>
          </button>
          <div
            class="modal fade"
            id="exampleModal4"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModal4Label"
            aria-hidden="true"
            position="relative"
          >
            <div
              class="modal-dialog modal-dialog-centered"
              role="document"
              style={{ width: "750px" }}
            >
              <div class="modal-content">
                <div class="modal-header" style={{ height: "58px" }}>
                  <div className="row">
                    <div className="col-md-6">
                      <h5
                        class="modal-title"
                        id="exampleModal4Label"
                        style={{
                          textAlign: "left",
                          fontFamily: "Sans Serif",
                          fontSize: "22px"
                        }}
                      >
                        Edit Information
                      </h5>
                    </div>
                    <div className="col-md-6">
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            fontSize: "42px"
                          }}
                        >
                          &times;
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="modal-body" style={{ marginLeft: "10px" }}>
                  <div className="row">
                    <div className="col-md-6" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        First Name <span style={{ color: "#0073b1" }}>*</span>
                      </label>
                      <input
                        type="text"
                        autofocus
                        value={this.state.firstName}
                        onChange={this.handleFirstName}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                    <div className="col-md-6" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          position: "relative",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Last Name
                        <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <input
                        type="text"
                        autofocus
                        value={this.state.lastName}
                        onChange={this.handleLastName}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  {/* this is for headline */}
                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Headline <span style={{ color: "#0073b1" }}>*</span>
                      </label>
                      <textarea
                        type="text"
                        autofocus
                        value={this.state.headline}
                        onChange={this.handleHeadline}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  {/* This filed is for education */}

                  <div className="row">
                    <div className="col-md-4" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Country <span style={{ color: "#0073b1" }}>*</span>
                      </label>
                      <select
                        data-control-name="location_country_chooser"
                        name="locationCountry"
                        id="location-country"
                        value={this.state.country}
                        onChange={this.handleCountry}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      >
                        <option value="us">United States</option>
                        <option value="af">Afghanistan</option>
                        <option value="ax">Aland Islands</option>
                        <option value="al">Albania</option>
                        <option value="dz">Algeria</option>
                        <option value="as">American Samoa</option>
                        <option value="ad">Andorra</option>
                        <option value="ao">Angola</option>
                        <option value="ai">Anguilla</option>
                        <option value="aq">Antarctica</option>
                        <option value="ag">Antigua and Barbuda</option>
                        <option value="ar">Argentina</option>
                        <option value="am">Armenia</option>
                        <option value="aw">Aruba</option>
                        <option value="au">Australia</option>
                        <option value="at">Austria</option>
                        <option value="az">Azerbaijan</option>
                        <option value="bs">Bahamas</option>
                        <option value="bh">Bahrain</option>
                        <option value="bd">Bangladesh</option>
                        <option value="bb">Barbados</option>
                        <option value="by">Belarus</option>
                        <option value="be">Belgium</option>
                        <option value="bz">Belize</option>
                        <option value="bj">Benin</option>
                        <option value="bm">Bermuda</option>
                        <option value="bt">Bhutan</option>
                        <option value="bo">Bolivia</option>
                        <option value="ba">Bosnia and Herzegovina</option>
                        <option value="bw">Botswana</option>
                        <option value="bv">Bouvet Island</option>
                        <option value="br">Brazil</option>
                        <option value="io">
                          British Indian Ocean Territory
                        </option>
                        <option value="bn">Brunei Darussalam</option>
                        <option value="bg">Bulgaria</option>
                        <option value="bf">Burkina Faso</option>
                        <option value="bi">Burundi</option>
                        <option value="kh">Cambodia</option>
                        <option value="cm">Cameroon</option>
                        <option value="ca">Canada</option>
                        <option value="cv">Cape Verde</option>
                        <option value="cb">Caribbean Nations</option>
                        <option value="ky">Cayman Islands</option>
                        <option value="cf">Central African Republic</option>
                        <option value="td">Chad</option>
                        <option value="cl">Chile</option>
                        <option value="cn">China</option>
                        <option value="cx">Christmas Island</option>
                        <option value="cc">Cocos (Keeling) Islands</option>
                        <option value="co">Colombia</option>
                        <option value="km">Comoros</option>
                        <option value="cg">Congo</option>
                        <option value="ck">Cook Islands</option>
                        <option value="cr">Costa Rica</option>
                        <option value="ci">Cote D’Ivoire (Ivory Coast)</option>
                        <option value="hr">Croatia</option>
                        <option value="cu">Cuba</option>
                        <option value="cy">Cyprus</option>
                        <option value="cz">Czech Republic</option>
                        <option value="cd">
                          Democratic Republic of the Congo
                        </option>
                        <option value="dk">Denmark</option>
                        <option value="dj">Djibouti</option>
                        <option value="dm">Dominica</option>
                        <option value="do">Dominican Republic</option>
                        <option value="ec">Ecuador</option>
                        <option value="eg">Egypt</option>
                        <option value="sv">El Salvador</option>
                        <option value="gq">Equatorial Guinea</option>
                        <option value="er">Eritrea</option>
                        <option value="ee">Estonia</option>
                        <option value="et">Ethiopia</option>
                        <option value="fk">Falkland Islands (Malvinas)</option>
                        <option value="fo">Faroe Islands</option>
                        <option value="fm">
                          Federated States of Micronesia
                        </option>
                        <option value="fj">Fiji</option>
                        <option value="fi">Finland</option>
                        <option value="fr">France</option>
                        <option value="gf">French Guiana</option>
                        <option value="pf">French Polynesia</option>
                        <option value="tf">French Southern Territories</option>
                        <option value="ga">Gabon</option>
                        <option value="gm">Gambia</option>
                        <option value="ge">Georgia</option>
                        <option value="de">Germany</option>
                        <option value="gh">Ghana</option>
                        <option value="gi">Gibraltar</option>
                        <option value="gr">Greece</option>
                        <option value="gl">Greenland</option>
                        <option value="gd">Grenada</option>
                        <option value="gp">Guadeloupe</option>
                        <option value="gu">Guam</option>
                        <option value="gt">Guatemala</option>
                        <option value="gg">Guernsey</option>
                        <option value="gn">Guinea</option>
                        <option value="gw">Guinea-Bissau</option>
                        <option value="gy">Guyana</option>
                        <option value="ht">Haiti</option>
                        <option value="hm">
                          Heard Island and McDonald Islands
                        </option>
                        <option value="hn">Honduras</option>
                        <option value="hk">Hong Kong</option>
                        <option value="hu">Hungary</option>
                        <option value="is">Iceland</option>
                        <option value="in">India</option>
                        <option value="id">Indonesia</option>
                        <option value="ir">Iran</option>
                        <option value="iq">Iraq</option>
                        <option value="ie">Ireland</option>
                        <option value="im">Isle of Man</option>
                        <option value="il">Israel</option>
                        <option value="it">Italy</option>
                        <option value="jm">Jamaica</option>
                        <option value="jp">Japan</option>
                        <option value="je">Jersey</option>
                        <option value="jo">Jordan</option>
                        <option value="kz">Kazakhstan</option>
                        <option value="ke">Kenya</option>
                        <option value="ki">Kiribati</option>
                        <option value="kr">Korea</option>
                        <option value="kp">Korea (North)</option>
                        <option value="ko">Kosovo</option>
                        <option value="kw">Kuwait</option>
                        <option value="kg">Kyrgyzstan</option>
                        <option value="la">Laos</option>
                        <option value="lv">Latvia</option>
                        <option value="lb">Lebanon</option>
                        <option value="ls">Lesotho</option>
                        <option value="lr">Liberia</option>
                        <option value="ly">Libya</option>
                        <option value="li">Liechtenstein</option>
                        <option value="lt">Lithuania</option>
                        <option value="lu">Luxembourg</option>
                        <option value="mo">Macao</option>
                        <option value="mk">Macedonia</option>
                        <option value="mg">Madagascar</option>
                        <option value="mw">Malawi</option>
                        <option value="my">Malaysia</option>
                        <option value="mv">Maldives</option>
                        <option value="ml">Mali</option>
                        <option value="mt">Malta</option>
                        <option value="mh">Marshall Islands</option>
                        <option value="mq">Martinique</option>
                        <option value="mr">Mauritania</option>
                        <option value="mu">Mauritius</option>
                        <option value="yt">Mayotte</option>
                        <option value="mx">Mexico</option>
                        <option value="md">Moldova</option>
                        <option value="mc">Monaco</option>
                        <option value="mn">Mongolia</option>
                        <option value="me">Montenegro</option>
                        <option value="ms">Montserrat</option>
                        <option value="ma">Morocco</option>
                        <option value="mz">Mozambique</option>
                        <option value="mm">Myanmar</option>
                        <option value="na">Namibia</option>
                        <option value="nr">Nauru</option>
                        <option value="np">Nepal</option>
                        <option value="nl">Netherlands</option>
                        <option value="an">Netherlands Antilles</option>
                        <option value="nc">New Caledonia</option>
                        <option value="nz">New Zealand</option>
                        <option value="ni">Nicaragua</option>
                        <option value="ne">Niger</option>
                        <option value="ng">Nigeria</option>
                        <option value="nu">Niue</option>
                        <option value="nf">Norfolk Island</option>
                        <option value="mp">Northern Mariana Islands</option>
                        <option value="no">Norway</option>
                        <option value="pk">Pakistan</option>
                        <option value="pw">Palau</option>
                        <option value="ps">Palestinian Territory</option>
                        <option value="pa">Panama</option>
                        <option value="pg">Papua New Guinea</option>
                        <option value="py">Paraguay</option>
                        <option value="pe">Peru</option>
                        <option value="ph">Philippines</option>
                        <option value="pn">Pitcairn</option>
                        <option value="pl">Poland</option>
                        <option value="pt">Portugal</option>
                        <option value="pr">Puerto Rico</option>
                        <option value="qa">Qatar</option>
                        <option value="re">Reunion</option>
                        <option value="ro">Romania</option>
                        <option value="ru">Russian Federation</option>
                        <option value="rw">Rwanda</option>
                        <option value="gs">
                          S. Georgia and S. Sandwich Islands
                        </option>
                        <option value="sh">Saint Helena</option>
                        <option value="kn">Saint Kitts and Nevis</option>
                        <option value="lc">Saint Lucia</option>
                        <option value="pm">Saint Pierre and Miquelon</option>
                        <option value="vc">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="ws">Samoa</option>
                        <option value="sm">San Marino</option>
                        <option value="st">Sao Tome and Principe</option>
                        <option value="sa">Saudi Arabia</option>
                        <option value="sn">Senegal</option>
                        <option value="rs">Serbia</option>
                        <option value="cs">Serbia and Montenegro</option>
                        <option value="sc">Seychelles</option>
                        <option value="sl">Sierra Leone</option>
                        <option value="sg">Singapore</option>
                        <option value="sk">Slovak Republic</option>
                        <option value="si">Slovenia</option>
                        <option value="sb">Solomon Islands</option>
                        <option value="so">Somalia</option>
                        <option value="za">South Africa</option>
                        <option value="ss">South Sudan</option>
                        <option value="es">Spain</option>
                        <option value="lk">Sri Lanka</option>
                        <option value="sd">Sudan</option>
                        <option value="om">Sultanate of Oman</option>
                        <option value="sr">Suriname</option>
                        <option value="sj">Svalbard and Jan Mayen</option>
                        <option value="sz">Swaziland</option>
                        <option value="se">Sweden</option>
                        <option value="ch">Switzerland</option>
                        <option value="sy">Syria</option>
                        <option value="tw">Taiwan</option>
                        <option value="tj">Tajikistan</option>
                        <option value="tz">Tanzania</option>
                        <option value="th">Thailand</option>
                        <option value="tl">Timor-Leste</option>
                        <option value="tg">Togo</option>
                        <option value="tk">Tokelau</option>
                        <option value="to">Tonga</option>
                        <option value="tt">Trinidad and Tobago</option>
                        <option value="tn">Tunisia</option>
                        <option value="tr">Turkey</option>
                        <option value="tm">Turkmenistan</option>
                        <option value="tc">Turks and Caicos Islands</option>
                        <option value="tv">Tuvalu</option>
                        <option value="ug">Uganda</option>
                        <option value="ua">Ukraine</option>
                        <option value="ae">United Arab Emirates</option>
                        <option value="gb">United Kingdom</option>
                        <option value="uy">Uruguay</option>
                        <option value="uz">Uzbekistan</option>
                        <option value="vu">Vanuatu</option>
                        <option value="va">
                          Vatican City State (Holy See)
                        </option>
                        <option value="ve">Venezuela</option>
                        <option value="vn">Vietnam</option>
                        <option value="vg">Virgin Islands (British)</option>
                        <option value="vi">Virgin Islands (U.S.)</option>
                        <option value="wf">Wallis and Futuna</option>
                        <option value="eh">Western Sahara</option>
                        <option value="ye">Yemen</option>
                        <option value="zm">Zambia</option>
                        <option value="zw">Zimbabwe</option>
                        <option value="oo">Other</option>
                      </select>
                    </div>
                    <div className="col-md-4" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          position: "relative",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Zip Code
                        <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <input
                        type="text"
                        autofocus
                        value={this.state.zipcode}
                        onChange={this.handleZipCode}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                    <div className="col-md-4" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          position: "relative",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        State
                        <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <select
                        aria-label="State"
                        name="stateProvince"
                        value={this.state.state}
                        onChange={this.handleState}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      >
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>

                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Locations within this area{" "}
                      </label>
                      <input
                        type="text"
                        autofocus
                        value={this.state.locationNearby}
                        onChange={this.handleLocationNearBy}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Industry <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <input
                        type="text"
                        autofocus
                        value={this.state.industry}
                        onChange={this.handleIndustry}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>

                  <br />
                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Summary <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <textarea
                        type="text"
                        autofocus
                        value={this.state.profileSummary}
                        onChange={this.handleSummary}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          minHeight: "112px",
                          maxHeight: "initial",
                          padding: "6px 10px 6px 10px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Experience <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <textarea
                        type="text"
                        autofocus
                        value={this.state.experience}
                        onChange={this.handleExperience}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          minHeight: "112px",
                          maxHeight: "initial",
                          padding: "6px 10px 6px 10px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Skills <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <textarea
                        type="text"
                        autofocus
                        value={this.state.skills}
                        onChange={this.handleSkills}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          minHeight: "112px",
                          maxHeight: "initial",
                          padding: "6px 10px 6px 10px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Education <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <textarea
                        type="text"
                        autofocus
                        value={this.state.education}
                        onChange={this.handleEducation}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          minHeight: "112px",
                          maxHeight: "initial",
                          padding: "6px 10px 6px 10px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div
                    className="row"
                    style={{ textAlign: "left", marginLeft: "3px" }}
                  >
                    <label
                      style={{
                        fontSize: "20px",
                        color: "black",
                        textAlign: "left",
                        fontWeight: "400"
                        // padding: "0 0 0 10px"
                      }}
                    >
                      Edit contact Information{" "}
                    </label>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-6" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Phone <span style={{ color: "#0073b1" }}>*</span>
                      </label>
                      <input
                        type="text"
                        autofocus
                        value={this.state.phone}
                        onChange={this.handlePhone}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                    <div className="col-md-6" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          position: "relative",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Type
                        <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <select
                        data-control-name="type_chooser"
                        onChange={this.handlePhoneType}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                        value={this.state.phoneType}
                      >
                        <option value="HOME">Home</option>
                        <option value="WORK">Work</option>
                        <option value="MOBILE">Mobile</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-12" style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontSize: "12px",
                          color: "black",
                          textAlign: "left",
                          fontWeight: "400"
                          // padding: "0 0 0 10px"
                        }}
                      >
                        Address <span style={{ color: "#0073b1" }}> *</span>
                      </label>
                      <textarea
                        type="text"
                        autofocus
                        value={this.state.address}
                        onChange={this.handleAddress}
                        class="form-control mb-2 mr-sm-2"
                        style={{
                          height: "46px",
                          width: "100%",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <button
                    class="btn btn-secondary"
                    type="button"
                    onClick={this.handleSave}
                    style={{
                      margin: "center ",
                      position: "relative",
                      verticalAlign: "middle",
                      display: "inline-block",
                      textAlign: "center",
                      height: "43px",
                      width: "160px",
                      marginTop: "10px",
                      backgroundColor: "#0073b1",
                      borderColor: "transparent",
                      borderRadius: "0px",
                      color: "white"
                    }}
                  >
                    Save
                  </button>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
                    {/* <svg
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
                    </svg> */}
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
  return { profileInfo: state.getProfileInfo, user: state.loginApplicant , ConnectionRequest: state.sendConnectionRequest };
}

export default connect(
  mapStateToProps,
  { getProfile, saveDetails,sendConnectionRequest }
)(SearchProfilePage);
