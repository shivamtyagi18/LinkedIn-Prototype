//Has to be deleted. Just to give an example for how to design a mongoose schema
/* 
Im first of all trying that we can present something on IEEE.
Im doing register backend front end
you can do login backend front end
And Ill do farmers dashboard.
If you can do IOT dashboard,
we will have a lot to present. But dont stress. Yo

*/
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
    default: "farmer/IOT Manager/Infrastructure Manager"
  },
  userName: {
    type: String,
    default: "username",
    unique: true,
    required: true
  },
  phone: {
    type: String,
    default: "xxx-xxx-xxxx"
  },
  city: {
    type: String,
    default: "city"
  },
  state: {
    type: String,
    default: "state"
  },
  country: {
    type: String,
    default: "country"
  },

  //for profile pic. But image is hard i have never worked with S3
  //Yo.
  img: {
    type: String,
    default: "image"
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = { Users };
