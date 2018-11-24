var mongoose = require("../mongoose");

function handle_request(msg, callback) {
var res = {};

console.log("In get job Details request:" + JSON.stringify(msg));
var jobId = msg.jobId;
console.log("Details requested for : ", jobId);
mongoose.AddedJobs.findOne({ jobId: jobId }, function(err, job) {
console.log("Job : ", job);
console.log("Error : ", err);
if (err) {
res.code = "400";
res.value =
"The requested job with the given job Id was not found. Please double-check and try again.";
console.log(res.value);
res.authFlagJ = false;
callback(null, res);
} else {
res.code = "200";
res.value = job;
res.authFlagJ = true;
//res.cookie('cookie',user.Credentials[0].email,{maxAge: 900000, httpOnly: false, path : '/'});
callback(null, res);
}
});
}
exports.handle_request = handle_request;