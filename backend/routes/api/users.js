// module imports
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

// Import User model
const User = require('../../models/User.js');


// - POST api/v1/users
// - Registers a new users
// - Public
router.post('/register', [

    //Validations for register input fields
    check('first_name', "Please provide a first name.")
        .not()
        .isEmpty(),
    check('last_name', "Please provide a last name.")
        .not()
        .isEmpty(),
    check('email', "Please provide a valid email")
        .isEmail(),
    check('password', "Password must must be at least 6 characters")
        .isLength({min: 6})


], 

    async (req, res) => {

        // Binds the results of the validation handiling to a variable called errors
        const errors = validationResult(req);

        // If errors are present, returns a 400 status with the errors in an array
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        //This destructures the request body object into the variables we need
        const { first_name, last_name, location, email, password } = req.body;

        try {

            //This checks the database first to see if the user (email) already exists and handles errors
            let user = await User.findOne({ email })
            if (user) {
                return res.status(400).json({ errors: [{msg: "User already exits"}] })
            }

            //sets the user variable to a new user instance using the request data
            user = new User({
                first_name,
                last_name,
                location,
                email,
                password
            });

            //Now the password must encrypted
            
            //This generates the salt
            const salt = await bcrypt.genSalt();

            //with the salt the password is then hashed
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            //Create a payload to send with the token. Usually this is the users information or ID
            const payload = {
                user: {
                    id: user.id
                }
            }

            //Once a payload is created the token is signed, with the payload, the secret, and a callback
            jwt.sign(
                payload, 
                config.get('jwtSecret'), 
                { expiresIn: 360000 },
                (error, token) => {
                    if(error) throw error;
                    res.json({ token });
                });

        } catch (error) {
            console.log(error.message);
            res.status(500).send('Server error')
        }
});


module.exports = router;



