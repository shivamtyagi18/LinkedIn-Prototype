module.exports = {
  User: require("../linkedINController/applicant/loginRegister"), //changed by shivam 14/11
  Search: require("../linkedINController/applicant/searchRoute"),
  SaveJob: require("../linkedINController/applicant/saveJob"),
  ConnectionRequest: require("../linkedINController/applicant/connectionRequest"),
  Property: require("../linkedINController/propertyRoute"),
  Booking: require("../linkedINController/bookingRoute"),
  Dashboard: require("../linkedINController/dashboardRoute"),
  ApplicantProfile: require("../linkedINController/applicant/profileRoute") //changed by shivam 14/11
};
