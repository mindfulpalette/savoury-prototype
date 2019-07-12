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
router.get('/', auth, 
    
    async (req, res) => {
        try {
                       
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    
});

module.exports = router;