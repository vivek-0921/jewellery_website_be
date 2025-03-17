const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
        default: 'user',
    },
    contact: {
        type: String,
        // require: true,
        // unique: true
    },
    address: {
        type: String,
    },
} ,{timestamps: true});

module.exports =new mongoose.model('user', userSchema);