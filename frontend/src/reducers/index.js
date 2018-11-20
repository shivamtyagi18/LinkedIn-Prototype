import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PropertyReducer from "./propertyinfo";
import LoginReducer from "./authlogin";
import OwnerDashboardReducer from "./ownerdash";
import TravelReducer from "./traveldash";
import LogoutReducer from "./tlogout";
import LoginOwnerReducer from "./authloginowner";
import TravelRegisterReducer from "./travelregister";
import OwnerRegisterReducer from "./ownerregister";
import ADDRECRUITERREDUCER from "./addRecruiter";

import CREATEAPPLICANT from "./createApplicant";
import LoginApplicantReducer from "./applicantLogin";
import LoginRecruiterReducer from "./loginRecruiter";
import SearchJobsReducer from "./searchJobs";
import FetchJobsReducer from "./fetchJobs";

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
  createApplicant: CREATEAPPLICANT,
  loginApplicant: LoginApplicantReducer,
  loginRecruiter: LoginRecruiterReducer,
  searchJobs : SearchJobsReducer,
  fetchJobs : FetchJobsReducer
});

const rootReducer = (state, action) => {
  if (action.type === "tlogout") {
    state = undefined;
  }
  return mainReducer(state, action);
};
export default rootReducer;
