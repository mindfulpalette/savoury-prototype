// module imports
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');


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

    (req, res) => {

        // Binds the results of the validation handiling to a variable called errors
        const errors = validationResult(req);

        // If errors are present, returns a 400 status with the errors in an array
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        
        res.send("successful registration")
});


module.exports = router;