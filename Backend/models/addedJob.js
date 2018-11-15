
var mongoose = require('mongoose');

module.exports.AddedJobs = mongoose.model("AddedJobs", {
    numberOfApplicants: {
      type: Number
    },
    numberOfViews: {
      type: Number
    },
    jobTitle: {
      type: String
    },
    jobDescription: {
      type: String
    },
    location: {
      type: String
    },
    inustry: {
      type: Date
    },
    employmentType: {
      type: String
    },
    jobFunction: {
      type: String
    },
    companyLogo: {
      type: String
    },
    companyName: {
      type: String
    },
    jobOpenings: {
      type: Number
    },
    postedOn: {
      type: Date
    },
  
    
  });