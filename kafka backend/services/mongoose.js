var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

//var url = `mongodb://id:password@ds141514.mlab.com:41514/linkedin`;

mongoose.connect(
  "mongodb://sarang4488:partner123@ds141514.mlab.com:41514/linkedin",
  { useNewUrlParser: true }
);


const options = {
  poolSize: 1000
};

module.exports.Users = mongoose.model("Users", {
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
    type: Number
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
    required: true,
    unique: true
  },
  password: {
    type: String,
    required : true
  },
  companyName: {
    type: String,
    default: "Company Name"
  }
});

// module.exports.Recruiter = mongoose.model("Recruiter", {
//   // adminID: {
//   //   type: Number,
//   //   unique: true
//   // },
//   firstName: {
//     type: String,
//     required: true
//   },
//   lastName: {
//     type: String,
//     required: true
//   },
//   address: {
//     type: String,
//     default: "Address"
//   },

//   city: {
//     type: String,
//     default: "City"
//   },
//   state: {
//     type: String,
//     default: "State"
//   },
//   zipcode: {
//     type: String,
//     default: "Zip Code"
//   },
//   phoneNumber: {
//     type: String,
//     default: "XXX-XXX-XXXX"
//   },

//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   companyName: {
//     type: String,
//     default: "Company Name"
//   }
// });


module.exports.AddedJobs = mongoose.model("AddedJobs", {
  jobId: {
    type: Number
  },
  jobTitle: {
    type: String
  },

  jobDescription: {
    type: String
  },
  industry: {
    type: String
  },
  employmentType: {
    type: String
  },
  location: {
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
    type:Number
  },
  numberOfApplicants: {
    type: Number,
    default:0
  },
  numberOfViews: {
    type: Number,
    default: 0
  },
  postedOn: {
    type:Date
  }

});


