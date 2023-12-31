const ContactModel = require('../models/contactModel');

module.exports = async (req, res) => {
    const { text, PhNumber } = req.body;

    const contact = new ContactModel({
        text,
        PhNumber
    })
    const newcontact = await contact.save();
    res.json(newcontact);
};