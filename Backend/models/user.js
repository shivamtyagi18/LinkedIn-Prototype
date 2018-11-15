var mongoose = require("mongoose");

var User = mongoose.model("User", {
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
  connections: {
    type: String,
    default: "connections"
  },
  savedJobs: {
    type: Array,
    default: "savedJobs"
  },
  appliedJobs: {
    type: String,
    default: "appliedJobs"
  },
  email: {
    type: String
  },

  password: {
    type: String
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

module.exports = { User };
