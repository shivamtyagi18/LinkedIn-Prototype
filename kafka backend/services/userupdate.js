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
                    firstName :msg.firstName, 
                    lastName : msg.lastName,
                    // type : msg.type,
                    phone : msg.phone,
                    city : msg.city,
                    country : msg.country,
                    company : msg.company,
                    school:msg.school,
                    hometown:msg.hometown,
                    languages:msg.languages,
                    gender : msg.gender,
                    about : msg.about,
                    img : msg.description, 
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