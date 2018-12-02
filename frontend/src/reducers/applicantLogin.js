import _ from "lodash";

import { LOGIN_APPLICANT } from "../actions";

//Reducer listening to different action types
//initial state is {}
export default function(state = { error: false }, action) {
  switch (action.type) {
    //target
    case LOGIN_APPLICANT:
      console.log("Applicant login",action.payload.data);
      if(action.payload.data){
        if (action.payload.data.code == 200) {
          // localStorage.setItem("name", action.payload.data.name);
          // localStorage.setItem("type", action.payload.data.type);
          localStorage.setItem("email", action.payload.data.email);
          localStorage.setItem("token", action.payload.data.token);
          localStorage.setItem("type", action.payload.data.type);
          localStorage.setItem("firstName",action.payload.data.firstName);
          return action.payload.data;
        }else if (action.payload.data.code == 401) {
        return action.payload.data;
      }
    }else {
        return "Error";
      }
      
    // case TLOGIN:
    //   console.log(action.payload.data);
    //   return _.mapKeys(action.payload.data, "name");

    default:
      return { ...state };
  }
}
