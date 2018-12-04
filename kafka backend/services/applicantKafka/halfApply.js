var mongoose = require("../mongoose");

function handle_request(msg, callback) {
    var res = {};

    console.log("In Half Apply Request:" + JSON.stringify(msg));
    mongoose.Logs.findOneAndUpdate(
        { jobId: msg.jobId },
        {
            $inc : {
                halfApply : 1
            }
        },function(err, log){
            console.log("Log Updated: ", log);
            res.code = "200";
            res.value = log; //not required
            callback(null,res);
           // res.status(200).json(testdata).end();
        },(err)=>{
            console.log("Error Updating Log");
            res.code = "402";
            callback(null,res);
        }
        
    )
}

exports.handle_request = handle_request;
