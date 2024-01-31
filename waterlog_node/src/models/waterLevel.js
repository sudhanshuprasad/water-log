const mongoose = require('mongoose');

const WaterLevel = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    slno: {
        type: String,
    },
    completed: {
        type: Boolean,
    },
    lastLevel:{
        type: Number,
        // required: true,
    }
});

const WaterLevelModel = mongoose.model('WaterLevel', WaterLevel);

module.exports = WaterLevelModel;