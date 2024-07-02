const redisclient = require('../../redisConnect');

module.exports = async (req, res) => {

    const slno = req.params?.slno
    const ssid = req.body?.ssid
    const password = req.body?.password
    const data = {
        slno: slno,
        ssid: ssid,
        password: password,
    }

    // console.log({body:req.body})

    try {
        //look for the serial number in db
        const dbdata = await redisclient.hSet(`slno:${slno}`, { ssid: `${ssid}`, password: `${password}` })
        // console.log(dbdata)
        
        // const newdata = await WaterLevelModel.findById(dbdata?._id)
        return res.json(dbdata);

        return res.status(500).json({ message: "data is not found" });

    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
};