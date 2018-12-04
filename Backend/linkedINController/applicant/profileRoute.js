


// const express = require("express");
// var kafka = require("../../kafka/client");
// var app = express.Router();

// const multer = require("multer");



// var aws = require("aws-sdk"),
//   bodyParser = require("body-parser"),
//   multerS3 = require("multer-s3");

// aws.config.update({
//   secretAccessKey: "",
//   accessKeyId: "",
//   region: "us-east-2",
//   ACL: "public-read"
// });

// var app = express(),
//   s3 = new aws.S3();

// app.use(bodyParser.json());

// var upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: "linkedin-images",
//     key: function(req, file, cb) {
//       console.log("file---", file);
//       console.log("req----", req.body);
//       var name = "image" + req.body.image;

//       // console.log("filename is",name)
//       //cb(null, file.originalname); //use Date.now() for unique file keys
//       cb(null, name); //use Date.now() for unique file keys
//     }
//   })
// });

// app.get("/userDisplay/:email", function(req, res) {
//   console.log("Inside User Display Post Request");
//   console.log("Req Body : ", req.body);
//   console.log("Req Params : ", req.params);
//   kafka.make_request(
//     "userdisplay_topic",
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

// app.put("/userUpdate/:email", function(req, res) {
//   console.log("Inside User Update Post Request");
//   //console.log("Req Body : ", username + "password : ",password);

//   console.log("Req Params : ", req.params);
//   kafka.make_request(
//     "userupdate_topic",
//     {
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       phone: req.body.phone,
//       address: req.body.address,
//       city: req.body.city,
//       state: req.body.state,
//       zipcode: req.body.zipcode,
//       country: req.body.country,
//       experience: req.body.experience,
//       education: req.body.education,
//       skills: req.body.skills,
//       profileSummary: req.body.profileSummary,
//       resume: req.body.resume,
//       gender: req.body.gender,
//       img: req.body.image,
//       resume: req.body.resume,
//       headline: req.body.headline,
//       industry: req.body.industry,
//       locationNearby: req.body.locationNearby,
//       phoneType: req.body.phoneType,
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

// app.post("/updatePassword", function(req, res) {
//   console.log("Inside User Update Post Request");
//   console.log("Req Body : ", req.body);
//   kafka.make_request(
//     "updatePassword_topic",
//     {
//       email: req.body.email,
//       currentPassword: req.body.currentPassword,
//       confirmPassword: req.body.confirmPassword
//     },
//     function(err, result) {
//       console.log("in kafka passwordupdate result");
//       console.log(result.code);
//       if (err) {
//         console.log("Function not executed!");
//       } else {
//         if (result.code == 200) {
//           console.log("inside passwordupdate branch", result.value);
//           res.json({
//             success: true,
//             code: result.code
//           });
//         } else if (result.code == 401) {
//           res.value = "Password not matching";
//           res.json({
//             success: false,
//             code: result.code
//           });
//         }
//       }
//     }
//   );
// });

// app.post("/deleteAccount", function(req, res) {
//   console.log("Inside Account Delete Post Request");
//   console.log("Req Body : ", req.body);
//   kafka.make_request("deleteAccount_topic", { email: req.body.email }, function(
//     err,
//     result
//   ) {
//     if (err) {
//       res.sendStatus(400).end();
//     } else {
//       if (result.code == 200) {
//         console.log("inside delete account branch", result.value);
//         res
//           .status(200)
//           .json(result.value)
//           .end("Account Deleted");
//       } else {
//         res.value = "An Error occured";
//         console.log(res.value);
//         res.sendStatus(400).end();
//       }
//     }
//   });
// });

// app.post("/changePassword", function(req, res) {
//   console.log("Inside User Update Post Request");
//   console.log("Req Body : ", req.body);
//   kafka.make_request(
//     "changePassword",
//     {
//       email: req.body.email,
//       oldpassword: req.body.oldpassword,
//       confirmpassword: req.body.confirmpassword
//     },
//     function(err, result) {
//       console.log("in kafka passwordupdate result");
//       console.log(result.code);
//       if (err) {
//         console.log("Function not executed!");
//       } else {
//         if (result.code == 200) {
//           console.log("inside passwordupdate branch", result.value);
//           res.json({
//             success: true,
//             code: result.code
//           });
//         } else if (result.code == 401) {
//           res.value = "Password not matching";
//           res.json({
//             success: false,
//             code: result.code
//           });
//         }
//       }
//     }
//   );
// });

// app.get("/viewConnections/:email", function(req, res) {
//   console.log("Inside view connections get Request");
//   console.log("Req Params : ", req.params);
//   kafka.make_request(
//     "viewconnections_topic",
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
//           res.writeHead(200, {
//             "Content-Type": "application/json"
//           });
//           console.log(JSON.stringify(result.value));
//           res.end(JSON.stringify(result.value));

//           // done(null, { results: results.value });
//         } else if (result.code == 204) {
//           console.log(result);
//           res.writeHead(204, {
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

// app.get("/profileViews/:email", function(req, res) {
//   console.log("Inside view connections get Request");
//   console.log("Req Params : ", req.params);
//   kafka.make_request(
//     "profileviews_topic",
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
//           res.writeHead(200, {
//             "Content-Type": "application/json"
//           });
//           console.log(JSON.stringify("value", result.value));
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

// app.put("/clickCounts/:email", function(req, res) {
//   console.log("Inside Click Count Post Request");
//   console.log("Req Params : ", req.params);
//   kafka.make_request(
//     "clickcounts_topic",
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

// app.get("/getprofile/:email", function(req, res) {
//   console.log("Inside get profile get Request");
//   console.log("Req Params : ", req.params);
//   kafka.make_request(
//     "getprofile_topic",
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

// app.get("/savedetails", function(req, res) {
//   console.log("Inside save details post Request");
//   console.log("Req body : ", req.body);
//   kafka.make_request("savedetails_topic", req.body, function(err, result) {
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

// app.post("/messageFromSender", function(req, res) {
//   console.log("Inside Sendder message");
//   //console.log("Req Body : ", username + "password : ",password);
//   console.log("Req Body : ", req.body);
//   kafka.make_request(
//     "messageFromSender_topic",
//     {
//       senderemail: req.body.senderemail,
//       receiveremail: req.body.receiveremail,
//       message: req.body.message
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
//             code: result.code,
//             value: result.value
//           });
//           console.log("successful message registered");
//           // done(null, { results: results.value });
//         } else {
//           console.log("fail");
//           //done(null, false, { message: results.value });
//         }
//       }
//     }
//   );
// });

// app.post("/receiverInbox", function(req, res) {
//   console.log("Inside receiver inbox");
//   //console.log("Req Body : ", username + "password : ",password);
//   console.log("Req Body : ", req.body);
//   kafka.make_request(
//     "receiverinbox_topic",
//     {
//       receiveremail: req.body.receiveremail
//     },
//     function(err, result) {
//       console.log("in result");
//       // console.log(res, err);
//       if (err) {
//         res.sendStatus(400).end();
//       } else {
//         if (result.code == 200) {
//           console.log("Result is", result);
//           res.json({
//             success: true,
//             code: result.code,
//             value: result.value
//           });
//           console.log("successful message registered");
//           // done(null, { results: results.value });
//         } else {
//           console.log("fail");
//           //done(null, false, { message: results.value });
//         }
//       }
//     }
//   );
// });

// app.post("/profileImageUpload", upload.array("selectedFile", 4), (req, res) => {
//   //console.log("Req : ",req);
//   console.log("Res : Darryl", req.body);
//   res.send();
// });

// module.exports = app;

// const express = require("express");
// var kafka = require("../../kafka/client");
// var app = express.Router();

// // app.post("/converttravel", function(req, res) {
// //   console.log("Inside convert post request");
// //   //console.log(req.body.email);
// //   kafka.make_request(
// //     "converttravel_topic",
// //     {
// //       email: req.body.email
// //     },
// //     function(err, result) {
// //       console.log("in result");
// //       // console.log(res, err);
// //       if (err) {
// //         res.sendStatus(400).end();
// //       } else {
// //         if (result.code == 200) {
// //           // console.log(result);
// //           console.log("Type changed successfully");
// //           res.sendStatus(200).end();

// //           // done(null, { results: results.value });
// //         } else {
// //           console.log("fail");
// //           //done(null, false, { message: results.value });
// //         }
// //       }
// //     }
// //   );
// // });

// app.get("/userDisplay/:email", function(req, res) {
//   console.log("Inside User Display Post Request");
//   console.log("Req Body : ", req.body);
//   console.log("Req Params : ", req.params);
//   kafka.make_request(
//     "userdisplay_topic",
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

// app.put("/userUpdate/:email", function(req, res) {
//   console.log("Inside User Update Post Request");
//   //console.log("Req Body : ", username + "password : ",password);

//   console.log("Req Params : ", req.params);
//   kafka.make_request(
//     "userupdate_topic",
//     {
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       phone: req.body.phone,
//       address: req.body.address,
//       city: req.body.city,
//       state: req.body.state,
//       zipcode: req.body.zipcode,
//       country: req.body.country,
//       experience: req.body.experience,
//       education: req.body.education,
//       skills: req.body.skills,
//       profileSummary: req.body.profileSummary,
//       resume: req.body.resume,
//       gender: req.body.gender,
//       img: req.body.img,
//       headline: req.body.headline,
//       industry: req.body.industry,
//       locationNearby: req.body.locationNearby,
//       phoneType: req.body.phoneType,
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

// app.post("/updatePassword", function(req, res) {
//   console.log("Inside User Update Post Request");
//   console.log("Req Body : ", req.body);
//   kafka.make_request(
//     "updatePassword_topic",
//     {
//       email: req.body.email,
//       currentPassword: req.body.currentPassword,
//       confirmPassword: req.body.confirmPassword
//     },
//     function(err, result) {
//       console.log("in kafka passwordupdate result");
//       console.log(result.code);
//       if (err) {
//         console.log("Function not executed!");
//       } else {
//         if (result.code == 200) {
//           console.log("inside passwordupdate branch", result.value);
//           res.json({
//             success: true,
//             code: result.code
//           });
//         } else if (result.code == 401) {
//           res.value = "Password not matching";
//           res.json({
//             success: false,
//             code: result.code
//           });
//         }
//       }
//     }
//   );
// });

// app.post("/deleteAccount", function(req, res) {
//   console.log("Inside Account Delete Post Request");
//   console.log("Req Body : ", req.body);
//   kafka.make_request("deleteAccount_topic", { email: req.body.email }, function(
//     err,
//     result
//   ) {
//     if (err) {
//       res.sendStatus(400).end();
//     } else {
//       if (result.code == 200) {
//         console.log("inside delete account branch", result.value);
//         res
//           .status(200)
//           .json(result.value)
//           .end("Account Deleted");
//       } else {
//         res.value = "An Error occured";
//         console.log(res.value);
//         res.sendStatus(400).end();
//       }
//     }
//   });
//  });

//  app.post("/changePassword", function(req, res) {
//   console.log("Inside User Update Post Request");
//   console.log("Req Body : ", req.body);
//   kafka.make_request(
//     "changePassword",
//     {
//       email: req.body.email,
//       oldpassword: req.body.oldpassword,
//       confirmpassword: req.body.confirmpassword
//     },
//     function(err, result) {
//       console.log("in kafka passwordupdate result");
//       console.log(result.code);
//       if (err) {
//         console.log("Function not executed!");
//       } else {
//         if (result.code == 200) {
//           console.log("inside passwordupdate branch", result.value);
//           res.json({
//             success: true,
//             code: result.code
//           });
//         } else if (result.code == 401) {
//           res.value = "Password not matching";
//           res.json({
//             success: false,
//             code: result.code
//           });
//         }
//       }
//     }
//   );
//  });

// app.get("/viewConnections/:email", function(req, res) {
//   console.log("Inside view connections get Request");
//   console.log("Req Params : ", req.params);
//   kafka.make_request(
//     "viewconnections_topic",
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
//           res.writeHead(200, {
//             "Content-Type": "application/json"
//           });
//           console.log(JSON.stringify(result.value));
//           res.end(JSON.stringify(result.value));

//           // done(null, { results: results.value });
//         } else if (result.code == 204) {
//           console.log(result);
//           res.writeHead(204, {
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

// app.get("/profileViews/:email", function(req, res) {
//   console.log("Inside view connections get Request");
//   console.log("Req Params : ", req.params);
//   kafka.make_request(
//     "profileviews_topic",
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
//           res.writeHead(200, {
//             "Content-Type": "application/json"
//           });
//           console.log(JSON.stringify("value", result.value));
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

// app.put("/clickCounts/:email", function(req, res) {
//   console.log("Inside Click Count Post Request");
//   console.log("Req Params : ", req.params);
//   kafka.make_request(
//     "clickcounts_topic",
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

// app.get("/getprofile/:email", function(req, res) {
//   console.log("Inside get profile get Request");
//   console.log("Req Params : ", req.params);
//   kafka.make_request(
//     "getprofile_topic",
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

// app.get("/savedetails", function(req, res) {
//   console.log("Inside save details post Request");
//   console.log("Req body : ", req.body);
//   kafka.make_request("savedetails_topic", req.body, function(err, result) {
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

// app.post("/messageFromSender", function(req, res) {
//   console.log("Inside Sendder message");
//   //console.log("Req Body : ", username + "password : ",password);
//   console.log("Req Body : ", req.body);
//   kafka.make_request(
//     "messageFromSender_topic",
//     {
//       senderemail: req.body.senderemail,
//       receiveremail: req.body.receiveremail,
//       message: req.body.message
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
//             code: result.code,
//             value: result.value
//           });
//           console.log("successful message registered");
//           // done(null, { results: results.value });
//         } else {
//           console.log("fail");
//           //done(null, false, { message: results.value });
//         }
//       }
//     }
//   );
//  });

//  app.post("/receiverInbox", function(req, res) {
//   console.log("Inside receiver inbox");
//   //console.log("Req Body : ", username + "password : ",password);
//   console.log("Req Body : ", req.body);
//   kafka.make_request(
//     "receiverinbox_topic",
//     {
//       receiveremail: req.body.receiveremail
//     },
//     function(err, result) {
//       console.log("in result");
//       // console.log(res, err);
//       if (err) {
//         res.sendStatus(400).end();
//       } else {
//         if (result.code == 200) {
//           console.log("Result is", result);
//           res.json({
//             success: true,
//             code: result.code,
//             value: result.value
//           });
//           console.log("successful message registered");
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
var kafka = require("../../kafka/client");
var validateApplicant = require("../../Validations/applicantValidations");
var app = express.Router();

const multer = require("multer");

// app.post("/converttravel", function(req, res) {
//   console.log("Inside convert post request");
//   //console.log(req.body.email);
//   kafka.make_request(
//     "converttravel_topic",
//     {
//       email: req.body.email
//     },
//     function(err, result) {
//       console.log("in result");
//       // console.log(res, err);
//       if (err) {
//         res.sendStatus(400).end();
//       } else {
//         if (result.code == 200) {
//           // console.log(result);
//           console.log("Type changed successfully");
//           res.sendStatus(200).end();

//           // done(null, { results: results.value });
//         } else {
//           console.log("fail");
//           //done(null, false, { message: results.value });
//         }
//       }
//     }
//   );
// });

var aws = require("aws-sdk"),
  bodyParser = require("body-parser"),
  multerS3 = require("multer-s3");

aws.config.update({
  secretAccessKey: "",
  accessKeyId: "",
  region: "us-east-2",
  ACL: "public-read"
});

var app = express(),
  s3 = new aws.S3();

app.use(bodyParser.json());

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "linkedin-images",
    key: function(req, file, cb) {
      console.log("file---", file);
      console.log("req----", req.body);
      var name = "image" + req.body.image;

      // console.log("filename is",name)
      //cb(null, file.originalname); //use Date.now() for unique file keys
      cb(null, name); //use Date.now() for unique file keys
    }
  })
});

app.get("/userDisplay/:email", function(req, res) {
  console.log("Inside User Display Post Request");
  console.log("Req Body : ", req.body);
  console.log("Req Params : ", req.params);
  kafka.make_request(
    "userdisplay_topic",
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

app.put("/userUpdate/:email", function(req, res) {
  console.log("Inside User Update Post Request");
  const { errors, isValid } = validateApplicant(req.body);

  if (!isValid) {
    return res.status(202).json(errors);
  }

  console.log("Req Params : ", req.params);
  kafka.make_request(
    "userupdate_topic",
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      country: req.body.country,
      experience: req.body.experience,
      education: req.body.education,
      skills: req.body.skills,
      profileSummary: req.body.profileSummary,
      resume: req.body.resume,
      gender: req.body.gender,
      img: req.body.image,
      resume: req.body.resume,
      headline: req.body.headline,
      industry: req.body.industry,
      locationNearby: req.body.locationNearby,
      phoneType: req.body.phoneType,
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

app.post("/updatePassword", function(req, res) {
  console.log("Inside User Update Post Request");
  console.log("Req Body : ", req.body);
  kafka.make_request(
    "updatePassword_topic",
    {
      email: req.body.email,
      currentPassword: req.body.currentPassword,
      confirmPassword: req.body.confirmPassword
    },
    function(err, result) {
      console.log("in kafka passwordupdate result");
      console.log(result.code);
      if (err) {
        console.log("Function not executed!");
      } else {
        if (result.code == 200) {
          console.log("inside passwordupdate branch", result.value);
          res.json({
            success: true,
            code: result.code
          });
        } else if (result.code == 401) {
          res.value = "Password not matching";
          res.json({
            success: false,
            code: result.code
          });
        }
      }
    }
  );
});

app.post("/deleteAccount", function(req, res) {
  console.log("Inside Account Delete Post Request");
  console.log("Req Body : ", req.body);
  kafka.make_request("deleteAccount_topic", { email: req.body.email }, function(
    err,
    result
  ) {
    if (err) {
      res.sendStatus(400).end();
    } else {
      if (result.code == 200) {
        console.log("inside delete account branch", result.value);
        res
          .status(200)
          .json(result.value)
          .end("Account Deleted");
      } else {
        res.value = "An Error occured";
        console.log(res.value);
        res.sendStatus(400).end();
      }
    }
  });
});

app.post("/changePassword", function(req, res) {
  console.log("Inside User Update Post Request");
  console.log("Req Body : ", req.body);
  kafka.make_request(
    "changePassword",
    {
      email: req.body.email,
      oldpassword: req.body.oldpassword,
      confirmpassword: req.body.confirmpassword
    },
    function(err, result) {
      console.log("in kafka passwordupdate result");
      console.log(result.code);
      if (err) {
        console.log("Function not executed!");
      } else {
        if (result.code == 200) {
          console.log("inside passwordupdate branch", result.value);
          res.json({
            success: true,
            code: result.code
          });
        } else if (result.code == 401) {
          res.value = "Password not matching";
          res.json({
            success: false,
            code: result.code
          });
        }
      }
    }
  );
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
        } else if (result.code == 204) {
          console.log(result);
          res.writeHead(204, {
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

app.get("/profileViews/:email", function(req, res) {
  console.log("Inside view connections get Request");
  console.log("Req Params : ", req.params);
  kafka.make_request(
    "profileviews_topic",
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
          console.log(JSON.stringify("value", result.value));
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

app.put("/clickCounts/:email", function(req, res) {
  console.log("Inside Click Count Post Request");
  console.log("Req Params : ", req.params);
  kafka.make_request(
    "clickcounts_topic",
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

app.get("/getprofile/:email", function(req, res) {
  console.log("Inside get profile get Request");
  console.log("Req Params : ", req.params);
  kafka.make_request(
    "getprofile_topic",
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

app.get("/savedetails", function(req, res) {
  console.log("Inside save details post Request");
  console.log("Req body : ", req.body);
  kafka.make_request("savedetails_topic", req.body, function(err, result) {
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

app.post("/messageFromSender", function(req, res) {
  console.log("Inside Sendder message");
  //console.log("Req Body : ", username + "password : ",password);
  console.log("Req Body : ", req.body);
  kafka.make_request(
    "messageFromSender_topic",
    {
      senderemail: req.body.senderemail,
      receiveremail: req.body.receiveremail,
      message: req.body.message
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
            code: result.code,
            value: result.value
          });
          console.log("successful message registered");
          // done(null, { results: results.value });
        } else {
          console.log("fail");
          //done(null, false, { message: results.value });
        }
      }
    }
  );
});

app.post("/receiverInbox", function(req, res) {
  console.log("Inside receiver inbox");
  //console.log("Req Body : ", username + "password : ",password);
  console.log("Req Body : ", req.body);
  kafka.make_request(
    "receiverinbox_topic",
    {
      receiveremail: req.body.receiveremail
    },
    function(err, result) {
      console.log("in result");
      // console.log(res, err);
      if (err) {
        res.sendStatus(400).end();
      } else {
        if (result.code == 200) {
          console.log("Result is", result);
          res.json({
            success: true,
            code: result.code,
            value: result.value
          });
          console.log("successful message registered");
          // done(null, { results: results.value });
        } else {
          console.log("fail");
          //done(null, false, { message: results.value });
        }
      }
    }
  );
});

app.post("/profileImageUpload", upload.array("selectedFile", 4), (req, res) => {
  //console.log("Req : ",req);
  console.log("Res : Darryl", req.body);
  res.send();
});

module.exports = app;