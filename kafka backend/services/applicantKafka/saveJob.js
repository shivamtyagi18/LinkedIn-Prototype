
// var mongoose = require("../mongoose");
// function handle_request(msg, callback) {
//   var res = {};
//   console.log("In saveJob request:" + JSON.stringify(msg));
//   var email = msg.email;
//   var jobId = msg.jobId;
//   var companyName = msg.companyName;
//   mongoose.Users.findOneAndUpdate(
//     { email: email},
//     { $push: { savedJobs: jobId + " " + companyName } },
//     { new: true },
//     function(err, user) {
// //------------------Logs Updated-------------------------
//     mongoose.Logs.findOneAndUpdate(
//         {jobId: msg.jobId},
//         {
//             $inc : {
//               numberOfSaves : 1
//             }
//         },{ new: true },function(err,user){
//             console.log("Saves Updated: ",user);
//             res.code = "200";
//             res.value = user; //not required
//             callback(null,res);
//            // res.status(200).json(testdata).end();
//         },(err)=>{
//             console.log("Error updating Saves");
//             res.code = "402";
//             callback(null,res);
//         }
    
//     )
// //------------------Logs Updated-------------------------
//       console.log("job saved: ", user);
      
//       res.code = "200";
//       res.value = user; //not required
//       callback(null, res);
//       // res.status(200).json(testdata).end();
//     },
//     err => {
//       console.log("Error saving job");
//       res.code = "402";
//       callback(null, res);
//     }
//   );
// }
// exports.handle_request = handle_request;

var mongoose = require("../mongoose");
function handle_request(msg, callback) {
  var res = {};
  console.log("In saveJob request:" + JSON.stringify(msg));
  var email = msg.email;
  var jobId = msg.jobId;
  var companyName = msg.companyName;

  mongoose.Users.findOne({
    email: email,
    savedJobs: { $in: [jobId + " " + companyName] }
  })
    .then(saved => {
      if (!saved) {
        mongoose.Users.findOneAndUpdate(
          { email: email },
          { $push: { savedJobs: jobId + " " + companyName } },
          { new: true },
          function(err, user) {
            //------------------Logs Updated-------------------------
            mongoose.Logs.findOneAndUpdate(
              { jobId: msg.jobId },
              {
                $inc: {
                  numberOfSaves: 1
                }
              },
              { new: true },
              function(err, user) {
                console.log("Saves Updated: ", user);
                res.code = "200";
                res.value = user; //not required
                callback(null, res);
                // res.status(200).json(testdata).end();
              },
              err => {
                console.log("Error updating Saves");
                res.code = "402";
                callback(null, res);
              }
            );
            //------------------Logs Updated-------------------------
            console.log("job saved: ", user);

            res.code = "200";
            res.value = user; //not required
            callback(null, res);
            // res.status(200).json(testdata).end();
          },
          err => {
            console.log("Error saving job");
            res.code = "402";
            callback(null, res);
          }
        );
      } else {
        console.log("job already saved: ");

        res.code = "202";
        res.value = "Job Already Saved";
        callback(null, res);
      }
    })
    .catch(err => callback(err, "Error"));
}
exports.handle_request = handle_request;