// var mongoose = require("../mongoose");

// function handle_request(msg, callback) {
//   var res = {};
//   console.log("In user update request:" + JSON.stringify(msg));

//   mongoose.Users.findOneAndUpdate(
//     { email: msg.email },
//     {
//       $set: {
//         firstName: msg.firstName,
//         lastName: msg.lastName,
//         phone: msg.phone,
//         address: msg.address,
//         city: msg.city,
//         state: msg.state,
//         zipcode: msg.zipcode,
//         country: msg.country,
//         headline: msg.headline,
//         phoneType: msg.phoneType,
//         locationNearby: msg.locationNearby,
//         industry: msg.industry,
//         experience: msg.experience,
//         education: msg.education,
//         skills: msg.skills,
//         profileSummary: msg.profileSummary
//       }
//     },
//     function(err, user) {
//       console.log("User Updated: ", user);
//       res.code = "200";
//       res.value = user; //not required
//       callback(null, res);
//       // res.status(200).json(testdata).end();
//     },
//     err => {
//       console.log("Error Creating User");
//       res.code = "402";
//       callback(null, res);
//     }
//   );
// }

// exports.handle_request = handle_request;





var mongoose = require("../mongoose");

function handle_request(msg, callback) {
 var res = {};
 console.log("In user update request:" + JSON.stringify(msg));

 mongoose.Users.findOneAndUpdate(
   { email: msg.email },
   {
     $set: {
       firstName: msg.firstName,
       lastName: msg.lastName,
       phone: msg.phone,
       address: msg.address,
       city: msg.city,
       state: msg.state,
       zipcode: msg.zipcode,
       country: msg.country,
       headline: msg.headline,
       phoneType: msg.phoneType,
       img: msg.img,
       resume: msg.resume,
       locationNearby: msg.locationNearby,
       industry: msg.industry,
       experience: msg.experience,
       education: msg.education,
       skills: msg.skills,
       profileSummary: msg.profileSummary
     }
   },
   function(err, user) {
     console.log("User Updated: ", user);
     res.code = "200";
     res.value = user; //not required
     callback(null, res);
     // res.status(200).json(testdata).end();
   },
   err => {
     console.log("Error Creating User");
     res.code = "402";
     callback(null, res);
   }
 );
}

exports.handle_request = handle_request;