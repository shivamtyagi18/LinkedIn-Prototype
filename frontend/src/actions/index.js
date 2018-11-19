import axios from "axios";

export const FETCH_PROPERTIES = "fetch_properties";
export const TLOGIN = "TLOGIN";
export const LOGINRECRUITER = "LOGINRECRUITER";
export const ADDRECRUITER = "ADDRECRUITER";
export const OREGISTER = "OREGISTER";
export const HOMESEARCH = "HOMESEARCH";
export const FETCH_OWNERDASHBOARD = "FETCH_OWNERDASHBOARD";
export const FETCH_TRAVElDASHBOARD = "FETCH_TRAVElDASHBOARD";
export const TLOGOUT = "tlogout";
export const BOOKING = "booking";

export const LOGIN_APPLICANT = "login_applicant";
export const LOGOUT_APPLICANT = "logout_applicant";
export const CREATEAPPLICANT = "create_applicant";

axios.defaults.headers.common["authorization"] = localStorage.getItem("token");
//export const CREATE_BOOK = "create_book";

const ROOT_URL = "http://localhost:3001";

export function fetchProperty() {
  //middleware call
  //receive response from backend
  const response = axios.get(`${ROOT_URL}/search/searchresult`);
  //Action dispatched
  console.log("Response", response);
  return {
    type: FETCH_PROPERTIES,
    payload: response
  };
}

export function tlogin(values, callback) {
  //middleware call
  //receive response from backend
  axios.defaults.withCredentials = true;
  const request = axios
    .post(`${ROOT_URL}/login`, values)
    .then(datarequested => {
      console.log(datarequested);
      if (callback) callback();
      return datarequested;
    });
  //Action dispatched
  console.log("Request", request);
  return {
    type: TLOGIN,
    payload: request
  };
}

//------------------------------for Applicant login----------------------------------//

export function createApplicant(values, callback) {
  axios.defaults.withCredentials = true;
  const request = axios
    .post(`${ROOT_URL}/applicant/registerApplicant`, values)
    .then(response => {
      console.log("Status Code : ", response.status);
      console.log(response);
      //then((datafromreq) => {
      if (callback) callback();
      return response;
    });
  console.log("Request", request);
  // console.log("Request",request);
  // console.log("Request",request);
  return {
    type: CREATEAPPLICANT,
    payload: request
  };
}

export function loginUser(values, callback) {
  axios.defaults.withCredentials = true;
  const request = axios
    .post(`${ROOT_URL}/applicant/loginApplicant`, values)
    .then(response => {
      console.log("Status Code : ", response.status);
      console.log(response);
      //then((datafromreq) => {
      if (callback) callback();
      return response;
    });

  console.log("Request", request);
  return {
    type: LOGIN_APPLICANT,
    payload: request
  };
}

export function logoutUser() {
  axios.defaults.withCredentials = true;
  return {
    type: LOGOUT_APPLICANT,
    payload: null
  };
}

//----------------------------------------------------------------------------------//

export function loginRecruiter(values, callback) {
  //middleware call
  //receive response from backend
  axios.defaults.withCredentials = true;
  const request = axios
    .post(`${ROOT_URL}/recruiter/loginRecruiter`, values)
    .then(datarequested => {
      if (callback) callback();
      return datarequested;
    });
  //Action dispatched
  console.log("Request", request);
  return {
    type: LOGINRECRUITER,
    payload: request
  };
}

// export function createBook(values, callback) {
//   const request = axios
//     .post(`${ROOT_URL}/book`, values)
//     .then(() => callback());

//   return {
//     type: FETCH_BOOKS,
//     payload: request
//   };
// }
export function addRecruiter(values, callback) {
  //middleware call
  //receive response from backend
  // return async function (dispatch){
  // const response = await ax

  //dispatch({

  //}  })
  axios.defaults.withCredentials = true;
  const request = axios
    .post(`${ROOT_URL}/recruiter/addRecruiter`, values)
    .then(datarequested => {
      console.log(datarequested);
      if (callback) callback();
      return datarequested;
    });

  //Action dispatched
  console.log("Request", request);
  return {
    type: ADDRECRUITER,
    payload: request
  };
}
export function oregister(values, callback) {
  //middleware call
  //receive response from backend
  axios.defaults.withCredentials = true;
  const request = axios
    .post(`${ROOT_URL}/registerowner`, values)

    .then(datarequested => {
      console.log(datarequested);
      if (callback) callback();
      return datarequested;
    });

  //Action dispatched
  console.log("Request", request);
  return {
    type: OREGISTER,
    payload: request
  };
}

export function homesearch(values, callback) {
  //middleware call
  //receive response from backend
  axios.defaults.withCredentials = true;
  const request = axios
    .post(`${ROOT_URL}/search/homesearch`, values)
    .then(() => callback());
  //Action dispatched
  console.log("Request", request);
  return {
    type: HOMESEARCH,
    payload: request
  };
}

export function fetchOwnerDashboard(values, callback) {
  //middleware call
  axios.defaults.withCredentials = true;
  const request = axios
    .post(`${ROOT_URL}/dashboard/ownerdashboard`, values)
    .then(datarequested => {
      if (callback) callback();
      return datarequested;
    });
  //Action dispatched
  console.log("Request", request);
  return {
    type: FETCH_OWNERDASHBOARD,
    payload: request
  };
}

export function fetchTravelDashboard(values, callback) {
  //middleware call
  axios.defaults.withCredentials = true;
  const request = axios
    .post(`${ROOT_URL}/dashboard/dashboard`, values)
    .then(datarequested => {
      if (callback) callback();
      console.log(datarequested);
      return datarequested;
    });
  //Action dispatched
  console.log("Request", request);
  return {
    type: FETCH_TRAVElDASHBOARD,
    payload: request
  };
}

export function tlogout() {
  //middleware call
  //receive response from backend
  localStorage.removeItem("name");
  localStorage.removeItem("type");
  localStorage.removeItem("email");
  localStorage.removeItem("token");
  window.location.reload(1);

  //Action dispatched
  //console.log("Request", request);
  return {
    type: TLOGOUT,
    payload: null
  };
}

export function booking(values, callback) {
  //middleware call
  //receive response from backend
  axios.defaults.withCredentials = true;
  const request = axios
    .post(`${ROOT_URL}/booking/bookproperty`, values)
    .then(() => callback());
  //Action dispatched
  console.log("Request", request);
  return {
    type: BOOKING,
    payload: request
  };
}
