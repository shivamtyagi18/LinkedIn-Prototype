const express = require("express");
const app = express();
var morgan = require("morgan");
const multer = require("multer");
const uuidv4 = require("uuid/v4");
const path = require("path");
const fs = require("fs");
const config = require("../../configDB/settings");
const jwt = require("jsonwebtoken");
const passport = require("passport");
app.use(morgan("dev"));
var kafka = require("../../kafka/client");
console.log("Inside Applications for Job");
 
app.get("/applicationsForJob/:jobId", function(req, res) {
console.log("Inside Applications for a Job Display Get Request");
//console.log("Req Body : ", req.body);
console.log("Req Params : ", req.params);
kafka.make_request(
"applicationsForJob_topic",
{
jobId: req.params.jobId
},
function(err, result) {
console.log("in result of Applications for Job");
// console.log(res, err);
if (err) {
console.log("400");
res.sendStatus(400).end();
} else {
if (result.code == 200) {
// console.log("Result backend" + result);
console.log("200");
res.writeHead(200, {
"Content-Type": "application/json"
});
//console.log(JSON.stringify(result.value));
res.end(JSON.stringify(result.value));
 
// done(null, { results: results.value });
} else if (result.code == 401) {
res.json({
success: false,
code: result.code
});
console.log("No Applications were found for the Job");
//done(null, false, { message: results.value });
}
}
}
);
});
module.exports = app;