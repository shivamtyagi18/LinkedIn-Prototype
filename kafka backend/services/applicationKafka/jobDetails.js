// var mongoose = require("../mongoose");

// function handle_request(msg, callback) {
// var res = {};

// console.log("In get job Details request:" + JSON.stringify(msg));
// var jobId = msg.jobId;
// console.log("Details requested for : ", jobId);
// mongoose.AddedJobs.findOne({ jobId: jobId }, function(err, job) {
// console.log("Job : ", job);
// console.log("Error : ", err);
// if (err) {
// res.code = "400";
// res.value =
// "The requested job with the given job Id was not found. Please double-check and try again.";
// console.log(res.value);
// res.authFlagJ = false;
// callback(null, res);
// } else {
// res.code = "200";
// res.value = job;
// res.authFlagJ = true;
// //res.cookie('cookie',user.Credentials[0].email,{maxAge: 900000, httpOnly: false, path : '/'});
// callback(null, res);
// }
// });
// }
// exports.handle_request = handle_request;



var mongoose = require("../mongoose");

function handle_request(msg, callback) {
var res = {};

console.log("In get job Details request:" + JSON.stringify(msg));
var jobId = msg.jobId;
console.log("Details requested for : ", jobId);
mongoose.AddedJobs.findOneAndUpdate({ jobId: jobId }, {
    $inc : {
            numberOfViews : 1
    }
},function(err, job) {

    //------------------Logs Updated-------------------------
    mongoose.Logs.findOneAndUpdate(
        {jobId: msg.jobId},
        {
            $inc : {
                numberOfViews : 1
            }
        },{ new: true },function(err,user){
            console.log("View logs Updated: ",user);
            res.code = "200";
            res.value = user; //not required
            callback(null,res);
           // res.status(200).json(testdata).end();
        },(err)=>{
            console.log("Error updating View Logs");
            res.code = "402";
            callback(null,res);
        }
    
    )

//------------------Logs Updated-------------------------
console.log("Job : ", job);
console.log("Error : ", err);
if (err) {
res.code = "400";
res.value =
"The requested job with the given job Id was not found. Please double-check and try again.";
console.log(res.value);
res.authFlagJ = false;
callback(null, res);
} else {
res.code = "200";
res.value = job;
res.authFlagJ = true;
//res.cookie('cookie',user.Credentials[0].email,{maxAge: 900000, httpOnly: false, path : '/'});
callback(null, res);
}
});
}
exports.handle_request = handle_request;