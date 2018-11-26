var mongoose=require('../mongoose');

function handle_request(msg, callback){
    var res = {};
    console.log("In getJobs request:"+ JSON.stringify(msg));
    mongoose.AddedJobs.find({
       email:msg.email,
    }, function(err,jobs){
        console.log(err);
        console.log(jobs);
        if (err) {
            res.code = 400;
            res.value = err;
            callback(null, res);
        } else {
            res.code = 200;
            res.value = jobs; 
            console.log(jobs);
            callback(null,res);        
        }
    })
}

exports.handle_request = handle_request;
