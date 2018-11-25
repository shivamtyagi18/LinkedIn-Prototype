import _ from "lodash";

import { SEARCHPOSTEDJOB  } from "../actions";

//Reducer listening to different action types
//initial state is {}
export default function(state = {}, action) {
  switch (action.type) {
    //target
    case SEARCHPOSTEDJOB:
      console.log(action.payload.data);
      return (action.payload.data);
    // case TLOGIN:
    //   console.log(action.payload.data);
    //   return _.mapKeys(action.payload.data, "name");

    default:
      return { ...state };
  }
}
