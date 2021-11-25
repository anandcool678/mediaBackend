
const mongoose = require('mongoose');

const addPost = new mongoose.Schema({
    username: {
        type: String,
        
        
    },
    content: {
        type: String,
        required :[true]
    },
    media: {
        type: String,
        required : [false]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    domain: {
        type: String,
        enum: ['frontend','backend', 'devops','ML','dataScience','DSA'],
        required:[true, 'Please select your domain'] 
    }

});

module.exports = mongoose.model('Post', addPost);