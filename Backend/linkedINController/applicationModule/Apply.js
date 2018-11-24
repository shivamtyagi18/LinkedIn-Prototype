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
console.log("Apply for Job");

//app.use(passport.initialize());

//Upload resume + cover letter

const storage = multer.diskStorage({
destination: (req, file, cb) => {
cb(null, `../public/uploads`);
},
filename: (req, file, cb) => {
cb(
null,
file.originalname + "-" + Date.now() + path.extname(file.originalname)
);
}
});
const upload = multer({ storage: storage });

app.post("/apply", function(req, res) {
console.log("Inside Apply Post Request");
console.log(req.body);
console.log("Hello" + req.body.jobId);
kafka.make_request(
"apply_topic",
{
//getJobID (Recruiter Model) + applicantID(Applicant Model)
applicationId: req.body.applicationId,
jobId: req.body.jobId,
fname: req.body.fname,
lname: req.body.lname,
address: req.body.address,
source: req.body.source,
diversity: req.body.diversity,
disability: req.body.disability
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
/*
app.post("/download/:file(*)", (req, res) => {
console.log("Inside download file");
console.log(req.params);
var file = req.params.file;
var fileLocation = path.join(__dirname + "/uploads", file);
var img = fs.readFileSync(fileLocation);
var base64img = new Buffer(img).toString("base64");
res.writeHead(200, { "Content-Type": "image/jpg" });
res.end(base64img);
});*/
module.exports = app;