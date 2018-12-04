var mongoose = require("../mongoose");
function handle_request(msg, callback) {
  var res = {};
  console.log("In get profile request:" + JSON.stringify(msg));
  var email = msg.email;
  console.log("user's email is: ", email);
//-----------------to find city wise applications-----------------------------------------------
mongoose.Logs.aggregate( [ { $unwind: "$applicantCity" },  { $sortByCount: "$applicantCity" } ],function(err, user) {
  console.log("City Wise : ", user);
  console.log("Error : ", err);
  //console.log("Password : ",user.Credentials[0].password)
  if (err) {
    res.code = "400";
    res.value =
      "The data not found. Please double-check and try again.";
    console.log(res.value);
    callback(null, res);
  } else {
    res.code = "200";
    res.value = user;
    //res.cookie('cookie',user.Credentials[0].email,{maxAge: 900000, httpOnly: false, path : '/'});
    callback(null, res);
  }
});
//-----------------to find first 10 applications-----------------------------------------------
mongoose.Logs.aggregate([{$sort:{postedOn:1}}],function(err, user) {
  console.log("Firts 10 : ", user);
  console.log("Error : ", err);
  //console.log("Password : ",user.Credentials[0].password)
  if (err) {
    res.code = "400";
    res.value =
      "The data was not found. Please double-check and try again.";
    console.log(res.value);
    callback(null, res);
  } else {
    res.code = "200";
    res.value = user;
    //res.cookie('cookie',user.Credentials[0].email,{maxAge: 900000, httpOnly: false, path : '/'});
    callback(null, res);
  }
});
//-----------------to find top 5 applications-----------------------------------------------
mongoose.Logs.aggregate([{$sort:{numberOfApplicants:1}}],function(err, user) {
  console.log("top 5 : ", user);
  console.log("Error : ", err);
  //console.log("Password : ",user.Credentials[0].password)
  if (err) {
    res.code = "400";
    res.value =
      "The data was not found. Please double-check and try again.";
    console.log(res.value);
    callback(null, res);
  } else {
    res.code = "200";
    res.value = user;
    //res.cookie('cookie',user.Credentials[0].email,{maxAge: 900000, httpOnly: false, path : '/'});
    callback(null, res);
  }
});
//----------------- Saved jobs -----------------------------------------------
mongoose.Logs.aggregate([{$sort:{numberOfSaves:1}}],function(err, user) {
  console.log(" job saved : ", user);
  console.log("Error : ", err);
  //console.log("Password : ",user.Credentials[0].password)
  if (err) {
    res.code = "400";
    res.value =
      "The data was not found. Please double-check and try again.";
    console.log(res.value);
    callback(null, res);
  } else {
    res.code = "200";
    res.value = user;
    //res.cookie('cookie',user.Credentials[0].email,{maxAge: 900000, httpOnly: false, path : '/'});
    callback(null, res);
  }
});
//-----------------to find month wise applications-----------------------------------------------
mongoose.Logs.aggregate([{$sort:{postedOn:1}}],function(err, user) {
  console.log("Firts 10 : ", user);
  console.log("Error : ", err);
  //console.log("Password : ",user.Credentials[0].password)
  if (err) {
    res.code = "400";
    res.value =
      "The data was not found. Please double-check and try again.";
    console.log(res.value);
    callback(null, res);
  } else {
    res.code = "200";
    res.value = user;
    //res.cookie('cookie',user.Credentials[0].email,{maxAge: 900000, httpOnly: false, path : '/'});
    callback(null, res);
  }
});
}
exports.handle_request = handle_request;
