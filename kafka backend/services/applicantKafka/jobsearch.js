var mongoose = require("../mongoose");


function handle_request(msg, callback) {
  var res = {};

  console.log("In search request:" + JSON.stringify(msg));
  var location = msg.location;
  var jobTitle = msg.jobTitle;

  mongoose.AddedJobs.find({ location: location, jobTitle:{$regex: jobTitle}}, function(err, job) {
    // console.log("Properties : ",property);
    // console.log("Properties : ",property.length,property[0].location);
    console.log("Error : ", err,job);

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
      Jobs = []; //Nullifying the value of Properties array
      if (job.length) {
        for (var i = 0; i < job.length && i<10; i++) {
          //  if(property[i].location == req.body.location && property[i].checkin<= req.body.checkin && property[i].checkout>= req.body.checkout && property[i].guests == req.body.guests){
          if (job[i].location == msg.location) {
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
