var connection = new require("./kafka/Connection");
//topics files

//Our modules. The next 2 lines show the syntax shows the syntax.
//Syntax for login and register Linkedin. Needs to be for farmer/IOT/Infrastructure
var login = require("./services/applicantKafka/login");
var registerapplicant = require("./services/applicantKafka/registerapplicant");

//This handles the topic request)
//No changes to be done in handleTopicRequest. Leave it as it is
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
//Example. From Linkedin. Needs to be modified for farmer
handleTopicRequest("login_topic", login);
handleTopicRequest("registerapplicant_topic", registerapplicant);
