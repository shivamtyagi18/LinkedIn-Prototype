const express = require("express");
const app = express();
const config = require("../../configDB/settings");
var kafka = require("../../kafka/client");
console.log("Applicant Applied Jobs");

app.get("/applicantAppliedJobs/:applicantId", function(req, res) {
console.log("Inside Applicant Applied Jobs Request");
console.log("Req Body : ", req.body);
console.log("Req Params : ", req.params);
kafka.make_request(
"applicantAppliedJobs_topic",
{
applicantId: req.params.applicantId
},
function(err, result) {
console.log("in result : applicant Applied Jobs");
if (err) {
res.sendStatus(400).end();
} else {
if (result.code == 200) {
console.log(result);
res.writeHead(200, {
"Content-Type": "application/json"
});
console.log(JSON.stringify(result.value));
res.end(JSON.stringify(result.value));

// done(null, { results: results.value });
} else {
console.log("No applications were found");
//done(null, false, { message: results.value });
res.json({ Error: "Sorry, no applications were found" });
}
}
}
);
});
module.exports = app;