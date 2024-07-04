const redisclient = require('../../redisConnect');

module.exports = async (req, res) => {

    const { lastLevel, pumpState } = req.body;

    const slno = req.params?.slno

    try {

        //look for the serial number in db
        const dbdata = await redisclient.hSet(`slno:${slno}`, { lastLevel: parseInt(lastLevel), pumpState: `${pumpState}` , lastOnline: Date.now() })
        const newData = await redisclient.hGetAll(`slno:${slno}`)

        const data = {
            ...newData
        }
        // const allHashMap = await redisclient.keys('slno:*')
        res.status(200).json(data);
        // res.status(200).json({ message: "data updated successfully"});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};