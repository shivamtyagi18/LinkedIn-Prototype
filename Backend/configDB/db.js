// var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   port: 8889,
//   database: "HomeAway"
// });

// var mysql = require("mysql");
// var pool = mysql.createPool({
//   connectionLimit: 1000,
//   port: "8889",
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "HomeAway"
// });

// pool.getConnection(function(err) {
//   if (err) throw err;
//   console.log("Database connected!");
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Database connected!");
// });

// module.exports = pool;
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;



mongoose.connect('mongodb://sarang4488:partner123@ds141514.mlab.com:41514/linkedin',{ useNewUrlParser: true });


console.log("Database Connected mongo");

module.exports = { mongoose };
