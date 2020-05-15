const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    googleId: {
        type: String,
        default: null
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;