var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
//var url = `mongodb://id:password@ds141514.mlab.com:41514/linkedin`;

mongoose.connect('mongodb://sarang4488:partner123@ds141514.mlab.com:41514/linkedin',{ useNewUrlParser: true });


const options = {
  poolSize: 1000
};


module.exports.Users = mongoose.model("Users", {
  firstName :{
    type : String,
    default : 'firstname'
},
lastName :{
    type : String,
    default : 'lasttname'
},
type :{
    type : String,
    default : 'traveller/owner'
},
phone :{
    type : String,
    default : 'xxx-xxx-xxxx'
},
address :{
    type : String,
    default : 'address'
},
city :{
    type : String,
    default : 'city'
},
state :{
    type : String,
    default : 'state'
},
zipcode :{
    type : String,
    default : 'zipcode'
},
country :{
    type : String,
    default : 'country'
},
experience :{
    type : String,
    default : 'experience'
},
education :{
    type : String,
    default : 'education'
},
skills :{
    type : String,
    default : 'skills'
},
profileSummary :{
    type : String,
    default : 'profileSummary'
},
resume :{
    type : String,
    default : 'resume'
},
gender :{
    type : String,
    default : 'gender'
},
img :{
    type : String,
    default : 'image'
},
connections :{
    type : String,
    default : 'connections'
},
savedJobs :{
    type : String,
    default : 'savedJobs'
},
appliedJobs :{
    type : String,
    default : 'appliedJobs'
},
email :{
    type : String
},
password : {
      type : String
} 

});

// module.exports.Properties = mongoose.model("Property", {
//   ownername: {
//     type: String
//   },
//   name: {
//     type: String
//   },
//   propertydescription: {
//     type: String
//   },
//   location: {
//     type: String
//   },
//   checkin: {
//     type: Date
//   },
//   checkout: {
//     type: Date
//   },
//   guests: {
//     type: Number
//   },
//   price: {
//     type: Number
//   },
//   type: {
//     type: String
//   },
//   bedrooms: {
//     type: Number
//   },
//   bathrooms: {
//     type: Number
//   },
//   amenities: {
//     type: String
//   },

//   description: {
//     type: String
//   },
//   image: {
//     type: String
//   }
// });

module.exports.AddedJobs = mongoose.model("AddedJobs", {
  numberOfApplicants: {
    type: Number,
    default : 0
  },
  numberOfViews: {
    type: Number,
    default : 0
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
    type: String
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


module.exports.Booking = mongoose.model("Booking", {
  customername: {
    type: String
  },
  propertyname: {
    type: String
  },

  checkin: {
    type: Date
  },
  checkout: {
    type: Date
  },
  guests: {
    type: Number
  },
  price: {
    type: Number
  },
  description: {
    type: String
  }
});

module.exports.Inbox = mongoose.model("Inbox", {
  customername: {
    type: String
  },
  propertyname: {
    type: String
  },

  ownername: {
    type: String
  },
  messageCustomer: {
    type: String
  },
  messageOwner: {
    type: String
  }
});
