var mongoose = require("../mongoose");
 
function handle_request(msg, callback) {
var res = {};
console.log("In apply handle kafka request:" + JSON.stringify(msg));
console.log(msg.jobId);
var application = new mongoose.Applications({
// applicationId: DataCue.applicationId,
//applicantId: req.body.applicantId,
applicationId: msg.applicationId,
jobId: msg.jobId,
fname: msg.fname,
lname: msg.lname,
//lname: msg.lname,
address: msg.address,
source: msg.source,
diversity: msg.diversity,
disability: msg.disability
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