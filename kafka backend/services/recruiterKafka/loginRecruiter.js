var mongoose = require("../mongoose");
//var passwordHash = require('password-hash');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//var config = require("../services/settings");
var passport = require("passport");
const saltRounds = 10;
function handle_request(msg, callback) {
  var res = {};
  console.log("In handle recruiter login request:" + JSON.stringify(msg));
  console.log("check password request:" + msg.password);

  mongoose.Users.findOne({ email: msg.email,type: "recruiter" }, function(err, user) {
    //console.log("password" + user.password);
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      if (!user) {
        console.log("User does not exist");

        res.code = "404";
        res.value = "user does not exist";
        callback(null, res);
      } else {
        bcrypt.compare(msg.password, user.password, function(error, result) {
          //console.log("inside ", err, result);
          if (!result) {
            console.log("Password doest not match");
            res.code = "401";
            res.value =
              "The email and password you entered did not match our records. Please double-check and try again.";
            callback(null, res);
          } else if (result) {
            console.log("Recruiter successfully loggged in");

            res.code = "200";
            res.value = user;
            console.log("response", res);
            callback(null, res);
          }
        });
      }
    }
    //callback(null, res);
  });
}

exports.handle_request = handle_request;
