import _ from "lodash";
import { SEARCH_USERS } from "../actions";



//Reducer listening to different action types
//initial state is {}
export default function(state = {}, action) {
  switch (action.type) {
    //target 
    case SEARCH_USERS:
      console.log("SEARCH DATA",action.payload.data)
    return (action.payload.data); 
    //  let names=_.mapKeys(action.payload.data); 
    //  return(names)
    default:
      return state;
  }
}
