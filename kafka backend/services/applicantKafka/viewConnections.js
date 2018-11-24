var mongoose = require("../mongoose");

function handle_request(msg, callback) {
  var res = {};

  console.log("In View Connections request:" + JSON.stringify(msg));
  var email = msg.email;
  console.log("user name", email);
  mongoose.Users.findOne({ email: email }, function(err, user) {
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
      if (user.connections !== []) {
        mongoose.Users.find({ email: { $in: user.connections } }, function(
          err,
          val
        ) {
          console.log("Val : ", val);
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
            res.value = val;
            //res.cookie('cookie',user.Credentials[0].email,{maxAge: 900000, httpOnly: false, path : '/'});
            callback(null, res);
          }
        });
      } else {
        res.code = "204";
        res.value = "No connections found!";
        console.log(res.value);
        callback(null, res);
      }
    }
  });
}

exports.handle_request = handle_request;
