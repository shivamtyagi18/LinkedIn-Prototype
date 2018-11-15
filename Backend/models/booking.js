var mongoose = require('mongoose');

var Booking = mongoose.model('Booking',{
    name :{
        type : String
    },
    checkin :{
        type : Date
    },
    checkout :{
        type : Date
    },
    guests :{
        type : Number
    },
    total :{
        type : Number
    },
    owner :{
        type : String
    },
    customer :{
        type : String
    },
    img :{
        type : String
    }
});

module.exports = {Booking};