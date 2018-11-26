var mongoose = require("../mongoose");
function handle_request(msg, callback) {
  var res = {};

  console.log("In search request by recruiter:" + JSON.stringify(msg));
  mongoose.AddedJobs.find({ jobTitle: msg.jobTitle,companyName:msg.companyName}, function(err, job) {
    console.log("Error : ", err);

    // console.log("date : ",typeof(property[0].checkin),typeof(tempin),typeof(tempguest));
    // console.log("date : ",property[0].location==req.body.location, property[0].checkin <= tempin, property[0].checkout >= tempout, property[0].guests>=tempguest);
    // //console.log("Password : ",user.Credentials[0].password);
    if (err) {
      res.code = "400";
      res.value =
        "The details you entered did not match our records. Please double-check and try again.";
      console.log(res.value);
      // res.sendStatus(400).end();
      callback(null, res);
    } else {
      Jobs = []; 
      if (job.length) {
        for (var i = 0; i < job.length; i++) {
          //  if(property[i].location == req.body.location && property[i].checkin<= req.body.checkin && property[i].checkout>= req.body.checkout && property[i].guests == req.body.guests){
          if (job[i].jobTitle == msg.jobTitle && job[i].companyName == msg.companyName) {
            Jobs[i] = job[i]; //Inserting values from result to Properties array
          }
        }
        if (!Jobs.length) {
          Jobs = [
            {
              name: "No Jobs Found",
              img: "nojobs" //have an image for no property found case
            }
          ];
        }
      }
      console.log("Jobs : ", Jobs);
      res.code = "200";
      res.value = Jobs;
      // res.sendStatus(200).end();
      callback(null, res);
    }
  });
}

exports.handle_request = handle_request;
