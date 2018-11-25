var mongoose = require("../mongoose");

function handle_request(msg, callback) {
var res = {};
console.log("In apply handle kafka request:" + JSON.stringify(msg));
console.log(msg.jobId);
var application = new mongoose.Applications({
// applicationId: DataCue.applicationId,
//applicantId: req.body.applicantId,
applicantId : msg.email,
jobId: msg.jobId,
firstName: msg.firstName,
lastName: msg.lastName,
education: msg.education,
city: msg.city,
bio : msg.bio,
about: msg.about,
sponsership:msg.sponsership,
disability: msg.disability,
resume:msg.resume, 
coverLetter:msg.coverLetter
});
console.log(msg);
application.save().then(
application => {
console.log("Application created :", application);
res.code = 200;
res.value = application;
callback(null, res);
},
err => {
console.log("Error applying for Job");
res.code = 400;
res.value = "Error";
}
);
}

exports.handle_request = handle_request;