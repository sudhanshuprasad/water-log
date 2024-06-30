const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');

const set_water_level = require('./routes/set_water_level');
const get_water_level = require('./routes/get_water_level');
const wifi_credentials = require('./routes/change_wifi_credentials');

const router = express.Router();

router.get('/water_level/:slno', get_water_level);
router.post('/water_level/:slno', set_water_level);
router.post('/change_password/:slno', wifi_credentials);

module.exports = router;