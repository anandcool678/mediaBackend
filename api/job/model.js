
const mongoose = require('mongoose');

const addJob = new mongoose.Schema({
    companyLogo: {
        type: String,
        required :[true]
        
    },
    companyName: {
        type: String,
        required :[true]
    },
    companyWebsite: {
        type: String,
        required : [false]
    },
    companyLocation: {
        type: String,
        required: [true],
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    domain: {
        type: Array,
        required:[true] 
    }

});

module.exports = mongoose.model('Job', addJob);