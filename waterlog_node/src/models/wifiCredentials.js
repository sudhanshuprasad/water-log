const mongoose = require('mongoose');

const WifiCredentials = new mongoose.Schema({
    // _id:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    // },
    slno: {
        type: String,
        required: true,
        unique: true
    },
    ssid:{
        type: String,
        default: () => {'waterlog'},
    },
    password:{
        type: String,
        default: () => {'waterlog'},
    }
});

const WifiCredentialsModel = mongoose.model('WifiCredentials', WifiCredentials);

module.exports = WifiCredentialsModel;