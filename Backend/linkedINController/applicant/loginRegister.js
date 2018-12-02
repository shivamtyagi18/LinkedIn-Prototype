const express = require("express");
const app = express();
var morgan = require("morgan");
const pool = require("../../configDB/db");
var mysql = require("mysql");
const multer = require("multer");
const uuidv4 = require("uuid/v4");
const path = require("path");
const fs = require("fs");
var config = require("../../configDB/settings");
const jwt = require("jsonwebtoken");
const passport = require("passport");
app.use(morgan("dev"));
var kafka = require("../../kafka/client");
console.log("here");
app.use(passport.initialize());

// Bring in defined Passport Strategy
require("../../configDB/passport")(passport);
var requireAuth = passport.authenticate("jwt", { session: false });

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, `../homeaway-frontend/src/components/uploads`);
//   },
//   filename: (req, file, cb) => {
//     //const newFilename = `${req.body.description}${path.extname(file.originalname)}`;
//     const newFilename = `${req.body.description}`;
//     cb(null, newFilename);
//   }
// });

// const upload = multer({ storage });

app.post("/loginApplicant", function(req, res) {
  console.log("Inside Login Post Request");
  console.log(req.body);
  kafka.make_request(
    "login_topic",
    { email: req.body.email, password: req.body.password },
    function(err, result) {
      console.log("in result");
      // console.log(res, err);
      if (err) {
        res.sendStatus(400).end();
      } else {
        if (result.code == 200) {
          //console.log(result);
          const payload = {
            email: result.value.email
          };
          jwt.sign(
            payload,
            config.secret,
            { expiresIn: 8000 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token,
                email: result.value.email,
                firstName: result.value.firstName,
                type: result.value.type,
                code: result.code
              });
            }
          );

          console.log("successful login");
          // done(null, { results: results.value });
        } else if (result.code == 401) {
          res.json({
            success: false,
            code: result.code
          });
          console.log("Password does not match");
          //done(null, false, { message: results.value });
        } else if (result.code == 404) {
          res.json({
            success: false,
            code: result.code
          });
          console.log("User does not exist");
        }
      }
    }
  );
});


app.post("/registerApplicant", function(req, res) {
  console.log("Inside Register Applicant Post Request");
  console.log(req.body);
  kafka.make_request(
    "registerapplicant_topic",
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      type: req.body.type,
      email: req.body.email,
      password: req.body.password
    },
    function(err, result) {
      console.log("in result");
      // console.log(res, err);
      if (err) {
        res.sendStatus(400).end();
      } else {
        if (result.code == 200) {
          console.log(result);
          res.json({
            success: true,
            code: result.code
          });
          console.log("successful user registered");
          // done(null, { results: results.value });
        } else if (result.code == 402) {
          res.json({
            success: false,
            code: result.code
          });
          console.log("User already exist");
        }
      }
    }
  );
});

module.exports = app;
