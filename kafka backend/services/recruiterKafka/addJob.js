// var mongoose=require('../mongoose');

// function handle_request(msg, callback){
//     var res = {};
//     console.log("In addJob request:"+ JSON.stringify(msg));
//          var recruiter = new mongoose.AddedJobs({
//             email:msg.email,
//             jobId : msg.jobId,
//             jobTitle : msg.jobTitle,
//             jobDescription:msg.jobDescription,
//             location : msg.location,
//             industry : msg.industry,
//             employmentType : msg.employmentType,
//             jobFunction : msg.jobFunction,
//             companyLogo : msg.companyLogo,
//             companyName: msg.companyName,
//             jobOpenings:msg.jobOpenings,
//             numberOfApplicants:msg.numberOfApplicants,
//             numberOfViews:msg.numberOfViews,
//             postedOn:msg.postedOn,
//             easyApply:msg.easyApply
//         });
//         console.log(msg);
//         recruiter.save().then (
//             recruiter => {
//                 console.log("Job created :", recruiter);
//                 res.code=200;
//                 res.value=recruiter;
//                 callback(null,res);
//             },
//             err => {
//                 console.log("Error creating Job");
//                 res.code=400;
//                 res.value="Error";
//             }
//         );
//     }
    
// exports.handle_request = handle_request;



// var mongoose=require('../mongoose');
// function handle_request(msg, callback){
//     var res = {};
//     console.log("In addJob request:"+ JSON.stringify(msg));
//          var recruiter = new mongoose.AddedJobs({
//             email:msg.email,
//             jobId : msg.jobId,
//             jobTitle : msg.jobTitle,
//             jobDescription:msg.jobDescription,
//             location : msg.location,
//             industry : msg.industry,
//             employmentType : msg.employmentType,
//             jobFunction : msg.jobFunction,
//             companyLogo : msg.companyLogo,
//             companyName: msg.companyName,
//             jobOpenings:msg.jobOpenings,
//             numberOfApplicants:msg.numberOfApplicants,
//             numberOfViews:msg.numberOfViews,
//             postedOn:msg.postedOn,
//             easyApply:msg.easyApply
//         });
//         console.log(msg);
//         recruiter.save().then (
//             recruiter => {
// //------------------Logs Updated-------------------------
//         var addLog = new mongoose.Logs({
//             postedBy:msg.email,
//             jobId : msg.jobId,
//             postedOn:msg.postedOn,
//             });
//             addLog.save().then(
//                 addLog=>{
//                     console.log("Log Updated :", addLog);
//                 }
//             )
   
// //------------------Logs Updated-------------------------
//                 console.log("Job created :", recruiter);
//                 res.code=200;
//                 res.value=recruiter;
//                 callback(null,res);
//             },
//             err => {
//                 console.log("Error creating Job");
//                 res.code=400;
//                 res.value="Error";
//             }
//         );
//     }
    
// exports.handle_request = handle_request;






var mongoose = require("../mongoose");

function handle_request(msg, callback) {
  var res = {};
  console.log("In addJob request:" + JSON.stringify(msg));
  mongoose.AddedJobs.findOne({ jobId: msg.jobId })
    .then(job => {
      if (job) {
        console.log("Job already exists in Kafka services");
        res.code = 202;
        res.value = "Job already Posted";
        callback(null, res);
      } else {
        var recruiter = new mongoose.AddedJobs({
          email: msg.email,
          jobId: msg.jobId,
          jobTitle: msg.jobTitle,
          jobDescription: msg.jobDescription,
          location: msg.location,
          industry: msg.industry,
          employmentType: msg.employmentType,
          jobFunction: msg.jobFunction,
          companyLogo: msg.companyLogo,
          companyName: msg.companyName,
          jobOpenings: msg.jobOpenings,
          numberOfApplicants: msg.numberOfApplicants,
          numberOfViews: msg.numberOfViews,
          postedOn: msg.postedOn,
          easyApply: msg.easyApply
        });
        console.log(msg);
        recruiter
          .save()
          .then(
            recruiter => {
              console.log("Job created :", recruiter);
              res.code = 200;
              res.value = recruiter;
              callback(null, res);
            },
            err => {
              console.log("Error creating Job");
              res.code = 400;
              res.value = "Error";
            }
          )
          .catch(err => callback(err, "Error"));
      }
    })
    .catch(err => callback(err, "Error"));
}

exports.handle_request = handle_request;