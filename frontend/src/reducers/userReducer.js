import {
   // GET_APPLICATION,
    POST_APPLICATION,
    GET_APPLICANT
  } from '../actions';

const initialState = {
    applications: '',
    applicant: '',
    flag: false
}

export default function(state = initialState, action) {
    switch(action.type){
        case POST_APPLICATION:
            return{
                ...state,
                flag: 'true'
            }
        // case GET_APPLICATION:
        //     return{
        //         ...state,
        //         applications: action.payload
        //     }
        case GET_APPLICANT:
            return{
                ...state,
                applicant: action.payload
            }
        default:
            return { ...state };
        

            
    }
}