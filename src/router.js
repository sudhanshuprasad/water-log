const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');

// const createContact = require('./routes/createContact');
// const readContact = require('./routes/readContact');
// const updateContact = require('./routes/updateContact');
// const deleteContact = require('./routes/deleteContact');

const router = express.Router();

// router.post('/login', "require('./routes/login')");

router.post('/contacts', isLoggedIn, "createContact");
router.get('/contacts',  isLoggedIn, "readContact");
router.put('/contacts/:id', isLoggedIn, "updateContact");
router.delete('/contacts/:id', isLoggedIn, "deleteContact");

module.exports = router;