var mongoose=require('../mongoose');

function handle_request(msg, callback){
    var res = {};
    console.log("In addJob request:"+ JSON.stringify(msg));
         var recruiter = new mongoose.AddedJobs({
            email:msg.email,
            jobId : msg.jobId,
            jobTitle : msg.jobTitle,
            jobDescription:msg.jobDescription,
            location : msg.location,
            industry : msg.industry,
            employmentType : msg.employmentType,
            jobFunction : msg.jobFunction,
            companyLogo : msg.companyLogo,
            companyName: msg.companyName,
            jobOpenings:msg.jobOpenings,
            numberOfApplicants:msg.numberOfApplicants,
            numberOfViews:msg.numberOfViews,
            postedOn:msg.postedOn,
        });
        console.log(msg);
        recruiter.save().then (
            recruiter => {
                console.log("Job created :", recruiter);
                res.code=200;
                res.value=recruiter;
                callback(null,res);
            },
            err => {
                console.log("Error creating Job");
                res.code=400;
                res.value="Error";
            }
        );
    }
    
exports.handle_request = handle_request;
