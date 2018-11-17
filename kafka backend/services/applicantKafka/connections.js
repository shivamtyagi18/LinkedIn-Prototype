var mongoose = require("../mongoose");

function handle_request(msg, callback) {
  var res = {};

  console.log("In connections accept request:" + JSON.stringify(msg));
  var receiverEmail = msg.receiver;
  var senderEmail = msg.sender;
  mongoose.Users.findOneAndUpdate(
    { email: receiverEmail },
    {
      $pull: { connectionRequests: senderEmail },
      $push: { connections: senderEmail }
    },
    { new: true },
    function(err, user) {
      console.log("Connection added: ", user);
      mongoose.Users.findOneAndUpdate(
        { email: senderEmail },
        {
          $push: { connections: receiverEmail }
        },
        { new: true },
        function(err, success) {
          res.code = "200";
          res.value = success; //not required
          callback(null, res);
          // res.status(200).json(testdata).end();
        },
        err => {
          console.log("Error adding connection");
          res.code = "402";
          callback(null, res);
        }
      );
    },
    err => {
      console.log("Error adding connection");
      res.code = "402";
      callback(null, res);
    }
  );
}

exports.handle_request = handle_request;
