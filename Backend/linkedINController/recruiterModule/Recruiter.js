// const express = require("express");
// const app = express();
// var morgan = require("morgan");

// var mysql = require("mysql");
// const multer = require("multer");
// const uuidv4 = require("uuid/v4");
// const path = require("path");
// const fs = require("fs");
// const config = require("../../configDB/settings");
// const jwt = require("jsonwebtoken");
// const passport = require("passport");
// app.use(morgan("dev"));
// var kafka = require("../../kafka/client");
// console.log("here");
// app.use(passport.initialize());

// // Bring in defined Passport Strategy
// //require("../configDB/passport")(passport);
// //var requireAuth = passport.authenticate("jwt", { session: false });

// var aws = require("aws-sdk"),
//  bodyParser = require("body-parser"),
//  multerS3 = require("multer-s3");


// aws.config.update({
//   secretAccessKey: '',

//   accessKeyId: '',
 
//   region: 'us-east-2',
//   ACL:'public-read'

// });
// s3 = new aws.S3();
// var upload = multer({
//   storage: multerS3({
//       s3: s3,
//       bucket: 'linkedin-images',
//       key: function (req, file, cb) {
//           console.log("file---",file);
//           console.log(req.body);
//           console.log("req----",req.body.companyLogo);
//           var name = req.body.companyLogo
//          // console.log("filename is",name)
//           //cb(null, file.originalname); //use Date.now() for unique file keys
//           cb(null,name); //use Date.now() for unique file keys
//       }
//   })
// });

// app.post("/addLogo", upload.array("selectedFile", 4), (req, res) => {
//   //console.log("Req : ",req);
//   console.log("Res : Darryl", req.body);
//   res.send();
//  });

// app.post("/addRecruiter", function(req, res) {
//   console.log("Inside Add recruiter Post Request");
//   console.log(req.body);
//   kafka.make_request(
//     "addRecruiter_topic",
//     {
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       password: req.body.password,
//       type : "recruiter"
//     },
//     function(err, result) {
//       console.log("in result");
//       // console.log(res, err);
//       if (err) {
//         res.sendStatus(400).end();
//       } else {
//         if (result.code == 200) {
//           console.log(result);
//           res.json({
//             success: true,
//             code: result.code
//           });
//           console.log("Successful Recruiter registered");
//           // done(null, { results: results.value });
//         } else if (result.code == 404) {
//           res.json({
//             success: false,
//             code: result.code
//           });
//           console.log("Recruiter already exist");
//         }
//       }
//     }
//   );
// });


// app.post("/loginRecruiter", function(req, res) {
//   console.log("Inside Recruiter Login Post Request");
//   console.log(req.body);
//   kafka.make_request(
//     "loginRecruiter_topic",
//     { email: req.body.email, password: req.body.password },
//     function(err, result) {
//       console.log("Result is", result);
//       // console.log(res, err);
//       if (err) {
//         res.sendStatus(400).end();
//       } else {
//         if (result.code == 200) {
//           //console.log(result);
//           const payload = {
//             email: result.value.email
//           };
//           jwt.sign(
//             payload,
//             config.secret,
//             { expiresIn: 8000 },
//             (err, token) => {
//               res.json({
//                 success: true,
//                 token: "Bearer " + token,
//                 email: result.value.email,
//                 firstName: result.value.firstName,
//                 type:result.value.type,
//                 code: result.code
//               });
//             }
//           );

//           console.log("successful login");
//           // done(null, { results: results.value });
//         } else if (result.code == 401) {
//           res.json({
//             success: false,
//             code: result.code
//           });
//           console.log("Password does not match");
//           //done(null, false, { message: results.value });
//         } else if (result.code == 404) {
//           res.json({
//             success: false,
//             code: result.code
//           });
//           console.log("Recruiter does not exist");
//         }
//       }
//     }
//   );
// });


// app.post("/searchPostedJob", function(req, res) {
//   console.log("Inside search post request");
//   console.log("Search Criteria from recruiter", req.body);
//   console.log("check authenticastion", req.headers["authorization"]);

//   kafka.make_request(
//     "searchPostedJob_topic",
//     {
//       jobTitle : req.body.jobTitle,
//       companyName : req.body.companyName
//     },
//     function(err, result) {
//       console.log("in result");
//       // console.log(res, err);
//       if (err) {
//         res.sendStatus(400).end();
//       } else {
//         if (result.code == 200) {
//           console.log("result is ", result);
//           JobPosted = [];

//           for (var i = 0; i < result.value.length; i++) {
//             JobPosted[i] = result.value[i];
//           }

//           // console.log("property store:", PropertyStore);
//            res.redirect("/recruiter/searchresult");
//           console.log("redirect successful");
//           // done(null, { results: results.value });
//         } else {
//           console.log("fail");
//           //done(null, false, { message: results.value });
//         }
//       }
//     }
//   );
// });

// app.get("/searchresult", function(req, res) {
//   console.log("Results found");
//   res.writeHead(200, {
//     "Content-Type": "application/json"
//   });
//   res.end(JSON.stringify(JobPosted));
// });


// app.get("/recruiterDisplay/:email", function(req, res) {
//   console.log("Inside Recruiter Display Post Request");
//   console.log("Req Body : ", req.body);
//   console.log("Req Params : ", req.params);
//   kafka.make_request(
//     "recruiterDisplay_topic",
//     {
//       email: req.params.email
//     },
//     function(err, result) {
//       console.log("in result");
//       // console.log(res, err);
//       if (err) {
//         res.sendStatus(400).end();
//       } else {
//         if (result.code == 200) {
//           console.log(result);
//           res.json({
//             success: true,
//             value: result.value,
//             code: result.code
//           })

//           // done(null, { results: results.value });
//         } else if (result.code == 401) {
//           res.json({
//             success: false,
//             code: result.code
//           });
//           console.log("Recruiter does not exist");
//           //done(null, false, { message: results.value });
//         }
//       }
//     }
//   );
// });


// app.get("/displayJob/:jobId/:email", function(req, res) {
//   console.log("Inside Job Display Get Request");
//   console.log("Req Body : ", req.body);
//   console.log("Req Params : ", req.params);
//   kafka.make_request(
//     "jobDisplay_topic",
//     {
//       jobId: req.params.jobId,
//       email: req.params.email
//     },
//     function(err, result) {
//       console.log("in result");
//       // console.log(res, err);
//       if (err) {
//         res.sendStatus(400).end();
//       } else {
//         if (result.code == 200) {
//           console.log(result);
//           res.json({
//             success: true,
//             value: result.value,
//             code: result.code
//           })

//           // done(null, { results: results.value });
//         } else if (result.code == 401) {
//           res.json({
//             success: false,
//             code: result.code
//           });
//           console.log("Recruiter does not exist");
//           //done(null, false, { message: results.value });
//         }
//       }
//     }
//   );
// });

// app.put("/modifyRecruiterAccount/:email", function(req, res) {
//   console.log("Inside Recruiter Update Post Request");
//   //console.log("Req Body : ", username + "password : ",password);
//   console.log("Req Body : ", req.body);
//   console.log("Req Params : ", req.params);
//   kafka.make_request(
//     "modifyRecruiterAccount_topic",
//     {
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       address: req.body.address,
//       city: req.body.city,
//       state: req.body.state,
//       zipcode: req.body.zipCode,
//       phoneNumber: req.body.phoneNumber,
//       Email:req.params.email,
//       email: req.body.email,
//       companyName: req.body.company
//     },
//     function(err, result) {
//       console.log("in result");
//       // console.log(res, err);
//       if (err) {
//         res.sendStatus(400).end();
//       } else {
//         if (result.code == 200) {
//           console.log(result);
//           res.writeHead(200, {
//             "Content-Type": "application/json"
//           });
//           console.log(JSON.stringify(result.value));
//           res.end(JSON.stringify(result.value));

//           // done(null, { results: results.value });
//         } else {
//           console.log("fail");
//           //done(null, false, { message: results.value });
//         }
//       }
//     }
//   );
// });


// app.post("/addJob", function(req, res) {
//   console.log("Inside Add Job");
//   console.log("Req Body : ", req.body);

//   kafka.make_request(
//     "addJob_topic",
//     {   email:req.body.recruiterEmail,
//         jobId: req.body.jobId,
//         jobTitle: req.body.jobTitle,
//         jobDescription: req.body.jobDescription,
//         industry: req.body.industry,
//         employmentType: req.body.employmentType,
//         location: req.body.location,
//         companyName:req.body.companyName,
//         jobFunction: req.body.jobFunction,
//         companyLogo: req.body.companyLogo,
//         jobOpenings:req.body.jobOpenings,
//         postedOn: req.body.postedOn,
//         easyApply: req.body.easyApply
//     },
//     function(err, result) {
//       console.log("in result");
//       // console.log(res, err);
//       if (err) {
//         res.sendStatus(400).end();
//       } else {
//         if (result.code == 200) {
//           console.log(result);
//           res.code = "200";
//           res.value = result;
//           res.end();
//           console.log("job successfuly added");
//           // done(null, { results: results.value });
//         } else {
//           console.log("failure adding job");
//           //done(null, false, { message: results.value });
//         }
//       }
//     }
//   );
// });

// app.get("/getPostedJob/:email", function(req, res) {
//   console.log("Inside Getting Jobs Get Request");
//   console.log("Req Body : ", req.body);
//   console.log("Req Params : ", req.params);
//   kafka.make_request(
//     "getJobs_topic",
//     {
//       email: req.params.email
//     },
//     function(err, result) {
//       console.log("in getJobs result");
//       // console.log(res, err);
//       if (err) {
//         res.sendStatus(400).end();
//       } else {
//         if (result.code == 200) {
//           console.log(result);
//           res.writeHead(200, {
//             "Content-Type": "application/json"
//           });
//           console.log(JSON.stringify(result.value));
//           res.end(JSON.stringify(result.value));
//           // done(null, { results: results.value });
//         } else {
//           console.log("fail cause status code not 200 and it is", result.code);
//           //done(null, false, { message: results.value });
//         }
//       }
//     }
//   );
//  });


 
//  app.put("/editJob/:jobId/:email", function(req, res) {
//   console.log("Inside Edit Job Update Put Request");
//   //console.log("Req Body : ", username + "password : ",password);
//   console.log("Req Body : ", req.body);
//   console.log("Req Params : ", req.params);
//   kafka.make_request(
//     "editJob_topic",
//     {
//       jobId: req.params.jobId,
//       email:req.params.email,
//       jobTitle: req.body.jobTitle,
//       jobDescription: req.body.jobDescription,
//       industry: req.body.industry,
//       employmentType: req.body.employmentType,
//       jobFunction: req.body.jobFunction,
//       jobOpenings:req.body.jobOpenings
//     },
//     function(err, result) {
//       console.log("in result");
//       // console.log(res, err);
//       if (err) {
//         res.sendStatus(400).end();
//       } else {
//         if (result.code == 200) {
//           console.log(result);
//           res.writeHead(200, {
//             "Content-Type": "application/json"
//           });
//           console.log(JSON.stringify(result.value));
//           res.end(JSON.stringify(result.value));
 
//           // done(null, { results: results.value });
//         } else {
//           console.log("fail");
//           //done(null, false, { message: results.value });
//         }
//       }
//     }
//   );
//  });

// module.exports = app;













const express = require("express");
const app = express();
var morgan = require("morgan");
var validatePostJobFields = require("../../Validations/postJob");

var mysql = require("mysql");
const multer = require("multer");
const uuidv4 = require("uuid/v4");
const path = require("path");
const fs = require("fs");
const config = require("../../configDB/settings");
const jwt = require("jsonwebtoken");
const passport = require("passport");
app.use(morgan("dev"));
var kafka = require("../../kafka/client");
console.log("here");
app.use(passport.initialize());

// Bring in defined Passport Strategy
//require("../configDB/passport")(passport);
//var requireAuth = passport.authenticate("jwt", { session: false });

var aws = require("aws-sdk"),
  bodyParser = require("body-parser"),
  multerS3 = require("multer-s3");

aws.config.update({
  secretAccessKey: "",
  accessKeyId: "",
  region: "us-east-2",
  ACL: "public-read"
});
s3 = new aws.S3();
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "linkedin-shivam",
    key: function(req, file, cb) {
      console.log("S3", file);
      cb(null, req.body.companyLogo); //use Date.now() for unique file keys
    }
  })
});

app.post("/addLogo", upload.array("selectedFile", 4), (req, res) => {
  //console.log("Req : ",req);
  console.log("Res : Darryl", req.body);
  res.send();
});

app.post("/addRecruiter", function(req, res) {
  console.log("Inside Add recruiter Post Request");
  console.log(req.body);
  kafka.make_request(
    "addRecruiter_topic",
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      type: "recruiter"
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
          console.log("Successful Recruiter registered");
          // done(null, { results: results.value });
        } else if (result.code == 404) {
          res.json({
            success: false,
            code: result.code
          });
          console.log("Recruiter already exist");
        }
      }
    }
  );
});

app.post("/loginRecruiter", function(req, res) {
  console.log("Inside Recruiter Login Post Request");
  console.log(req.body);
  kafka.make_request(
    "loginRecruiter_topic",
    { email: req.body.email, password: req.body.password },
    function(err, result) {
      console.log("Result is", result);
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
          console.log("Recruiter does not exist");
        }
      }
    }
  );
});

app.post("/searchPostedJob", function(req, res) {
  console.log("Inside search post request");
  console.log("Search Criteria from recruiter", req.body);
  console.log("check authenticastion", req.headers["authorization"]);

  kafka.make_request(
    "searchPostedJob_topic",
    {
      jobTitle: req.body.jobTitle,
      companyName: req.body.companyName
    },
    function(err, result) {
      console.log("in result");
      // console.log(res, err);
      if (err) {
        res.sendStatus(400).end();
      } else {
        if (result.code == 200) {
          console.log("result is ", result);
          JobPosted = [];

          for (var i = 0; i < result.value.length; i++) {
            JobPosted[i] = result.value[i];
          }

          // console.log("property store:", PropertyStore);
          res.redirect("/recruiter/searchresult");
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

app.get("/searchresult", function(req, res) {
  console.log("Results found");
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.end(JSON.stringify(JobPosted));
});

app.get("/recruiterDisplay/:email", function(req, res) {
  console.log("Inside Recruiter Display Post Request");
  console.log("Req Body : ", req.body);
  console.log("Req Params : ", req.params);
  kafka.make_request(
    "recruiterDisplay_topic",
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
          res.json({
            success: true,
            value: result.value,
            code: result.code
          });

          // done(null, { results: results.value });
        } else if (result.code == 401) {
          res.json({
            success: false,
            code: result.code
          });
          console.log("Recruiter does not exist");
          //done(null, false, { message: results.value });
        }
      }
    }
  );
});

app.get("/displayJob/:jobId/:email", function(req, res) {
  console.log("Inside Job Display Get Request");
  console.log("Req Body : ", req.body);
  console.log("Req Params : ", req.params);
  kafka.make_request(
    "jobDisplay_topic",
    {
      jobId: req.params.jobId,
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
          res.json({
            success: true,
            value: result.value,
            code: result.code
          });

          // done(null, { results: results.value });
        } else if (result.code == 401) {
          res.json({
            success: false,
            code: result.code
          });
          console.log("Recruiter does not exist");
          //done(null, false, { message: results.value });
        }
      }
    }
  );
});

app.put("/modifyRecruiterAccount/:email", function(req, res) {
  console.log("Inside Recruiter Update Post Request");
  //console.log("Req Body : ", username + "password : ",password);
  console.log("Req Body : ", req.body);
  console.log("Req Params : ", req.params);
  kafka.make_request(
    "modifyRecruiterAccount_topic",
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipCode,
      phoneNumber: req.body.phoneNumber,
      Email: req.params.email,
      email: req.body.email,
      companyName: req.body.company
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

app.post("/addJob", function(req, res) {
  console.log("Inside Add Job");
  console.log("Req Body : ", req.body);

  const { errors, isValid } = validatePostJobFields(req.body);

  if (!isValid) {
    return res.status(202).json(errors);
  }

  kafka.make_request(
    "addJob_topic",
    {
      email: req.body.recruiterEmail,
      jobId: req.body.jobId,
      jobTitle: req.body.jobTitle,
      jobDescription: req.body.jobDescription,
      industry: req.body.industry,
      employmentType: req.body.employmentType,
      location: req.body.location,
      companyName: req.body.companyName,
      jobFunction: req.body.jobFunction,
      companyLogo: req.body.companyLogo,
      jobOpenings: req.body.jobOpenings,
      postedOn: req.body.postedOn,
      easyApply: req.body.easyApply
    },
    function(err, result) {
      console.log("in result");
      // console.log(res, err);
      if (err) {
        res.sendStatus(400).end();
      } else {
        if (result.code == 200) {
          console.log(result);
          res.code = "200";
          res.value = result;
          res.end();
          console.log("job successfuly added");
          // done(null, { results: results.value });
        } else if (result.code == 202) {
          console.log("Job Id already exists");
          errors.jobId = "Job Id already exists";
          return res.status(202).json(errors);
        }
      }
    }
  );
});

app.get("/getPostedJob/:email", function(req, res) {
  console.log("Inside Getting Jobs Get Request");
  console.log("Req Body : ", req.body);
  console.log("Req Params : ", req.params);
  kafka.make_request(
    "getJobs_topic",
    {
      email: req.params.email
    },
    function(err, result) {
      console.log("in getJobs result");
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
          console.log("fail cause status code not 200 and it is", result.code);
          //done(null, false, { message: results.value });
        }
      }
    }
  );
});

app.put("/editJob/:jobId/:email", function(req, res) {
  console.log("Inside Edit Job Update Put Request");
  //console.log("Req Body : ", username + "password : ",password);
  console.log("Req Body : ", req.body);
  console.log("Req Params : ", req.params);
  kafka.make_request(
    "editJob_topic",
    {
      jobId: req.params.jobId,
      email: req.params.email,
      jobTitle: req.body.jobTitle,
      jobDescription: req.body.jobDescription,
      industry: req.body.industry,
      employmentType: req.body.employmentType,
      jobFunction: req.body.jobFunction,
      jobOpenings: req.body.jobOpenings
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