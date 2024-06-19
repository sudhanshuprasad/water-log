const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');

const set_water_level = require('./routes/set_water_level');

const router = express.Router();

// router.post('/login', "require('./routes/login')");

// router.get('/water_level/:slno', get_water_level);
router.post('/water_level/:slno', set_water_level);

module.exports = router;