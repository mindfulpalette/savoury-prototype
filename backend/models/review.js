//Module Imports
const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');


//This defines the schema for the Profile model
const ReviewSchema = new mongoose.Schema({
    
});

ReviewSchema.plugin(timestamp);

//The export in this case is bound to a variable called Profile
// User is equal to the return value of the model method
// The model method takes in two arguments:
    //the name of the model, and the schema
module.exports = Review = mongoose.model('review', ReviewSchema);