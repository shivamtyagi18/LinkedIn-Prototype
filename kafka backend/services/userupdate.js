var mongoose = require('./mongoose');
var bcrypt = require('bcrypt');
var config = require('./config/settings');
var saltRounds = 10;


function handle_request(msg, callback){
    var res = {};
    console.log("In user update request:"+ JSON.stringify(msg));

        mongoose.Users.updateOne(
            {"email":msg.email},
            {
                $set : {
                    firstName: msg.firstName,
                    lastName: msg.lastName,
                    phone: msg.phone,
                    address: msg.address,
                    city: msg.city,
                    state: msg.state,
                    zipcode: msg.zipcode,
                    country: msg.country,
                    experience: msg.experience,
                    education: msg.education,
                    skills: msg.skills,
                    profileSummary: msg.profileSummary,
                    resume: msg.resume,
                    gender: msg.gender,
                    img: msg.img
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