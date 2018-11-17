var mongoose = require("../mongoose");

function handle_request(msg, callback) {
  var res = {};

  console.log("In saveJob request:" + JSON.stringify(msg));
  var email = msg.email;
  var jobId = msg.jobId;
  var companyName = msg.companyName;
  mongoose.Users.findOneAndUpdate(
    { email: email},
    { $push: { savedJobs: jobId + " " + companyName } },
    { new: true },
    function(err, user) {
      console.log("job saved: ", user);
      res.code = "200";
      res.value = user; //not required
      callback(null, res);
      // res.status(200).json(testdata).end();
    },
    err => {
      console.log("Error saving job");
      res.code = "402";
      callback(null, res);
    }
  );
}

exports.handle_request = handle_request;
