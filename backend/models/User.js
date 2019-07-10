//Module Imports
const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');


//This defines the schema for the User model
const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.plugin(timestamp);

//The export in this case is bound to a variable called User
// User is equal to the return value of the model method
// The model method takes in two arguments:
    //the name of the model, and the schema
module.exports = User = mongoose.model('user', UserSchema);