import _ from "lodash";

import { CREATEAPPLICANT } from "../actions";

//Reducer listening to different action types
//initial state is {}
export default function(state = { error: false }, action) {
  switch (action.type) {
    //target
    case CREATEAPPLICANT:
    if (action.payload.data !== undefined){
      console.log(action.payload.data);

      return action.payload.data;
    }else{
      return "Error";
    }
    // case TLOGIN:
    //   console.log(action.payload.data);
    //   return _.mapKeys(action.payload.data, "name");

    default:
      return { ...state };
  }
}
