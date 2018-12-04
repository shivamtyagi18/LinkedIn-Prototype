// var mongoose = require("../mongoose");

// function handle_request(msg, callback) {
//   var res = {};

//   console.log("In connection request request:" + JSON.stringify(msg));
//   var receiverEmail = msg.receiver;
//   var senderEmail = msg.sender;
//   mongoose.Users.findOneAndUpdate(
//     { email: receiverEmail },
//     { $push: { connectionRequests: senderEmail } },
//     { new: true },
//     function(err, user) {
//       console.log("Connection request sent: ", user);
//       res.code = "200";
//       res.value = user; //not required
//       callback(null, res);
//       // res.status(200).json(testdata).end();
//     },
//     err => {
//       console.log("Error in seding connection request");
//       res.code = "402";
//       callback(null, res);
//     }
//   );
// }

// exports.handle_request = handle_request;


var mongoose = require("../mongoose");

function handle_request(msg, callback) {
 var res = {};

 console.log("In connection request request:" + JSON.stringify(msg));
 var receiverEmail = msg.receiver;
 var senderEmail = msg.sender;

 mongoose.Users.findOne(
   {
     email: msg.receiver,
     $or: [
       { connections: { $in: [msg.sender] } },
       { connectionRequests: { $in: [msg.sender] } }
     ]
   },
   function(err, jobs) {
     console.log(err, jobs);
     if (!jobs) {
       mongoose.Users.findOneAndUpdate(
         { email: receiverEmail },
         { $push: { connectionRequests: senderEmail } },
         { new: true },
         function(err, user) {
           console.log("Connection request sent: ", user);
           res.code = "200";
           console.log("user", user);
           res.value = user; //not required
           callback(null, res);
           // res.status(200).json(testdata).end();
         }
       );
     } else {
       console.log("hello");
       res.code = "200";
       res.value = "Error";

       callback(null, res);
     }
   }
 );
}

exports.handle_request = handle_request;
