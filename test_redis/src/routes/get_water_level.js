const redisclient = require('../../redisConnect');

module.exports = async (req, res) => {

    const slno = req.params?.slno

    try {

        //look for the serial number in db
        const dbdata = await redisclient.hGetAll(`slno:${slno}`)
        // console.log(dbdata)
        //if found, update the entry

        if (!dbdata) {
            return res.status(500).json({ message: "data is not found" });
        }

        // const newdata = await WaterLevelModel.findById(dbdata?._id)
        return res.json({ ...dbdata, lastLevel: parseFloat(dbdata?.lastLevel), lastOnline: parseFloat(dbdata?.lastOnline) });

    } catch (error) {
        res.status(500).json({ "error": error.message });
    }

};