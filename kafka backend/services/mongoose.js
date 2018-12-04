// var mongoose = require("mongoose");

// mongoose.Promise = global.Promise;

// //var url = `mongodb://id:password@ds141514.mlab.com:41514/linkedin`;

// mongoose.connect(
//   "mongodb://sarang4488:partner123@ds141514.mlab.com:41514/linkedin",
//   { useNewUrlParser: true }
// );


// const options = {
//   poolSize: 1000
// };

// var Users = mongoose.model("Users", {
//   firstName: {
//     type: String,
//     default: "firstname"
//   },
//   lastName: {
//     type: String,
//     default: "lasttname"
//   },
//   type: {
//     type: String,
//     default: "type"
//   },
//   phone: {
//     type: String,
//     default: "xxx-xxx-xxxx"
//   },
//   address: {
//     type: String,
//     default: "address"
//   },
//   city: {
//     type: String,
//     default: "city"
//   },
//   state: {
//     type: String,
//     default: "state"
//   },
//   zipcode: {
//     type: String,
//     default: "zipcode"
//   },
//   country: {
//     type: String,
//     default: "country"
//   },
//   experience: {
//     type: String,
//     default: "experience"
//   },
//   education: {
//     type: String,
//     default: "education"
//   },
//   skills: {
//     type: String,
//     default: "skills"
//   },
//   headline: {
//     type: String,
//     default: "headline"
//   },
//   locationNearby: {
//     type: String
//   },
//   industry: {
//     type: String,
//     default: "Computer Software"
//   },
//   phoneType: {
//     type: String,
//     default: "WORK"
//   },
//   profileSummary: {
//     type: String,
//     default: "profileSummary"
//   },
//   clickCounts: {
//     type: Number,
//     default: 0
//   },
//   resume: {
//     type: String,
//     default: "resume"
//   },
//   gender: {
//     type: String,
//     default: "gender"
//   },
//   img: {
//     type: String,
//     default: "image"
//   },
//   connectionRequests: [String],

//   connections: [String],

//   savedJobs: [String],
//   appliedJobs: {
//     type: String,
//     default: "appliedJobs"
//   },
//   email: {
//     type: String,
//     unique: true,
//     required: true
//   },

//   password: {
//     type: String
//   },
//   companyName: {
//     type: String,
//     default:"Company Name"
//   }

// });

// module.exports = { Users };




// module.exports.AddedJobs = mongoose.model("AddedJobs", {
//   jobId: {
//     type: Number
//   },
//   jobTitle: {
//     type: String
//   },

//   jobDescription: {
//     type: String
//   },
//   industry: {
//     type: String
//   },
//   employmentType: {
//     type: String
//   },
//   location: {
//     type: String
//   },
//   jobFunction: {
//     type: String
//   },
//   companyLogo: {
//     type: String
//   },
//   companyName: {
//     type: String
//   },
//   jobOpenings: {
//     type:Number
//   },
//   numberOfApplicants: {
//     type: Number,
//     default:0
//   },
//   email: {
//     type: String
//   },
//   numberOfViews: {
//     type: Number,
//     default: 0
//   },
//   postedOn: {
//     type:Date
//   },
//   easyApply:{
//     type:String
//   }

// });

// module.exports.Inbox = mongoose.model("Inbox", {
//   senderemail: {
//     type: String
//   },
 
//   receiveremail: {
//     type: String
//   },
//   message: {
//     type: String
//   }
//  });
// // module.exports.Applications = mongoose.model("Application", {
// //     firstName: {
// //         type: String
// //     }, 
// //     lastName: {
// //         type: String
// //     }, 
// //     email: {
// //         type: String
// //     }, 
// //     education: {
// //         type: String,
// //         default: ''
// //     }, 
// //     occupation: {
// //         type: String,
// //         default: ''
// //     }, 
// //     city: {
// //         type: String,
// //         default: ''
// //     }, 
// //     bio: {
// //         type: String,
// //         default: ''
// //     }, 
// //     about: {
// //         type: String,
// //         default: ''
// //     }, 
// //     sponsorship: {
// //         type: String,
// //         default: ''
// //     }, 
// //     disability: {
// //         type: String,
// //         default: ''
// //     }, 
// //     resume: {
// //         type: String
// //     }, 
// //     coverLetter: {
// //         type: String,
// //         default: ''
// //     }
// // });

// module.exports.Applications = mongoose.model("Application", {
//   firstName: {
//       type: String
//   }, 
//   lastName: {
//       type: String
//   }, 
//   applicantId: {
//       type: String
//   }, 
//   education: {
//       type: String,
//       default: ''
//   }, 
//   occupation: {
//       type: String,
//       default: ''
//   }, 
//   city: {
//       type: String,
//       default: ''
//   }, 
//   bio: {
//       type: String,
//       default: ''
//   }, 
//   about: {
//       type: String,
//       default: ''
//   }, 
//   sponsorship: {
//       type: String,
//       default: ''
//   }, 
//   disability: {
//       type: String,
//       default: ''
//   }, 
//   resume: {
//       type: String
//   }, 
//   coverLetter: {
//       type: String,
//       default: ''
//   },
//   jobId: {
//     type: Number
//   }
// });


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
var Users = mongoose.model("Users", {
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
    default: "type"
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
  headline: {
    type: String,
    default: "headline"
  },
  locationNearby: {
    type: String
  },
  industry: {
    type: String,
    default: "Computer Software"
  },
  phoneType: {
    type: String,
    default: "WORK"
  },
  profileSummary: {
    type: String,
    default: "profileSummary"
  },
  profileCounts :[{
    date :{
        type : Date,
        unique : true,
        default: Date()
    },
    clicks : {
      type: Number,
      default: 0
    },   
}],
  clickCounts: {
    type: Number,
    default: 0
  },
  // clickDate: {
  //   type: Date,
  //   default: Date()
  // },
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
    type: [String],
    
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
});
module.exports = { Users };
module.exports.AddedJobs = mongoose.model("AddedJobs", {
  jobId: {
    type: Number,
    unique: true
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
  numberOfApplicants: {  //no of complete forms
    type: Number,
    default:0
  },
  email: {
    type: String
  },
  numberOfViews: {  //no. of reads
    type: Number,
    default: 0
  },
  postedOn: {
    type:Date
  }
});
module.exports.Inbox = mongoose.model("Inbox", {
  senderemail: {
    type: String
  },
 
  receiveremail: {
    type: String
  },
  message: {
    type: String
  }
 });
 
module.exports.Logs = mongoose.model("Logs", {
  jobId: {
    type: Number
  },
  postedBy: {
    type: String
  },
  postedOn: {
    type:Date,
    default: Date()
  },
  applicantId: {
    type: [String]
  },
  applicantCity: {
    type: [String]
  },
  appliedOn: {
    type:Date,
    default: Date()
  },
  numberOfApplicants: {  //no of complete forms
    type: Number,
    default:0
  },
  numberOfViews: {  //no. of reads
    type: Number,
    default: 0
  },
  numberOfSaves: {  //no. of reads
    type: Number,
    default: 0
  },
  halfApply: {
    type:Number,
    default:0
  }
});
// module.exports.Applications = mongoose.model("Application", {
//     firstName: {
//         type: String
//     }, 
//     lastName: {
//         type: String
//     }, 
//     email: {
//         type: String
//     }, 
//     education: {
//         type: String,
//         default: ''
//     }, 
//     occupation: {
//         type: String,
//         default: ''
//     }, 
//     city: {
//         type: String,
//         default: ''
//     }, 
//     bio: {
//         type: String,
//         default: ''
//     }, 
//     about: {
//         type: String,
//         default: ''
//     }, 
//     sponsorship: {
//         type: String,
//         default: ''
//     }, 
//     disability: {
//         type: String,
//         default: ''
//     }, 
//     resume: {
//         type: String
//     }, 
//     coverLetter: {
//         type: String,
//         default: ''
//     }
// });
module.exports.Applications = mongoose.model("Application", {
  jobId: {
    type: Number
  },
  firstName: {
      type: String
  }, 
  lastName: {
      type: String
  }, 
  applicantId: {
      type: String
  }, 
  education: {
      type: String,
      default: ''
  }, 
  occupation: {
      type: String,
      default: ''
  }, 
  city: {
      type: String,
      default: ''
  }, 
  bio: {
      type: String,
      default: ''
  }, 
  about: {
      type: String,
      default: ''
  }, 
  sponsorship: {
      type: String,
      default: ''
  }, 
  disability: {
      type: String,
      default: ''
  }, 
  resume: {
      type: String
  }, 
  coverLetter: {
      type: String,
      default: ''
  },
  jobTitle: {
    type: String
  },
  companyName: {
    type: String
  }
});
