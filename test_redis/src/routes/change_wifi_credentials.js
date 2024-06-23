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
        // const dbdata = await WifiCredentialsModel.findOne({ slno })

        //if found, update the entry
        // if (dbdata) {
        //     const newdata = await WifiCredentialsModel.findByIdAndUpdate(dbdata?._id, data, { new: true })
        //     return res.json(newdata);
        // }

        // if not then create new entry
        // const contact = new WifiCredentialsModel({
        //     slno: slno,
        //     ssid: ssid,
        //     password: password,
        // })
        // const newData = await contact.save();
        // res.json(newData);

        return res.status(500).json({ message: "data is not found" });

    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
};