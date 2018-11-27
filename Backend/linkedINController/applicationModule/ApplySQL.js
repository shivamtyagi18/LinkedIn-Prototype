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
var mysql = require("mysql");
//var pool = require("../../pool");
var kafka = require("../../kafka/client");
console.log("Apply for Job");
app.post("/applySQL", function(req, res) {
    console.log("Inside Apply Post Request SQL");
console.log(req.body);
console.log("jobID :" + req.body.jobId);
kafka.make_request(
"applySQL_topic",
{
//getJobID (Recruiter Model) + applicantID(Applicant Model)
email: req.body.email,
jobId: req.body.jobId,
fname: req.body.fname,
lname: req.body.lname,
city: req.body.city,
companyName : req.body.companyName
},
function(err, result) {
    console.log("in result for apply");
    if (err) {
    res.sendStatus(400).end();
    } else {
    if (result.code == 200) {
    console.log("result" + result);
    res.json({
    success: true,
    code: result.code
    });
    console.log("Successfully applied.");
    // done(null, { results: results.value });
    } else if (result.code == 404) {
    //here check applicantID with Job ID in the database
    res.json({
    success: false,
    code: result.code
    });
    console.log("Applicant has already applied");
}
}
}
);
});
module.exports = app;