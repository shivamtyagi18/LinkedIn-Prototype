var mongoose = require("../mongoose");
var bcrypt = require("bcrypt");
const saltRounds = 10;

// function getNextSequence(name) {
//   console.log("name ", name);
//   var ret = mongoose.recruitercounter.findByIdAndUpdate({
//     query: { _id: "userid" },
//     update: { $inc: { seq: 1 } },
//     new: true
//   });
//   console.log(ret.seq);
//   return ret.seq;
// }

function handle_request(msg, callback) {
  var res = {};
  console.log("In add recruiter handle kafka request:" + JSON.stringify(msg));
  bcrypt.hash(msg.password, saltRounds, function(err, hash) {
    var firstName = msg.firstName;
    var lastName = msg.lastName;
    var email = msg.email;
    var password = hash;
    var type = msg.type;
    var recruiter = new mongoose.Users({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      type:type
    });
    recruiter.save().then(
      recruiter => {
        console.log("Recruiter created :", recruiter);
        res.code = 200;
        res.value = recruiter;
        callback(null, res);
      },
      err => {
        console.log("Recruiter Already exists.");
        res.code = 404;
        res.value = err;
        callback(null, res);
      }
    );
  });
}

exports.handle_request = handle_request;
