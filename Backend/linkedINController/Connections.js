const express = require("express");
var kafka = require("../kafka/client");
var app = express.Router();

app.post("/request", function(req, res) {
  console.log("Inside Connection Request Post Request");
  //console.log("Req Body : ", username + "password : ",password);
  console.log("Req Body : ", req.body);
  kafka.make_request("connrequest_topic", req.body, function(err, result) {
    console.log("in result");
    // console.log(res, err);
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
        console.log("fail");
        //done(null, false, { message: results.value });
      }
    }
  });
});

app.post("/accept", function(req, res) {
  console.log("Inside Connection accept Post Request");
  //console.log("Req Body : ", username + "password : ",password);
  console.log("Req Body : ", req.body);
  kafka.make_request("connectionaccept_topic", req.body, function(err, result) {
    console.log("in result");
    // console.log(res, err);
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
        console.log("fail");
        //done(null, false, { message: results.value });
      }
    }
  });
});

app.get("/viewConnections/:email", function(req, res) {
  console.log("Inside view connections get Request");
  console.log("Req Params : ", req.params);
  kafka.make_request(
    "viewconnections_topic",
    {
      email: req.params.email
    },
    function(err, result) {
      console.log("in result");
      // console.log(res, err);
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
          console.log("fail");
          //done(null, false, { message: results.value });
        }
      }
    }
  );
});

app.get("/viewConnectionRequests/:email", function(req, res) {
  console.log("Inside view connections requests get Request");
  console.log("Req Params : ", req.params);
  kafka.make_request(
    "viewconnectionrequests_topic",
    {
      email: req.params.email
    },
    function(err, result) {
      console.log("in result");
      // console.log(res, err);
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
          console.log("fail");
          //done(null, false, { message: results.value });
        }
      }
    }
  );
});

module.exports = app;
