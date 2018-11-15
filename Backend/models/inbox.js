var mongoose = require('mongoose');

var Inbox = mongoose.model('Inbox',{
    receiver :{
        type : String
    },
    sender :{
        type : String
    },
    message :{
        type : String
    },
    time :{
        type : Date
    },
    property :{
        type : String
    }
    
    
});

module.exports = {Inbox};