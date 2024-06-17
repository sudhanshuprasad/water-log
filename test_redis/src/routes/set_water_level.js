
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


    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
};