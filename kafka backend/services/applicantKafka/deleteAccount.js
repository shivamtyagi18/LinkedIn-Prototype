var mongoose = require("../mongoose");

function handle_request(msg, callback) {
 var res = {};

 console.log("In delete account request:" + JSON.stringify(msg));
 var email = msg.email;
 console.log("user's email is: ", email);
 mongoose.Users.findOneAndRemove({ email: email }, function(err, user) {
   console.log("User : ", user);
   console.log("Error : ", err);
   //console.log("Password : ",user.Credentials[0].password);
   if (err) {
     res.code = "400";
     res.value =
       "The username was not found. Please double-check and try again.";
     console.log(res.value);
     callback(null, res);
   } else {
     res.code = "200";
     res.value = user;
     //res.cookie('cookie',user.Credentials[0].email,{maxAge: 900000, httpOnly: false, path : '/'});
     callback(null, res);
   }
 });
}

exports.handle_request = handle_request;