var mongoose = require("../mongoose");

function handle_request(msg, callback) {
  var res = {};
  console.log("In handle user update request:" + JSON.stringify(msg));

  mongoose.Users.findOneAndUpdate(
    {
      email: msg.Email
    },
    {
      $set: {
        firstName: msg.firstName,
        lastName: msg.lastName,
        address: msg.address,
        city: msg.city,
        state: msg.state,
        zipcode: msg.zipcode,
        phone: msg.phoneNumber,
        companyName: msg.companyName
      }
    },
    function(err, result) {
      if (!result) {
        res.code = "401";
        res.value = "Some error occured";
        console.log(res.value);
        console.log(err);
        callback(null, res);
      } else {
        console.log(result);
        res.code = 200;
        res.value = result;
        console.log("response", res);
        callback(null, res);
      }
    }
  );
}

exports.handle_request = handle_request;