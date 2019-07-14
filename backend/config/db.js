// Module imports
const mongoose = require('mongoose');
const config = require('config');

//Using the config package, get the MONGO url and bind it to a variable
const DB = config.get('mongoDbURI');


// Connects to the database using async/await
const connectDB = async () => {

    try {
        await mongoose.connect(DB, {
            // current URL parser is depreciated, must pass in object to use
            // new parser.
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Successful MongoDB connection')
    } catch (error) {
        // If DB connection is not successful end the process 
        // and log the error in the console
        console.error(error.message);
        process.exit(1)
    }
}

module.exports = connectDB