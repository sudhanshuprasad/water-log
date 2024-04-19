const WifiCredentialsModel = require('../models/wifiCredentials');
module.exports = async (req, res) => {

    const slno = req.params?.slno

    try {

        //look for the serial number in db
        const dbdata = await WifiCredentialsModel.findOne({ slno })

        //if found, update the entry
        if (dbdata) {
            const newdata = await WifiCredentialsModel.findById(dbdata?._id)
            return res.json(newdata);
        }

        // if not then create new entry
        return res.status(500).json({ message: "data is not found" });

    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
};