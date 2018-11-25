var mongoose = require("mongoose");

var Users = mongoose.model("User", {
  firstName: {
    type: String,
    default: "firstname"
  },
  lastName: {
    type: String,
    default: "lasttname"
  },
  type: {
    type: String,
    default: "traveller/owner"
  },
  phone: {
    type: String,
    default: "xxx-xxx-xxxx"
  },
  address: {
    type: String,
    default: "address"
  },
  city: {
    type: String,
    default: "city"
  },
  state: {
    type: String,
    default: "state"
  },
  zipcode: {
    type: String,
    default: "zipcode"
  },
  country: {
    type: String,
    default: "country"
  },
  experience: {
    type: String,
    default: "experience"
  },
  education: {
    type: String,
    default: "education"
  },
  skills: {
    type: String,
    default: "skills"
  },
  profileSummary: {
    type: String,
    default: "profileSummary"
  },
  clickCounts: {
    type: Number,
    default: 0
  },
  resume: {
    type: String,
    default: "resume"
  },
  gender: {
    type: String,
    default: "gender"
  },
  img: {
    type: String,
    default: "image"
  },
  connectionRequests: [String],
  connections: [String],
  savedJobs: [String],
  appliedJobs: {
    type: String,
    default: "appliedJobs"
  },
  email: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String
  },
  companyName: {
    type: String,
    default:"Company Name"
  }


  // Credentials :[{
  //     email :{
  //         type : String
  //     },
  //     password : {
  //         type : String
  //     },

  // }]
});

module.exports = { Users };
