const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');

// const createContact = require('./routes/createContact');
// const readContact = require('./routes/readContact');
// const updateContact = require('./routes/updateContact');
// const deleteContact = require('./routes/deleteContact');

const set_water_level = require('./routes/set_water_level');
const get_water_level = require('./routes/get_water_level');

const router = express.Router();

// router.post('/login', "require('./routes/login')");

router.get('/water_level/:slno', get_water_level);
router.post('/water_level/:slno', set_water_level);
// router.get('/contacts',  isLoggedIn, "readContact");
// router.put('/contacts/:id', isLoggedIn, "updateContact");
// router.delete('/contacts/:id', isLoggedIn, "deleteContact");

module.exports = router;