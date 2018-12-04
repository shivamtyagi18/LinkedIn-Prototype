var connection = new require("./kafka/Connection");
//topics files

var login = require("./services/applicantKafka/login");
var registerapplicant = require("./services/applicantKafka/registerapplicant");
var saveJob = require("./services/applicantKafka/saveJob");
var jobsearch = require("./services/applicantKafka/jobsearch");
var usersearch = require("./services/applicantKafka/usersearch");
var userdisplay = require("./services/applicantKafka/userdisplay");
var viewConnections = require("./services/applicantKafka/viewConnections");
var viewConnectionRequests = require("./services/applicantKafka/viewConnectionRequests");
var connectionRequest = require("./services/applicantKafka/connectionRequest");
var connectionAccept = require("./services/applicantKafka/connections");
var userUpdate = require("./services/applicantKafka/userupdate");
var profileViews = require("./services/applicantKafka/profileViews");
var clickCounts = require("./services/applicantKafka/clickCounts");
var getprofile = require("./services/applicantKafka/getprofile");
var receiverinbox = require("./services/applicantKafka/receiverinbox");
var halfApply = require("./services/applicantKafka/halfApply");

var messageFromSender = require("./services/applicantKafka/messageFromSender");
var addRecruiter = require("./services/recruiterKafka/addRecruiter");
var addJob = require("./services/recruiterKafka/addJob");
var getJobs = require("./services/recruiterKafka/getJobs");
var editJob = require("./services/recruiterKafka/editJob");
var loginRecruiter = require("./services/recruiterKafka/loginRecruiter");
var recruiterDisplay = require("./services/recruiterKafka/displayRecruiter");
var modifyRecruiterAccount = require("./services/recruiterKafka/modifyRecruiterAccount");
var jobDisplay = require("./services/recruiterKafka/displayJob");
var searchPostedJob = require("./services/recruiterKafka/searchPostedJob");
var deleteAccount = require("./services/applicantKafka/deleteAccount");
var changeApplicantPassword = require("./services/applicantKafka/changeApplicantPassword");



var jobDetails = require("./services/applicationKafka/jobDetails");
var applicantAppliedJobs = require("./services/applicationKafka/applicantAppliedJobs");
var apply = require("./services/applicationKafka/apply");
var applySQL = require("./services/applicationKafka/applySQL");
var applicationsForJob = require("./services/applicationKafka/applicationsForJob");


function handleTopicRequest(topic_name, fname) {
  //var topic_name = 'root_topic';
  var consumer = connection.getConsumer(topic_name);
  var producer = connection.getProducer();
  console.log("server is running ");
  consumer.on("message", function(message) {
    console.log("message received for " + topic_name + " ", fname);
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);

    fname.handle_request(data.data, function(err, res) {
      console.log("after handle" + res);
      var payloads = [
        {
          topic: data.replyTo,
          messages: JSON.stringify({
            correlationId: data.correlationId,
            data: res
          }),
          partition: 0
        }
      ];
      producer.send(payloads, function(err, data) {
        console.log(data);
      });
      return;
    });
  });
}
// Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request
handleTopicRequest("login_topic", login);
handleTopicRequest("registerapplicant_topic", registerapplicant);
handleTopicRequest("jobsearch_topic", jobsearch);
handleTopicRequest("usersearch_topic", usersearch);
handleTopicRequest("userdisplay_topic", userdisplay);
handleTopicRequest("connrequest_topic", connectionRequest);
handleTopicRequest("connectionaccept_topic", connectionAccept);
handleTopicRequest("userupdate_topic", userUpdate);
handleTopicRequest("savejob_topic", saveJob);
handleTopicRequest("viewconnections_topic", viewConnections);
handleTopicRequest("viewconnectionrequests_topic", viewConnectionRequests);
handleTopicRequest("profileviews_topic", profileViews);
handleTopicRequest("clickcounts_topic", clickCounts);
handleTopicRequest("getprofile_topic", getprofile);

handleTopicRequest("apply_topic", apply);
handleTopicRequest("applicantAppliedJobs_topic", applicantAppliedJobs);
handleTopicRequest("jobDetails_topic", jobDetails);
handleTopicRequest("applySQL_topic", applySQL);
handleTopicRequest("applicationsForJob_topic", applicationsForJob);

handleTopicRequest("addRecruiter_topic", addRecruiter);
handleTopicRequest("addJob_topic", addJob);
handleTopicRequest("getJobs_topic", getJobs);
handleTopicRequest("editJob_topic", editJob);
handleTopicRequest("loginRecruiter_topic", loginRecruiter);
handleTopicRequest("recruiterDisplay_topic", recruiterDisplay);
handleTopicRequest("jobDisplay_topic", jobDisplay);
handleTopicRequest("searchPostedJob_topic", searchPostedJob);
handleTopicRequest("modifyRecruiterAccount_topic", modifyRecruiterAccount);
handleTopicRequest("deleteAccount_topic", deleteAccount);
handleTopicRequest("changePassword", changeApplicantPassword);
handleTopicRequest("messageFromSender_topic", messageFromSender);
handleTopicRequest("receiverinbox_topic", receiverinbox);
handleTopicRequest("halfApply_topic" , halfApply)
