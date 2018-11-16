var mongoose=require('../mongoose');

function handle_request(msg, callback){
    var res = {};
    console.log("In check handle update -----request:"+ JSON.stringify(msg));
    mongoose.AddedJobs.findOneAndUpdate({
        jobId : msg.jobId,
        companyName : msg.companyName
    },{
        $set:{
            jobId : msg.jobID,
            jobTitle : msg.jobTitle,
            jobDescription:msg.jobDescription,
            location : msg.location,
            industry : msg.industry,
            employmentType : msg.employmentType,
            jobFunction : msg.jobFunction,
            companyLogo : msg.companyLogo,
            companyName: msg.companyname,
            jobOpenings:msg.jobOpenings,
            numberOfApplicants:msg.numberOfApplicants,
            numberOfViews:msg.numberOfViews,
            postedOn:msg.postedOn
            }
    },function(err,user){
        console.log(err);
        console.log(user);
        if (err) {
            res.code = "400";
            res.value = "Error 400.";
            console.log(res.value);
            res.sendStatus(400).end(); 
            callback(null,res); 
        } else {
            res.code = 200;
            res.value = user; 
            callback(null,res);        
        }
    })
}

exports.handle_request = handle_request;
