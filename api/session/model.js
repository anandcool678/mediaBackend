
const mongoose = require('mongoose');

const addSession = new mongoose.Schema({
   sessionName: {
       type: String,
       required: [true]
    },
    sessionUrl: {
        type: String,
        required: [true]
    },
    participantsCount: {
        type: Number,
        
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

module.exports = mongoose.model('Session', addSession);