// module imports
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/tokenAuth.js');
const { check, validationResult } = require('express-validator');

// Model Imports
const User = require('../../models/User.js');
const Profile = require('../../models/Profile.js');






// GET api/v1/profile/me
// Gets the profile associated with the user
// Private access
router.get('/me', auth, 
    
    async (req, res) => {
        try {
            
            //Find the profile associated with the user by using the token. And populate the query with User info as well.
            const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['first_name', 'last_name', 'email', 'location']);

            if (!profile) {
                return res.status(400).json({msg: 'Profile cannot be found'})
            }
            
            res.json(profile);
            
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
});






// POST api/v1/profile
// Creates OR Updates a profile
// Private access
router.post('/', [auth, [

    //Middleware that checks for required fields
    check('location', 'Must submit a location')
        .not()
        .isEmpty()
]], 

    async (req, res) => {

        //If errors are present in the request, an error response is thrown
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }

        //If no errors are present, the desired information is destructured from the request body.
        const { location, bio, menu } = req.body

        //Now we build and package the profile data to send as a response.
        const profileFields = {};
        profileFields.user = req.user.id;
        if(location) profileFields.location = location;
        if(bio) profileFields.bio = bio

        try {

            //Now we look for the profile associated with the user, and see if it exists already in the database.
           let profile = await Profile.findOne({ user: req.user.id });
            

           //If a profile for that user already exits, it is updated instead.
           if(profile) {
               profile = await Profile.findOneAndUpdate(
                   { user: req.user.id },
                   { $set: profileFields },
                   { new: true }
               );

               return res.json(profile);
           }

           //If no profile exits, one is created
           profile = new Profile(profileFields);

           await profile.save();
           res.json(profile)

        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error')
        }
});



module.exports = router;