// module imports
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('reservation route')
});

module.exports = router;