const mongoose = require('mongoose');

//define profile sub-schema
const profileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    }
});

//define user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
        //match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address.']
    },

    password: {
        type: String,
        required: true
    },

    roles: {
        type: [String],
        default: ['user']
    }

    profile: profileSchema,
    lastLogin:{
        type: Date,
        default: Date.now
    }
},{
    timeStamps: true
});

//create a model for the user schema
const User = mongoose.model('User', userSchema);

//export the model
module.exports = User;