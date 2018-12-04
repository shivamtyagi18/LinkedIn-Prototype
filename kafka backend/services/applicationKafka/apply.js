// var mongoose = require("../mongoose");

// function handle_request(msg, callback) {
// var res = {};
// console.log("In apply handle kafka request:" + JSON.stringify(msg));
// console.log(msg.jobId);
// var application = new mongoose.Applications({
// // applicationId: DataCue.applicationId,
// //applicantId: req.body.applicantId,
// applicantId : msg.applicantId,
// jobId: msg.jobId,
// firstName: msg.firstName,
// lastName: msg.lastName,
// education: msg.education,
// city: msg.city,
// bio : msg.bio,
// about: msg.about,
// occupation: msg.occupation,
// sponsorship:msg.sponsorship,
// disability: msg.disability,
// resume:msg.resume, 
// coverLetter:msg.coverLetter
// });
// console.log(msg);
// application.save().then(
// application => {
// console.log("Application created :", application);
// res.code = 200;
// res.value = application;
// callback(null, res);
// },
// err => {
// console.log("Error applying for Job");
// res.code = 400;
// res.value = "Error";
// }
// );
// }

// exports.handle_request = handle_request;


// var mongoose = require("../mongoose");
// function handle_request(msg, callback) {
// var res = {};
// console.log("In apply handle kafka request:" + JSON.stringify(msg));
// console.log(msg.jobId);
// var application = new mongoose.Applications({
// // applicationId: DataCue.applicationId,
// //applicantId: req.body.applicantId,
// applicantId : msg.applicantId,
// jobId: msg.jobId,
// firstName: msg.firstName,
// lastName: msg.lastName,
// education: msg.education,
// city: msg.city,
// bio : msg.bio,
// about: msg.about,
// sponsorship:msg.sponsorship,
// disability: msg.disability,
// resume:msg.resume, 
// coverLetter:msg.coverLetter,
// appliedOn: msg.appliedOn,
// jobTitle:msg.jobTitle,
// occupation: msg.occupation,
// companyName:msg.companyName
// });
// console.log("msg",msg);
// application.save().then(
// application => {
//  //------------------No of applications Updated-------------------------   
//     mongoose.AddedJobs.findOneAndUpdate(
//         {jobId: msg.jobId},
//         {
//             $inc : {
//                 numberOfApplicants : 1
//             }
//         },function(err,user){
//             console.log("No of Application Updated: ",user);
//             mongoose.Users.findOneAndUpdate(   
//                 { email: msg.email},
//                 { $push: { appliedJobs: msg.jobId + " " + msg.companyName } },
//                 { new: true },
//                 function(err, user) {
//                     console.log("Saves Updated: ",user,err);
//                 })
//             res.code = "200";
//             res.value = user; //not required
//             callback(null,res);
//            // res.status(200).json(testdata).end();
//         },(err)=>{
//             console.log("Error updating number");
//             res.code = "402";
//             callback(null,res);
//         }
    
//     )
// //------------------Logs Updated-------------------------
//     mongoose.Logs.findOneAndUpdate(
//         {jobId: msg.jobId},
//         {
//             $push : {
//                 applicantId : msg.applicantId,
//                 applicantCity : msg.city,
//                 appliedOn:msg.appliedOn
//             },
//             $inc : {
//                 numberOfApplicants : 1
//             }
            
//         },{ new: true },function(err,user){
//             console.log("Logs Updated: ",user,err);
//             res.code = "200";
//             res.value = user; //not required
//             callback(null,res);
//            // res.status(200).json(testdata).end();
//         },(err)=>{
//             console.log("Error updating Logs");
//             res.code = "402";
//             callback(null,res);
//         }
    
//     )
// //------------------Logs Updated-------------------------    
// console.log("Application created :", application);
// res.code = 200;
// res.value = application;
// callback(null, res);
// },
// err => {
// console.log("Error applying for Job");
// res.code = 400;
// res.value = "Error";
// }
// );
// }
// exports.handle_request = handle_request;
















var mongoose = require("../mongoose");
function handle_request(msg, callback) {
 var res = {};
 console.log("In apply handle kafka request:" + JSON.stringify(msg));
 console.log("test job id", msg.jobId);
 console.log("test applicant id", msg.applicantId);

 mongoose.Applications.findOne(
   { applicantId: msg.applicantId, jobId: msg.jobId },
   function(err, jobs) {
     console.log("jobs", jobs, err);
     if (!jobs) {
       var application = new mongoose.Applications({
         // applicationId: DataCue.applicationId,
         //applicantId: req.body.applicantId,
         applicantId: msg.applicantId,
         jobId: msg.jobId,
         firstName: msg.firstName,
         lastName: msg.lastName,
         education: msg.education,
         city: msg.city,
         bio: msg.bio,
         about: msg.about,
         sponsorship: msg.sponsorship,
         disability: msg.disability,
         resume: msg.resume,
         coverLetter: msg.coverLetter,
         appliedOn: msg.appliedOn,
         jobTitle: msg.jobTitle,
         companyName: msg.companyName
       });
       console.log("msg", msg);
       application.save().then(
         application => {
           //------------------No of applications Updated-------------------------
           mongoose.AddedJobs.findOneAndUpdate(
             { jobId: msg.jobId },
             {
               $inc: {
                 numberOfApplicants: 1
               }
             },
             function(err, user) {
               console.log("No of Application Updated: ", user);
               mongoose.Users.findOneAndUpdate(
                 { email: msg.email },
                 {
                   $push: { appliedJobs: msg.jobId + " " + msg.companyName }
                 },
                 { new: true },
                 function(err, user) {
                   console.log("Saves Updated: ", user, err);
                 }
               );
               res.code = "200";
               res.value = user; //not required
               callback(null, res);
               // res.status(200).json(testdata).end();
             },
             err => {
               console.log("Error updating number");
               res.code = "402";
               callback(null, res);
             }
           );
           //------------------Logs Updated-------------------------
           mongoose.Logs.findOneAndUpdate(
             { jobId: msg.jobId },
             {
               $push: {
                 applicantId: msg.applicantId,
                 applicantCity: msg.city,
                 appliedOn: msg.appliedOn
               },
               $inc: {
                 numberOfApplicants: 1
               }
             },
             { new: true },
             function(err, user) {
               console.log("Logs Updated: ", user, err);
               res.code = "200";
               res.value = user; //not required
               callback(null, res);
               // res.status(200).json(testdata).end();
             },
             err => {
               console.log("Error updating Logs");
               res.code = "402";
               callback(null, res);
             }
           );
           //------------------Logs Updated-------------------------
           console.log("Application created :", application);
           res.code = 200;
           res.value = application;
           callback(null, res);
         },
         err => {
           console.log("Error applying for Job");
           res.code = 400;
           res.value = "Error";
         }
       );
     } else {
       res.code = 405;
       callback(null, res);
     }
   }
 );
}
exports.handle_request = handle_request;