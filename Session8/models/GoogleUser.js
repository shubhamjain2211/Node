const mongoose = require('mongoose');

const GoogleUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    googleId: {
        type: String,
        default: null
    },
    accessToken: {
        type: String,
        default: null
    }
});

const GoogleUser = mongoose.model('GoogleUser', GoogleUserSchema);

module.exports = GoogleUser;