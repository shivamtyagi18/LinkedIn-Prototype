import React, { Component } from "react";
import { Route } from "react-router-dom";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
//import Inbox from "./inbox";
import RegisterRecruiter from "./recruiterUI/registerRecruiter";
import LoginRecruiter from "./recruiterUI/loginRecruiter";


import LoginApplicant from "./applicantUI/loginApplicant";

import RootReducer from "../reducers";

import promise from "redux-promise";

// //middleware settings
// // To resolve promise to store we use apply
const composePlugin = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
export const store = createStore(
  RootReducer,
  composePlugin(applyMiddleware(promise))
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
            path="/recruiter/loginRecruiter"
            component={LoginRecruiter}
          />

        <Route
          exact
          path="/applicant/loginApplicant"
          component={LoginApplicant}
        />
        </div>
      </Provider>
    );
  }
}

export default Main;
