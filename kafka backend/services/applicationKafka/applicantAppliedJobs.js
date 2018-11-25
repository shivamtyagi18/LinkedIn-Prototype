var mongoose = require("../mongoose");

function handle_request(msg, callback) {
console.log("In Applicant Applied Jobs Request");
var res = {};
var Applications = [];
var applicantId = msg.applicantId;
console.log("applicationid" + applicantId);
mongoose.Applications.find({ applicantId: applicantId }, (err, result) => {
if (err) {
console.log(err);
res.code = 400;
res.value =
"There was some problem with the server, please try again later";
console.log(res.value);
callback(null, res);
} else {
if (result) {
result.map(application => {
Applications.push(application);
});
} else {
console.log("Sorry, no applications were found");
Applications = [];
}
}
console.log("Jobs : ", Applications);
res.code = "200";
res.value = Applications;
callback(null, res);
});
}

exports.handle_request = handle_request;