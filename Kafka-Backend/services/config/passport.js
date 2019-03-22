"use strict";

//Not sure if we will even need this. Leave it Untouched right now..
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
//var db = require('../index');
var config = require("./settings");
var { User } = require("../models/user");

// Setup work and export for the JWT passport strategy
module.exports = function(passport) {
  var opts = {
    //jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("bearer"),
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret
  };
  if (opts) {
    passport.use(
      new JwtStrategy(opts, function(jwt_payload, callback) {
        console.log("opts", opts);
        console.log("jwt", jwt_payload);
        // console.log("1",User.Crede)
        console.log("2", jwt_payload.username);
        User.find(
          { "Credentials.email": jwt_payload.username },
          function(err, res) {
            // console.log("fields = " + fields + ". Type = " + typeof fields);
            // if (fields != null) //#####################
            // fields = fields.toString();
            // console.log("1",firstname)
            var user = res;
            delete user.password;
            callback(null, user);
            console.log("passport", user);
          },
          function(err) {
            return callback(err, false);
          }
        );
      })
    );
  } else {
    return console.log("No Tokens Found");
  }
};
