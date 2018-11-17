var mongoose = require("../mongoose");

function handle_request(msg, callback) {
  var res = {};

  console.log("In View Click increment request:" + JSON.stringify(msg));
  var email = msg.email;
  console.log("user name", email);
  mongoose.Users.findOneAndUpdate(
    {"email":msg.email},
    {
        $inc : {
            clickCounts : 1
        }
    },function(err,user){
        console.log("User Updated: ",user);
        res.code = "200";
        res.value = user; //not required
        callback(null,res);
       // res.status(200).json(testdata).end();
    },(err)=>{
        console.log("Error Creating User");
        res.code = "402";
        callback(null,res);
    }

)
}

exports.handle_request = handle_request;
