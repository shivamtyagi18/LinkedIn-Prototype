var express = require("express");
var app = express();
//var morgan = require("morgan");
var passport = require("passport");
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var cors = require("cors");
const routes = require("./routeHandler/routes");
var { mongoose } = require("./configDB/db");
const multer = require("multer");

//----------------------------------------S3----------------------------------------------
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://s3.us-east-2.amazonaws.com/linkedin-images"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

/* Very important syntax. USes Amazon S3 storage for images and files(cloud tech)
var aws = require('aws-sdk'),
    bodyParser = require('body-parser'),
    multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: '',
  
    accessKeyId: '',
   
    region: 'us-east-2',
    ACL:'public-read'

});

var app = express(),
    s3 = new aws.S3();

app.use(bodyParser.json());

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'linkedin-images',
        key: function (req, file, cb) {
            console.log("file---",file);
            console.log("req----",req.body.applicantEmail);
            var name = file.fieldname+req.body.applicantEmail
           // console.log("filename is",name)
            //cb(null, file.originalname); //use Date.now() for unique file keys
            cb(null,name); //use Date.now() for unique file keys
        }
    })
});

*/

//---------------------------------------------------------------------------------------

//require("./configDB/passport")(passport);

//use cors to allow cross origin resource sharing
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(passport.initialize());
app.use(passport.session());

//use express session to maintain session data
app.use(
  session({
    secret: "cmpe273_kafka_passport_mongo",
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000, // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000
  })
);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//Allow Access Control

//Leaving some sample routes for reference. Compare with project to understand
//app.use("/recruiter", routes.Recruiter);
//app.use("/applicant", routes.User);
//app.use("/applicant/search", routes.Search);

//Uses Multer. Example. Has to be updated for SmartAgCloud appplication
//app.post("/resume", upload.array("resume", 4), (req, res) => {
//console.log("Req : ",req);
//console.log("Resume Image : ", req.body);
//res.send();
//});

app.listen(3001);
console.log("Server Listening on port 3001");
