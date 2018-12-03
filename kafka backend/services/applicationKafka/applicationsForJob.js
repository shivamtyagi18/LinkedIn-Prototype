var mongoose = require("../mongoose");

function handle_request(msg, callback) {
var res = {};
console.log("In get Applications for Job request:" + JSON.stringify(msg));
var jobId = msg.jobId;
console.log("Applications requested for : ", jobId);
mongoose.Applications.find({ jobId: jobId }, function(err, applications) {
console.log("Error : ", err, applications);
if (err) {
res.code = "400";
res.value =
"The details you entered did not match our records. Please double-check and try again.";
console.log(res.value);
// res.sendStatus(400).end();
callback(null, res);
} else {
Applications = [];
if (applications.length) {
for (var i = 0; i < applications.length; i++) {
if (applications[i].jobId == msg.jobId) {
Applications[i] = applications[i]; //Inserting values from result to Properties array
}
}
if (!Applications.length) {
Applications = [
{
name: "No Applications Found"
}
];
}
}
console.log("Applications found are : ", Applications);
res.code = "200";
res.value = Applications;
// res.sendStatus(200).end();
callback(null, res);
}
});
}
exports.handle_request = handle_request;