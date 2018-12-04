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

export const GETJOBSOFRECRUITER = "GETJOBSOFRECRUITER";
export const SEARCHPOSTEDJOB = "searchPostedJob";

export const LOGIN_APPLICANT = "login_applicant";
export const LOGOUT_APPLICANT = "logout_applicant";
export const CREATEAPPLICANT = "create_applicant";
export const SEARCH_JOBS = "search_jobs";
export const SEARCH_USERS = "search_users";
export const FETCH_JOBS = "fetch_jobs";
export const FETCH_USERS = "fetch_users";
export const SAVE_JOBS = "save_jobs";
export const SENDCONNECTIONREQUEST = "sendConnectionRequest";
export const ACCEPTCONNECTIONREQUEST = "acceptConnectionRequest";

export const POST_APPLICATION = 'POST_APPLICATION';
export const GET_APPLICATIONS = 'GET_APPLICATIONS';
export const GET_APPLICANT = 'GET_APPLICANT';
export const SAVE_JOB = 'SAVE_JOB';

export const GET_PROFILE = "GET_PROFILE";
export const MY_NETWORK = "MY_NETWORK";
export const MY_NETWORK_REQUESTS = "MY_NETWORK_REQUESTS";
export const MY_JOBS = "MY_JOBS";


export const GRAPH1 = "GRAPH1";
export const GRAPH2 = "GRAPH2";
export const GRAPH3 = "GRAPH3";
export const GRAPH4 = "GRAPH4";
export const GRAPH5 = "GRAPH5";

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

export function searchJobs(values, callback) {
  axios.defaults.withCredentials=true;
  const request = axios
    .post(`${ROOT_URL}/applicant/search/jobsearch`, values)
    .then((response) =>  {
      console.log("Status Code : ",response.status);
      console.log(response); 
  //then((datafromreq) => {
    if(callback) callback();
    return response
  });
    console.log("Request",request);
  return {
    type: SEARCH_JOBS,
    payload: request
  };
}

export function searchUsers(values, callback) {
  axios.defaults.withCredentials=true;
  const request = axios
    .post(`${ROOT_URL}/applicant/search/usersearch`, values)
    .then((response) =>  {
      console.log("Status Code : ",response.status);
      console.log(response); 
  //then((datafromreq) => {
    if(callback) callback();
    return response
  });
    console.log("Request",request);
  return {
    type: SEARCH_USERS,
    payload: request
  };
}

export function fetchJobs() {
  //middleware call
  //receive response from backend
  const response = axios.get(`${ROOT_URL}/applicant/search/fetchJobs`);
  //Action dispatched
  console.log("Response",response);
  return {
    type: FETCH_JOBS,
    payload: response
  };
}

export function fetchUsers() {
  //middleware call
  //receive response from backend
  const response = axios.get(`${ROOT_URL}/applicant/search/fetchUsers`);
  //Action dispatched
  console.log("Response",response);
  return {
    type: FETCH_USERS,
    payload: response
  };
}

export function tlogout() {
  //middleware call
  //receive response from backend
  // localStorage.removeItem("name");
  // localStorage.removeItem("type");
  localStorage.removeItem("email");
  localStorage.removeItem("token");
  localStorage.removeItem("firstName");
  localStorage.removeItem("type");
  localStorage.removeItem("jobTitle");
  localStorage.removeItem("companyName");
  window.location.reload(1);

  //Action dispatched
  //console.log("Request", request);
  return {
    type: TLOGOUT,
    payload: null
  };
}

export function getProfile(values, callback) {
  const request = axios
    .get(`${ROOT_URL}/applicant/profile/getprofile/${values.email}`)
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
    type: GET_PROFILE,
    payload: request
  };
}


export function saveDetails(values, callback) {
  console.log("Printing values in actions", values);
  const request = axios
    .put(`${ROOT_URL}/applicant/profile/userUpdate/${values.email}`, values)
    .then(response => {
      console.log("Status Code : ", response.status);
      console.log(response);
      //then((datafromreq) => {
      if (callback) callback();
      return response;
    });
  console.log("Request", request);
  window.location.reload(1);
  return {
    type: GET_PROFILE,
    payload: request
  };
}

export function myNetwork(values, callback) {
  const request = axios
    .get(`${ROOT_URL}/connections/viewConnections/${values.email}`)
    .then(response => {
      console.log("Status Code : ", response.status);
      console.log("Connections Data is : ", response);
      //then((datafromreq) => {
      if (callback) callback();
      return response;
    });
  console.log("Request", request);
  // console.log("Request",request);
  // console.log("Request",request);
  return {
    type: MY_NETWORK,
    payload: request
  };
}

export function myNetworkRequests(values, callback) {
  const request = axios
    .get(`${ROOT_URL}/connections/viewConnectionRequests/${values.email}`)
    .then(response => {
      console.log("Status Code : ", response.status);
      console.log("Connections Data is : ", response);
      //then((datafromreq) => {
      if (callback) callback();
      return response;
    });
  console.log("Request", request);
  // console.log("Request",request);
  // console.log("Request",request);
  return {
    type: MY_NETWORK_REQUESTS,
    payload: request
  };
}

export function myJobs(values, callback) {
  const request = axios
    .get(`${ROOT_URL}/applicationModule/applicantAppliedJobs/${values.email}`)
    .then(response => {
      console.log("Status Code : ", response.status);
      console.log("Connections Data is : ", response);
      //then((datafromreq) => {
      if (callback) callback();
      return response;
    });
  console.log("Request", request);
  // console.log("Request",request);
  // console.log("Request",request);
  return {
    type: MY_JOBS,
    payload: request
  };
}

export function saveJobs(values, callback) {
  axios.defaults.withCredentials=true;
  const request = axios
    .post(`${ROOT_URL}/saveJob`, values)
    .then((response) =>  {
      console.log("Status Code : ",response.status);
      console.log(response); 
  //then((datafromreq) => {
    if(callback) callback();
    return response
  });
    console.log("Request",request);
  return {
    type: SAVE_JOBS,
    payload: request
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

//-----------------------------------------Application-----------------------------------------//

// export const apply = data => dispatch => {
//   axios
//       .post(`${ROOT_URL}/applicationModule/apply`, data)
//       .then(res => {
//           if(res.status===200){
//               console.log('Successfully Applied');
//               dispatch({
//                   type: POST_APPLICATION,
//                   payload: res.data
//               })
//           }
//       })
// }

// export const easyApply = data => dispatch => {
//   axios
//       .post(`${ROOT_URL}/easyApply`, data)
//       .then(res => {
//           if(res.status===200){
//               console.log('Successfully Applied');
//               dispatch({
//                   type: POST_APPLICATION,
//                   payload: res.data
//               })
//           }
//       })
// }

export const apply = data => dispatch => {
  axios.post(`${ROOT_URL}/applicationModule/apply`, data).then(res => {
  if (res.status === 200) {
  console.log("Successfully Applied");
  dispatch({
  type: POST_APPLICATION,
  payload: res.data
  });
  }
  });

  axios.post("http://localhost:3001/applySQL", data).then(response => {
  console.log("Status : ", response.status);
  if (response.status === 200) {
  console.log("Successfully Applied");
  }
  dispatch({
  type: POST_APPLICATION,
  payload: response.data
  });
  });
  };

export const getApplicant = (applicantId) => dispatch => {
  axios
      .get(`${ROOT_URL}/applicant/profile/getprofile/${applicantId}`)
      .then(res => {
          if(res.status===200){
              dispatch({
                  type: GET_APPLICANT,
                  payload: res.data
              })
          }
      })
}

export function getRecruiterJobs(values, callback) {
  axios.defaults.withCredentials = true;
  const data = {
    email:localStorage.getItem("email")
  };
  const request = 
  axios
    .get(`${ROOT_URL}/recruiter/getPostedJob/${data.email}`)
    .then(datarequested => {
      if (callback) callback();
      return datarequested;
    });
    console.log(request);
  return {
    type: GETJOBSOFRECRUITER,
    payload: request
  };
}

//target action
export function searchPostedJob(values, callback) {
  axios.defaults.withCredentials = true;
  //middleware call
  //receive response from backend
  console.log(values)
  values.email = localStorage.getItem("email");
  console.log(values);
  const request = axios.post(`${ROOT_URL}/recruiter/searchPostedJob`,values).then((datarequested) => {
    if (callback) callback();
    return datarequested;
  });
  //Action dispatched
  console.log(request);
  return {
    type: SEARCHPOSTEDJOB,
    payload: request
  };
 }

 export function sendConnectionRequest(values, callback){
  axios.defaults.withCredentials = true;
  console.log(values);
  const request = axios.post(`${ROOT_URL}/connections/request`,values).then((datarequested) => {
    if (callback) callback();
    return datarequested;
  });
  //Action dispatched
  console.log(request);
  return {
    type: SENDCONNECTIONREQUEST,
    payload: request
  };
 }

 export function acceptConnectionRequest(values, callback){
  axios.defaults.withCredentials = true;
  console.log(values);
  const request = axios.post(`${ROOT_URL}/connections/accept`,values).then((datarequested) => {
    if (callback) callback();
    return datarequested;
  });
  //Action dispatched
  console.log(request);
  return {
    type: ACCEPTCONNECTIONREQUEST,
    payload: request
  };
 }


 export function graph1(values, callback){
  axios.defaults.withCredentials = true;
  console.log(values);
  const request = axios.get(`${ROOT_URL}/recruiter/citywise/${values.jobId}/${values.email}`).then((datarequested) => {
    if (callback) callback();
    return datarequested;
  });
  //Action dispatched
  console.log(request);
  return {
    type: GRAPH1,
    payload: request
  };
 }


 export function graph2(values, callback){
  axios.defaults.withCredentials = true;
  console.log(values);
  const request = axios.get(`${ROOT_URL}/recruiter/first10jobs/${values.jobId}/${values.email}`).then((datarequested) => {
    if (callback) callback();
    return datarequested;
  });
  //Action dispatched
  console.log(request);
  return {
    type: GRAPH2,
    payload: request
  };
 }


 export function graph3(values, callback){
  axios.defaults.withCredentials = true;
  console.log(values);
  const request = axios.get(`${ROOT_URL}/recruiter/top5jobs/${values.email}`).then((datarequested) => {
    if (callback) callback();
    return datarequested;
  });
  //Action dispatched
  console.log(request);
  return {
    type: GRAPH3,
    payload: request
  };
 }


 export function graph4(values, callback){
  axios.defaults.withCredentials = true;
  console.log(values);
  const request = axios.get(`${ROOT_URL}/recruiter/savedjob/${values.email}`).then((datarequested) => {
    if (callback) callback();
    return datarequested;
  });
  //Action dispatched
  console.log(request);
  return {
    type: GRAPH4,
    payload: request
  };
 }


 export function graph5(values, callback){
  axios.defaults.withCredentials = true;
  console.log(values);
  const request = axios.get(`${ROOT_URL}/recruiter/monthwise/${values.jobId}/${values.email}`).then((datarequested) => {
    if (callback) callback();
    return datarequested;
  });
  //Action dispatched
  console.log(request);
  return {
    type: GRAPH5,
    payload: request
  };
 }


