var mongoose = require('../mongoose');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
//var config = require('../config/settings');


function handle_request(msg, callback){
    var res = {};
    console.log("In login request:"+ JSON.stringify(msg));
    mongoose.Users.findOne({"email":msg.email,"type":"applicant"},function(err,user){
        console.log("User : ",user);
        console.log("Error : ",err);
       // console.log("Password : ",user.Credentials[0].password);
        if (err || user===null) {
                    res.code = "401";
                    res.value = "The email you entered did not match our records. Please double-check and try again.";
                    console.log(res);
                    callback(null,res);
                // }else if(user && user.Credentials[0].password === password){
                }else{ 
                    bcrypt.compare(msg.password, user.password , function(err, response) {
                            console.log("response",response)
                            if(err || !response){ //any error or empty response
                                res.code="401";
                                // res.sendStatus(401).end();
                                callback(null,res);
                            }else if(response){
                                const payload = {  //id: res.id,
                                    username : user.email 
                                };
                             res.code = "200";
                             res.value = user;
                            // res.cookie('cookie',user.Credentials[0].email,{maxAge: 900000, httpOnly: false, path : '/'});
                            // res.status(200).json({email:user.Credentials[0].email}).end();
                            callback(null,res);
                            }
                            
                        })
                        
                        
                    }
    })
    
}

exports.handle_request = handle_request;