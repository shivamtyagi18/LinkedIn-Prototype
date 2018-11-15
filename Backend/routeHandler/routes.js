module.exports = {
  User: require("../linkedINController/applicant/loginRegister"), //changed by shivam 14/11
  Search: require("../linkedINController/applicant/searchRoute"),
  SaveJob: require("../linkedINController/applicant/saveJob"),
  ApplicantConnections: require("../linkedINController/applicant/applicantConnections"),
  Property: require("../linkedINController/propertyRoute"),
  Booking: require("../linkedINController/bookingRoute"),
  Dashboard: require("../linkedINController/dashboardRoute"),
  ApplicantProfile: require("../linkedINController/applicant/profileRoute") //changed by shivam 14/11
};
