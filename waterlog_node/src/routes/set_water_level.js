const WaterLevelModel = require('../models/waterLevel');
// const { validationResult } = require('express-validator');


module.exports = async (req, res) => {

    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ error: errors.array() })
    // }

    const { sl_number, lastLevel, pumpState } = req.body;
    console.log(req.params?.slno)
    // console.log(req.body)

    const slno = req.params?.slno

    try {

        //look for the serial number in db
        const dbdata = await WaterLevelModel.findOne({ slno })
        // console.log("dbdata: ", dbdata)

        //if found, update the entry
        if (dbdata) {
            
            // recieve data in the form of enum if the user wants to turn the pump on, turn it off or keep the current state of the pump

            const newdata = await WaterLevelModel.findByIdAndUpdate(dbdata?._id, { lastLevel, pumpState, lastOnline: Date() }, { new: true })
            // console.log(newdata)

            return res.json(newdata);
        }

        // if not then create new entry

        const contact = new WaterLevelModel({
            slno,
            lastLevel,
            pumpState
        })
        const newData = await contact.save();
        res.json(newData);

    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
};