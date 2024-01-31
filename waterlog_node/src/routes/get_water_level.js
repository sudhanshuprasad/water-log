const WaterLevelModel = require('../models/waterLevel');

module.exports = async (req, res) => {

    //look for the serial number in db

    //if found, add new entry

    // if not then create new entry

    const { slno, waterLevel } = req.body;

    const contact = new WaterLevelModel({
        slno,
        waterLevel
    })
    const newcontact = await contact.save();
    res.json(newcontact);
};