// const express = require("express");
// const app = express();
// var morgan = require("morgan");
// const multer = require("multer");
// const uuidv4 = require("uuid/v4");
// const path = require("path");
// const fs = require("fs");
// const config = require("../../configDB/settings");
// const jwt = require("jsonwebtoken");
// const passport = require("passport");
// app.use(morgan("dev"));
// var kafka = require("../../kafka/client");
// console.log("Inside Job Details");

// app.get("/jobDetails/:jobId", function(req, res) {
// console.log("Inside Job Details Display Get Request");
// console.log("Req Body : ", req.body);
// console.log("Req Params : ", req.params);
// kafka.make_request(
// "jobDetails_topic",
// {
// jobId: req.params.jobId
// },
// function(err, result) {
// console.log("in result");
// // console.log(res, err);
// if (err) {
// console.log("400");
// res.sendStatus(400).end();
// } else {
// if (result.code == 200) {
// // console.log("Result backend" + result);
// console.log("200");
// res.writeHead(200, {
// "Content-Type": "application/json"
// });
// //console.log(JSON.stringify(result.value));
// res.end(JSON.stringify(result.value));
//  
// // done(null, { results: results.value });
// } else if (result.code == 401) {
// res.json({
// success: false,
// code: result.code
// });
// console.log(
// "Job with Job Id: " + req.params.jobId + " could not be found"
// );
// //done(null, false, { message: results.value });
// }
// }
// }
// );
// });
// module.exports = app;

// // const express = require("express");
// // const app = express();
// // var morgan = require("morgan");
// // const multer = require("multer");
// // const uuidv4 = require("uuid/v4");
// // const path = require("path");
// // const fs = require("fs");
// // const config = require("../../configDB/settings");
// // const jwt = require("jsonwebtoken");
// // const passport = require("passport");
// // app.use(morgan("dev"));
// // var kafka = require("../../kafka/client");
// // const responseTime = require("response-time");
// // const redis = require("redis");

// // const client = redis.createClient();

// // client.on("connect", function() {
// //   console.log("Redis client connected");
// // });

// // client.on("error", err => {
// //   console.log("Error " + err);
// // });

// // app.use(
// //   responseTime(function(req, res, time) {
// //     res.header("X-Response-Time", time);
// //   })
// // );

// // app.get("/jobDetails/:jobId", function(req, res) {
// //   console.log("Inside Job Details Display Get Request");
// //   console.log("Req Body : ", req.body);
// //   console.log("Req Params : ", req.params);
// //   let cachedQ = req.originalUrl;

// //   return client.get(cachedQ, (error, resultR) => {
// //     if (resultR) {
// //       var resultJson = JSON.parse(resultR);
// //       console.log("Is this working? redis of get job details ", resultJson);
// //       return res.status(200).json(resultJson.value);
// //     } else {
// //       kafka.make_request(
// //         "jobDetails_topic",
// //         {
// //           jobId: req.params.jobId
// //         },
// //         function(err, result) {
// //           console.log("in result");
// //           // console.log(res, err);
// //           if (err) {
// //             console.log("400");
// //             res.sendStatus(400).end();
// //           } else {
// //             if (result.code == 200) {
// //               var responseJson = result.value;
// //               console.log("200");
// //               client.setex(
// //                 cachedQ,
// //                 3600,
// //                 JSON.stringify({ source: "Redis Cache", ...responseJson })
// //               );
// //               res.writeHead(200, {
// //                 "Content-Type": "application/json"
// //               });

// //               res.end(JSON.stringify(result.value));

// //               // done(null, { results: results.value });
// //             } else if (result.code == 401) {
// //               res.json({
// //                 success: false,
// //                 code: result.code
// //               });
// //               console.log(
// //                 "Job with Job Id: " + req.params.jobId + " could not be found"
// //               );
// //               //done(null, false, { message: results.value });
// //             }
// //           }
// //         }
// //       );
// //     }
// //   });
// // });
// // module.exports = app;



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
const responseTime = require("response-time");
const redis = require("redis");

const client = redis.createClient();

client.on("connect", function() {
  console.log("Redis client connected");
});

client.on("error", err => {
  console.log("Error " + err);
});

app.use(
  responseTime(function(req, res, time) {
    res.header("X-Response-Time", time);
  })
);

app.get("/jobDetails/:jobId", function(req, res) {
  console.log("Inside Job Details Display Get Request");
  console.log("Req Body : ", req.body);
  console.log("Req Params : ", req.params);
  let cachedQ = req.originalUrl;

  return client.get(cachedQ, (error, resultR) => {
    if (resultR) {
      var resultJson = JSON.parse(resultR);
      console.log("Is this working? redis of get job details ", resultJson);

      kafka.make_request(
        "jobDetails_topic",
        {
          jobId: req.params.jobId
        },
        function(err, result) {
          console.log("in result");
          // console.log(res, err);
          if (err) {
            console.log("400");
           // res.sendStatus(400).end();
          } else {
            if (result.code == 200) {
              var responseJson = result.value;
              console.log("200",result);
              client.setex(
                cachedQ,
                3600,
                JSON.stringify({ source: "Redis Cache", ...responseJson })
              );

             // res.end(JSON.stringify(result.value));

              // done(null, { results: results.value });
            } else if (result.code == 401) {
              res.json({
                success: false,
                code: result.code
              });
              console.log(
                "Job with Job Id: " + req.params.jobId + " could not be found"
              );
              //done(null, false, { message: results.value });
            }
          }
        }
      );

      return res.status(200).json(resultJson);
    } else {
      kafka.make_request(
        "jobDetails_topic",
        {
          jobId: req.params.jobId
        },
        function(err, result) {
          console.log("in result");
          // console.log(res, err);
          if (err) {
            console.log("400");
            res.sendStatus(400).end();
          } else {
            if (result.code == 200) {
              var responseJson = result.value;
              console.log("200");
              client.setex(
                cachedQ,
                3600,
                JSON.stringify({ source: "Redis Cache", ...responseJson })
              );
              res.writeHead(200, {
                "Content-Type": "application/json"
              });

              res.end(JSON.stringify(result.value));

              // done(null, { results: results.value });
            } else if (result.code == 401) {
              res.json({
                success: false,
                code: result.code
              });
              console.log(
                "Job with Job Id: " + req.params.jobId + " could not be found"
              );
              //done(null, false, { message: results.value });
            }
          }
        }
      );
    }
  });
});
module.exports = app;