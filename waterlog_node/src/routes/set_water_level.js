const WaterLevelModel = require('../models/waterLevel');
const WifiCredentialsModel = require('../models/wifiCredentials');
// const { validationResult } = require('express-validator');


module.exports = async (req, res) => {

    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ error: errors.array() })
    // }

    const { sl_number, lastLevel, pumpState } = req.body;
    // console.log(req.params?.slno)
    // console.log(req.body)

    const slno = req.params?.slno

    try {

        //look for the serial number in db
        const dbdata = await WaterLevelModel.findOne({ slno })
        // console.log("dbdata: ", dbdata)

        //if found, update the entry
        if (dbdata) {

            const data = {
                lastLevel, pumpState, lastOnline: Date()
            }

            // recieve data in the form of enum if the user wants to turn the pump on, turn it off or keep the current state of the pump

            const newData = await WaterLevelModel.findByIdAndUpdate(dbdata?._id, data, { new: true })
            const newWifiData = await WifiCredentialsModel.findOne({ slno })

            const obj = {
                lastOnline: newData.lastOnline,
                lastLevel: newData.lastLevel,
                ssid: newWifiData.ssid,
                password: newWifiData.password
            }
            return res.json(obj);
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