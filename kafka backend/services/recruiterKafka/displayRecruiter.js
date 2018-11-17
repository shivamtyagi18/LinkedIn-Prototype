var mongoose = require("../mongoose");

function handle_request(msg, callback) {
  var res = {};
  console.log("In handle recruiter display request:" + JSON.stringify(msg));
  mongoose.Users.findOne(
    {
      email: msg.email,
      type : "recruiter"
    },
    function(err, user) {
      if (!user) {
        res.code = "401";
        res.value = "Recruiter does not exist";

        console.log(res.value);
        callback(null, res);
      } else {
        console.log("user is", user);

        res.code = "200";
        res.value = user;
        console.log("response", res);
        callback(null, res);
      }
    }
  );
}

exports.handle_request = handle_request;

