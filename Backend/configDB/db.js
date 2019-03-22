//No change right now. Will need to update the mlab config
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb+srv://SAC:Cmpe281@clustersac-mtjqh.mongodb.net/test?retryWrites=true",
  { useNewUrlParser: true }
);

console.log("Database Connected mongo");

module.exports = { mongoose };
