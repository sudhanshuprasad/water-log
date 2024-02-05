const mongoose = require('mongoose');

const WaterLevel = new mongoose.Schema({
    // _id:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    // },
    slno: {
        type: String,
        required: true,
        unique: true
    },
    lastOnline:{
        type: String,
        required: true,
        default: Date
    },
    lastLevel:{
        type: Number,
        default: ()=>{0},
    },
    pumpState:{
        type: Boolean,
        default: ()=>{false},    }
});

const WaterLevelModel = mongoose.model('WaterLevel', WaterLevel);

module.exports = WaterLevelModel;