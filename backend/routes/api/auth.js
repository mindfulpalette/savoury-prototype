// Module Imports
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/tokenAuth.js');
const bcrypt = require('bcryptjs');
const config = require('config');

const { check, validationResult } = require('express-validator');

//Import User model
const User = require('../../models/User.js');


// -  GET api/auth
// - Tests route
// - Public Access
router.get('/', auth, async (req, res) => {
    try {

        //Since, in our auth middleware, we have set the req.user value equal to the id present in the token,
        //we can find the user by that id and then return it in the response
        const user = await User.findById(req.user.id).select('-password');
        res.json(user)

    } catch (error) {
       
        res.status(500).send("server error")
    }
});


// -  POST api/auth
// - Authenticate and issues token
// - Public access
router.post('/', [
    //validations
    check('email', 'A valid email is required')
        .isEmail(),
    check('password', 'Must submit password')
        .exists()

], async (req, res) => {
    //Checks validations for errors. If errors exist, returns a 400 error along with the
    // error messages
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json( { errors: errors.array() });
    }

    const { email, password} = req.body

    try {
        //See if user exits
        let user = await User.findOne({ email });

        //if user does not exits return an error message
        if(!user){
            return res.status(400).json({ errors: [{ msg: 'Invalid email or password'}] });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Invalid email or password'}]})
        }

        //Return json webtoken
        const payload = {
            user: {
                id: user.id
            }
        }
   
        jwt.sign(
            payload, 
            config.get('jwtSecret'),
            { expiresIn: 36000},
            (err, token) => {
                if(err) throw err;
                res.json({ token });
        });


    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;