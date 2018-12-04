// const express = require("express");
// var kafka = require("../../kafka/client");
// var app = express.Router();

// app.post("/", function(req, res) {
//   console.log("Inside Save Job Post Request");
//   //console.log("Req Body : ", username + "password : ",password);
//   console.log("Req Body : ", req.body);
//   kafka.make_request("savejob_topic", req.body, function(err, result) {
//     console.log("in result");
//     // console.log(res, err);
//     if (err) {
//       res.sendStatus(400).end();
//     } else {
//       if (result.code == 200) {
//         console.log(result);
//         res.writeHead(200, {
//           "Content-Type": "application/json"
//         });
//         console.log(JSON.stringify(result.value));
//         res.end(JSON.stringify(result.value));

//         // done(null, { results: results.value });
//       } else {
//         console.log("fail");
//         //done(null, false, { message: results.value });
//       }
//     }
//   });
// });

// module.exports = app;
const express = require("express");
var kafka = require("../../kafka/client");
var app = express.Router();

app.post("/", function(req, res) {
  console.log("Inside Save Job Post Request");
  //console.log("Req Body : ", username + "password : ",password);
  console.log("Req Body : ", req.body);
  kafka.make_request("savejob_topic", req.body, function(err, result) {
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
      } else if (result.code == 202) {
        console.log("Job Already Saved");
        return res.status(202).end();
      }
    }
  });
});

module.exports = app;