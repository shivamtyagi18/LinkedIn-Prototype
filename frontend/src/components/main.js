import React, { Component } from "react";
import { Route } from "react-router-dom";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

//import Inbox from "./inbox";
import RegisterRecruiter from "./recruiterUI/registerRecruiter";
import LoginRecruiter from "./recruiterUI/loginRecruiter";
import HomeRecruiter from "./recruiterUI/recruiterHome";
import PostJob from "./recruiterUI/recruiterPostJob";
import NavbarHome from "./recruiterUI/navbarHome";
import editJob from "./recruiterUI/editJob";
import RecruiterProfile from "./recruiterUI/recruiterProfile";
import ApplicantProfile from "./applicantUI/applicantAccount";
import receiverInbox from "./applicantUI/receiverInbox";

import LoginApplicant from "./applicantUI/loginApplicant";
import ApplicantHome from "./applicantUI/Home"
import FetchJobs from "./applicantUI/fetchJobs"
import newFetchJobs from "./applicantUI/newFetchJobs"
import FetchUsers from "./applicantUI/fetchUsers"
import ProfilePage from "./applicantUI/profilePage"
import newProfilePage from "./applicantUI/newProfilePage"
import SearchProfilePage from "./applicantUI/searchProfilePage"
import newSearchProfilePage from "./applicantUI/newSearchProfilePage"
import MyNetwork from "./applicantUI/myNetwork";
import RecruiterNetwork from "./applicantUI/RecruiterNetwork";
import MyJobs from "./applicantUI/myJobs";
import RecruiterDashboard from "./recruiterUI/dashboard";



import JobDetails from "./applicationUI/JobDetails";
import ApplicationsForJob from "./applicationUI/ApplicationsForJob";
import Application from "./applicationUI/Userform";
import EasyApply from "./applicationUI/EasyApply";
import RootReducer from "../reducers";
//import ApplicationNavbar from "./applicationUI/ApplicationNavbar";




import promise from "redux-promise";

import thunk from 'redux-thunk';
import fetchUsersRecruiter from "./applicantUI/fetchUsersRecruiter";
const initialState = {};
const middleware = [thunk];




// //middleware settings
// // To resolve promise to store we use apply
const composePlugin = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const composingMiddlewareAndDevTools = composePlugin(applyMiddleware(...middleware,promise));
export const store = createStore(
  RootReducer,
  //composePlugin(applyMiddleware(promise))
  composingMiddlewareAndDevTools
);

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        <Route
            exact
            path="/recruiter/addRecruiter"
            component={RegisterRecruiter}
          />
          <Route
            exact
            path="/recruiter/dashboard"
            component={RecruiterDashboard}
          />
          <Route
            exact
            path="/recruiter/editJob"
            component={editJob}
          />
           <Route
            exact
            path="/recruiter/navbarHome"
            component={NavbarHome}
          />
          <Route
            exact
            path="/recruiter/loginRecruiter"
            component={LoginRecruiter}
          />

           <Route
            exact
            path="/recruiter/home"
            component={HomeRecruiter}
          />

           <Route
            exact
            path="/recruiter/post"
            component={PostJob}
          />
          <Route
          exact
          path="/recruiter/profile"
          component={RecruiterProfile}
          />
<Route exact path="/account" component={ApplicantProfile} />
<Route exact path="/messaging" component={receiverInbox} />
        <Route
          exact
          path="/applicant/loginApplicant"
          component={LoginApplicant}
        />

        <Route
        exact
        path="/"
        component={LoginApplicant}
      />

        <Route
        exact
        path="/applicant/applicantHome"
        component={ApplicantHome}
      />

      <Route
        exact
        path="/applicant/fetchJobs"
        component={newFetchJobs}
      />

      <Route
        exact
        path="/applicant/fetchUsers"
        component={FetchUsers}
      />

      <Route
        exact
        path="/recruiter/fetchUsers"
        component={fetchUsersRecruiter}
      />

      <Route
        exact
        path="/applicant/profile/getprofile"
        component={newProfilePage}
      />

       <Route
        exact
        path="/applicant/profile/getSearchProfile"
        component={newSearchProfilePage}
      />

      <Route
      exact
      path="/profile/viewConnections"
      component={MyNetwork}
      />

       <Route
      exact
      path="/recruiter/profile/viewConnections"
      component={RecruiterNetwork}
      />

      <Route
      exact
      path="/applicant/profile/myJobs"
      component={MyJobs}
      />

      <Route 
      exact path="/applicantion/job" 
      component={JobDetails} 
      />

      <Route 
      exact path="/Application" 
      component={Application} 
      />

      <Route 
      exact path="/EasyApply" 
      component={EasyApply} 
      />

      <Route
        exact
        path="/ApplicationsForJob"
        component={ApplicationsForJob}
      />
      {/*<Route
        exact
        path="/ApplicationNavbar"
        component={ApplicationNavbar}
      />*/}


        </div>
      </Provider>
    );
  }
}

export default Main;
