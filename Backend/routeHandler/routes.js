module.exports = {
  User: require("../linkedINController/applicant/loginRegister"), //changed by shivam 14/11
  Search: require("../linkedINController/applicant/searchRoute"),
  SaveJob: require("../linkedINController/applicant/saveJob"),
  // ApplicantConnections: require("../linkedINController/applicant/applicantConnections"),
  ApplicantConnectionsNew: require("../linkedINController/Connections"),
  // Property: require("../linkedINController/propertyRoute"),
  // Booking: require("../linkedINController/bookingRoute"),
  // Dashboard: require("../linkedINController/dashboardRoute"),
  ApplicantProfile: require("../linkedINController/applicant/profileRoute") ,//changed by shivam 14/11
  ApplicantMessages: require("../linkedINController/applicant/messagesRoute"),
  Recruiter: require("../linkedINController/recruiterModule/Recruiter") ,
  Apply: require("../linkedINController/applicationModule/Apply"),
  JobDetails: require("../linkedINController/applicationModule/JobDetails"),
  ApplicantAppliedJobs: require("../linkedINController/applicationModule/ApplicantAppliedJobs"),
  ApplicationsForJob: require("../linkedINController/applicationModule/ApplicationsForJob"),
  ApplySQL: require("../linkedINController/applicationModule/ApplySQL"),
  halfApply: require("../linkedINController/applicant/halfApply")
};
