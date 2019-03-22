//Modifications on this page

import React, { Component } from "react";
import { Route } from "react-router-dom";

//import { createStore, applyMiddleware, compose } from "redux";
//import { Provider } from "react-redux";

//Example. Have to be modified to SmartAgCloud. Leaving a couple for reference
import RegisterRecruiter from "./recruiterUI/registerRecruiter";
import ApplicantProfile from "./applicantUI/applicantAccount";
//import promise from "redux-promise";

/*
//__________________________________________INCASE WE NEED REDUX> DONT BOTHER_________
//import thunk from 'redux-thunk';
//const initialState = {};
//const middleware = [thunk];

// //middleware settings
// // To resolve promise to store we use apply
const composePlugin = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const composingMiddlewareAndDevTools = composePlugin(
  applyMiddleware(...middleware, promise)
);
export const store = createStore(
  RootReducer,
  //composePlugin(applyMiddleware(promise))
  composingMiddlewareAndDevTools
);
//___________________________________________________________________________
*/

class Main extends Component {
  render() {
    return (
      // <Provider store={store}>
      <div>
        <Route
          exact
          path="/recruiter/addRecruiter"
          component={RegisterRecruiter}
        />

        <Route exact path="/account" component={ApplicantProfile} />
      </div>
      //</Provider>
    );
  }
}

export default Main;
