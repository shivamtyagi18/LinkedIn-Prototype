var mongoose = require('../mongoose');
var bcrypt = require('bcrypt');
//var config = require('../config/settings');
var saltRounds = 10;


function handle_request(msg, callback){
    var res = {};
    console.log("In signup request:"+ JSON.stringify(msg));
    bcrypt.hash(msg.password, saltRounds , function(err, hash) {
        // Store hash in your password DB.
       
       var testdata = new mongoose.Users({ 
            firstName :msg.firstName, 
            lastName : msg.lastName,
            type : msg.type,
            email : msg.email,
            password : hash 
        });
      //  console.log("connection successful", testdata.Credentials.password); 
        console.log("testdata",testdata);
        testdata.save().then((testdata)=>{
            console.log("User created : ",testdata);
            res.code = "200";
            res.value = testdata; //not required
            callback(null,res);
           // res.status(200).json(testdata).end();
        },(err)=>{
            console.log("Error Creating User",err);
            res.code = "402";
            callback(null,res);
        })
    }); 
}

exports.handle_request = handle_request;