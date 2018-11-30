import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PropertyReducer from "./propertyinfo";
import LoginReducer from "./authlogin";
import OwnerDashboardReducer from "./ownerdash";
import TravelReducer from "./traveldash";
import LogoutReducer from "./tlogout";
import LoginOwnerReducer from "./authloginowner";
import TravelRegisterReducer from "./travelregister";
import SEARCHPOSTEDJOB from "./searchPostedJob";
import OwnerRegisterReducer from "./ownerregister";
import ADDRECRUITERREDUCER from "./addRecruiter";
import GETJOBSOFRECRUITER from "./getRecruiterJobs";

import CREATEAPPLICANT from "./createApplicant";
import LoginApplicantReducer from "./applicantLogin";
import LoginRecruiterReducer from "./loginRecruiter";
import SearchJobsReducer from "./searchJobs";
import SearchUsersReducer from "./searchUsers";
import FetchJobsReducer from "./fetchJobs";
import FetchUsersReducer from "./fetchUsers";
import GET_PROFILE from "./getProfile";
import myNetwork from "./myNetwork";
import myJobs from "./myJobs";
import saveJobs from "./saveJobs";

import userReducer from './userReducer';

const mainReducer = combineReducers({
  form: formReducer,
  property: PropertyReducer,
  login: LoginReducer,
  loginowner: LoginOwnerReducer,
  ownerdash: OwnerDashboardReducer,
  logout: LogoutReducer,
  traveldash: TravelReducer,
  travelregister: TravelRegisterReducer,
  ownerregister: OwnerRegisterReducer,
  addRecruiter: ADDRECRUITERREDUCER,
  getJobs : GETJOBSOFRECRUITER,
  searchRecruiterJob: SEARCHPOSTEDJOB,
  createApplicant: CREATEAPPLICANT,
  loginApplicant: LoginApplicantReducer,
  loginRecruiter: LoginRecruiterReducer,
  searchJobs : SearchJobsReducer,
  searchUsers : SearchUsersReducer,
  Jobs : FetchJobsReducer,
  Users : FetchUsersReducer,
  user: userReducer,
  getProfileInfo: GET_PROFILE,
  myNetwork: myNetwork,
  myJobs:myJobs,
  saveJobs:saveJobs

});

const rootReducer = (state, action) => {
  if (action.type === "tlogout") {
    state = undefined;
  }
  return mainReducer(state, action);
};
export default rootReducer;
