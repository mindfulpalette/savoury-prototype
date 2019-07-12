const jwt = require('jsonwebtoken');
const config = require('config');

// Here we are exporting a middleware function. A middleware function is a a function that has access to the request and response cycle.
// There is also a a "next" parameter which must be called to in order to go to the next middleware function.
module.exports = function(req, res, next) {

    //Get the jwt token from the header
    const token = req.header('x-auth-token');

    //Check to see if the token exists
    //If the token is not present in the header, access is denied.
    if (!token) {
        res.status(401).json({
            message: "ACCESS DENIED. NOT AUTHORIZED."
        })
    }

    try {
        //If a token is present it is then verified with the "secret"
        const decodedToken = jwt.verify(token, config.get('jwtSecret'));

        //The request user value is then set to the User value present in the token to the next piece of middleware.
        req.user = decodedToken.user;

        //This tells the function to move on
        next();
    } catch (error) {
        res.status(401).json({
            message: "Invalid token"
        })
    }

};