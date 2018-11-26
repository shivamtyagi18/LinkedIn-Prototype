var mongoose = require("../mongoose");

function handle_request(msg, callback) {
  var res = {};
  console.log("In handle recruiter job display request:" + JSON.stringify(msg));
  mongoose.AddedJobs.findOne(
    {
      jobId: msg.jobId,
      email: msg.email
    },
    function(err, jobs) {
      if (!jobs) {
        res.code = "401";
        res.value = "Recruiter does not exist";

        console.log(res.value);
        callback(null, res);
      } else {
        console.log("Jobs are", jobs);

        res.code = "200";
        res.value = jobs;
        console.log("response", res);
        callback(null, res);
      }
    }
  );
}

exports.handle_request = handle_request;

