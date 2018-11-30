var mongoose = require("../mongoose");

function handle_request(msg, callback) {
  var res = {};

  console.log("In search request:" + JSON.stringify(msg));
  var user = msg.user;

  mongoose.Users.find({firstName:{$regex: user}}, function(err, user) {
    // console.log("Properties : ",property);
    // console.log("Properties : ",property.length,property[0].location);
    console.log("Error : ", err,user);

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
      Users = []; //Nullifying the value of Properties array
      if (user.length) {
        for (var i = 0; i < user.length && i<5; i++) {
          //  if(property[i].location == req.body.location && property[i].checkin<= req.body.checkin && property[i].checkout>= req.body.checkout && property[i].guests == req.body.guests){
          if (user[i].firstName == msg.user) {
            Users[i] = user[i]; //Inserting values from result to Properties array
          }
        }
        if (!Users.length) {
          Users = [
            {
              name: "No Users Found",
              img: "nousers" //have an image for no property found case
            }
          ];
        }
      }
      console.log("Users : ", Users);
      res.code = "200";
      res.value = Users;
      // res.sendStatus(200).end();
      callback(null, res);
    }
  });
}

exports.handle_request = handle_request;
