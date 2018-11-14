var mongoose = require('mongoose');

var Property = mongoose.model('Property',{
    name :{
        type : String
    },
    location :{
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
    price :{
        type : Number
    },
    bedroom :{
        type : Number
    },
    bathroom :{
        type : Number
    },
    minstay :{
        type : Number
    },
    pincode :{
        type : Number
    },
    owner :{
        type : String
    },
    description :{
        type : String
    },
    img :{
        type : String
    }
});

module.exports = {Property};