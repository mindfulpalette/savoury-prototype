// module imports
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/tokenAuth.js');

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

module.exports = router;