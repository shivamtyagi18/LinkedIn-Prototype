var mysql = require("mysql");
var pool = require("../../pool");
function handle_request(msg, callback) {
console.log("In applySQL handle kafka request:" + JSON.stringify(msg));
console.log(msg.fname);
var sql =
"INSERT INTO ApplicationData VALUES ( " +
mysql.escape(msg.fname) +
" , " +
mysql.escape(msg.lname) +
" , " +
mysql.escape(msg.email) +
" , " +
mysql.escape(msg.city) +
" , " +
mysql.escape(msg.jobId) +
" , " +
mysql.escape(msg.companyName) +
" ) ";

console.log(sql);
pool.getConnection(function(err, con) {
if (err) {
console.log(err);
const resData = {
code: "400",
value: "error"
};
console.log("Could not connect to Database");
callback(null, resData);
} else {
var res = {};
con.query(sql, function(err, result) {
if (err) {
console.log(err);
const resData = {
code: "400",
value: "error"
};
callback(null, resData);

} else {
    console.log("Application created :");
    //res.code = 200;
    //res.value = application;
    const resData = { code: "200", value: result };
    callback(null, resData);
    }
    });
    }
    });
    }
    exports.handle_request = handle_request;