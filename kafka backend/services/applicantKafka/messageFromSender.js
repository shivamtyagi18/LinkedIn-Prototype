var mongoose = require("../mongoose");

function handle_request(msg, callback) {
 var res = {};
 console.log("Inside question from traveller topic");
 console.log(msg);
 mongoose.Inbox.findOneAndUpdate(
   {
     senderemail: msg.senderemail,
     receiveremail: msg.receiveremail
   },
   {
     $set: {
       message: msg.message
     }
   },
   { upsert: true, new: true },
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