const express = require("express");
var kafka = require("../../kafka/client");
var app = express.Router();

var JobStore = [];
var UserStore = [];
app.post("/jobsearch", function(req, res) {
  console.log("Inside search post request");
  console.log("Search Criteria from user", req.body);
  console.log("check authenticastion", req.headers["authorization"]);

  kafka.make_request(
    "jobsearch_topic",
    {
      location: req.body.location,
      jobTitle: req.body.jobTitle
    },
    function(err, result) {
      console.log("in result");
      // console.log(res, err);
      if (err) {
        res.sendStatus(400).end();
      } else {
        if (result.code == 200) {
          console.log("result is ", result);
          JobStore = [];

          for (var i = 0; i < result.value.length; i++) {
            JobStore[i] = result.value[i];
          }

          // console.log("property store:", PropertyStore);
           //res.redirect("/applicant/search/searchresult");
           res.end(JSON.stringify(JobStore));
          console.log("redirect successful");
          // done(null, { results: results.value });
        } else {
          console.log("fail");
          //done(null, false, { message: results.value });
        }
      }
    }
  );
});

app.post("/usersearch", function(req, res) {
  console.log("Inside user search post request");
  console.log("Search Criteria from user", req.body);
  console.log("check authenticastion", req.headers["authorization"]);

  kafka.make_request(
    "usersearch_topic",
    {
      user: req.body.User,
    },
    function(err, result) {
      console.log("in result");
      // console.log(res, err);
      if (err) {
        res.sendStatus(400).end();
      } else {
        if (result.code == 200) {
          console.log("result is ", result);
          UserStore = [];

          for (var i = 0; i < result.value.length; i++) {
            UserStore[i] = result.value[i];
          }

          // console.log("property store:", PropertyStore);
           //res.redirect("/applicant/search/searchresult");
           res.end(JSON.stringify(UserStore));
          console.log("redirect successful");
          // done(null, { results: results.value });
        } else {
          console.log("fail");
          //done(null, false, { message: results.value });
        }
      }
    }
  );
});

app.get("/fetchJobs", function(req, res) {
  console.log("Results found");
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.end(JSON.stringify(JobStore));
});

app.get("/fetchUsers", function(req, res) {
  console.log("Results found");
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.end(JSON.stringify(UserStore));
});


module.exports = app;
